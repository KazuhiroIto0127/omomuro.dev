import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import type { PublishedApp } from '@/lib/apps';

/** アプリのタイル（トップの一覧・記事の紹介アプリ） */
export default function AppCard({ app, english = false }: { app: PublishedApp; english?: boolean }) {
  return (
    <Link
      href={english ? `/works/${app.slug}/en` : `/works/${app.slug}`}
      className="bg-card flex h-full items-start gap-[18px] rounded-3xl p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,28,25,0.08)]"
    >
      <Image
        src={app.icon}
        alt=""
        width={72}
        height={72}
        className={clsx(
          'app-icon h-[72px] w-[72px] shrink-0 rounded-[17px]',
          app.pixelated && '[image-rendering:pixelated]',
        )}
      />
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-maru text-lg font-bold">{english ? app.en.name : app.name}</span>
        <span className="text-ink text-sm leading-6 font-medium">{english ? app.en.catch : app.catch}</span>
        <span className="text-sub line-clamp-3 text-[13px] leading-6">
          {english ? app.en.description : app.summary}
        </span>
      </span>
    </Link>
  );
}
