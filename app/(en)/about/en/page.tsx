import AboutPage, { aboutCopy } from '@/components/pages/AboutPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  path: '/about/en',
  title: aboutCopy.en.title,
  description: aboutCopy.en.description,
});

export default function Page() {
  return <AboutPage lang="en" />;
}
