import GuideScreenshot from '@/components/GuideScreenshot';
import clsx from 'clsx';
import type { Lang } from '@/lib/i18n';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { guideSections } from '@/lib/guides';

const screenshots = (lang: Lang): Components => ({
  p: ({ children }) => <div className="guide-figures not-prose">{children}</div>,
  img: ({ src, alt }) => <GuideScreenshot src={String(src)} alt={alt ?? ''} lang={lang} />,
});

function Passage({ body, lang }: { body: string; lang: Lang }) {
  const paragraphs = body.trim().split(/\n\s*\n/);
  const pictures = paragraphs.filter((p) => p.startsWith('!['));
  const imageCount = pictures.join('\n').split('![').length - 1;
  const text = paragraphs.filter((p) => !p.startsWith('![')).join('\n\n');
  return (
    <div className={clsx(pictures.length > 0 && 'guide-passage', imageCount > 1 && 'guide-passage-pair')}>
      <div className="guide-copy">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      {pictures.length > 0 && (
        <div className="guide-screens">
          <ReactMarkdown components={screenshots(lang)}>{pictures.join('\n\n')}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default function GuideBody({ body, lang }: { body: string; lang: Lang }) {
  return guideSections(body).map((section) => (
    <section key={section.id} aria-labelledby={section.title ? section.id : undefined}>
      {section.title && <h2 id={section.id}>{section.title}</h2>}
      {section.body.trim() && <Passage body={section.body} lang={lang} />}
      {section.steps.map((step) => (
        <section key={step.id} className="guide-step" aria-labelledby={step.id}>
          <h3 id={step.id}>{step.title}</h3>
          <Passage body={step.body} lang={lang} />
        </section>
      ))}
    </section>
  ));
}
