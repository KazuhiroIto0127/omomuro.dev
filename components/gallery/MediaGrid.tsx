import { motion } from 'framer-motion';
import Image from 'next/image';

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

interface MediaGridProps {
  images: MediaData[];
  filter: 'all' | 'image' | 'video' | 'graphic';
  onImageClick: (image: MediaData) => void;
}

export default function MediaGrid({ images, filter, onImageClick }: MediaGridProps) {
  const filteredImages = images.filter(media => {
    if (filter === 'all') return true;
    return media.type === filter;
  });

  if (filteredImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 text-6xl">🎨</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          該当する作品がありません
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          別のフィルターを試してみてください
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {filteredImages.map((media, index) => (
          <div
            key={`${media.src}-${filter}`}
            className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1"
            onClick={() => onImageClick(media)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {media.type === 'image' || media.type === 'graphic' ? (
              <div className="relative overflow-hidden">
                <motion.div layoutId={`image-${media.src}`}>
                  <Image
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    unoptimized={media.src.toLowerCase().endsWith('.gif')}
                  />
                </motion.div>
                {/* オーバーレイ効果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* ホバー時のアイコン */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-gray-800/90">
                  <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                {/* グラフィックバッジ */}
                {media.type === 'graphic' && (
                  <div className="absolute left-3 top-3 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    グラフィック
                  </div>
                )}
              </div>
            ) : (
              <div className="relative overflow-hidden">
                <motion.div layoutId={`video-${media.src}`}>
                  <video
                    src={media.src}
                    poster={media.poster}
                    controls={false}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                    style={{ aspectRatio: `${media.width} / ${media.height}` }}
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.currentTime = 1; // 1秒の位置でプレビュー
                    }}
                  />
                </motion.div>
                {/* オーバーレイ効果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* 動画アイコンオーバーレイ */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="rounded-full bg-black/60 p-3 transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* 動画バッジ */}
                <div className="absolute left-3 top-3 rounded-full bg-purple-500 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  動画
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}