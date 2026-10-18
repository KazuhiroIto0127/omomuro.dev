import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import KakusuDocument from '@/components/kakusu/Document';
import KakusuScreenshots from '@/components/kakusu/Screenshots';

export default function KakusuEnglishPage({ content }: { content: string }) {
  return (
    <KakusuDocument
      seoTitle="Kakusu — Blur faces in videos automatically on iPhone"
      seoDescription="Automatically detect and blur or cover faces in your videos, then fix misses frame by frame. Everything runs on your iPhone — no uploads, ads or watermarks. Save clips up to 15 seconds free."
      language="en"
      title="Hide faces in video"
      description="Mask faces, review the result, and share a new copy. Processing stays on your iPhone."
    >
      <a
        href="https://apps.apple.com/app/id6809350160"
        className="inline-flex rounded-full bg-emerald-900 px-6 py-3 font-semibold text-white no-underline"
      >
        Download on the App Store
      </a>
      <KakusuScreenshots language="en" />
      <ReactMarkdown>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}

export function getStaticProps() {
  return { props: { content: fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/index.md'), 'utf8') } };
}
