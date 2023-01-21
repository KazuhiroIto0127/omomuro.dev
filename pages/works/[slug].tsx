import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import { client } from '@/lib/client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import HeadMeta from '@/components/Head';

export default function Work({ work }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <HeadMeta type="article" title={work.title} />

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
        <ReactMarkdown>{work.body}</ReactMarkdown>
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
        slug: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await client.work({ slug: params.slug });
  const work = data.workCollection.items.shift();
  return {
    props: { work },
  };
};
