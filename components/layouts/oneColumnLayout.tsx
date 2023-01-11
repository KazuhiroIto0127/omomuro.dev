import Head from '@/components/Head';
import React, { useState } from 'react';
import Footer from '@/components/layouts/Footer';
import HomeHeader from '@/components/layouts/HomeHeader';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head />
      <div className="dark:bg-gray-700 dark:text-white">
        <HomeHeader />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
