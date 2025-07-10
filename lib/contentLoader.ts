import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Book } from '@/types/book';
import type { Work } from '@/types/work';

export interface ContentItem {
  slug: string;
  [key: string]: any;
}

export interface ContentWithBody extends ContentItem {
  body: string;
}

/**
 * コンテンツディレクトリからMarkdownファイルを読み込みメタデータを取得
 */
export function loadContentItems<T extends ContentItem>(
  contentType: 'books' | 'works'
): T[] {
  const contentDirectory = path.join(process.cwd(), `contents/${contentType}`);
  const filenames = fs.readdirSync(contentDirectory);
  
  const items = filenames.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      ...data,
      slug: filename.replace(/\.md$/, ''),
    } as T;
  });

  return items;
}

/**
 * 特定のコンテンツアイテムを読み込み（本文も含む）
 */
export function loadContentItem<T extends ContentWithBody>(
  contentType: 'books' | 'works',
  slug: string
): T {
  const contentDirectory = path.join(process.cwd(), `contents/${contentType}`);
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    body: content,
    slug,
  } as T;
}

/**
 * 全てのコンテンツのパスを取得（getStaticPaths用）
 */
export function getAllContentPaths(contentType: 'books' | 'works') {
  const contentDirectory = path.join(process.cwd(), `contents/${contentType}`);
  const filenames = fs.readdirSync(contentDirectory);
  
  return filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
}

/**
 * 本の一覧を取得（日付順ソート済み）
 */
export function loadBooks(): Book[] {
  const books = loadContentItems<Book>('books');
  // 日付の降順でソート
  return books.sort((a, b) => (a.addedDate < b.addedDate ? 1 : -1));
}

/**
 * 作品の一覧を取得（作成日順ソート済み）
 */
export function loadWorks(): Work[] {
  const works = loadContentItems<Work>('works');
  // createdAtの降順でソート（新しいものから古いものへ）
  return works.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * 特定の本を取得
 */
export function loadBook(slug: string): Book {
  return loadContentItem<Book>('books', slug);
}

/**
 * 特定の作品を取得
 */
export function loadWork(slug: string): Work {
  return loadContentItem<Work>('works', slug);
}