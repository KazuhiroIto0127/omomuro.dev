import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Lang } from '@/lib/i18n';

/** 読みもの（悩み・用途から探す人向けの記事）。本文は contents/guides/<slug>.md と contents/guides/en/<slug>.md */
export type Guide = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  /** 記事で紹介するアプリ（lib/apps.ts の slug）。先頭が主役 */
  apps: string[];
  body: string;
};

const dir = (lang: Lang) => path.join(process.cwd(), 'contents/guides', lang === 'en' ? 'en' : '');

export const guidePath = (slug: string, lang: Lang) => `/guides/${slug}${lang === 'en' ? '/en' : ''}`;
export const guidesIndexPath = (lang: Lang) => (lang === 'en' ? '/guides/en' : '/guides');

export function guideSlugs(lang: Lang = 'ja'): string[] {
  return fs
    .readdirSync(dir(lang))
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function loadGuide(slug: string, lang: Lang): Guide {
  const { data, content } = matter(fs.readFileSync(path.join(dir(lang), `${slug}.md`), 'utf8'));
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: String(data.updatedAt ?? data.publishedAt),
    apps: (data.apps as string[] | undefined) ?? [],
    body: content,
  };
}

/** 新しい順 */
export function loadGuides(lang: Lang): Guide[] {
  return guideSlugs(lang)
    .map((slug) => loadGuide(slug, lang))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}
