import Layout from '@/components/layouts/oneColumnLayout';
import getAllWorks from '@/lib/contentful';

export default function Works({ works }) {
  return (
    <Layout>
      <h1>works</h1>
      {works.map((work) => (
        <div key={work.sys.id}>
          <h1>{work.title}</h1>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();
  console.log('----------------');
  console.log(works);
  return {
    props: {
      works,
    },
  };
}
