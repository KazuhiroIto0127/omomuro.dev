import '@/styles/globals.css';
import type { ReactNode } from 'react';
import Footer from '@/components/site/Footer';
import Providers from '@/components/site/Providers';
import SiteAnalytics from '@/components/site/SiteAnalytics';
import SiteHeader from '@/components/site/SiteHeader';
import { bodyFont, headingFont } from '@/lib/fonts';
import type { Lang } from '@/lib/i18n';

/** 日本語・英語それぞれのルートレイアウトの中身 */
export default function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-[1080px] flex-1 px-5 pt-4 pb-16 md:px-6 md:pt-8">{children}</main>
            <Footer />
          </div>
        </Providers>
        <SiteAnalytics />
      </body>
    </html>
  );
}
