import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { HomeIcon, UserIcon, BriefcaseIcon, BeakerIcon, PhotoIcon } from '@heroicons/react/24/outline';

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
      title: 'About',
      path: '/about',
      icon: UserIcon,
    },
    {
      title: 'Works',
      path: '/works',
      icon: BriefcaseIcon,
    },
    {
      title: 'Labs',
      path: '/labs',
      icon: BeakerIcon,
    },
    {
      title: 'Gallery',
      path: '/gallery',
      icon: PhotoIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 block border-t border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 md:hidden">
      <div className="flex h-16 items-center justify-around">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                'flex flex-col items-center justify-center px-3 py-2 text-xs',
                {
                  'text-sky-500': currentRoute === link.path,
                  'text-slate-600 dark:text-slate-400': currentRoute !== link.path,
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
  );
}
