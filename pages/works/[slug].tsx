import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import HeadMeta from '@/components/Head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Work } from '@/types/work';

export default function WorkPage({ work }: { work: Work }) {
  return (
    <Layout>
      <HeadMeta type="article" title={work.title} />

      <article className="mx-auto max-w-2xl break-words prose-sm dark:prose-invert sm:prose-base lg:prose-lg">
        <Image
          priority
          src={work.thumbnail}
          className="mb-4 h-52 w-full rounded-md bg-white object-cover md:h-96"
          height={work.thumbnailHeight}
          width={work.thumbnailWidth}
          alt={work.thumbnailFileName}
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
  const worksDirectory = path.join(process.cwd(), 'contents/works');
  const filenames = fs.readdirSync(worksDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const worksDirectory = path.join(process.cwd(), 'contents/works');
  const fullPath = path.join(worksDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      work: {
        ...data,
        body: content,
        slug: params.slug,
      } as Work,
    },
  };
};
