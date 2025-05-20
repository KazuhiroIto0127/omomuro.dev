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
      <div className="relative bg-[#8B4513] p-8 rounded-lg shadow-2xl">
        <div
          className="absolute inset-0 rounded-lg opacity-80"
          style={{
            backgroundImage: "url('/images/wood-texture.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-20 max-w-[1000px] mx-auto relative">
          {books.map((book, index) => (
            <div key={book.slug} className="relative">
              <div className="transform hover:-translate-y-2 transition-all duration-300">
                <Link href={`/books/${book.slug}`} className="focus:outline-none w-full max-w-[212px] block mx-auto">
                  <div className="relative">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="rounded shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full aspect-[3/4] object-cover hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded"></div>
                  </div>
                </Link>
              </div>
              {/* 棚板 */}
              <div className="relative mt-4">
                <div className="absolute -left-4 -right-4 h-4 bg-[#6B3410] rounded-b-lg shadow-inner"></div>
                <div className="absolute -left-4 -right-4 h-1 bg-[#8B4513] top-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
