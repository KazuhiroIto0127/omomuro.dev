import type { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from 'next/og';
import OmomuroPenguin from '@/components/OmomuroPenguin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rawTitle = Array.isArray(req.query.title) ? req.query.title[0] : req.query.title;
  const title = rawTitle?.slice(0, 100) ?? `omomuro.dev`;

  const image = new ImageResponse(
    <div
      style={{
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div tw="flex flex-col">
        <div tw="bg-white flex w-full min-w-full max-w-full h-[70%] p-10 items-center justify-center text-center">
          <p tw="items-center justify-center text-center flex text-[60px] w-full max-w-full font-bold">{title}</p>
        </div>
        <div tw="bg-gray-200 flex flex-row min-w-full h-[30%] items-center justify-center">
          <div tw="flex mr-6">
            <OmomuroPenguin />
          </div>
          <div tw="flex flex-col">
            <p tw="text-[60px]">omomuro.dev</p>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, immutable, no-transform, max-age=31536000');
  res.send(Buffer.from(await image.arrayBuffer()));
}
