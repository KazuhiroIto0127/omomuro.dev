import { publishedApps } from '@/lib/apps';

export type Lang = 'ja' | 'en';

/** 言語を手動で選んだときに保存する Cookie */
export const LANG_COOKIE = 'lang';

const appSlugs = new Set(publishedApps.map((app) => app.slug));

const normalize = (path: string) => path.split(/[?#]/)[0].replace(/\/$/, '') || '/';

export const pathLanguage = (path: string): Lang => {
  const p = normalize(path);
  return p === '/en' || /\/en(\/|$)/.test(p) ? 'en' : 'ja';
};

/**
 * 日英で対になるページのパス。対がなければ null
 * - / ↔ /en
 * - /about ↔ /about/en
 * - /works/<app>(/support|/privacy) ↔ /works/<app>/en(/support|/privacy)
 * - /guides ↔ /guides/en、/guides/<slug> ↔ /guides/<slug>/en
 */
export const alternatePaths = (path: string): { ja: string; en: string } | null => {
  const p = normalize(path);
  if (p === '/' || p === '/en') return { ja: '/', en: '/en' };
  if (p === '/about' || p === '/about/en') return { ja: '/about', en: '/about/en' };
  if (p === '/guides' || p === '/guides/en') return { ja: '/guides', en: '/guides/en' };
  // 記事は日英の両方を必ずつくる（contents/guides と contents/guides/en）
  const g = p.match(/^\/guides\/([a-z0-9-]+)(\/en)?$/);
  if (g) return { ja: `/guides/${g[1]}`, en: `/guides/${g[1]}/en` };
  const m = p.match(/^\/works\/([^/]+)(\/en)?(\/(?:support|privacy))?$/);
  if (m && appSlugs.has(m[1])) {
    const sub = m[3] ?? '';
    return { ja: `/works/${m[1]}${sub}`, en: `/works/${m[1]}/en${sub}` };
  }
  return null;
};

/** 日本語ページのパスなら、対応する英語ページのパスを返す */
export const englishPathFor = (path: string) =>
  pathLanguage(path) === 'en' ? null : (alternatePaths(path)?.en ?? null);

/** Accept-Language に日本語が含まれていなければ英語を出す */
export const prefersEnglish = (acceptLanguage: string | null) => {
  if (!acceptLanguage) return false;
  const tags = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .filter((tag) => tag && tag !== '*');
  if (tags.length === 0) return false;
  return !tags.some((tag) => tag === 'ja' || tag.startsWith('ja-'));
};
