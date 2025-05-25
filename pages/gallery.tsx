import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
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
  type: 'image' | 'video';
  poster?: string; // 動画用サムネイル
};

type GalleryProps = {
  images: MediaData[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<MediaData | null>(null);

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
      <div className="container mx-auto pb-8">
        <h1 className="mb-8 text-3xl font-bold">描いた絵</h1>
        <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((media, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(media)}
            >
              {media.type === 'image' ? (
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  className="w-full transition-transform hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <video
                    src={media.src}
                    poster={media.poster}
                    controls={false}
                    className="w-full transition-transform hover:scale-105"
                    style={{ aspectRatio: `${media.width} / ${media.height}` }}
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.currentTime = 1; // 1秒の位置でプレビュー
                    }}
                  />
                  {/* 動画アイコンオーバーレイ */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black bg-opacity-50 rounded-full p-2">
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
                </div>
              )}
            </div>
          ))}
        </div>

        {/* モーダル */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-h-[90vh] max-w-[90vw]">
              {selectedImage.type === 'image' ? (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                />
              ) : (
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                  style={{ aspectRatio: `${selectedImage.width} / ${selectedImage.height}` }}
                />
              )}
              <button
                className="absolute -top-4 -right-4 rounded-full bg-white p-2 text-black hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
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
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');
  const files = fs.readdirSync(galleryPath);

  // 画像・動画ファイルのみをフィルタリング
  const mediaFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp|mp4)$/i.test(file)
  );

  // メディアデータを設定
  const imagesWithStats = await Promise.all(
    mediaFiles.map(async file => {
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      const ext = path.extname(file).toLowerCase();
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
        
        // デバッグ用ログ（本番では削除可能）
        if (file === '2025-05-25_obake.mp4') {
          console.log(`Video: ${file}, Poster found: ${poster}`);
        }
        
        return {
          src: `/images/gallery/${file}`,
          alt: path.parse(file).name,
          width: 640,
          height: 360,
          type: 'video' as const,
          poster,
          createdAt: stats.birthtime || stats.mtime,
        };
      } else {
        // 画像の場合
        const metadata = await sharp(filePath).metadata();
        return {
          src: `/images/gallery/${file}`,
          alt: path.parse(file).name,
          width: metadata.width || 0,
          height: metadata.height || 0,
          type: 'image' as const,
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
