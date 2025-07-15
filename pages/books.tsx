import type { Book } from '@/types/book';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import { useViewTransition } from '@/hooks/useViewTransition';
import BookCard from '@/components/books/BookCard';
import { loadBooks } from '@/lib/contentLoader';
import StatisticsGrid from '@/components/common/StatisticsGrid';
import EmptyState from '@/components/common/EmptyState';

export async function getStaticProps() {
  const books = loadBooks();
  return { props: { books } };
}

export default function Books({ books }: { books: Book[] }) {
  const { navigateWithTransition } = useViewTransition();

  const handleBookClick = async (e: React.MouseEvent, bookSlug: string) => {
    await navigateWithTransition(`/books/${bookSlug}`, e);
  };

  const statisticsItems = [
    {
      value: books.length,
      label: '総冊数',
      color: 'text-amber-600 dark:text-amber-400'
    },
    {
      value: books.filter(book => book.status === '読了').length,
      label: '読了',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      value: books.filter(book => book.status === '読書中').length,
      label: '読書中',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      value: books.filter(book => book.status === '積読' || !book.status).length,
      label: '積読',
      color: 'text-gray-600 dark:text-gray-400'
    }
  ];

  return (
    <Layout>
      <HeadMeta type="website" title="本棚" />

      <HeroSection
        title="本棚"
        emoji="📚"
        description="読んだ本や気になった本をコレクションしています"
        backgroundGradient="from-amber-600 via-orange-600 to-red-600"
      />

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
                <BookCard
                  key={book.slug}
                  book={book}
                  index={index}
                  handleBookClick={handleBookClick}
                />
              ))}
            </div>
          ) : (
            <EmptyState 
              emoji="📖"
              title="まだ本がありません"
              description="新しい本を追加してください"
            />
          )}
        </div>
      </div>

      {/* 統計情報 */}
      {books.length > 0 && (
        <StatisticsGrid items={statisticsItems} className="mt-8" />
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
