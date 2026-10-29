import type { CSSProperties } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { appStoreId, type PublishedApp } from '@/lib/apps';

/** アプリ紹介ページの最後：本文を読み終えた人がそのまま App Store へ進めるように */
export default function AppCta({ app, english = false }: { app: PublishedApp; english?: boolean }) {
  const id = appStoreId(app);
  if (!id) return null;
  const storeUrl = english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl;
  const name = english ? app.en.name : app.name;

  return (
    <section
      style={{ '--tint': app.tint } as CSSProperties}
      className={clsx(
        'flex flex-col items-center gap-4 rounded-[32px] bg-[var(--tint)] px-7 py-10 text-center md:py-12',
        'dark:bg-[color-mix(in_oklab,var(--tint)_16%,var(--card))]',
      )}
    >
      <Image
        src={app.icon}
        alt=""
        width={72}
        height={72}
        className={clsx('app-icon h-[72px] w-[72px] rounded-[18px]', app.pixelated && '[image-rendering:pixelated]')}
      />
      <p className="font-maru text-2xl font-bold">{english ? app.en.catch : app.catch}</p>
      <p className="text-ink/70 max-w-md text-[15px] leading-7">
        {(english ? app.en.ctaNote : app.ctaNote) ?? (english ? app.en.pricing : app.pricing)}
      </p>
      <a
        href={storeUrl}
        className="bg-ink text-paper mt-1 rounded-full px-7 py-3.5 text-[15px] font-bold transition-opacity hover:opacity-85"
      >
        {english ? `Get ${name} on the App Store` : `${name}を App Store で見る`}
      </a>
    </section>
  );
}
