import HeadMeta from '@/components/Head';
import AppMeta from '@/components/AppMeta';
import Layout from '@/components/layouts/oneColumnLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

export default function MieruDocument({
  title,
  description,
  seoTitle,
  seoDescription,
  children,
  language = 'ja',
}: {
  language?: 'ja' | 'en';
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  children: ReactNode;
}) {
  const english = language === 'en';
  const base = '/works/mieru';
  const router = useRouter();
  const localizedBase = english ? `${base}/en` : base;
  const alternate = english ? router.pathname.replace('/en', '') : router.pathname.replace(base, `${base}/en`);
  return (
    <Layout>
      <AppMeta slug="mieru" language={language} structuredData={router.pathname === localizedBase} />
      <HeadMeta
        localized
        type="article"
        title={seoTitle ?? `${english ? 'Mieru' : 'Mieru'} | ${title}`}
        description={seoDescription ?? description}
      />
      <article
        lang={language}
        className="app-prose prose bg-card mx-auto max-w-3xl rounded-3xl p-7 break-words md:p-10"
      >
        <div className="flex flex-wrap justify-between gap-4">
          <Link href={localizedBase}>{english ? '← About Mieru' : '← Mieruの紹介へ'}</Link>
          <Link href={alternate} hrefLang={english ? 'ja' : 'en'}>
            {english ? '日本語' : 'English'}
          </Link>
        </div>
        <p className="text-accent mb-2 text-sm font-bold">
          {english ? 'Mieru — video player' : '動画プレイヤー「Mieru」'}
        </p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {children}
        <hr />
        <nav
          aria-label={english ? 'Mieru links' : 'Mieruの関連ページ'}
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          <Link href={localizedBase}>{english ? 'About the app' : 'アプリの紹介'}</Link>
          <Link href={`${localizedBase}/support`}>{english ? 'Help & support' : '使い方・サポート'}</Link>
          <Link href={`${localizedBase}/privacy`}>{english ? 'Privacy policy' : 'プライバシーポリシー'}</Link>
        </nav>
      </article>
    </Layout>
  );
}
