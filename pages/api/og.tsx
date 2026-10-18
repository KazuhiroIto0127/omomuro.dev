import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from 'next/og';
import { findApp } from '@/lib/apps';

const W = 1200;
const H = 630;
const INK = '#1e1c19';
const SUB = '#615b53';
const PAPER = '#f5f3ef';

/** 表示幅の目安（全角 1、半角 0.55） */
const visualWidth = (s: string) => Array.from(s).reduce((w, c) => w + (c.charCodeAt(0) > 0xff ? 1 : 0.55), 0);

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

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
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const app = findApp(first(req.query.app) ?? '');
  const english = first(req.query.lang) === 'en';
  const origin = `${req.headers['x-forwarded-proto'] ?? 'https'}://${req.headers.host}`;

  let element: React.ReactElement;
  let text: string;

  if (app) {
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
    const title = first(req.query.title)?.slice(0, 80) ?? 'omomuro.dev';
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

  const image = new ImageResponse(element, { width: W, height: H, fonts });

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
  res.send(Buffer.from(await image.arrayBuffer()));
}
