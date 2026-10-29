import Image from 'next/image';
import Link from 'next/link';
import AppStoreLink from '@/components/AppStoreLink';
import { appStoreId, type PublishedApp } from '@/lib/apps';
import type { Lang } from '@/lib/i18n';

export default function GuideApps({ apps, lang }: { apps: PublishedApp[]; lang: Lang }) {
  if (!apps.length) return null;
  const english = lang === 'en';
  return (
    <aside
      className="not-prose border-line mb-8 rounded-2xl border p-5"
      aria-label={english ? 'Try it as you read' : '読みながら試す'}
    >
      <p className="font-maru mb-4 text-sm font-bold">{english ? 'Try it as you read' : '読みながら試す'}</p>
      <ul className="space-y-6">
        {apps.map((app) => {
          const id = appStoreId(app);
          const name = english ? app.en.name : app.name;
          return (
            <li key={app.slug} className="flex items-start gap-3">
              <Image src={app.icon} alt="" width={48} height={48} className="app-icon shrink-0 rounded-xl" />
              <div className="min-w-0 flex-1">
                <Link
                  href={`/works/${app.slug}${english ? '/en' : ''}`}
                  className="font-maru font-bold hover:underline"
                >
                  {name}
                </Link>
                <p className="text-sub mt-1 text-sm leading-7">
                  {app.freeTier?.[lang] ?? (english ? app.en.pricing : app.pricing)}
                </p>
                {id && (
                  <AppStoreLink
                    href={english ? `https://apps.apple.com/app/id${id}` : app.appStoreUrl!}
                    app={app.slug}
                    placement="guide_intro"
                    language={lang}
                    className="text-accent mt-1 inline-block py-2 text-sm font-medium underline underline-offset-4"
                  >
                    {english ? 'Open in the App Store →' : 'App Storeで見る →'}
                  </AppStoreLink>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
