import { GetStaticPaths } from 'next';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { LabsComponent, labsLinkPattern, labTitleById } from '@/components/labs/index';

export default function Lab({ id }) {
  return (
    <Layout>
      <HeadMeta type="article" title={labTitleById(id)} />

      <LabsComponent id={id} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = labsLinkPattern.map((item) => {
    return {
      params: {
        id: item,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};
