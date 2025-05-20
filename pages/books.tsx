import Link from 'next/link';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import type { Book } from '@/types/book';
import Layout from '@/components/layouts/oneColumnLayout';

export async function getStaticProps() {
  const booksDirectory = path.join(process.cwd(), 'contents/books');
  const filenames = fs.readdirSync(booksDirectory);
  const books = filenames.map((filename) => {
    const filePath = path.join(booksDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace(/\.md$/, ''),
    } as Book;
  });
  // 日付の降順でソート
  books.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { books } };
}

export default function Books({ books }: { books: Book[] }) {
  return (
    <Layout>
      <h1 className="mb-8 text-3xl font-bold">読んだ本一覧</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-16 max-w-[1000px] mx-auto">
        {books.map((book) => (
          <div key={book.slug}>
            <Link href={`/books/${book.slug}`} className="focus:outline-none w-full max-w-[212px] block mx-auto">
              <img
                src={book.cover}
                alt={book.title}
                className="rounded shadow-md w-full aspect-[3/4] object-cover hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
