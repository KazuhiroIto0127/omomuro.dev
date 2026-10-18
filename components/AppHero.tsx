import type { CSSProperties } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import LanguageLink from '@/components/LanguageLink';
import { appStoreId, screenshotSrcs, type PublishedApp } from '@/lib/apps';

/** アプリ紹介ページ上部：アプリの色を敷いた面に、アイコン・説明・App Store ボタン・スクリーンショット */
export default function AppHero({
  app,
  english = false,
  tagline,
  alternateHref,
}: {
  app: PublishedApp;
  english?: boolean;
  tagline: string;
  /** もう一方の言語のページ */
  alternateHref?: string;
}) {
  const id = appStoreId(app);
  const storeUrl = id && (english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl);
  const shots = screenshotSrcs(app, english ? 'en' : 'ja').map((src, i) => ({
    src,
    alt: english ? `${app.en.name} screenshot ${i + 1}` : `${app.name}の画面 ${i + 1}`,
  }));
  const devices = english ? app.devices.replace(/・/g, ' · ') : app.devices;

  return (
    <section
      style={{ '--tint': app.tint } as CSSProperties}
      className={clsx(
        'flex flex-col gap-10 rounded-[32px] bg-[var(--tint)] p-7 md:p-10 lg:flex-row lg:items-center',
        'dark:bg-[color-mix(in_oklab,var(--tint)_16%,var(--card))]',
      )}
    >
      <div className="flex flex-1 flex-col gap-3.5">
        <Image
          priority
          src={app.icon}
          alt={english ? `${app.en.name} icon` : `${app.name}のアイコン`}
          width={96}
          height={96}
          className={clsx('app-icon h-24 w-24 rounded-[22px]', app.pixelated && '[image-rendering:pixelated]')}
        />
        <h1 className="font-maru text-[34px] leading-tight font-bold md:text-[40px]">
          {english ? app.en.name : app.name}
        </h1>
        <p className="max-w-xl text-[17px] leading-8 md:text-lg">{tagline}</p>
        <p className="text-ink/70 text-sm">
          {devices}
          {english ? ' · ' : ' ・ '}
          {english ? app.en.pricing : app.pricing}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-3">
          {storeUrl && (
            <a
              href={storeUrl}
              className="bg-ink text-paper rounded-full px-6 py-3.5 text-[15px] font-bold transition-opacity hover:opacity-85"
            >
              {english ? 'View on the App Store' : 'App Store で見る'}
            </a>
          )}
          {alternateHref && (
            <LanguageLink
              href={alternateHref}
              lang={english ? 'ja' : 'en'}
              className="py-3 text-[15px] underline-offset-4 hover:underline"
            >
              {english ? '日本語' : 'English'}
            </LanguageLink>
          )}
        </div>
      </div>
      {shots.length > 0 && (
        <div className="flex flex-1 justify-center gap-3.5">
          {shots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={600}
              height={1304}
              sizes="(min-width: 1024px) 220px, 45vw"
              className={clsx('h-auto w-[46%] max-w-[220px] rounded-[26px]', i % 2 === 1 && 'mt-10')}
            />
          ))}
        </div>
      )}
    </section>
  );
}
