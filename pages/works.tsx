import { InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import Link from 'next/link';
import HeadMeta from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import type { Work } from '@/types/work';
import { useViewTransition } from '@/hooks/useViewTransition';
import { loadWorks } from '@/lib/contentLoader';

const WorksPage = ({ works }: { works: Work[] }) => {
  const { navigateWithTransition } = useViewTransition();

  const handleWorkClick = async (e: React.MouseEvent, workSlug: string) => {
    await navigateWithTransition(`/works/${workSlug}`, e);
  };

  return (
    <Layout>
      <HeadMeta type="website" title="作ったもの" />

      <HeroSection
        title="作ったもの"
        emoji="🚀"
        description="これまでに制作したプロジェクトやアプリケーションをご紹介します"
        backgroundGradient="from-purple-600 via-blue-600 to-indigo-700"
      />

      {/* 作品グリッド */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {works.map((work, index) => (
          <Link
            href={`/works/${work.slug}`}
            key={work.slug}
            className="group block"
            style={{ animationDelay: `${index * 100}ms` }}
            scroll={false}
            onClick={(e) => handleWorkClick(e, work.slug)}
          >
            <div className="animate-fade-in-up h-full overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800">
              {/* 画像コンテナ */}
              <div className="relative overflow-hidden">
                <Image
                  priority
                  src={work.thumbnail}
                  className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  height={work.thumbnailHeight}
                  width={work.thumbnailWidth}
                  alt={work.thumbnailFileName}
                  style={{ viewTransitionName: `thumbnail-${work.slug}` }}
                />
                {/* オーバーレイ効果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* ホバー時のアイコン */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-gray-800/90">
                  <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-5">
                <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {work.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {work.description}
                </p>

                {/* 詳細を見るボタン */}
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-indigo-400">
                  詳細を見る
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 空の状態 */}
      {works.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 text-6xl">📝</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            まだ作品がありません
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            新しいプロジェクトを追加してください
          </p>
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
      `}</style>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = loadWorks();
  return {
    props: { works },
  };
};

export default WorksPage;
