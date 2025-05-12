import { InferGetStaticPropsType } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import Link from 'next/link';
import HeadMeta from '@/components/Head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Work } from '@/types/work';

const WorksPage = ({ works }: { works: Work[] }) => {
  return (
    <Layout>
      <HeadMeta type="website" title="作ったもの" />

      <h1 className="mb-3">作ったもの</h1>

      <ul className="grid gap-4 md:grid-cols-4">
        {works.map((work) => (
          <Link href={`/works/${work.slug}`} key={work.slug} className="max-h-96 text-xl text-blue-500 dark:text-blue-400">
            <li
              className="h-full overflow-hidden rounded-lg
                         border-2 border-gray-200/60 shadow-lg
                         shadow-indigo-300/40 transition ease-in-out hover:scale-105
                         bg-white dark:bg-gray-600"
            >
              <Image
                priority
                src={work.thumbnail}
                className="h-52 w-full bg-white object-cover object-center"
                height={work.thumbnailHeight}
                width={work.thumbnailWidth}
                alt={work.thumbnailFileName}
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
  const worksDirectory = path.join(process.cwd(), 'contents/works');
  const filenames = fs.readdirSync(worksDirectory);
  const works = filenames.map((filename) => {
    const fullPath = path.join(worksDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace(/\.md$/, ''),
    } as Work;
  });

  return {
    props: { works },
  };
};

export default WorksPage;
