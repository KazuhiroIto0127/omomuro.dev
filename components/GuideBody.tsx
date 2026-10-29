import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { guideSections } from '@/lib/guides';

const screenshots: Components = {
  p: ({ children }) => <div className="guide-figures not-prose">{children}</div>,
  img: ({ src, alt }) => (
    <figure className="guide-figure">
      <Image
        src={String(src)}
        alt=""
        width={660}
        height={1434}
        sizes="(min-width: 768px) 220px, 240px"
        className="app-icon h-auto w-full rounded-2xl"
      />
      <figcaption>{alt}</figcaption>
    </figure>
  ),
};

function Passage({ body }: { body: string }) {
  const paragraphs = body.trim().split(/\n\s*\n/);
  const pictures = paragraphs.filter((p) => p.startsWith('!['));
  const imageCount = pictures.join('\n').split('![').length - 1;
  const text = paragraphs.filter((p) => !p.startsWith('![')).join('\n\n');
  return (
    <div className={pictures.length ? `guide-passage${imageCount > 1 ? 'guide-passage-pair' : ''}` : undefined}>
      <div className="guide-copy">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      {pictures.length > 0 && (
        <div className="guide-screens">
          <ReactMarkdown components={screenshots}>{pictures.join('\n\n')}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default function GuideBody({ body }: { body: string }) {
  return guideSections(body).map((section) => (
    <section key={section.id} aria-labelledby={section.title ? section.id : undefined}>
      {section.title && <h2 id={section.id}>{section.title}</h2>}
      {section.body.trim() && <Passage body={section.body} />}
      {section.steps.map((step) => (
        <section key={step.id} className="guide-step" aria-labelledby={step.id}>
          <h3 id={step.id}>{step.title}</h3>
          <Passage body={step.body} />
        </section>
      ))}
    </section>
  ));
}
