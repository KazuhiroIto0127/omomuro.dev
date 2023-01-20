import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Layout from '@/components/layouts/oneColumnLayout';
import { client } from '@/lib/client';
import Image from 'next/image';

export default function Work({ work }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{work.title}</title>
      </Head>

      <article className="mx-auto max-w-2xl break-words">
        <Image
          priority
          src={work.thumbnail.url}
          className="mb-4 h-52 w-full rounded-md bg-white object-cover md:h-96"
          height={work.thumbnail.height}
          width={work.thumbnail.width}
          alt={work.thumbnail.fileName}
        />
        <h1 className="mb-4 text-2xl">{work.title}</h1>
        <p className="mb-8 text-base">{work.description}</p>

        <div>{work.body}</div>
        {/* <DateFormat dateString={postData.date} /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const workSlugData = await client.workSlugAll();
  const items = workSlugData.workCollection.items;
  const paths = items.map((item) => {
    return {
      params: {
        id: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params.id);
  const data = await client.work({ slug: params.id });
  const work = data.workCollection.items.shift();
  return {
    props: { work },
  };
};
