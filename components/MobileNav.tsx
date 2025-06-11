import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  BookOpenIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  PhotoIcon as PhotoIconSolid
} from '@heroicons/react/24/solid';

export default function MobileNav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const links = [
    {
      title: 'Home',
      path: '/',
      icon: HomeIcon,
      iconSolid: HomeIconSolid,
    },
    {
      title: 'About Me',
      path: '/about',
      icon: UserIcon,
      iconSolid: UserIconSolid,
    },
    {
      title: 'Works',
      path: '/works',
      icon: BriefcaseIcon,
      iconSolid: BriefcaseIconSolid,
    },
    {
      title: 'Books',
      path: '/books',
      icon: BookOpenIcon,
      iconSolid: BookOpenIconSolid,
    },
    {
      title: 'Gallery',
      path: '/gallery',
      icon: PhotoIcon,
      iconSolid: PhotoIconSolid,
    },
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 z-10 block px-4 md:hidden">
      <nav className="mx-auto max-w-md rounded-2xl border border-white/30 bg-white/20 p-2 shadow-xl backdrop-blur-2xl relative overflow-hidden dark:border-white/20 dark:bg-black/30">
        <div className="flex items-center justify-around relative z-10">
          {links.map((link) => {
            const Icon = currentRoute === link.path ? link.iconSolid : link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'flex flex-col items-center justify-center rounded-xl px-3 py-1 text-xs transition-all duration-200',
                  {
                    'bg-blue-100 text-blue-400 backdrop-blur-sm dark:bg-white/30 dark:text-blue-300': currentRoute === link.path,
                    'text-slate-700 hover:bg-white/20 hover:backdrop-blur-sm dark:text-slate-300 dark:hover:bg-white/10': currentRoute !== link.path,
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
