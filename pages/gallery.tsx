import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import sharp from 'sharp';

type MediaData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  type: 'image' | 'video' | 'graphic';
  poster?: string; // 動画用サムネイル
  category?: string;
  description?: string;
};

type GalleryProps = {
  images: MediaData[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<MediaData | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'graphic'>('all');

  // フィルタリングされた画像
  const filteredImages = images.filter(media => {
    if (filter === 'all') return true;
    return media.type === filter;
  });

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
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            filter === 'all'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          すべて ({images.length})
        </button>
        <button
          onClick={() => setFilter('image')}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            filter === 'image'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          イラスト ({images.filter(img => img.type === 'image').length})
        </button>
        <button
          onClick={() => setFilter('graphic')}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            filter === 'graphic'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          グラフィック ({images.filter(img => img.type === 'graphic').length})
        </button>
        <button
          onClick={() => setFilter('video')}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            filter === 'video'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          アニメーション ({images.filter(img => img.type === 'video').length})
        </button>
      </div>

      {/* ギャラリーグリッド */}
      <div className="relative">
        {filteredImages.length > 0 ? (
          <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
            {filteredImages.map((media, index) => (
              <div
                key={`${media.src}-${filter}`}
                className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1"
                onClick={() => setSelectedImage(media)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {media.type === 'image' || media.type === 'graphic' ? (
                  <div className="relative overflow-hidden">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      className="w-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
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
                          <path d="M8 5v14l11-7z"/>
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
        ) : (
          /* 空の状態 */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 text-6xl">🎭</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              該当する作品がありません
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              別のフィルターを試してみてください
            </p>
          </div>
        )}
      </div>

      {/* 統計情報 */}
      {images.length > 0 && (
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {images.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                総作品数
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                {images.filter(img => img.type === 'image').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                イラスト
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {images.filter(img => img.type === 'graphic').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                グラフィック
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {images.filter(img => img.type === 'video').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                アニメーション
              </div>
            </div>
          </div>
        </div>
      )}

      {/* モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.type === 'image' || selectedImage.type === 'graphic' ? (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <video
                src={selectedImage.src}
                controls
                autoPlay
                muted
                playsInline
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                style={{ aspectRatio: `${selectedImage.width} / ${selectedImage.height}` }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
              />
            )}
            <button
              className="absolute -top-4 -right-4 rounded-full bg-white p-3 text-black shadow-xl transition-all hover:bg-gray-100 hover:scale-110 touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');
  const metadataPath = path.join(galleryPath, 'metadata.json');

  // メタデータファイルを読み込み
  let metadata = {};
  if (fs.existsSync(metadataPath)) {
    const metadataContent = fs.readFileSync(metadataPath, 'utf8');
    metadata = JSON.parse(metadataContent);
  }

  const files = fs.readdirSync(galleryPath);

  // 画像・動画ファイルのみをフィルタリング（metadata.jsonを除外）
  const mediaFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp|mp4)$/i.test(file) && file !== 'metadata.json'
  );

  // メディアデータを設定
  const imagesWithStats = await Promise.all(
    mediaFiles.map(async file => {
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      const ext = path.extname(file).toLowerCase();

      // メタデータからタイプを取得、なければデフォルト
      const fileMetadata = metadata[file] || {};
      let type = fileMetadata.type;

      if (!type) {
        // メタデータがない場合は拡張子で判定
        if (ext === '.mp4' || ext === '.gif') {
          type = 'video';
        } else {
          type = 'image';
        }
      }

      if (ext === '.mp4') {
        // 動画の場合
        // サムネイル画像（同名jpg/png/webp優先）を探す
        const base = path.basename(file, ext);
        const posterExts = ['.png', '.jpg', '.jpeg', '.webp'];
        let poster = undefined;

        // 大文字小文字を考慮してサムネイルを検索
        for (const pExt of posterExts) {
          // 小文字で検索
          let posterPath = path.join(galleryPath, base + pExt);
          if (fs.existsSync(posterPath)) {
            poster = `/images/gallery/${base + pExt}`;
            break;
          }
          // 大文字で検索
          posterPath = path.join(galleryPath, base + pExt.toUpperCase());
          if (fs.existsSync(posterPath)) {
            poster = `/images/gallery/${base + pExt.toUpperCase()}`;
            break;
          }
        }

        return {
          src: `/images/gallery/${file}`,
          alt: fileMetadata.description || path.parse(file).name,
          width: 640,
          height: 360,
          type: type,
          poster,
          ...(fileMetadata.category && { category: fileMetadata.category }),
          ...(fileMetadata.description && { description: fileMetadata.description }),
          createdAt: stats.birthtime || stats.mtime,
        };
      } else {
        // 画像の場合
        const metadata = await sharp(filePath).metadata();
        return {
          src: `/images/gallery/${file}`,
          alt: fileMetadata.description || path.parse(file).name,
          width: metadata.width || 0,
          height: metadata.height || 0,
          type: type,
          ...(fileMetadata.category && { category: fileMetadata.category }),
          ...(fileMetadata.description && { description: fileMetadata.description }),
          createdAt: stats.birthtime || stats.mtime,
        };
      }
    })
  );

  // ファイル名ベースでソート（降順）- Vercelでも確実に動作
  const images = imagesWithStats
    .sort((a, b) => {
      const fileNameA = path.basename(a.src);
      const fileNameB = path.basename(b.src);

      // ファイル名に日付が含まれている場合の処理（YYYY-MM-DD形式）
      const dateRegex = /(\d{4}-\d{2}-\d{2})/;
      const dateA = fileNameA.match(dateRegex)?.[1];
      const dateB = fileNameB.match(dateRegex)?.[1];

      if (dateA && dateB) {
        return dateB.localeCompare(dateA); // 日付で降順ソート
      }

      // 日付が含まれていない場合はファイル名で降順ソート
      return fileNameB.localeCompare(fileNameA);
    })
    .map(({ createdAt, ...image }) => image); // createdAtを除外してpropsに渡す

  return {
    props: {
      images,
    },
  };
}
