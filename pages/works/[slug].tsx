import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import HeadMeta from '@/components/Head';
import Link from 'next/link';
import type { Work } from '@/types/work';
import { useViewTransition } from '@/hooks/useViewTransition';
import { getAllContentPaths, loadWork } from '@/lib/contentLoader';

export default function WorkPage({ work }: { work: Work }) {
  const { navigateWithTransition } = useViewTransition();

  const handleBackClick = async (e: React.MouseEvent) => {
    await navigateWithTransition('/works', e);
  };

  return (
    <Layout>
      <HeadMeta type="article" title={work.title} />

      <article className="mx-auto max-w-2xl break-words prose-sm dark:prose-invert sm:prose-base lg:prose-lg bg-white/80 dark:bg-gray-600/80 p-4 rounded-lg">
        <div className="mb-6">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200 group"
            onClick={handleBackClick}
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">作品一覧に戻る</span>
          </Link>
        </div>
        <Image
          priority
          src={work.thumbnail}
          className="mb-4 h-52 w-full rounded-md bg-white object-cover md:h-96 transition-transform duration-300"
          height={work.thumbnailHeight}
          width={work.thumbnailWidth}
          alt={work.thumbnailFileName}
          style={{ viewTransitionName: `thumbnail-${work.slug}` }}
        />
        <h1>{work.title}</h1>
        <p>{work.description}</p>
        <p>制作日：{work.createdAt}</p>
        {work.url && (
          <a href={work.url} target="_blank" rel="noopener noreferrer">
            <p className="text-blue-500">詳しくはこちら</p>
          </a>
        )}
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="whitespace-pre-wrap">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
          }}
        >
          {work.body}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('works');
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const work = loadWork(params.slug);
  return {
    props: { work },
  };
};
