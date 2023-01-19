import Head from 'next/head';
import DateFormat from '@/components/date';
import Layout from '@/components/layouts/oneColumnLayout';
import { GetAllSlugIds, GetWorkData } from '@/lib/graphql/src/contentful';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Works } from '@/lib/graphql/codegen/graphql';
import Image from 'next/image';

// export default function Post({ postData }: { postData: { title: string; date: string; contentHtml: string } }) {
export default function Work({ work }: { work: Works }) {
  return (
    <Layout>
      <Head>
        <title>{work.title}</title>
      </Head>

      <article>
        <h1 className="text-2xl">{work.title}</h1>
        <p>{work.description}</p>
        <Image
          priority
          src={work.thumbnail.url}
          className="h-[200px] w-[300px] object-cover object-center"
          height={work.thumbnail.height}
          width={work.thumbnail.width}
          alt={work.thumbnail.fileName}
        />
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
