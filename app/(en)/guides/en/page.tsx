import { GuidesIndexPage, guidesCopy } from '@/components/pages/GuidePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  path: '/guides/en',
  title: guidesCopy.en.title,
  description: guidesCopy.en.description,
});

export default function Page() {
  return <GuidesIndexPage lang="en" />;
}
