import { GuidePage } from '@/components/pages/GuidePage';
import { guidePath, guideSlugs, loadGuide } from '@/lib/guides';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideSlugs('ja').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = loadGuide(slug, 'ja');
  return pageMetadata({
    path: guidePath(slug, 'ja'),
    title: guide.title,
    description: guide.description,
    type: 'article',
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <GuidePage slug={slug} lang="ja" />;
}
