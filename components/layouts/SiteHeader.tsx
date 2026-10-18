import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import ThemeToggle from '@/components/ThemeToggle';
import { navigationLinks } from '@/config/navigation';

export default function SiteHeader() {
  const { pathname } = useRouter();
  const isActive = (path: string) =>
    path === '/' ? pathname === '/' || pathname.startsWith('/works') : pathname.startsWith(path);

  return (
    <header className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-4 px-5 py-5 md:px-6">
      <Link href="/" className="flex items-center gap-2.5">
        <Image priority src="/images/omo_pen.png" height={30} width={30} alt="" />
        <span className="font-maru text-lg font-bold whitespace-nowrap max-[400px]:sr-only">omomuro.dev</span>
      </Link>
      <div className="flex items-center gap-0.5 sm:gap-1">
        <nav aria-label="メイン">
          <ul className="flex items-center gap-0.5 text-sm font-medium sm:gap-1 sm:text-[15px]">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={clsx(
                    'block rounded-full px-3 py-2.5 whitespace-nowrap transition-colors sm:px-4',
                    isActive(link.path) ? 'bg-card text-ink' : 'text-sub hover:text-ink',
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
