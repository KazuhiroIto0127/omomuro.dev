import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { SiGithub, SiQiita, SiX, SiZenn } from '@icons-pack/react-simple-icons';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import Image from 'next/image';
import MediaGrid from '@/components/gallery/MediaGrid';
import MediaModal from '@/components/gallery/MediaModal';
import type { getGalleryImages } from '@/lib/galleryUtils';
import type { Lang } from '@/lib/i18n';

export type MediaData = Awaited<ReturnType<typeof getGalleryImages>>[number];

const card = 'rounded-3xl bg-card';

const copy = {
  ja: {
    title: 'つくった人',
    description:
      'omomuro.dev でiPhone・iPadアプリをつくっている、ソフトウェアエンジニアのイトウカズヒロのプロフィールです。',
    name: 'イトウ カズヒロ',
    facts: ['ソフトウェアエンジニア', '東京都在住', '大分県出身'],
    intro:
      'Webのサーバーサイドを仕事にしながら、個人で iPhone・iPad アプリをつくっています。企画からデザイン、開発、サポートまで一人で行っています。絵を描くのも好きです。',
    booklog: 'ブクログ',
    careerTitle: '経歴',
    career: [
      { period: '2021年〜', text: '保育Techベンチャーでサーバーサイドエンジニア（Rails・Vue.js・AWS）' },
      { period: '2018〜2021年', text: 'コミュニティ系ベンチャーでWebエンジニア（Rails・Vue.js・MySQL）' },
      { period: '2014〜2018年', text: 'システムエンジニアとして基幹系業務システムの開発・保守' },
      { period: '2014年', text: '大分大学大学院 工学研究科 修了（セマンティックWebを研究）' },
    ],
    galleryTitle: 'ギャラリー',
    galleryLead: '描いたイラストやグラフィック、アニメーションです。',
  },
  en: {
    title: 'About',
    description: 'Kazuhiro Ito, the software engineer who makes the iPhone and iPad apps on omomuro.dev.',
    name: 'Kazuhiro Ito',
    facts: ['Software engineer', 'Based in Tokyo', 'From Oita, Japan'],
    intro:
      'I work as a backend web engineer and make iPhone and iPad apps on my own, handling everything from planning and design to development and support. I also love to draw.',
    booklog: 'Booklog',
    careerTitle: 'Career',
    career: [
      { period: '2021–', text: 'Backend engineer at a childcare-tech startup (Rails, Vue.js, AWS)' },
      { period: '2018–2021', text: 'Web engineer at a community-platform startup (Rails, Vue.js, MySQL)' },
      { period: '2014–2018', text: 'Systems engineer building and maintaining enterprise business systems' },
      {
        period: '2014',
        text: 'M.Eng., Graduate School of Engineering, Oita University (research on the Semantic Web)',
      },
    ],
    galleryTitle: 'Gallery',
    galleryLead: 'Illustrations, graphics and animations I’ve made.',
  },
};

export default function AboutPage({ lang, images }: { lang: Lang; images: MediaData[] }) {
  const t = copy[lang];
  const [selected, setSelected] = useState<MediaData | null>(null);

  const links = [
    { href: 'https://x.com/KazuhiroIto0127', label: 'X', Icon: SiX },
    { href: 'https://github.com/KazuhiroIto0127', label: 'GitHub', Icon: SiGithub },
    { href: 'https://zenn.dev/kazuhiroito0127', label: 'Zenn', Icon: SiZenn },
    { href: 'https://qiita.com/KazuhiroIto0127', label: 'Qiita', Icon: SiQiita },
    { href: 'https://booklog.jp/users/kazuhiroito0127', label: t.booklog, Icon: BookOpenIcon },
  ];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Layout>
      <HeadMeta type="website" title={t.title} description={t.description} />

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
            <MediaGrid images={images} filter="all" onImageClick={setSelected} />
          </section>
        )}
      </div>

      <MediaModal selectedImage={selected} onClose={() => setSelected(null)} />
    </Layout>
  );
}
