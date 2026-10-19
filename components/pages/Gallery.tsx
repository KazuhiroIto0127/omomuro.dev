'use client';

import { useEffect, useState } from 'react';
import MediaGrid from '@/components/gallery/MediaGrid';
import MediaModal from '@/components/gallery/MediaModal';
import type { getGalleryImages } from '@/lib/galleryUtils';

export type MediaData = Awaited<ReturnType<typeof getGalleryImages>>[number];

export default function Gallery({ images }: { images: MediaData[] }) {
  const [selected, setSelected] = useState<MediaData | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <MediaGrid images={images} filter="all" onImageClick={setSelected} />
      <MediaModal selectedImage={selected} onClose={() => setSelected(null)} />
    </>
  );
}
