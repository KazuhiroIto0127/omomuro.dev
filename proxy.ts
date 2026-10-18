import { NextResponse, type NextRequest } from 'next/server';
import { LANG_COOKIE, englishPathFor, prefersEnglish } from '@/lib/i18n';

/** 検索エンジンやリンクプレビューは振り分けない（日本語ページをそのまま見せる） */
const NON_HUMAN = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|headless|curl|wget/i;

/**
 * 日本語ページに来た人のうち、ブラウザの言語に日本語がない人を英語ページへ振り分ける。
 * サイト内で言語を選んだ人は、その選択（Cookie）を優先する。
 */
export function proxy(request: NextRequest) {
  if (request.method !== 'GET') return NextResponse.next();

  const target = englishPathFor(request.nextUrl.pathname);
  if (!target) return NextResponse.next();

  const chosen = request.cookies.get(LANG_COOKIE)?.value;
  if (chosen === 'ja') return NextResponse.next();
  if (chosen !== 'en') {
    if (NON_HUMAN.test(request.headers.get('user-agent') ?? '')) return NextResponse.next();
    if (!prefersEnglish(request.headers.get('accept-language'))) return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = target;
  const response = NextResponse.redirect(url, 307);
  response.headers.set('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  matcher: ['/', '/about', '/works/:path*'],
};
