'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeToggle from '@/components/ThemeToggle';
import { navigationLinks } from '@/config/navigation';
import { pathLanguage } from '@/lib/i18n';

export default function SiteHeader() {
  const path = usePathname() ?? '/';
  const english = pathLanguage(path) === 'en';
  const activeId = path.startsWith('/about') ? 'about' : path.startsWith('/guides') ? 'guides' : 'apps';

  return (
    <header className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-2 px-4 py-5 sm:gap-4 sm:px-5 md:px-6">
      <Link href={english ? '/en' : '/'} className="py-2">
        <span className="font-maru text-base font-bold whitespace-nowrap sm:text-lg">omomuro.dev</span>
      </Link>
      <div className="flex items-center gap-0.5 sm:gap-1">
        <nav aria-label={english ? 'Main' : 'メイン'}>
          <ul className="flex items-center text-sm font-medium sm:gap-1 sm:text-[15px]">
            {navigationLinks.map((link) => (
              // 狭い画面では「アプリ」を出さない（ロゴがトップへのリンクを兼ねる）
              <li key={link.id} className={clsx(link.id === 'apps' && 'max-sm:hidden')}>
                <Link
                  href={english ? link.pathEn : link.path}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  className={clsx(
                    'block rounded-full px-3 py-2.5 whitespace-nowrap transition-colors sm:px-4',
                    activeId === link.id ? 'bg-card text-ink' : 'text-sub hover:text-ink',
                  )}
                >
                  {english ? link.titleEn : link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle english={english} />
      </div>
    </header>
  );
}
