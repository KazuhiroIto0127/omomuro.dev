import Link from 'next/link';
import { guidePath, guidesIndexPath, loadGuides } from '@/lib/guides';
import type { Lang } from '@/lib/i18n';

/** 読みものの一覧。app を渡すと、そのアプリを紹介している記事だけ */
export default function GuideList({
  lang,
  app,
  exclude,
  heading,
  limit,
  showAllLink = false,
}: {
  lang: Lang;
  app?: string;
  exclude?: string;
  heading?: string;
  limit?: number;
  showAllLink?: boolean;
}) {
  const english = lang === 'en';
  const guides = loadGuides(lang)
    .filter((g) => (!app || g.apps.includes(app)) && g.slug !== exclude)
    .slice(0, limit);
  if (guides.length === 0) return null;

  return (
    <section aria-label={heading ?? (english ? 'Guides' : '読みもの')} className="flex flex-col gap-4">
      {heading && (
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-maru text-xl font-bold">{heading}</h2>
          {showAllLink && (
            <Link href={guidesIndexPath(lang)} className="text-accent shrink-0 text-[15px] hover:underline">
              {english ? 'All guides →' : 'すべて見る →'}
            </Link>
          )}
        </div>
      )}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={guidePath(g.slug, lang)}
              className="bg-card flex h-full flex-col gap-2 rounded-3xl p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,28,25,0.08)]"
            >
              <span className="font-maru text-[17px] leading-7 font-bold">{g.title}</span>
              <span className="text-sub text-sm leading-6">{g.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
