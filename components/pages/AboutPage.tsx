import clsx from 'clsx';
import { SiGithub, SiQiita, SiX, SiZenn } from '@icons-pack/react-simple-icons';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Gallery from '@/components/pages/Gallery';
import { getGalleryImages } from '@/lib/galleryUtils';
import type { Lang } from '@/lib/i18n';

const card = 'rounded-3xl bg-card';

export const aboutCopy = {
  ja: {
    title: 'イトウカズヒロ｜iPhone・iPadアプリの個人開発者',
    description:
      'ドット日和・かくす・ぴかにじなどのiPhone・iPadアプリを個人で開発しているソフトウェアエンジニア、イトウカズヒロのプロフィール。経歴、SNS、描いたイラストのギャラリーも。',
    name: 'イトウ カズヒロ',
    facts: ['ソフトウェアエンジニア', '東京都在住'],
    intro:
      'ソフトウェアエンジニアとして働くかたわら、個人で iPhone・iPad アプリをつくっています。企画からデザイン、開発、サポートまで、ひとりで手がけています。絵を描くのも好きです。',
    booklog: 'ブクログ',
    careerTitle: '経歴',
    career: [
      { period: '2021年〜', text: 'ソフトウェアエンジニア（保育Tech）' },
      { period: '2018〜2021年', text: 'Webエンジニア（コミュニティサービス）' },
      { period: '2014〜2018年', text: 'システムエンジニア' },
    ],
    galleryTitle: 'ギャラリー',
    galleryLead: '描いたイラストやグラフィック、アニメーションです。',
  },
  en: {
    title: 'Kazuhiro Ito, indie iPhone & iPad app developer',
    description:
      'Profile of Kazuhiro Ito, a Tokyo-based software engineer who makes iPhone and iPad apps on his own. Career, social links and a gallery of his illustrations.',
    name: 'Kazuhiro Ito',
    facts: ['Software engineer', 'Based in Tokyo'],
    intro:
      "I'm a software engineer who makes iPhone and iPad apps on my own, handling everything from planning and design to development and support. I also love to draw.",
    booklog: 'Booklog',
    careerTitle: 'Career',
    career: [
      { period: '2021–', text: 'Software engineer, childcare tech' },
      { period: '2018–2021', text: 'Web engineer, community platform' },
      { period: '2014–2018', text: 'Systems engineer' },
    ],
    galleryTitle: 'Gallery',
    galleryLead: 'Illustrations, graphics and animations I’ve made.',
  },
};

export default async function AboutPage({ lang }: { lang: Lang }) {
  const t = aboutCopy[lang];
  const images = await getGalleryImages();

  const links = [
    { href: 'https://x.com/KazuhiroIto0127', label: 'X', Icon: SiX },
    { href: 'https://github.com/KazuhiroIto0127', label: 'GitHub', Icon: SiGithub },
    { href: 'https://zenn.dev/kazuhiroito0127', label: 'Zenn', Icon: SiZenn },
    { href: 'https://qiita.com/KazuhiroIto0127', label: 'Qiita', Icon: SiQiita },
    { href: 'https://booklog.jp/users/kazuhiroito0127', label: t.booklog, Icon: BookOpenIcon },
  ];

  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col gap-12 pt-4 md:pt-6">
        <section
          className={clsx(
            card,
            'flex flex-col items-center gap-6 p-8 text-center md:flex-row md:items-start md:text-left',
          )}
        >
          <div className="bg-paper shrink-0 rounded-full p-3">
            <Image
              src="/images/penguin_with_pc.png"
              alt=""
              width={112}
              height={112}
              priority
              className="h-28 w-28 object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-maru text-3xl font-bold">{t.name}</h1>
              <p className="text-sub mt-1 flex flex-wrap justify-center gap-x-3 md:justify-start">
                {t.facts.map((fact) => (
                  <span key={fact}>{fact}</span>
                ))}
              </p>
            </div>
            <p className="text-sub leading-8">{t.intro}</p>
            <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
              {links.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-line hover:border-accent flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold"
                  >
                    <Icon width={16} height={16} className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={clsx(card, 'flex flex-col gap-4 p-8')}>
          <h2 className="font-maru text-xl font-bold">{t.careerTitle}</h2>
          <dl className="flex flex-col gap-3">
            {t.career.map((c) => (
              <div key={c.period} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                <dt className="text-accent shrink-0 text-sm font-bold sm:w-28">{c.period}</dt>
                <dd className="text-sub text-[15px] leading-7">{c.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {images.length > 0 && (
          <section id="gallery" className="flex scroll-mt-24 flex-col gap-5">
            <div>
              <h2 className="font-maru text-2xl font-bold">{t.galleryTitle}</h2>
              <p className="text-sub mt-1">{t.galleryLead}</p>
            </div>
            <Gallery images={images} />
          </section>
        )}
      </div>
    </>
  );
}
