import type { GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import AppMeta from '@/components/AppMeta';
import AppHero from '@/components/AppHero';
import type { Work } from '@/types/work';
import { getAllContentPaths, loadWork } from '@/lib/contentLoader';
import { findApp } from '@/lib/apps';

export default function WorkPage({ work }: { work: Work }) {
  const app = findApp(work.slug);

  return (
    <Layout>
      <AppMeta slug={work.slug} structuredData />
      <HeadMeta
        type="article"
        title={work.seoTitle ?? work.title}
        description={work.seoDescription ?? work.description}
        image={`/api/og?app=${work.slug}&lang=ja`}
      />

      <div className="flex flex-col gap-5">
        {app && <AppHero app={app} tagline={work.description} alternateHref={`/works/${work.slug}/en`} />}

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
  return { props: { work } };
};
