import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { HomeIcon, UserIcon, BriefcaseIcon, BookOpenIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function MobileNav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const links = [
    {
      title: 'Home',
      path: '/',
      icon: HomeIcon,
    },
    {
      title: 'About Me',
      path: '/about',
      icon: UserIcon,
    },
    {
      title: 'Works',
      path: '/works',
      icon: BriefcaseIcon,
    },
    {
      title: 'Books',
      path: '/books',
      icon: BookOpenIcon,
    },
    {
      title: 'Gallery',
      path: '/gallery',
      icon: PhotoIcon,
    },
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 z-10 block px-4 md:hidden">
      <nav className="mx-auto max-w-md rounded-full border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:border before:border-white/40 before:bg-gradient-to-br before:from-white/25 before:to-transparent before:backdrop-blur-xl relative overflow-hidden dark:border-white/10 dark:bg-white/5 dark:before:border-white/20 dark:before:from-white/10">
        <div className="flex items-center justify-around relative z-10">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'flex flex-col items-center justify-center rounded-full px-3 py-1 text-xs transition-all duration-200',
                  {
                    'bg-sky-100 text-sky-500 dark:bg-sky-900/50': currentRoute === link.path,
                    'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50': currentRoute !== link.path,
                  }
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="mt-1">{link.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
