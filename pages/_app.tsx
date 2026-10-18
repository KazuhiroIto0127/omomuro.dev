import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Zen_Kaku_Gothic_New, Zen_Maru_Gothic } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { usePageView, GoogleAnalytics } from '@/components/gtag';

const heading = Zen_Maru_Gothic({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-heading',
});

const body = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-body',
});

export default function App({ Component, pageProps }: AppProps) {
  usePageView();
  const { pathname } = useRouter();
  const privatePage = pathname.startsWith('/works/little-playground/');

  return (
    <>
      {!privatePage && <GoogleAnalytics />}
      <div className={`${heading.variable} ${body.variable} font-sans`}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
        {!privatePage && (
          <Analytics
            beforeSend={(event) => (new URL(event.url).pathname.startsWith('/works/little-playground/') ? null : event)}
          />
        )}
        {!privatePage && (
          <SpeedInsights
            beforeSend={(event) => (new URL(event.url).pathname.startsWith('/works/little-playground/') ? null : event)}
          />
        )}
      </div>
    </>
  );
}
