import Head from '@/components/Head'
import React, { useState } from 'react';
import Footer from '@/components/layouts/Footer'
import HomeHeader from '@/components/layouts/HomeHeader'
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useContext } from 'react';
import { GlobalContext } from '@/context/global-state-provider';

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  const {isOpenPcSidebar} = useContext(GlobalContext)
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState<boolean>(false)
  return (
    <>
      <Head />
      <div className={twMerge(clsx('dark:text-white dark:bg-gray-700'))} >
        <HomeHeader setIsOpenMobileSidebar={setIsOpenMobileSidebar} />
        <main className='max-w-7xl mx-auto' >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
