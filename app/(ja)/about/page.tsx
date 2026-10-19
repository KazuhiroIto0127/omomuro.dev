import AboutPage, { aboutCopy } from '@/components/pages/AboutPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  path: '/about',
  title: aboutCopy.ja.title,
  description: aboutCopy.ja.description,
});

export default function Page() {
  return <AboutPage lang="ja" />;
}
