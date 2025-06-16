import HeadMeta from '@/components/Head';
import LabsLink from '@/components/LabsLink';
import Layout from '@/components/layouts/oneColumnLayout';
import HeroSection from '@/components/HeroSection';
import { labsLinks } from '@/components/labs';
import { motion } from 'framer-motion';

export default function Labs() {

  return (
    <>
      <HeadMeta type="website" title="実験室" />

      <Layout>
        <HeroSection
          title="実験室"
          emoji="🧪"
          description="新しい技術やアイデアを試す実験的なプロジェクト集"
          backgroundGradient="from-green-600 via-teal-600 to-blue-600"
        />

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
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
