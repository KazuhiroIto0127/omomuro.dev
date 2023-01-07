import Head from 'next/head'
import Alert from '@/components/Alert'
import Script from 'next/script'
import Layout from '@/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Alert type="success">test</Alert>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window. FB has been populated")
        }
      />
      <h1>First Post</h1>
    </Layout>
  )
}
