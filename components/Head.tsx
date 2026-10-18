import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL } from '@/lib/site';

type Prop = {
  type: 'website' | 'article' | 'blog' | 'product' | 'gallery';
  title: string;
  description?: string;
  /** /works/<app>/... と /works/<app>/en/... の日英ペアがあるページで true にすると hreflang を出力する */
  localized?: boolean;
};

const siteName = 'omomuro.dev';
const siteDescription = 'おもむろに開発しよう。created by Kazuhiro Ito';
const twitterID = '@KazuhiroIto0127';

/** 日英ページのパスを返す。対象外なら null */
const localizedPaths = (path: string) => {
  const en = path.match(/^(\/works\/[^/]+)\/en(\/.*)?$/);
  if (en) return { ja: `${en[1]}${en[2] ?? ''}`, en: path, current: 'en' as const };
  const ja = path.match(/^(\/works\/[^/]+)(\/.*)?$/);
  if (ja) return { ja: path, en: `${ja[1]}/en${ja[2] ?? ''}`, current: 'ja' as const };
  return null;
};

export default function HeadMeta({ type, title, description, localized = false }: Prop) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : SITE_URL;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const imageUrl = `${baseUrl}/api/og${title ? `?title=${encodeURIComponent(title)}` : ''}`;
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || siteDescription;
  const langs = localized ? localizedPaths(path) : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />
      {langs && (
        <>
          <link rel="alternate" hrefLang="ja" href={`${SITE_URL}${langs.ja}`} />
          <link rel="alternate" hrefLang="en" href={`${SITE_URL}${langs.en}`} />
          <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${langs.ja}`} />
        </>
      )}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={langs?.current === 'en' ? 'en_US' : 'ja_JP'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterID} />
      <meta name="twitter:creator" content={twitterID} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
