import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import Link from 'next/link';
import type { Book } from '@/types/book';
import { useViewTransition } from '@/hooks/useViewTransition';
import { getAllContentPaths, loadBook } from '@/lib/contentLoader';

export default function BookPage({ book }: { book: Book }) {
  const { navigateWithTransition } = useViewTransition();

  const handleBackClick = async (e: React.MouseEvent) => {
    await navigateWithTransition('/books', e);
  };

  return (
    <Layout>
      <HeadMeta type="article" title={book.title} />
      <div className="mx-auto max-w-2xl bg-white/80 dark:bg-gray-600/80 p-4 rounded-lg">
        <div className="mb-6">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors duration-200 group"
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
            <span className="text-sm font-medium">本棚に戻る</span>
          </Link>
        </div>
        <Image
          priority
          src={book.cover}
          className="mb-4 mx-auto rounded-md object-cover transition-transform duration-300"
          height={384}
          width={256}
          style={{
            viewTransitionName: `cover-${book.slug}`,
            aspectRatio: '3/4',
            maxWidth: '256px',
            width: '100%'
          }}
          alt={book.title}
        />
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        {book.completedDate && <p>読了日：{book.completedDate}</p>}
        <article className="mt-6 break-words prose-sm dark:prose-invert sm:prose-base lg:prose-lg whitespace-pre-wrap">
          {book.body}
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('books');
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const book = loadBook(params.slug);
  return {
    props: { book },
  };
};
