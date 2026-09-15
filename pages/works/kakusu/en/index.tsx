import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import KakusuDocument from '@/components/kakusu/Document';

export default function KakusuEnglishPage({ content }: { content: string }) {
  return (
    <KakusuDocument language="en" title="Hide faces in video" description="Mask faces, review the result, and share a new copy. Processing stays on your iPhone.">
      <ReactMarkdown>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}

export function getStaticProps() {
  return { props: { content: fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/index.md'), 'utf8') } };
}
