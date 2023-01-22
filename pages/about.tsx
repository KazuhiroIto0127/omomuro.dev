import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import { AcademicCapIcon, CommandLineIcon } from '@heroicons/react/24/outline';

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

        <section className="mb-12">
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
        </section>

        <section
          className="mb-12 rounded-lg bg-slate-100 p-4 dark:bg-slate-600"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          )`,
          }}
        >
          <p className="mb-4 flex items-center">
            <AcademicCapIcon className="mr-2 inline w-6" />
            <span>来歴</span>
          </p>
          <ol className="relative border-l border-gray-300 dark:border-gray-400">
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                1990年 1月
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">大分県で誕生</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                絵を書いたり図画工作が好きでした。
              </p>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                2012年 3月
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                大分大学 工学部 知能情報システム工学科 卒業
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                プログラミングを覚えました。
                <br />
                趣味でHSP（ホットスーププロセッサー）というゲームが作れるツールを利用してタイピングゲームを作ったりしました。Flashゲームを作ったりもしました。
              </p>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                2014年 3月
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                大分大学大学院 工学研究科知能情報システム工学専攻 卒業
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                セマンティックWebという技術を研究していました。RDFやLinked Open Dataを使ったりしていました。
              </p>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                2014年 3月 〜 2018年 4月
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">システムエンジニアになる</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                基幹系の業務システムの開発・保守などをやってました。OracleのPL/SQL（データベース言語SQL）をたくさん読み書きしました。
              </p>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                2018年 4月 〜 2021年 2月
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                コミュニティ系ベンチャーでWebエンジニアになる
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                サーバーサイドエンジニアとして従事。RailsとVue.jsやMySqlを使ってシステム開発をしました。Webサービスの開発のいろはを学びました。
              </p>
            </li>
            <li className="mb-8 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-blue-200 dark:bg-gray-900"></div>
              <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
                2021年 4月 〜
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">保育Techベンチャーへ</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                サーバーサイドエンジニアとして従事。引き続きRailsとVue.js等を使ってシステム開発、インフラはAWSを活用。ECS、Lambda等の使い方を学びました。
              </p>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <p className="mb-4 flex items-center">
            <CommandLineIcon className="mr-2 inline w-6" />
            <span>プログラミングについて</span>
          </p>
          <p>HTML/CSS/Javascript</p>
        </section>
      </div>
    </Layout>
  );
}
