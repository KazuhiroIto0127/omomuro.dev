import '@/styles/globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Providers from '@/components/site/Providers';
import { bodyFont, headingFont } from '@/lib/fonts';

export const metadata: Metadata = {
  title: '404 | omomuro.dev',
  robots: { index: false },
};

/** 存在しない URL のページ（日本語・英語の両方を表示） */
export default function GlobalNotFound() {
  return (
    <html lang="ja" suppressHydrationWarning className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="mx-auto flex w-full max-w-[1080px] items-center px-5 py-5 md:px-6">
              <Link href="/" className="py-2">
                <span className="font-maru text-lg font-bold">omomuro.dev</span>
              </Link>
            </header>
            <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center gap-4 px-5 py-16 text-center">
              <h1 className="font-maru text-5xl font-bold">404</h1>
              <p className="text-sub">ページが見つかりませんでした。</p>
              <p className="text-sub" lang="en">
                This page could not be found.
              </p>
              <div className="mt-2 flex gap-6 text-[15px]">
                <Link href="/" className="text-accent hover:underline">
                  アプリ一覧へ
                </Link>
                <Link href="/en" lang="en" className="text-accent hover:underline">
                  All apps
                </Link>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
