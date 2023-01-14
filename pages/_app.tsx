import '/styles/globals.css';
import { AppProps } from 'next/app';
import { Zen_Maru_Gothic } from '@next/font/google';
import { GlobalProvider } from '@/context/global-state-provider';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apollo-client';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700', '900'],
  subsets: ['japanese', 'latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${zenMaruGothic.className}`}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class">
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
      </ApolloProvider>
      <Analytics />
    </div>
  );
}
