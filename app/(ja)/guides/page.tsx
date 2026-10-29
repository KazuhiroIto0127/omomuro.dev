import { GuidesIndexPage, guidesCopy } from '@/components/pages/GuidePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  path: '/guides',
  title: guidesCopy.ja.title,
  description: guidesCopy.ja.description,
});

export default function Page() {
  return <GuidesIndexPage lang="ja" />;
}
