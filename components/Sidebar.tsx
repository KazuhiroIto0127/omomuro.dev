import SidebarLink from '@/components/SidebarLink';
import { faFlask, faHome, faCat } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';

export default function Sidebar({isOpenMobileSidebar, setIsOpenMobileSidebar}) {
  const { isOpenPcSidebar } = useContext(GlobalContext)

  const toggleSidebar = () => {
    setIsOpenMobileSidebar((prev)=>!prev)
  }
  return (
    <>
      {/* スマホ用のoverlay背景 */}
      <div className={clsx(
            'fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 z-30 md:invisible backdrop-blur-sm',
            { 'visible': isOpenMobileSidebar }, { 'invisible': !isOpenMobileSidebar }
      )}
           onClick={toggleSidebar}
      ></div>

      {/* サイドバー */}
      <aside className={twMerge(clsx(
        'grid-in-sidebar',
        'w-[200px] min-w-[200px] overflow-y-auto transition-transform duration-300 ease-in-out',
        { 'md:translate-x-[0px]    md:fixed md:top-[50px]': isOpenPcSidebar },
        { 'md:translate-x-[-200px] md:fixed md:top-[50px]': !isOpenPcSidebar },
        { 'translate-x-[0px] z-40 fixed top-0': isOpenMobileSidebar },
        { 'translate-x-[-200px] z-40 fixed top-0': !isOpenMobileSidebar }
        ))}
        aria-label="Sidebar"
      >
          <div className="overflow-y-auto px-3 bg-gray-50 dark:bg-gray-800 h-screen md:h-[calc(100vh-50px)]">
              <div className={clsx("flex h-[50px] justify-center items-center md:hidden",
                                  { 'block': isOpenMobileSidebar }, { 'hidden': !isOpenMobileSidebar }
              )}>
                <FontAwesomeIcon icon={faBars}
                  className="flex-shrink-0 w-6 h-6 mr-2
                        text-gray-500 transition duration-75 dark:text-gray-400
                        hover:text-gray-900 dark:hover:text-white hover:cursor-pointer"
                  onClick={toggleSidebar}
                />
                <Link href="/" className="flex items-center">
                    <Image priority src="/images/profile.png"
                            className="rounded-sm" height={40} width={40} alt="logo"/>
                    <span className="font-bold text-sm">omomuro.dev</span>
                </Link>
              </div>
              <ul className="space-y-2 pt-2">
                  <li><SidebarLink path="/" title="ホーム" icon={faHome} /></li>
                  <li><SidebarLink path="/labo" title="ラボ" icon={faFlask} /></li>
                  <li><SidebarLink path="/posts/first-post" title="about" icon={faCat} /></li>
              </ul>
          </div>
      </aside>
    </>
  )
}
