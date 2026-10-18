import AboutPage, { type MediaData } from '@/components/pages/AboutPage';
import { getGalleryImages } from '@/lib/galleryUtils';

export default function Page({ images }: { images: MediaData[] }) {
  return <AboutPage lang="ja" images={images} />;
}

export async function getStaticProps() {
  return { props: { images: await getGalleryImages() } };
}
