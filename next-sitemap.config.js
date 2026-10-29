const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const siteUrl = 'https://omomuro.dev'; // カスタムドメイン（lib/site.ts の SITE_URL と同じ）
const abs = (p) => (p === '/' ? siteUrl : `${siteUrl}${p}`);

/**
 * 日英で対になるページ（lib/i18n.ts の alternatePaths と同じ対応。
 * このファイルは TypeScript を読み込めないので、ここにも書いている）
 */
function alternates(p) {
  if (p === '/' || p === '/en') return { ja: '/', en: '/en' };
  if (p === '/about' || p === '/about/en') return { ja: '/about', en: '/about/en' };
  if (p === '/guides' || p === '/guides/en') return { ja: '/guides', en: '/guides/en' };
  const g = p.match(/^\/guides\/([a-z0-9-]+)(\/en)?$/);
  if (g) return { ja: `/guides/${g[1]}`, en: `/guides/${g[1]}/en` };
  const w = p.match(/^\/works\/([^/]+)(\/en)?(\/(?:support|privacy))?$/);
  if (w) return { ja: `/works/${w[1]}${w[3] ?? ''}`, en: `/works/${w[1]}/en${w[3] ?? ''}` };
  return null;
}

/** 記事は frontmatter の updatedAt を lastmod にする。それ以外のページは lastmod を出さない（ビルド日時は更新日ではないため） */
function guideUpdatedAt(p) {
  const m = p.match(/^\/guides\/([a-z0-9-]+)(\/en)?$/);
  if (!m || m[1] === 'en') return undefined;
  const file = path.join(__dirname, 'contents/guides', m[2] ? 'en' : '', `${m[1]}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data } = matter(fs.readFileSync(file, 'utf8'));
  return data.updatedAt ?? data.publishedAt;
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  autoLastmod: false,
  // noindex のプライバシーポリシーはサイトマップに載せない
  exclude: ['/works/*/privacy', '/works/*/en/privacy'],
  transform: async (_config, p) => {
    const langs = alternates(p);
    return {
      loc: p,
      lastmod: guideUpdatedAt(p),
      alternateRefs: langs
        ? [
            { href: abs(langs.ja), hreflang: 'ja', hrefIsAbsolute: true },
            { href: abs(langs.en), hreflang: 'en', hrefIsAbsolute: true },
            { href: abs(langs.en), hreflang: 'x-default', hrefIsAbsolute: true },
          ]
        : [],
    };
  },
};
