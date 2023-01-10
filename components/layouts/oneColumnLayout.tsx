import Head from '@/components/Head';
import React, { useState } from 'react';
import Footer from '@/components/layouts/Footer';
import HomeHeader from '@/components/layouts/HomeHeader';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isOpenPcSidebar } = useContext(GlobalContext);
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] =
    useState<boolean>(false);
  return (
    <>
      <Head />
      <div className={twMerge(clsx('dark:bg-gray-700 dark:text-white'))}>
        <HomeHeader setIsOpenMobileSidebar={setIsOpenMobileSidebar} />
        <main className="mx-auto max-w-7xl">{children}</main>
        <Footer />
      </div>
    </>
  );
}
