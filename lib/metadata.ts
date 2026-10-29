import type { Metadata } from 'next';
import { appStoreId, findApp } from '@/lib/apps';
import { alternatePaths, pathLanguage, type Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

const siteName = 'omomuro.dev';
const twitterId = '@KazuhiroIto0127';
const siteDescription: Record<Lang, string> = {
  ja: '個人開発者イトウカズヒロがつくっている、暮らしと家族のための iPhone・iPad アプリ。',
  en: 'iPhone and iPad apps for everyday family life, made by indie developer Kazuhiro Ito.',
};

const absolute = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

/** ページ共通のメタ情報（title・description・canonical・hreflang・OG・Smart App Banner） */
export function pageMetadata({
  path,
  title,
  description,
  image,
  type = 'website',
  itunesAppId,
  noindex = false,
}: {
  path: string;
  title: string;
  description?: string;
  /** OG 画像のパス（未指定なら title から生成） */
  image?: string;
  type?: 'website' | 'article';
  itunesAppId?: string;
  /** 検索結果に出さない（リンクはたどらせる） */
  noindex?: boolean;
}): Metadata {
  const lang = pathLanguage(path);
  const url = absolute(path);
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || siteDescription[lang];
  const langs = alternatePaths(path);
  const ogImage = image ?? `/api/og${title ? `?title=${encodeURIComponent(title)}` : ''}`;

  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: {
      canonical: url,
      ...(langs && {
        languages: { ja: absolute(langs.ja), en: absolute(langs.en), 'x-default': absolute(langs.en) },
      }),
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName,
      type,
      locale: lang === 'en' ? 'en_US' : 'ja_JP',
      ...(langs && { alternateLocale: [lang === 'en' ? 'ja_JP' : 'en_US'] }),
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', site: twitterId, creator: twitterId },
    icons: { icon: '/favicon.ico' },
    ...(noindex && { robots: { index: false, follow: true } }),
    ...(itunesAppId && { itunes: { appId: itunesAppId } }),
  };
}

export type AppPage = 'intro' | 'support' | 'privacy';

export const appPagePath = (slug: string, language: Lang, page: AppPage) =>
  `/works/${slug}${language === 'en' ? '/en' : ''}${page === 'intro' ? '' : `/${page}`}`;

/** アプリのページ（紹介・サポート・プライバシー）のメタ情報 */
export function appPageMetadata({
  slug,
  language = 'ja',
  page,
  title,
  description,
  seoTitle,
  seoDescription,
}: {
  slug: string;
  language?: Lang;
  page: AppPage;
  title: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
}): Metadata {
  const app = findApp(slug);
  if (!app) throw new Error(`Unknown app: ${slug}`);
  const appName = language === 'en' ? app.en.name : app.name;
  return pageMetadata({
    path: appPagePath(slug, language, page),
    title: seoTitle ?? `${appName} | ${title}`,
    description: seoDescription ?? description ?? title,
    image: `/api/og?app=${slug}&lang=${language}`,
    type: 'article',
    itunesAppId: appStoreId(app),
    // プライバシーポリシーは App Store 審査用。検索結果ではアプリ紹介ページを優先させる
    noindex: page === 'privacy',
  });
}
