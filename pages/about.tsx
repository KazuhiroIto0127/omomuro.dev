import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { SiGithub, SiQiita, SiX, SiZenn } from '@icons-pack/react-simple-icons';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import RiveAnimation from '@/components/RiveAnimation';
import MediaGrid from '@/components/gallery/MediaGrid';
import MediaModal from '@/components/gallery/MediaModal';
import { getGalleryImages } from '@/lib/galleryUtils';

type MediaData = Awaited<ReturnType<typeof getGalleryImages>>[number];

const card =
  'rounded-3xl border border-stone-200/80 bg-white/85 backdrop-blur-sm dark:border-slate-600/70 dark:bg-slate-800/80';

const links = [
  { href: 'https://x.com/KazuhiroIto0127', label: 'X', Icon: SiX },
  { href: 'https://github.com/KazuhiroIto0127', label: 'GitHub', Icon: SiGithub },
  { href: 'https://zenn.dev/kazuhiroito0127', label: 'Zenn', Icon: SiZenn },
  { href: 'https://qiita.com/KazuhiroIto0127', label: 'Qiita', Icon: SiQiita },
  { href: 'https://booklog.jp/users/kazuhiroito0127', label: 'ブクログ', Icon: BookOpenIcon },
];

const career = [
  { period: '2021年〜', text: '保育Techベンチャーでサーバーサイドエンジニア（Rails・Vue.js・AWS）' },
  { period: '2018〜2021年', text: 'コミュニティ系ベンチャーでWebエンジニア（Rails・Vue.js・MySQL）' },
  { period: '2014〜2018年', text: 'システムエンジニアとして基幹系業務システムの開発・保守' },
  { period: '2014年', text: '大分大学大学院 工学研究科 修了（セマンティックWebを研究）' },
];

export default function About({ images }: { images: MediaData[] }) {
  const [selected, setSelected] = useState<MediaData | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Layout>
      <HeadMeta
        type="website"
        title="自分のこと"
        description="omomuro.dev でiPhone・iPadアプリをつくっている、ソフトウェアエンジニアのイトウカズヒロのプロフィールです。"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-12 pt-6 pb-8 md:pt-10">
        <section
          className={clsx(
            card,
            'flex flex-col items-center gap-6 p-8 text-center md:flex-row md:items-start md:text-left',
          )}
        >
          <div className="shrink-0 rounded-full bg-white/90 p-3 dark:bg-slate-300/90">
            <RiveAnimation src="/animations/penguin_anime.riv" width={112} height={112} />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">イトウ カズヒロ</h1>
              <p className="mt-1 flex flex-wrap justify-center gap-x-3 text-stone-600 md:justify-start dark:text-slate-300">
                <span>ソフトウェアエンジニア</span>
                <span>東京都在住</span>
                <span>大分県出身</span>
              </p>
            </div>
            <p className="leading-8 text-stone-700 dark:text-slate-200">
              Webのサーバーサイドを仕事にしながら、個人で iPhone・iPad
              アプリをつくっています。企画からデザイン、開発、サポートまで一人で行っています。絵を描くのも好きです。
            </p>
            <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
              {links.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-bold hover:border-orange-400 dark:border-slate-500 dark:hover:border-orange-300"
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
          <h2 className="text-xl font-bold">経歴</h2>
          <dl className="flex flex-col gap-3">
            {career.map((c) => (
              <div key={c.period} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                <dt className="shrink-0 text-sm font-bold text-orange-700 sm:w-28 dark:text-orange-300">{c.period}</dt>
                <dd className="text-[15px] leading-7 text-stone-700 dark:text-slate-200">{c.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {images.length > 0 && (
          <section id="gallery" className="flex scroll-mt-24 flex-col gap-5">
            <div>
              <h2 className="text-2xl font-bold">ギャラリー</h2>
              <p className="mt-1 text-stone-600 dark:text-slate-300">
                描いたイラストやグラフィック、アニメーションです。
              </p>
            </div>
            <MediaGrid images={images} filter="all" onImageClick={setSelected} />
          </section>
        )}
      </div>

      <MediaModal selectedImage={selected} onClose={() => setSelected(null)} />
    </Layout>
  );
}

export async function getStaticProps() {
  const images = await getGalleryImages();
  return { props: { images } };
}
