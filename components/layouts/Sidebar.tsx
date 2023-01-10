import SidebarLink from '@/components/SidebarLink';
import { faFlask, faHome, faCat } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Sidebar({ isOpenMobileSidebar, setIsOpenMobileSidebar }) {
  const { isOpenPcSidebar } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsOpenMobileSidebar((prev) => !prev);
  };
  return (
    <>
      {/* スマホ用のoverlay背景 */}
      <div
        className={clsx(
          'fixed top-0 left-0 z-30 h-full w-full bg-gray-800 bg-opacity-70 backdrop-blur-sm md:invisible',
          { visible: isOpenMobileSidebar },
          { invisible: !isOpenMobileSidebar },
        )}
        onClick={toggleSidebar}
      ></div>

      {/* サイドバー */}
      <aside
        className={twMerge(
          clsx(
            'grid-in-sidebar',
            'w-[200px] min-w-[200px] overflow-y-auto transition-transform duration-300 ease-in-out',
            {
              'md:fixed    md:top-[50px] md:translate-x-[0px]': isOpenPcSidebar,
            },
            {
              'md:fixed md:top-[50px] md:translate-x-[-200px]': !isOpenPcSidebar,
            },
            { 'fixed top-0 z-40 translate-x-[0px]': isOpenMobileSidebar },
            { 'fixed top-0 z-40 translate-x-[-200px]': !isOpenMobileSidebar },
          ),
        )}
        aria-label="Sidebar"
      >
        <div className="h-screen overflow-y-auto px-3 md:h-[calc(100vh-50px)]">
          <div
            className={clsx(
              'flex h-[50px] items-center justify-center md:hidden',
              { block: isOpenMobileSidebar },
              { hidden: !isOpenMobileSidebar },
            )}
          >
            <Bars3Icon
              className="mr-2 h-6 w-6 flex-shrink-0
                        text-gray-500 transition duration-75 hover:cursor-pointer
                        hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={toggleSidebar}
            />
            <Link href="/" className="flex items-center">
              <Image priority src="/images/omo_pen.png" className="mr-2 rounded-sm" height={30} width={30} alt="logo" />
              <span className="text-sm font-bold">omomuro.dev</span>
            </Link>
          </div>
          <ul className="space-y-2 pt-2">
            <li>
              <SidebarLink path="/" title="ホーム" icon={faHome} />
            </li>
            <li>
              <SidebarLink path="/labo" title="ラボ" icon={faFlask} />
            </li>
            <li>
              <SidebarLink path="/posts/first-post" title="about" icon={faCat} />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
