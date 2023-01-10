import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

export const HamburgerMenu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Popover className="relative">
      <Popover.Button>
        <Bars3Icon className="w-6" />
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-70 backdrop-blur-sm" />

      <Popover.Panel className="absolute top-0 right-0">
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
            <nav className="">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    className={clsx('hover:text-sky-500', {
                      'text-sky-500': currentRoute === '/',
                    })}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx('hover:text-sky-500', {
                      'text-sky-500': currentRoute === '/about',
                    })}
                    href="/about"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx('hover:text-sky-500', {
                      'text-sky-500': currentRoute === '/works',
                    })}
                    href="/works"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    className={clsx('hover:text-sky-500', {
                      'text-sky-500': currentRoute === '/labo',
                    })}
                    href="/labo"
                  >
                    Labo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
