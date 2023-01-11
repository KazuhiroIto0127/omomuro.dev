import Link from 'next/link';
import DateFormat from '@/components/date';
import Layout from '@/components/layouts/oneColumnLayout';
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';
import Image from 'next/image';

export default function Home({ allPostsData }: { allPostsData: { date: string; title: string; id: string }[] }) {
  return (
    <Layout>
      <section className="item-center ma-auto mt-16 mb-32 flex w-full flex-col justify-center text-center md:my-44 ">
        <div className="flex w-full justify-center">
          <h1
            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pb-11 text-5xl
                         font-extrabold tracking-tight text-transparent transition-transform hover:scale-105 md:text-7xl"
          >
            Hello World.
            <br />
            Omomuro development.
          </h1>
        </div>
        <p className="flex w-full justify-center dark:text-slate-300">
          こんにちは！
          <br />
          おもむろに開発をします。
          <br />
        </p>
      </section>

      <section className="mb-10 flex w-full flex-col items-center justify-center md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mx-auto w-fit">
            <h2 className="mb-6 text-2xl font-bold md:text-2xl">自分のこと</h2>
            <div>
              <p className="mb-3 block font-bold">イトウ カズヒロ</p>
              <p className="mb-2 leading-7">
                1990年1月27日に生まれる
                <br />
                大分県出身、東京都在住
                <br />
                仕事はエンジニア
                <br />
                イラスト、プログラミングが趣味
              </p>

              <span className="flex py-2">
                <a
                  href="https://twitter.com/KazuhiroIto0127"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-3 h-6 w-6 hover:text-sky-400"
                >
                  <TwitterLogoIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/KazuhiroIto0127"
                  target="_blank"
                  rel="noreferrer"
                  className="h-6 w-6 hover:text-sky-400"
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </a>
              </span>
              <Link className="block py-2 text-sky-400" href="/about">
                ＞もっと知りたい
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-1/2">
          <Image
            priority
            src="/images/neko.png"
            alt="neko"
            className="transition-transform hover:scale-105"
            height={400}
            width={400}
          />
        </div>
      </section>

      <section className="mb-10 flex w-full flex-col-reverse items-center justify-center md:flex-row">
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            priority
            src="/images/works.png"
            alt="works"
            className="transition-transform hover:scale-105"
            height={400}
            width={400}
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="mx-auto w-fit">
            <h2 className="mb-6 text-2xl font-bold md:text-2xl">作ったもの</h2>
            <div>
              <p className="mb-2 leading-7">
                iPhoneアプリ
                <br />
                ラインスタンプ
                <br />
                Webサービス
                <br />
              </p>
              <Link className="block py-2 text-sky-400" href="/works">
                ＞もっと知りたい
              </Link>
            </div>
          </div>
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
