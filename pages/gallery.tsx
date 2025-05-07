import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';

type ImageData = {
  src: string;
  alt: string;
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">画像ギャラリー</h1>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
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
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
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

  // 画像データを設定
  const images = imageFiles.map(file => ({
    src: `/images/gallery/${file}`,
    alt: path.parse(file).name, // ファイル名から拡張子を除いた部分をalt属性として使用
  }));

  return {
    props: {
      images,
    },
  };
}
