import ReactMarkdown from 'react-markdown';
import AppCta from '@/components/AppCta';
import AppHero from '@/components/AppHero';
import AppJsonLd from '@/components/AppJsonLd';
import { shotComponents } from '@/components/AppShots';
import { appStoreId, findApp } from '@/lib/apps';
import { getAllContentPaths, loadWork } from '@/lib/contentLoader';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllContentPaths('works').map(({ params }) => params);
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = loadWork(slug);
  const app = findApp(slug);
  return pageMetadata({
    path: `/works/${slug}`,
    title: work.seoTitle ?? work.title,
    description: work.seoDescription ?? work.description,
    image: `/api/og?app=${slug}&lang=ja`,
    type: 'article',
    itunesAppId: app && appStoreId(app),
  });
}

/** 日本語のアプリ紹介ページ（本文は contents/works/<slug>.md） */
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const work = loadWork(slug);
  const app = findApp(slug);

  return (
    <div className="flex flex-col gap-5">
      <AppJsonLd slug={slug} />
      {app && <AppHero app={app} tagline={work.description} alternateHref={`/works/${slug}/en`} />}
      <article className="app-prose prose md:prose-lg bg-card mx-auto w-full max-w-none rounded-3xl p-7 break-words md:p-10">
        <div className="mx-auto max-w-[680px]">
          <ReactMarkdown components={shotComponents}>{work.body}</ReactMarkdown>
        </div>
      </article>
      {app && <AppCta app={app} />}
    </div>
  );
}
