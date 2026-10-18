import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeadMeta from '@/components/Head';
import AppMeta from '@/components/AppMeta';
import AppHero from '@/components/AppHero';
import LanguageLink from '@/components/LanguageLink';
import Layout from '@/components/layouts/oneColumnLayout';
import { findApp } from '@/lib/apps';
import { alternatePaths } from '@/lib/i18n';

export type AppDocumentProps = {
  language?: 'ja' | 'en';
  title: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  children: ReactNode;
};

/**
 * アプリの英語紹介ページ・サポート・プライバシーなどの共通レイアウト。
 * 紹介ページ（/works/<app>/en）では上部にアプリのヒーローを出す。
 */
export default function AppDocument({
  slug,
  language = 'ja',
  title,
  description,
  seoTitle,
  seoDescription,
  children,
}: AppDocumentProps & { slug: string }) {
  const app = findApp(slug);
  const { pathname } = useRouter();
  if (!app) throw new Error(`Unknown app: ${slug}`);

  const english = language === 'en';
  const appName = english ? app.en.name : app.name;
  const intro = english ? `/works/${slug}/en` : `/works/${slug}`;
  const isIntro = pathname === intro;
  const alternate = alternatePaths(pathname);
  const alternateHref = alternate ? (english ? alternate.ja : alternate.en) : undefined;

  return (
    <Layout>
      <AppMeta slug={slug} language={language} structuredData={isIntro} />
      <HeadMeta
        type="article"
        title={seoTitle ?? `${appName} | ${title}`}
        description={seoDescription ?? description ?? title}
        image={`/api/og?app=${slug}&lang=${language}`}
      />

      {isIntro ? (
        <div className="flex flex-col gap-5">
          <AppHero app={app} english={english} tagline={description ?? title} alternateHref={alternateHref} />
          <article
            lang={language}
            className="app-prose prose md:prose-lg bg-card mx-auto w-full max-w-none rounded-3xl p-7 break-words md:p-10"
          >
            <div className="mx-auto max-w-[680px]">{children}</div>
            <AppLinks slug={slug} english={english} />
          </article>
        </div>
      ) : (
        <article
          lang={language}
          className="app-prose prose bg-card mx-auto max-w-3xl rounded-3xl p-7 break-words md:p-10"
        >
          <div className="not-prose mb-6 flex flex-wrap justify-between gap-4 text-[15px]">
            <Link href={intro} className="text-accent hover:underline">
              ← {appName}
            </Link>
            {alternateHref && (
              <LanguageLink href={alternateHref} lang={english ? 'ja' : 'en'} className="text-accent hover:underline">
                {english ? '日本語' : 'English'}
              </LanguageLink>
            )}
          </div>
          <p className="text-accent mb-2 text-sm font-bold">{appName}</p>
          <h1>{title}</h1>
          {description && <p className="lead">{description}</p>}
          {children}
          <AppLinks slug={slug} english={english} />
        </article>
      )}
    </Layout>
  );
}

function AppLinks({ slug, english }: { slug: string; english: boolean }) {
  const base = english ? `/works/${slug}/en` : `/works/${slug}`;
  return (
    <>
      <hr />
      <nav
        aria-label={english ? 'App pages' : 'アプリの関連ページ'}
        className="not-prose mx-auto flex max-w-[680px] flex-wrap gap-x-6 gap-y-3 text-[15px]"
      >
        <Link href={base} className="text-accent hover:underline">
          {english ? 'About the app' : 'アプリの紹介'}
        </Link>
        <Link href={`${base}/support`} className="text-accent hover:underline">
          {english ? 'Help & support' : '使い方・サポート'}
        </Link>
        <Link href={`${base}/privacy`} className="text-accent hover:underline">
          {english ? 'Privacy policy' : 'プライバシーポリシー'}
        </Link>
      </nav>
    </>
  );
}
