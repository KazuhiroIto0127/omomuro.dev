import type { ReactNode } from 'react';
import Link from 'next/link';
import HeadMeta from '@/components/Head';
import Layout from '@/components/layouts/oneColumnLayout';

export default function KakusuDocument({ title, description, children }: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <HeadMeta type="article" title={`かくす | ${title}`} description={description} />
      <article className="prose prose-slate mx-auto max-w-3xl break-words rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:prose-invert md:p-10 dark:border-gray-700 dark:bg-gray-800">
        <Link href="/works/kakusu">← かくすの紹介へ</Link>
        <p className="mb-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">iPhoneアプリ「かくす」</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {children}
        <hr />
        <nav aria-label="かくすの関連ページ" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/works/kakusu">アプリの紹介</Link>
          <Link href="/works/kakusu/support">使い方・サポート</Link>
          <Link href="/works/kakusu/privacy">プライバシーポリシー</Link>
        </nav>
      </article>
    </Layout>
  );
}
