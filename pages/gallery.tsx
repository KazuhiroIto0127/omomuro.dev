import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import { useState, useEffect, useMemo } from 'react';
import StatisticsGrid from '@/components/common/StatisticsGrid';
import MediaModal from '@/components/gallery/MediaModal';
import MediaGrid from '@/components/gallery/MediaGrid';
import FilterButtons from '@/components/gallery/FilterButtons';
import { getGalleryImages } from '@/lib/galleryUtils';

type MediaData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'image' | 'video' | 'graphic';
  poster?: string;
  category?: string;
  description?: string;
};

type GalleryProps = {
  images: MediaData[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<MediaData | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'graphic'>('all');

  // 各タイプの画像数をメモ化
  const imageCounts = useMemo(() => ({
    total: images.length,
    image: images.filter(img => img.type === 'image').length,
    graphic: images.filter(img => img.type === 'graphic').length,
    video: images.filter(img => img.type === 'video').length,
  }), [images]);

  // 統計情報アイテム
  const statisticsItems = [
    {
      value: imageCounts.total,
      label: '総作品数',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      value: imageCounts.image,
      label: 'イラスト',
      color: 'text-pink-600 dark:text-pink-400'
    },
    {
      value: imageCounts.graphic,
      label: 'グラフィック',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      value: imageCounts.video,
      label: 'アニメーション',
      color: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  // キーボードイベントのハンドラー
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <Layout>
      <HeadMeta type="gallery" title="ギャラリー" />

      <HeroSection
        title="ギャラリー"
        emoji="🎨"
        description="作成したイラスト、グラフィック、3Dなどを展示しています"
        backgroundGradient="from-pink-600 via-purple-600 to-indigo-600"
      />

      {/* フィルターセクション */}
      <FilterButtons 
        filter={filter} 
        imageCounts={imageCounts} 
        onFilterChange={setFilter} 
      />

      {/* ギャラリーグリッド */}
      <MediaGrid
        images={images}
        filter={filter}
        onImageClick={setSelectedImage}
      />

      {/* 統計情報 */}
      {imageCounts.total > 0 && (
        <StatisticsGrid items={statisticsItems} className="mt-12" />
      )}

      {/* モーダル */}
      <MediaModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

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
}

export async function getStaticProps() {
  const images = await getGalleryImages();
  return {
    props: {
      images,
    },
  };
}