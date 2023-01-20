import Head from 'next/head';
import DateFormat from '@/components/date';
import Layout from '@/components/layouts/oneColumnLayout';
import { GetAllSlugIds, GetWorkData } from '@/lib/graphql/src/contentful';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Works } from '@/lib/graphql/codegen/graphql';
import Image from 'next/image';

export default function Work({ work }: { work: Works }) {
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
  const paths = await GetAllSlugIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params.id);
  const data = await GetWorkData(params.id);
  const work = data.worksCollection.items.shift();
  return {
    props: { work },
  };
};
