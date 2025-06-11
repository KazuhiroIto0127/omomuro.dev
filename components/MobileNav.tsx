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
      <nav className="mx-auto max-w-md rounded-full border border-white/80 bg-white/15 p-2 shadow-[0_8px_32px_rgba(31,38,135,0.2),inset_0_4px_20px_rgba(255,255,255,0.3)] backdrop-blur-sm backdrop-saturate-[180%] relative overflow-hidden dark:border-white/30 dark:bg-white/10 after:absolute after:inset-0 after:rounded-full after:bg-white/10 after:backdrop-blur-[1px] after:shadow-[inset_-10px_-8px_0px_-11px_rgba(255,255,255,1)] after:filter after:blur-[1px] after:brightness-[115%]">
        <div className="flex items-center justify-around relative z-10">
          {links.map((link) => {
            const Icon = currentRoute === link.path ? link.iconSolid : link.icon;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'flex flex-col items-center justify-center rounded-full px-3 py-1 text-xs transition-all duration-200',
                  {
                    'bg-white/25 text-blue-600 shadow-[0_4px_16px_rgba(31,38,135,0.15),inset_0_2px_8px_rgba(255,255,255,0.4)] backdrop-blur-[2px] backdrop-saturate-[180%] dark:bg-white/20 dark:text-blue-400': currentRoute === link.path,
                    'text-slate-700 hover:bg-white/15 hover:backdrop-blur-[2px] hover:backdrop-saturate-[180%] dark:text-slate-300 dark:hover:bg-white/10': currentRoute !== link.path,
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
