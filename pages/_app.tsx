import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Zen_Maru_Gothic } from 'next/font/google';
import { GlobalProvider } from '@/context/global-state-provider';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { usePageView, GoogleAnalytics } from '@/components/gtag';
import GradientBackground from '@/components/GradientBackground';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  usePageView();
  const { pathname } = useRouter();
  const privatePage = pathname.startsWith('/works/little-playground/');

  return (
    <>
      {!privatePage && <GoogleAnalytics />}
      <div className={`${zenMaruGothic.className}`}>
        <ThemeProvider attribute="class">
          <GlobalProvider>
            <GradientBackground />
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
        {!privatePage && <Analytics beforeSend={(event) => new URL(event.url).pathname.startsWith('/works/little-playground/') ? null : event} />}
        {!privatePage && <SpeedInsights beforeSend={(event) => new URL(event.url).pathname.startsWith('/works/little-playground/') ? null : event} />}
      </div>
    </>
  );
}
