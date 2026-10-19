import HomePage, { homeCopy } from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({ path: '/', title: homeCopy.ja.title, description: homeCopy.ja.description });

export default function Page() {
  return <HomePage lang="ja" />;
}
