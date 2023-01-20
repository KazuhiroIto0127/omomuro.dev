import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import { client } from '@/lib/client';
import Image from 'next/image';
import Link from 'next/link';

const WorksPage = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <h1 className="mb-3">作ったもの</h1>

      <ul className="flex flex-wrap gap-4">
        {works.map((work) => (
          <Link href={`/works/${work.slug}`} key={work.sys.id} className="text-xl text-blue-500">
            <li className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
              <Image
                priority
                src={work.thumbnail.url}
                className="h-[200px] w-[300px] object-cover object-center"
                height={work.thumbnail.height}
                width={work.thumbnail.width}
                alt={work.thumbnail.fileName}
              />
              <h2 className="p-3 text-base font-bold">{work.title}</h2>
              <p className="p-3 text-base">{work.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const workData = await client.workCollection();
  const works = workData.workCollection.items;
  return {
    props: { works },
  };
};

export default WorksPage;
