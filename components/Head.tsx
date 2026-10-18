import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL } from '@/lib/site';
import { alternatePaths, pathLanguage } from '@/lib/i18n';

type Prop = {
  type: 'website' | 'article' | 'blog' | 'product' | 'gallery';
  title: string;
  description?: string;
};

const siteName = 'omomuro.dev';
const siteDescription = {
  ja: '個人開発者イトウカズヒロがつくっている、暮らしと家族のための iPhone・iPad アプリ。',
  en: 'iPhone and iPad apps for everyday family life, made by indie developer Kazuhiro Ito.',
};
const twitterID = '@KazuhiroIto0127';

export default function HeadMeta({ type, title, description }: Prop) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const lang = pathLanguage(path);
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : SITE_URL;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const imageUrl = `${baseUrl}/api/og${title ? `?title=${encodeURIComponent(title)}` : ''}`;
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || siteDescription[lang];
  const langs = alternatePaths(path);
  const absolute = (p: string) => `${SITE_URL}${p === '/' ? '' : p}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />
      {langs && (
        <>
          <link rel="alternate" hrefLang="ja" href={absolute(langs.ja)} />
          <link rel="alternate" hrefLang="en" href={absolute(langs.en)} />
          <link rel="alternate" hrefLang="x-default" href={absolute(langs.en)} />
        </>
      )}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'ja_JP'} />
      {langs && <meta property="og:locale:alternate" content={lang === 'en' ? 'ja_JP' : 'en_US'} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterID} />
      <meta name="twitter:creator" content={twitterID} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
