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
      <nav className="mx-auto max-w-md rounded-full border border-slate-200 bg-white/80 p-2 shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
        <div className="flex items-center justify-around">
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
