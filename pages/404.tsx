import Layout from '@/components/layouts/oneColumnLayout';

const Custom404 = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="my-8 text-4xl font-bold md:text-5xl">
          404
          <br /> Page Not Found
        </h1>
        <p>ページが見つかりませんでした。🙏</p>
      </div>
    </Layout>
  );
};

export default Custom404;
