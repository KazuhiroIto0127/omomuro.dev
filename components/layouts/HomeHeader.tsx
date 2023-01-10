import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';
import { ThemeChanger } from '@/components/ThemeChanger';
import { HamburgerMenu } from '@/components/HamburgerMenu';

export default function Header({ setIsOpenMobileSidebar }) {
  const { setIsOpenPcSidebar } = useContext(GlobalContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  const toggleSidebar = () => {
    setIsOpenMobileSidebar((prev) => !prev);
  };
  const togglePcSidebar = () => {
    setIsOpenPcSidebar((prev) => !prev);
  };
  return (
    <header className="z-10 h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 font-semibold md:px-6">
        <Link href="/" className="flex items-center justify-center transition-transform hover:scale-105">
          <Image priority src="/images/omo_pen.png" className="mr-2" height={30} width={30} alt="logo" />
          <div className="text-lg font-bold md:text-2xl">omomuro.dev</div>
        </Link>
        <div className="hidden items-center md:flex">
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
          <div className="ml-6 border-l border-slate-200 pl-6 dark:border-slate-800">
            <div className="h-5 w-5">
              <ThemeChanger />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
