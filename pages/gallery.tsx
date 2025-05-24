import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import sharp from 'sharp';

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryProps = {
  images: ImageData[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

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

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full transition-transform hover:scale-105"
                loading="lazy"
              />
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
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
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

  // 画像ファイルのみをフィルタリング
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  // 画像データを設定（作成日時も取得）
  const imagesWithStats = await Promise.all(
    imageFiles.map(async file => {
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      const metadata = await sharp(filePath).metadata();
      return {
        src: `/images/gallery/${file}`,
        alt: path.parse(file).name,
        width: metadata.width || 0,
        height: metadata.height || 0,
        createdAt: stats.birthtime, // 作成日時を追加
      };
    })
  );

  // 作成日順でソート（新しい順）
  const images = imagesWithStats
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .map(({ createdAt, ...image }) => image); // createdAtを除外してpropsに渡す

  return {
    props: {
      images,
    },
  };
}
