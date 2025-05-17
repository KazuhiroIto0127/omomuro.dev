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
      </div>
    </header>
  );
}
