import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import OmomuroPenguin from '@/components/OmomuroPenguin';

export const config = {
  runtime: 'edge',
};

const Og = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title')?.slice(0, 100) ?? `omomuro.dev`;

  return new ImageResponse(
    (
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
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
};

export default Og;
