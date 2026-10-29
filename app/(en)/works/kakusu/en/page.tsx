import { appPageMetadata } from '@/lib/metadata';
import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import { shotComponents } from '@/components/AppShots';
import KakusuDocument from '@/components/kakusu/Document';

const content = fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/index.md'), 'utf8');

const doc = {
  language: 'en',
  page: 'intro',
  title: 'Hide faces and backgrounds',
  description:
    'Before you post or send: Kakusu finds faces in your photos and videos and hides them with mosaic or stickers. Everything stays on your device.',
  seoTitle: 'Kakusu — Hide faces and backgrounds in photos and videos',
  seoDescription:
    'Automatically detect faces in photos and videos and hide them with mosaic, blur, solid fills, or stickers. Keep people and hide the background, too. Everything runs on your iPhone or iPad, with no watermarks. Free with ads; Pro removes ads with a one-time purchase.',
} as const;

export const metadata = appPageMetadata({ slug: 'kakusu', ...doc });

export default function KakusuEnglishPage() {
  return (
    <KakusuDocument {...doc}>
      <ReactMarkdown components={shotComponents}>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}
