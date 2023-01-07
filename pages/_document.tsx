import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className='dark:text-white dark:bg-gray-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
