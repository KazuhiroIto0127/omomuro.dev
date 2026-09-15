import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import KakusuDocument from '@/components/kakusu/Document';

export default function KakusuEnglishPage({ content }: { content: string }) {
  return (
    <KakusuDocument language="en" title="Help & support" description="How to edit, review, and save your video, and find help when you need it.">
      <ReactMarkdown>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}

export function getStaticProps() {
  return { props: { content: fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/support.md'), 'utf8') } };
}
