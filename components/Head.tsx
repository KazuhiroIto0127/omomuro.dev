import Head from 'next/head';
import { useRouter } from 'next/router';

type Prop = {
  type: 'website' | 'article' | 'blog' | 'product';
  title: string;
  description?: string;
};

export default function HeadMeta({ type, title, description }: Prop) {
  const router = useRouter();
  const currentRoute = router.asPath;
  const env = process.env.NODE_ENV;
  const myURL = env == 'development' ? 'http://localhost:3000' : 'https://omomuro.dev';
  const imageUrl = `${myURL}/api/og${title ? '?title=' + title : ''}`;
  const url = `${myURL}${currentRoute}`;
  const twitterID = '@KazuhiroIto0127';
  const siteName = 'omomuro.dev';
  const siteDescription = 'おもむろに開発しよう。created by Kazuhiro Ito';
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName}`;
  const pageDescription = description ? `${description}` : `${siteDescription}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={siteDescription} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url}></meta>
      <meta property="og:site_name" content={siteName}></meta>
      <meta property="og:description" content={pageDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterID} />
      <meta name="twitter:creator" content={twitterID} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
