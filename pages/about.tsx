import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';

export default function About() {
  return (
    <Layout>
      <HeadMeta type="website" title="自分のこと" />

      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2">自分のこと</h1>
        <div
          className="flex h-40 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-600"
          style={{
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.19'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
            )`,
          }}
        >
          <Image priority src="/images/omo_pen.png" height={100} width={100} alt="logo" />
        </div>
        <p className="mx-auto my-3 block text-xl font-bold">イトウ カズヒロ</p>
        <p className="mb-2 leading-7">
          1990年1月27日に生まれる
          <br />
          大分県出身、東京都在住
          <br />
          仕事はエンジニア
          <br />
          イラスト、プログラミングが趣味
        </p>
      </div>
    </Layout>
  );
}
