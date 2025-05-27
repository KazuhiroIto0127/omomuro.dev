import Link from 'next/link';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import type { Book } from '@/types/book';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';

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
      <HeadMeta type="website" title="本棚" />

      {/* ヒーローセクション */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-8 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            本棚
            <span className="ml-2 text-2xl">📚</span>
          </h1>
          <p className="text-lg opacity-90 md:text-xl">
            読んだ本や気になった本をコレクションしています
          </p>
        </div>
        {/* 装飾的な要素 */}
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5"></div>
        <div className="absolute right-16 top-16 h-12 w-12 rounded-full bg-white/10"></div>
      </div>

      {/* 本棚セクション */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 shadow-xl dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        {/* 本棚の背景装飾 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-800 to-red-800"></div>
          <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-amber-800 to-red-800"></div>
          <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-amber-800 to-red-800"></div>
          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-amber-800 to-red-800"></div>
        </div>

        <div className="relative">
          {books.length > 0 ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {books.map((book, index) => (
                <div
                  key={book.slug}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/books/${book.slug}`} className="block">
                    {/* 本の影 */}
                    <div className="absolute -bottom-2 left-2 right-2 h-4 rounded-b-lg bg-black/20 blur-sm transition-all duration-300 group-hover:bg-black/30"></div>

                    {/* 本のカバー */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-2xl">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* オーバーレイ効果 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      {/* ホバー時の情報表示 */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 text-white transition-transform duration-300 group-hover:translate-y-0">
                        <h3 className="text-sm font-semibold leading-tight line-clamp-2">
                          {book.title}
                        </h3>
                        {book.author && (
                          <p className="mt-1 text-xs opacity-90">
                            {book.author}
                          </p>
                        )}
                      </div>

                      {/* 読書ステータスバッジ */}
                      {book.status && (
                        <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                            book.status === '読了'
                              ? 'bg-green-500 text-white'
                              : book.status === '読書中'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-500 text-white'
                          }`}>
                            {book.status}
                          </span>
                        </div>
                      )}

                      {/* 本の背表紙効果 */}
                      <div className="absolute -right-1 top-0 h-full w-2 bg-gradient-to-r from-black/20 to-black/40 opacity-60"></div>
                    </div>

                    {/* 本のタイトル（下部） */}
                    <div className="mt-3 px-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 dark:text-white">
                        {book.title}
                      </h3>
                      {book.author && (
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {book.author}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            /* 空の状態 */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 text-6xl">📖</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                まだ本がありません
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                新しい本を追加してください
              </p>
            </div>
          )}
        </div>

        {/* 本棚の棚板効果 */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-amber-200/50 to-transparent dark:from-gray-600/50"></div>
      </div>

      {/* 統計情報 */}
      {books.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {books.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                総冊数
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {books.filter(book => book.status === '読了').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                読了
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {books.filter(book => book.status === '読書中').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                読書中
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                {books.filter(book => book.status === '積読' || !book.status).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                積読
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
}
