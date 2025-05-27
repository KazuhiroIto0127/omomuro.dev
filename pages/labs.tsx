import HeadMeta from '@/components/Head';
import LabsLink from '@/components/LabsLink';
import Layout from '@/components/layouts/oneColumnLayout';
import { labsLinks } from '@/components/labs';
import { motion } from 'framer-motion';
import { BeakerIcon, SparklesIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Labs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <HeadMeta type="website" title="実験室" />

      <Layout>
        {/* ヒーローセクション */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 p-8 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              実験室
              <span className="ml-2 text-2xl">🧪</span>
            </h1>
            <p className="text-lg opacity-90 md:text-xl">
              新しい技術やアイデアを試す実験的なプロジェクト集
            </p>
          </div>
          {/* 装飾的な要素 */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5"></div>
          <div className="absolute right-20 top-20 h-16 w-16 rounded-full bg-white/10"></div>

          {/* 科学的な装飾要素 */}
          <div className="absolute top-4 right-4 opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2v6.5L12 12l3-3.5V2h-6zm6.5 11.5L12 17l-3.5-3.5L5 18h14l-3.5-4.5z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        {/* 実験プロジェクト一覧 */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              実験プロジェクト
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              クリックして各プロジェクトを体験してみてください
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {labsLinks.map((link, index) => (
              <motion.div
                key={link.id}
                custom={index}
                variants={cardVariants}
                className="group"
              >
                <LabsLink
                  title={link.title}
                  id={link.id}
                  emoji={link.emoji}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 統計情報 */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {labsLinks.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  実験プロジェクト
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ∞
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  学習の可能性
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  🚀
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  継続的な改善
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </Layout>
    </>
  );
}
