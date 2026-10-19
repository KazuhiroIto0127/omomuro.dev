import { appStoreId, findApp, screenshotSrcs } from '@/lib/apps';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

/** アプリ紹介ページの構造化データ（schema.org MobileApplication） */
export default function AppJsonLd({ slug, language = 'ja' }: { slug: string; language?: Lang }) {
  const app = findApp(slug);
  if (!app) return null;

  const id = appStoreId(app);
  const english = language === 'en';
  const path = english ? `/works/${slug}/en` : `/works/${slug}`;
  const storeUrl = id && (english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl);
  const screenshots = screenshotSrcs(app, language).map((src) => `${SITE_URL}${src}`);

  const json = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: english ? app.en.name : app.name,
    description: english ? app.en.description : app.summary,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${app.icon}`,
    ...(screenshots.length > 0 && { screenshot: screenshots }),
    operatingSystem: app.operatingSystem,
    applicationCategory: app.schemaCategory,
    inLanguage: language,
    ...(storeUrl && { installUrl: storeUrl, downloadUrl: storeUrl }),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    author: { '@type': 'Person', name: 'Kazuhiro Ito', url: `${SITE_URL}/about` },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify の出力に </script> が混ざらないよう < をエスケープ
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }}
    />
  );
}
