import '/styles/globals.css';
import { AppProps } from 'next/app';
import { Zen_Maru_Gothic } from 'next/font/google';
import { GlobalProvider } from '@/context/global-state-provider';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { usePageView, GoogleAnalytics } from '@/components/gtag';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <div className={`${zenMaruGothic.className}`}>
        <ThemeProvider attribute="class">
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
        <Analytics />
      </div>
    </>
  );
}
