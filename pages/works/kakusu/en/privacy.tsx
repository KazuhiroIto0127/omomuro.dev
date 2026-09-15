import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import KakusuDocument from '@/components/kakusu/Document';

export default function KakusuEnglishPage({ content }: { content: string }) {
  return (
    <KakusuDocument language="en" title="Privacy policy" description="How Kakusu handles videos, editing data, and purchases.">
      <ReactMarkdown>{content}</ReactMarkdown>
    </KakusuDocument>
  );
}

export function getStaticProps() {
  return { props: { content: fs.readFileSync(path.join(process.cwd(), 'contents/kakusu/en/privacy.md'), 'utf8') } };
}
