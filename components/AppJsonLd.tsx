import JsonLd from '@/components/JsonLd';
import { appStoreId, findApp, screenshotSrcs } from '@/lib/apps';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';
import { breadcrumb, faqFromMarkdown, graph, personId } from '@/lib/structuredData';

/**
 * アプリ紹介ページの構造化データ（schema.org MobileApplication・パンくず・よくある質問）。
 * markdown を渡すと「## よくある質問」から FAQPage もつくる
 */
export default function AppJsonLd({
  slug,
  language = 'ja',
  markdown,
}: {
  slug: string;
  language?: Lang;
  markdown?: string;
}) {
  const app = findApp(slug);
  if (!app) return null;

  const id = appStoreId(app);
  const english = language === 'en';
  const path = english ? `/works/${slug}/en` : `/works/${slug}`;
  const storeUrl = id && (english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl);
  const screenshots = screenshotSrcs(app, language).map((src) => `${SITE_URL}${src}`);
  const name = english ? app.en.name : app.name;

  const application = {
    '@type': 'MobileApplication',
    name,
    description: english ? app.en.description : app.summary,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${app.icon}`,
    ...(screenshots.length > 0 && { screenshot: screenshots }),
    operatingSystem: app.operatingSystem,
    applicationCategory: app.schemaCategory,
    inLanguage: language,
    ...(storeUrl && { installUrl: storeUrl, downloadUrl: storeUrl }),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    author: { '@type': 'Person', '@id': personId, name: 'Kazuhiro Ito', url: `${SITE_URL}/about` },
  };

  const crumbs = breadcrumb([
    { name: english ? 'Apps' : 'アプリ', path: english ? '/en' : '/' },
    { name, path },
  ]);

  return <JsonLd data={graph(application, crumbs, markdown ? faqFromMarkdown(markdown) : null)} />;
}
