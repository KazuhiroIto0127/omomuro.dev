import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Book } from '@/types/book';

export default function BookPage({ book }: { book: Book }) {
  return (
    <Layout>
      <HeadMeta type="article" title={book.title} />
      <div className="mx-auto max-w-2xl bg-white/80 dark:bg-gray-600/80 p-4 rounded-lg">
        <Image
          priority
          src={book.cover}
          className="mb-4 h-52 w-full rounded-md object-contain md:h-96"
          height={384}
          width={256}
          alt={book.title}
        />
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p>読了日：{book.date}</p>
        <article className="mt-6 break-words prose-sm dark:prose-invert sm:prose-base lg:prose-lg whitespace-pre-wrap">
          {book.body}
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const booksDirectory = path.join(process.cwd(), 'contents/books');
  const filenames = fs.readdirSync(booksDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const booksDirectory = path.join(process.cwd(), 'contents/books');
  const fullPath = path.join(booksDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      book: {
        ...data,
        body: content,
        slug: params.slug,
      } as Book,
    },
  };
};
