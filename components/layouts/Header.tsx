import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';
import { ThemeChanger } from '@/components/ThemeChanger';

export default function Header({ setIsOpenMobileSidebar }) {
  const { setIsOpenPcSidebar } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsOpenMobileSidebar((prev) => !prev);
  };
  const togglePcSidebar = () => {
    setIsOpenPcSidebar((prev) => !prev);
  };
  return (
    <header className="z-10 h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="mr-5 flex h-10 items-center justify-center transition-transform hover:scale-105">
          <Image priority src="/images/omo_pen.png" className="mr-2" height={30} width={30} alt="logo" />
          <div className="text-2xl font-bold">omomuro.dev</div>
        </Link>
        <ThemeChanger />
        {/* スマホ用 */}
        {/* <div
            onClick={toggleSidebar}
            className="flex-shrink-0 w-6 h-6
                     text-gray-500 transition duration-75 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white hover:cursor-pointer
                       md:hidden"
        /> */}
        {/* pc用 */}
        {/* <div
            onClick={togglePcSidebar}
            className="hidden flex-shrink-0 w-6 h-6
                     text-gray-500 transition duration-75 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white hover:cursor-pointer
                       md:block"
        /> */}
      </div>
    </header>
  );
}
