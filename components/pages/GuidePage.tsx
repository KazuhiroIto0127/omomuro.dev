import Link from 'next/link';
import Image from 'next/image';
import GuideBody from '@/components/GuideBody';
import AppCard from '@/components/AppCard';
import GuideApps from '@/components/GuideApps';
import AppCta from '@/components/AppCta';
import GuideList from '@/components/GuideList';
import JsonLd from '@/components/JsonLd';
import LanguageLink from '@/components/LanguageLink';
import { findApp, type PublishedApp } from '@/lib/apps';
import { guideCover, guidePath, guideSections, guidesIndexPath, loadGuide, loadGuides } from '@/lib/guides';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';
import { article, breadcrumb, faqFromMarkdown, graph } from '@/lib/structuredData';

export const guidesCopy = {
  ja: {
    label: '読みもの',
    title: '読みもの — 暮らしと家族のちいさな困りごと',
    description:
      '夫婦での家計簿の共有、学校プリントの管理、動画の顔のモザイク、こどものアプリ選びなど。暮らしと家族のちいさな困りごとを、iPhone・iPadで解決する方法をまとめています。',
    heading: '読みもの',
    lead: '暮らしと家族のちいさな困りごとを、iPhone・iPadで解決する方法をまとめています。',
    apps: 'この記事で紹介したアプリ',
    more: 'ほかの読みもの',
    updated: (d: string) => `${d.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, '$1年$2月$3日')} 更新`,
  },
  en: {
    label: 'Guides',
    title: 'Guides — everyday family life on iPhone and iPad',
    description:
      'Sharing a budget with your partner, keeping school handouts in one place, blurring faces in videos, choosing apps for toddlers and more. Practical guides for family life on iPhone and iPad.',
    heading: 'Guides',
    lead: 'Practical ways to solve small everyday family problems on iPhone and iPad.',
    apps: 'Apps in this guide',
    more: 'More guides',
    updated: (d: string) =>
      `Updated ${new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}`,
  },
};

/** 読みもの一覧 */
export function GuidesIndexPage({ lang }: { lang: Lang }) {
  const english = lang === 'en';
  const t = guidesCopy[lang];
  const path = guidesIndexPath(lang);
  const guides = loadGuides(lang);

  return (
    <div className="flex flex-col gap-10">
      <JsonLd
        data={graph(
          breadcrumb([
            { name: english ? 'Apps' : 'アプリ', path: english ? '/en' : '/' },
            { name: t.heading, path },
          ]),
          {
            '@type': 'ItemList',
            itemListElement: guides.map((g, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE_URL}${guidePath(g.slug, lang)}`,
              name: g.title,
            })),
          },
        )}
      />
      <section className="flex flex-col items-center gap-4 pt-6 text-center md:pt-10">
        <h1 className="font-maru text-[30px] leading-snug font-bold sm:text-4xl">{t.heading}</h1>
        <p className="text-sub max-w-xl text-[15px] leading-8 md:text-base">{t.lead}</p>
      </section>
      <GuideList lang={lang} />
    </div>
  );
}

/** 読みもの 1 本 */
export function GuidePage({ slug, lang }: { slug: string; lang: Lang }) {
  const english = lang === 'en';
  const t = guidesCopy[lang];
  const guide = loadGuide(slug, lang);
  const path = guidePath(slug, lang);
  const sections = guideSections(guide.body).filter((section) => section.title);
  const apps = guide.apps.map(findApp).filter((app): app is PublishedApp => Boolean(app));

  return (
    <div className="flex flex-col gap-8">
      <JsonLd
        data={graph(
          article({
            title: guide.title,
            description: guide.description,
            path,
            lang,
            publishedAt: guide.publishedAt,
            updatedAt: guide.updatedAt,
            image: guideCover(slug),
          }),
          breadcrumb([
            { name: english ? 'Apps' : 'アプリ', path: english ? '/en' : '/' },
            { name: t.heading, path: guidesIndexPath(lang) },
            { name: guide.title, path },
          ]),
          faqFromMarkdown(guide.body),
        )}
      />
      <article
        lang={lang}
        className="app-prose guide-prose prose bg-card mx-auto w-full max-w-none rounded-3xl px-5 py-7 break-words sm:px-8 md:p-12"
      >
        <div className="mx-auto max-w-[840px]">
          <div className="not-prose mb-6 flex flex-wrap items-center justify-between gap-4 text-[15px]">
            <nav aria-label={english ? 'Breadcrumb' : 'パンくず'}>
              <Link href={guidesIndexPath(lang)} className="text-accent hover:underline">
                ← {t.label}
              </Link>
            </nav>
            <LanguageLink
              href={guidePath(slug, english ? 'ja' : 'en')}
              lang={english ? 'ja' : 'en'}
              className="text-accent hover:underline"
            >
              {english ? '日本語' : 'English'}
            </LanguageLink>
          </div>
          <h1 className="text-[28px] leading-snug md:text-[38px]">{guide.title}</h1>
          <p className="text-sub not-prose mb-8 text-sm">
            <time dateTime={guide.updatedAt}>{t.updated(guide.updatedAt)}</time>
            {' · '}
            <Link href={english ? '/about/en' : '/about'} rel="author" className="underline underline-offset-4">
              {english ? 'Kazuhiro Ito' : 'イトウカズヒロ'}
            </Link>
          </p>
          <div className="not-prose mb-8 overflow-hidden rounded-2xl">
            <Image
              src={guideCover(slug)}
              alt=""
              width={1200}
              height={630}
              sizes="(min-width: 1024px) 840px, (min-width: 768px) calc(100vw - 144px), calc(100vw - 80px)"
              preload
              className="aspect-[1200/630] h-auto w-full object-cover"
            />
          </div>
          <aside
            className="not-prose bg-paper mb-8 rounded-2xl p-5 sm:p-6"
            aria-label={english ? 'At a glance' : 'この記事のポイント'}
          >
            <p className="font-maru mb-3 font-bold">{english ? 'At a glance' : 'この記事のポイント'}</p>
            <ul className="space-y-3 text-[15px] leading-7">
              {guide.summary.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
          <GuideApps apps={apps} lang={lang} />
          <nav
            id="guide-contents"
            className="not-prose guide-toc border-line mb-10 border-y py-5"
            aria-label={english ? 'On this page' : '目次'}
          >
            <details>
              <summary className="font-maru cursor-pointer py-2 font-bold">
                {english ? 'On this page' : '目次 — 読みたいところへ'}
              </summary>
              <ol className="mt-4 space-y-3 text-[15px] leading-7">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-accent hover:underline">
                      {section.title}
                    </a>
                    {section.steps.length > 0 && (
                      <ol className="border-line mt-2 space-y-2 border-l pl-4">
                        {section.steps.map((step) => (
                          <li key={step.id}>
                            <a href={`#${step.id}`} className="text-sub hover:text-accent hover:underline">
                              {step.title}
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </details>
          </nav>
          <GuideBody body={guide.body} lang={lang} />
          <a
            href="#guide-contents"
            className="not-prose text-accent mt-8 inline-block py-3 text-sm underline underline-offset-4"
          >
            {english ? 'Back to contents ↑' : '目次に戻る ↑'}
          </a>
        </div>
      </article>

      {apps.length > 0 && (
        <section aria-labelledby="guide-apps" className="flex flex-col gap-4">
          <h2 id="guide-apps" className="font-maru text-xl font-bold">
            {t.apps}
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {apps.map((app) => (
              <li key={app.slug}>
                <AppCard app={app} english={english} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {apps[0] && <AppCta app={apps[0]} english={english} placement="guide_footer" />}

      <GuideList lang={lang} exclude={slug} heading={t.more} showAllLink />
    </div>
  );
}
