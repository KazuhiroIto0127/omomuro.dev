import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
  index: number;
  handleBookClick: (e: React.MouseEvent, bookSlug: string) => void;
}

export default function BookCard({ book, index, handleBookClick }: BookCardProps) {
  return (
    <div
      key={book.slug}
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/books/${book.slug}`}
        scroll={false}
        className="block"
        onClick={(e) => handleBookClick(e, book.slug)}
      >
        {/* 本のカバー */}
        <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-2xl">
          <Image
            src={book.cover}
            alt={book.title}
            width={300}
            height={400}
            className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ viewTransitionName: `cover-${book.slug}` }}
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
              <span className={`rounded-full px-2 py-1 text-xs font-medium ${book.status === '読了'
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
  );
}
