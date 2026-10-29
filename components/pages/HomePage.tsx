import AppCard from '@/components/AppCard';
import GuideList from '@/components/GuideList';
import JsonLd from '@/components/JsonLd';
import { appCategories, publishedApps } from '@/lib/apps';
import type { Lang } from '@/lib/i18n';
import { graph, person, website } from '@/lib/structuredData';

export const homeCopy = {
  ja: {
    title: '暮らしと家族のiPhone・iPadアプリ',
    description:
      '家計簿の共有、家族の予定、こどものお絵かき、動画の顔モザイクまで。個人開発者イトウカズヒロがApp Storeで公開しているiPhone・iPadアプリの一覧です。',
    eyebrow: '個人開発の iPhone・iPad アプリ',
    heading: ['暮らしと家族の、', 'ちいさな困りごとに。'],
    lead: [
      '家計簿の共有、家族の予定、こどものお絵かき、写真・動画の顔モザイクまで。',
      '一人でつくっていて、どれも App Store から無料でダウンロードできます。',
    ],
    guides: '悩みから探す',
  },
  en: {
    title: 'iPhone & iPad apps for everyday family life',
    description:
      'A shared budget, a family board, kids’ drawing, face blurring for videos and more. iPhone and iPad apps made by indie developer Kazuhiro Ito, available on the App Store.',
    eyebrow: 'Indie iPhone & iPad apps',
    heading: ['Little apps for', 'everyday family life.'],
    lead: [
      'A shared budget, family plans, kids’ drawing, and face blurring for photos and videos.',
      'I make them on my own, and all of them are free to download on the App Store.',
    ],
    guides: 'Find by what you need',
  },
};

export default function HomePage({ lang }: { lang: Lang }) {
  const english = lang === 'en';
  const t = homeCopy[lang];

  return (
    <div className="flex flex-col gap-14">
      <JsonLd data={graph(website(lang), person(lang))} />
      <section className="flex flex-col items-center gap-4 pt-6 text-center md:pt-10">
        <h1 className="font-maru text-[30px] leading-snug font-bold sm:text-4xl md:text-[46px]">
          <span className="text-sub mb-3 block font-sans text-sm font-medium tracking-wide md:text-[15px]">
            {t.eyebrow}
          </span>
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
                  <AppCard app={app} english={english} />
                </li>
              ))}
          </ul>
        </section>
      ))}

      <GuideList lang={lang} heading={t.guides} limit={4} showAllLink />
    </div>
  );
}
