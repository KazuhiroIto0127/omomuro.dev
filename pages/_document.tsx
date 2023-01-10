import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="dark:bg-gray-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
