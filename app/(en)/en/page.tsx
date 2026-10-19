import HomePage, { homeCopy } from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({ path: '/en', title: homeCopy.en.title, description: homeCopy.en.description });

export default function Page() {
  return <HomePage lang="en" />;
}
