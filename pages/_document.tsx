import { Html, Head, Main, NextScript, type DocumentProps } from 'next/document';
import { pathLanguage } from '@/lib/i18n';

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang={pathLanguage(__NEXT_DATA__.page)}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
