import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { appCategories, publishedApps } from '@/lib/apps';
import type { Lang } from '@/lib/i18n';

export const homeCopy = {
  ja: {
    title: '暮らしと家族のiPhone・iPadアプリ',
    description:
      '家計簿の共有、家族の予定、こどものお絵かき、動画の顔モザイクまで。個人開発者イトウカズヒロがApp Storeで公開しているiPhone・iPadアプリの一覧です。',
    heading: ['暮らしと家族の、', 'ちいさな困りごとに。'],
    lead: ['一人でつくっている iPhone・iPad アプリです。', 'どれも App Store から無料でダウンロードできます。'],
  },
  en: {
    title: 'iPhone & iPad apps for everyday family life',
    description:
      'A shared budget, a family board, kids’ drawing, face blurring for videos and more. iPhone and iPad apps made by indie developer Kazuhiro Ito, available on the App Store.',
    heading: ['Little apps for', 'everyday family life.'],
    lead: ['iPhone and iPad apps I make on my own.', 'All of them are free to download on the App Store.'],
  },
};

export default function HomePage({ lang }: { lang: Lang }) {
  const english = lang === 'en';
  const t = homeCopy[lang];

  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col items-center gap-4 pt-6 text-center md:pt-10">
        <h1 className="font-maru text-[30px] leading-snug font-bold sm:text-4xl md:text-[46px]">
          {t.heading[0]}
          <br />
          {t.heading[1]}
        </h1>
        <p className="text-sub max-w-xl text-[15px] leading-8 md:text-base">
          {t.lead[0]}
          <br className="hidden sm:inline" /> {t.lead[1]}
        </p>
      </section>

      {appCategories.map((c) => (
        <section key={c.id} aria-labelledby={`cat-${c.id}`} className="flex flex-col gap-4">
          <h2 id={`cat-${c.id}`} className="font-maru text-xl font-bold">
            {english ? c.titleEn : c.title}
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {publishedApps
              .filter((app) => app.category === c.id)
              .map((app) => (
                <li key={app.slug}>
                  <Link
                    href={english ? `/works/${app.slug}/en` : `/works/${app.slug}`}
                    className="bg-card flex h-full items-center gap-[18px] rounded-3xl p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,28,25,0.08)]"
                  >
                    <Image
                      src={app.icon}
                      alt=""
                      width={72}
                      height={72}
                      className={clsx(
                        'app-icon h-[72px] w-[72px] shrink-0 rounded-[17px]',
                        app.pixelated && '[image-rendering:pixelated]',
                      )}
                    />
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="font-maru text-lg font-bold">{english ? app.en.name : app.name}</span>
                      <span className="text-sub text-sm leading-6">{english ? app.en.catch : app.catch}</span>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
