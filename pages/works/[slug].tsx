import fs from 'node:fs';
import path from 'node:path';
import type { CSSProperties } from 'react';
import type { GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import AppMeta from '@/components/AppMeta';
import type { Work } from '@/types/work';
import { getAllContentPaths, loadWork } from '@/lib/contentLoader';
import { findApp } from '@/lib/apps';

export default function WorkPage({ work, hasEnglish }: { work: Work; hasEnglish: boolean }) {
  const app = findApp(work.slug);
  const tint = { '--tint': app?.tint ?? '#ECE8E1' } as CSSProperties;
  const shots = app?.screenshots ?? [];

  return (
    <Layout>
      <AppMeta slug={work.slug} structuredData />
      <HeadMeta
        type="article"
        title={work.seoTitle ?? work.title}
        description={work.seoDescription ?? work.description}
        localized={hasEnglish}
      />

      <div className="flex flex-col gap-5">
        <section
          style={tint}
          className={clsx(
            'flex flex-col gap-10 rounded-[32px] bg-[var(--tint)] p-7 md:p-10 lg:flex-row lg:items-center',
            'dark:bg-[color-mix(in_oklab,var(--tint)_16%,var(--card))]',
          )}
        >
          <div className="flex flex-1 flex-col gap-3.5">
            <Image
              priority
              src={app?.icon ?? work.thumbnail}
              alt={`${app?.name ?? work.title}のアイコン`}
              width={96}
              height={96}
              className={clsx('app-icon h-24 w-24 rounded-[22px]', app?.pixelated && '[image-rendering:pixelated]')}
            />
            <h1 className="font-maru text-[34px] leading-tight font-bold md:text-[40px]">{app?.name ?? work.title}</h1>
            <p className="max-w-xl text-[17px] leading-8 md:text-lg">{work.description}</p>
            {app && (
              <p className="text-ink/70 text-sm">
                {app.devices} ・ {app.pricing}
              </p>
            )}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-3">
              {app?.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  className="bg-ink text-paper rounded-full px-6 py-3.5 text-[15px] font-bold transition-opacity hover:opacity-85"
                >
                  App Store で見る
                </a>
              )}
              {hasEnglish && (
                <Link
                  href={`/works/${work.slug}/en`}
                  hrefLang="en"
                  className="py-3 text-[15px] underline-offset-4 hover:underline"
                >
                  English
                </Link>
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
                  width={440}
                  height={956}
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className={clsx('h-auto w-[46%] max-w-[220px] rounded-[26px]', i % 2 === 1 && 'mt-10')}
                />
              ))}
            </div>
          )}
        </section>

        <article className="app-prose prose md:prose-lg bg-card mx-auto w-full max-w-none rounded-3xl p-7 break-words md:p-10">
          <div className="mx-auto max-w-[680px]">
            <ReactMarkdown>{work.body}</ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('works');
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const work = loadWork(params.slug);
  const hasEnglish = fs.existsSync(path.join(process.cwd(), 'pages/works', params.slug, 'en/index.tsx'));
  return {
    props: { work, hasEnglish },
  };
};
