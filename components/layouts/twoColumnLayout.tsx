import Head from '@/components/Head';
import React, { useState } from 'react';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/HomeHeader';
import Sidebar from '@/components/layouts/Sidebar';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isOpenPcSidebar } = useContext(GlobalContext);
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState<boolean>(false);
  return (
    <>
      <Head />

      <div
        className={twMerge(
          clsx(
            'grid-areas-slim md:grid-areas-wide grid',
            'grid-cols-slim grid-rows-slim md:grid-cols-wide md:grid-rows-wide',
            {
              'md:grid-areas-slim md:grid-cols-slim md:grid-rows-slim': !isOpenPcSidebar,
            },
            'dark:bg-gray-700 dark:text-white',
          ),
        )}
      >
        <Header />
        <Sidebar isOpenMobileSidebar={isOpenMobileSidebar} setIsOpenMobileSidebar={setIsOpenMobileSidebar} />
        <main className={`grid-in-main p-3`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
