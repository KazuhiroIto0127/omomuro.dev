import Link from 'next/link';
import DateFormat from '@/components/date';
import Layout from '@/components/layouts/oneColumnLayout';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';
import Image from 'next/image';

export default function Home({ allPostsData }: { allPostsData: { date: string; title: string; id: string }[] }) {
  return (
    <Layout>
      <section className="item-center ma-auto flex h-[300px] w-[100%] flex-col justify-center md:h-[500px]">
        <div className="flex w-[100%] justify-center">
          <h1
            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text py-10 px-3 text-4xl font-bold
                         text-transparent transition-transform hover:scale-105 md:text-7xl"
          >
            Hello World.
            <br />
            Omomuro development.
          </h1>
        </div>
        <p className="flex w-[100%] justify-center">
          こんにちは！
          <br />
          おもむろに開発をします。
          <br />
        </p>
      </section>

      <section className="flex h-[300px] w-[100%] items-center justify-center md:h-[400px]">
        <div className="flex w-[50%] flex-col items-center justify-center p-4 ">
          <h2 className="my-3 text-2xl">自分のこと</h2>
          <p className="">
            <span className="m-1 block">名前：イトウ カズヒロ</span>
            <span className="m-1 block">住まい： 東京都</span>
            <span className="m-1 block">誕生日： 1990年1月27日</span>
            <span className="m-1 block">職業： エンジニア</span>
            <span className="m-1 block">趣味： イラスト、プログラミング</span>
            <span className="m-1 block">SNS: twitter, github</span>
            <Link className="block p-2 text-sky-400" href="/about">
              ＞もっと知りたい
            </Link>
          </p>
        </div>
        <div className="flex w-[50%] items-center justify-center">
          <Image
            priority
            src="/images/neko.png"
            alt="neko"
            className="transition-transform hover:scale-105"
            height={200}
            width={400}
          />
        </div>
      </section>

      <section className="flex h-[300px] w-[100%] items-center justify-center md:h-[400px]">
        <div className="flex w-[50%] items-center justify-center">
          <Image
            priority
            src="/images/works.png"
            alt="works"
            className="transition-transform hover:scale-105"
            height={200}
            width={400}
          />
        </div>
        <div className="flex w-[50%] flex-col items-center justify-center p-4 ">
          <h2 className="my-3 text-2xl">作ったもの</h2>
          <p className="">
            <span className="m-1 block">iPhoneアプリ</span>
            <span className="m-1 block">ラインスタンプ</span>
            <span className="m-1 block">Webサービス</span>
            <Link className="block p-2 text-sky-400" href="/works">
              ＞もっと知りたい
            </Link>
          </p>
        </div>
      </section>

      <section className="m-3">
        <h2 className="text-2xl">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="border border-solid" key={id}>
              <Link href={`/posts/${id}`} className="text-xl text-blue-500">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
