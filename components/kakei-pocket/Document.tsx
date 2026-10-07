import HeadMeta from '@/components/Head';
import Layout from '@/components/layouts/oneColumnLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

export default function KakeiPocketDocument({
  title,
  description,
  children,
  language = 'ja',
}: {
  language?: 'ja' | 'en';
  title: string;
  description: string;
  children: ReactNode;
}) {
  const english = language === 'en';
  const base = '/works/kakei-pocket';
  const localizedBase = english ? `${base}/en` : base;
  const pathname = useRouter().pathname;
  const alternate = english ? pathname.replace('/en', '') : pathname.replace(base, `${base}/en`);

  return (
    <Layout>
      <HeadMeta
        type="article"
        title={`${english ? 'Kakei Pocket' : '家計ポケット'} | ${title}`}
        description={description}
      />
      <article
        lang={language}
        className="prose prose-slate mx-auto max-w-3xl break-words rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:prose-invert md:p-10 dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex flex-wrap justify-between gap-4">
          <Link href="/works">{english ? '← All works' : '← 作品一覧へ'}</Link>
          <Link href={alternate} hrefLang={english ? 'ja' : 'en'}>
            {english ? '日本語' : 'English'}
          </Link>
        </div>
        <p className="mb-2 text-sm font-bold text-blue-700 dark:text-blue-300">
          {english ? 'Kakei Pocket for iPhone & iPad' : 'iPhone・iPadアプリ「家計ポケット」'}
        </p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {children}
        <hr />
        <nav
          aria-label={english ? 'Kakei Pocket links' : '家計ポケットの関連ページ'}
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          <Link href={`${localizedBase}/support`}>{english ? 'Help & support' : '使い方・サポート'}</Link>
          <Link href={`${localizedBase}/privacy`}>{english ? 'Privacy policy' : 'プライバシーポリシー'}</Link>
        </nav>
      </article>
    </Layout>
  );
}
