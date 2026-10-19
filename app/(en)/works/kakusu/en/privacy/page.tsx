import { appPageMetadata } from '@/lib/metadata';
import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import KakusuDocument from '@/components/kakusu/Document';

const content = fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/privacy.md'), 'utf8');

const doc = {
  language: 'en',
  page: 'privacy',
  title: 'Privacy policy',
  description: 'How Kakusu handles photos, videos, face data, advertising, and purchases.',
} as const;

export const metadata = appPageMetadata({ slug: 'kakusu', ...doc });

export default function KakusuEnglishPage() {
  return (
    <KakusuDocument {...doc}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}
