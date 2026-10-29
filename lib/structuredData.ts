import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

/** schema.org の構造化データ（JSON-LD）をつくる関数 */

type Json = Record<string, unknown>;

const abs = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

export const personId = `${SITE_URL}/about#person`;
export const websiteId = `${SITE_URL}/#website`;

export function person(lang: Lang): Json {
  return {
    '@type': 'Person',
    '@id': personId,
    name: lang === 'en' ? 'Kazuhiro Ito' : 'イトウカズヒロ',
    alternateName: lang === 'en' ? 'イトウカズヒロ' : 'Kazuhiro Ito',
    url: abs(lang === 'en' ? '/about/en' : '/about'),
    jobTitle: lang === 'en' ? 'Indie app developer' : '個人アプリ開発者',
    sameAs: ['https://x.com/KazuhiroIto0127', 'https://github.com/KazuhiroIto0127'],
  };
}

export function website(lang: Lang): Json {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: 'omomuro.dev',
    url: SITE_URL,
    inLanguage: ['ja', 'en'],
    description:
      lang === 'en'
        ? 'iPhone and iPad apps for everyday family life, made by indie developer Kazuhiro Ito.'
        : '個人開発者イトウカズヒロがつくっている、暮らしと家族のための iPhone・iPad アプリ。',
    publisher: { '@id': personId },
  };
}

/** パンくず。items は上の階層から順に */
export function breadcrumb(items: { name: string; path: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function article({
  title,
  description,
  path,
  lang,
  publishedAt,
  updatedAt,
  image,
}: {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  publishedAt: string;
  updatedAt: string;
  image: string;
}): Json {
  return {
    '@type': 'Article',
    headline: title,
    description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    inLanguage: lang,
    datePublished: publishedAt,
    dateModified: updatedAt,
    image: abs(image),
    author: { '@id': personId },
    publisher: { '@id': personId },
  };
}

const plain = (md: string) =>
  md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Markdown 本文の「## よくある質問」（英語は「## FAQ」など）の下にある
 * 「### 質問」と続く段落から FAQPage をつくる。見出しがなければ null
 */
export function faqFromMarkdown(body: string): Json | null {
  const section = body.split(/^## /m).find((part) => /^(よくある質問|よくある疑問|FAQ|Common questions)/i.test(part));
  if (!section) return null;
  const questions = section
    .split(/^### /m)
    .slice(1)
    .map((block) => {
      const [q, ...rest] = block.split('\n');
      return { q: plain(q), a: plain(rest.join('\n')) };
    })
    .filter(({ q, a }) => q && a);
  if (questions.length === 0) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** 複数のノードを 1 つの @graph にまとめる */
export const graph = (...nodes: (Json | null | undefined)[]): Json => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
