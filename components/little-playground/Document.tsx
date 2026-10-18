import type { ReactNode } from 'react';
import Link from 'next/link';
import HeadMeta from '@/components/Head';
import Layout from '@/components/layouts/oneColumnLayout';

export default function PlaygroundDocument({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Layout>
      <HeadMeta
        type="article"
        title={`ちいさなあそびば | ${title}`}
        description={`ちいさなあそびばの${title}をご案内します。`}
      />
      <article
        lang="ja"
        className="prose prose-slate dark:prose-invert mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 break-words shadow-sm md:p-10 dark:border-gray-700 dark:bg-gray-800"
      >
        <Link href="/works/little-playground">← ちいさなあそびばの紹介へ</Link>
        <p className="mb-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">
          iPhone・iPadアプリ「ちいさなあそびば」
        </p>
        <h1>{title}</h1>
        {children}
        <hr />
        <nav aria-label="ちいさなあそびばの関連ページ" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/works/little-playground">アプリの紹介</Link>
          <Link href="/works/little-playground/support">使い方・サポート</Link>
          <Link href="/works/little-playground/privacy">プライバシーポリシー</Link>
        </nav>
      </article>
    </Layout>
  );
}
