import Head from 'next/head';
import DateFormat from '@/components/date'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({ postData }: { postData: { title: string, date: string, contentHtml: string }}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className="text-2xl">{postData.title}</h1>
        <DateFormat dateString={postData.date} />
        {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  };
}
