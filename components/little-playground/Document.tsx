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
      <article lang="ja" className="app-prose prose bg-card mx-auto max-w-3xl rounded-3xl p-7 break-words md:p-10">
        <Link href="/works/little-playground">← ちいさなあそびばの紹介へ</Link>
        <p className="text-accent mb-2 text-sm font-bold">iPhone・iPadアプリ「ちいさなあそびば」</p>
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
