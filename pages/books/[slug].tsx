import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import type { Book } from '@/types/book';
import { useViewTransition } from '@/hooks/useViewTransition';
import { getAllContentPaths, loadBook } from '@/lib/contentLoader';
import BackButton from '@/components/common/BackButton';

export default function BookPage({ book }: { book: Book }) {
  const { navigateWithTransition } = useViewTransition();

  const handleBackClick = async (e: React.MouseEvent) => {
    await navigateWithTransition('/books', e);
  };

  return (
    <Layout>
      <HeadMeta type="article" title={book.title} />
      <div className="mx-auto max-w-2xl bg-white/80 dark:bg-gray-600/80 p-4 rounded-lg">
        <BackButton
          href="/books"
          onClick={handleBackClick}
          label="本棚に戻る"
          colorClass="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
        />
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
