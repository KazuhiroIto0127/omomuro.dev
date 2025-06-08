import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Book } from '@/types/book';

export default function BookPage({ book }: { book: Book }) {
  const router = useRouter();

  // ブラウザバック/進むでのview transition対応
  useEffect(() => {
    if ('startViewTransition' in document) {
      router.beforePopState(({ url, as, options }) => {
        // View transitionを開始して、その中でナビゲーションを実行
        // @ts-ignore — startViewTransition is still experimental
        document.startViewTransition(async () => {
          await router.push(url, as, options);
        });
        return false; // デフォルトのナビゲーションを防ぐ
      });
    }

    return () => {
      // クリーンアップ: デフォルトの動作に戻す
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleBackClick = async (e: React.MouseEvent) => {
    // View Transition APIが利用可能かチェック
    if ('startViewTransition' in document) {
      e.preventDefault();
      const url = '/books';

      try {
        // @ts-ignore — startViewTransition is still experimental
        document.startViewTransition(async () => {
          await router.push(url);
        });
      } catch (error) {
        // エラーが発生した場合は通常のナビゲーション
        await router.push(url);
      }
    }
    // View Transition APIが利用できない場合は通常のナビゲーション
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
