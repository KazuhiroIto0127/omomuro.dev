import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { guideCover, guideSlugs, loadGuide } from '@/lib/guides';
import { findApp } from '@/lib/apps';

const W = 1200;
const H = 630;
const INK = '#1e1c19';
const SUB = '#615b53';
const PAPER = '#f5f3ef';

/** 表示幅の目安（全角 1、半角 0.55） */
const visualWidth = (s: string) => Array.from(s).reduce((w, c) => w + (c.charCodeAt(0) > 0xff ? 1 : 0.55), 0);

/** Google Fonts から、使う文字だけを含むフォントを取得する（失敗したら既定のフォント） */
const loadFont = async (weight: number, text: string) => {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@${weight}&text=${encodeURIComponent(text)}`,
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
};

/**
 * OG 画像
 * - /api/og?app=<slug>&lang=ja|en … アプリのカード（アイコン・名前・ひとこと・アプリの色）
 * - /api/og?title=… … それ以外のページ
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const app = findApp(searchParams.get('app') ?? '');
  const english = searchParams.get('lang') === 'en';

  const guideSlug = searchParams.get('guide');
  if (guideSlug && !guideSlugs(english ? 'en' : 'ja').includes(guideSlug))
    return new Response('Not found', { status: 404 });

  let element: React.ReactElement;
  let text: string;

  if (guideSlug) {
    const guide = loadGuide(guideSlug, english ? 'en' : 'ja');
    const cover = (
      await sharp(await readFile(path.join(process.cwd(), 'public', guideCover(guideSlug))))
        .png()
        .toBuffer()
    ).toString('base64');
    text = `${guide.imageTitle.join('')}${english ? 'GUIDES' : '読みもの'}omomuro.dev`;
    element = (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: PAPER,
          fontFamily: 'Maru',
          padding: 56,
          gap: 32,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 540, gap: 26 }}>
          <div style={{ fontSize: 24, color: SUB }}>{english ? 'GUIDES' : '読みもの'}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 48,
              lineHeight: 1.4,
              color: INK,
              fontWeight: 700,
            }}
          >
            {guide.imageTitle.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: SUB }}>omomuro.dev</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${cover}`} alt="" width={516} height={271} style={{ borderRadius: 28 }} />
      </div>
    );
  } else if (app) {
    const icon = Buffer.from(await (await fetch(`${origin}${app.icon}`)).arrayBuffer()).toString('base64');
    const name = english ? app.en.name : app.name;
    const catchCopy = english ? app.en.catch : app.catch;
    text = `${name}${catchCopy}omomuro.dev`;
    element = (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 96px',
          background: app.tint,
          fontFamily: 'Maru',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${icon}`}
          width={300}
          height={300}
          style={{ borderRadius: 68, boxShadow: '0 12px 40px rgba(30,28,25,0.15)' }}
          alt=""
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 20 }}>
          <div style={{ fontSize: visualWidth(name) > 6.5 ? 64 : 84, fontWeight: 700, color: INK, lineHeight: 1.15 }}>
            {name}
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, color: '#4a453e', lineHeight: 1.4 }}>{catchCopy}</div>
          <div style={{ marginTop: 36, fontSize: 30, fontWeight: 500, color: SUB }}>omomuro.dev</div>
        </div>
      </div>
    );
  } else {
    const title = searchParams.get('title')?.slice(0, 80) ?? 'omomuro.dev';
    text = `${title}omomuro.dev`;
    element = (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 110px',
          background: PAPER,
          fontFamily: 'Maru',
        }}
      >
        <div style={{ fontSize: title.length > 24 ? 60 : 76, fontWeight: 700, color: INK, lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ marginTop: 48, fontSize: 32, fontWeight: 500, color: SUB }}>omomuro.dev</div>
      </div>
    );
  }

  const [bold, medium] = await Promise.all([loadFont(700, text), loadFont(500, text)]);
  const fonts = [
    ...(bold ? [{ name: 'Maru', data: bold, weight: 700 as const, style: 'normal' as const }] : []),
    ...(medium ? [{ name: 'Maru', data: medium, weight: 500 as const, style: 'normal' as const }] : []),
  ];

  return new ImageResponse(element, {
    width: W,
    height: H,
    fonts,
    headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400' },
  });
}
