import Head from '@/components/Head'
import React, { useState } from 'react';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
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

      <div className={twMerge(clsx(
        'grid grid-areas-slim md:grid-areas-wide',
        'grid-cols-slim grid-rows-slim md:grid-cols-wide md:grid-rows-wide',
        { 'md:grid-areas-slim md:grid-cols-slim md:grid-rows-slim' : !isOpenPcSidebar },
        'dark:text-white dark:bg-gray-700'
      ))} >
        <Header setIsOpenMobileSidebar={setIsOpenMobileSidebar} />
        <Sidebar isOpenMobileSidebar={isOpenMobileSidebar} setIsOpenMobileSidebar={setIsOpenMobileSidebar} />
        <main className={`grid-in-main p-3`} >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
