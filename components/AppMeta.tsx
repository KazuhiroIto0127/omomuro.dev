import Head from 'next/head';
import { appStoreId, findApp, screenshotSrcs } from '@/lib/apps';
import { SITE_URL } from '@/lib/site';

type Props = {
  slug: string;
  language?: 'ja' | 'en';
  /** アプリの紹介ページ（index）のときだけ true。構造化データを出力する */
  structuredData?: boolean;
};

/**
 * アプリページ用のメタ情報
 * - Smart App Banner（iPhone/iPad の Safari で App Store への導線を表示）
 * - 構造化データ（schema.org MobileApplication）
 */
export default function AppMeta({ slug, language = 'ja', structuredData = false }: Props) {
  const app = findApp(slug);
  if (!app) return null;

  const id = appStoreId(app);
  const english = language === 'en';
  const path = english ? `/works/${slug}/en` : `/works/${slug}`;
  const storeUrl = id && (english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl);
  const screenshots = screenshotSrcs(app, language).map((src) => `${SITE_URL}${src}`);

  const json = structuredData
    ? {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: english && app.en ? app.en.name : app.name,
        description: english && app.en ? app.en.description : app.summary,
        url: `${SITE_URL}${path}`,
        image: `${SITE_URL}${app.icon}`,
        ...(screenshots.length > 0 && { screenshot: screenshots }),
        operatingSystem: app.operatingSystem,
        applicationCategory: app.schemaCategory,
        inLanguage: language,
        ...(storeUrl && { installUrl: storeUrl, downloadUrl: storeUrl }),
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
        author: { '@type': 'Person', name: 'Kazuhiro Ito', url: `${SITE_URL}/about` },
      }
    : null;

  return (
    <Head>
      {id && <meta key="apple-itunes-app" name="apple-itunes-app" content={`app-id=${id}`} />}
      {json && (
        <script
          key="app-jsonld"
          type="application/ld+json"
          // JSON.stringify の出力に </script> が混ざらないよう < をエスケープ
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }}
        />
      )}
    </Head>
  );
}
