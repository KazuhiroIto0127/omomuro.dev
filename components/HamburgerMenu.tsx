import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { ThemeChangerRadioBtn } from '@/components/ThemeChangerRadioBtn';

export const HamburgerMenu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  let [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Me',
      path: '/about',
    },
    {
      title: 'Works',
      path: '/works',
    },
    {
      title: 'Labs',
      path: '/labs',
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
  ];

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <span className="sr-only">Navigation</span>
        <Bars3Icon className="w-6" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-gray-800/70 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="dark:highlight-white/5 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400">
            <button type="button" className="absolute top-5 right-5 h-8 w-8" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>

            <nav className="">
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      className={clsx('hover:text-sky-500', {
                        'text-sky-500': currentRoute === link.path,
                      })}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-200/10">
              <ThemeChangerRadioBtn />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
