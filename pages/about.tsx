import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import { AcademicCapIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import {
  Ruby,
  Rubyonrails,
  Typescript,
  Javascript,
  Html5,
  Vuedotjs,
  Mysql,
  Postgresql,
  Nuxtdotjs,
  CssThree,
  ReactJs,
  Tailwindcss,
  Nextdotjs,
  Figma,
  Awslambda,
  Amazonaws,
  Firebase,
  Vim,
  Visualstudiocode,
  Graphql,
  Postman,
  Redis,
  Slack,
  ItermTwo,
  Swift,
  Apple,
  Chartdotjs,
  Docker,
  Gatsby,
  Github,
  Neovim,
  Php,
} from '@icons-pack/react-simple-icons';

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

        <section className="mb-12 rounded-lg bg-gray-100 p-4 dark:bg-slate-800">
          <p className="mb-4 flex items-center">
            <CommandLineIcon className="mr-2 inline w-6" />
            <span>プログラミングについて</span>
          </p>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">業務で使ったことがある技術、言語</p>
            <ul className="flex flex-wrap gap-8">
              <li className="flex flex-col items-center justify-center">
                <Ruby width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-500">Ruby</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Rubyonrails width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-500">Rails</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Nuxtdotjs width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-500">Nuxt.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Vuedotjs width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-500">Vue.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Typescript width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-500">Typescript</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Javascript width={30} height={30} className="mb-2 text-yellow-500" />
                <span className="text-sm text-gray-500">Javascript</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Html5 width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-500">Html5</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <CssThree width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-500">CSS3</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Mysql width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Mysql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Postgresql width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Postgresql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Redis width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-500">Redis</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Amazonaws width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">AWS</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Chartdotjs width={30} height={30} className="mb-2 text-pink-300" />
                <span className="text-sm text-gray-500">Chart.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Docker width={30} height={30} className="mb-2 text-cyan-400" />
                <span className="text-sm text-gray-500">Docker</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">趣味で使った技術、言語</p>
            <ul className="flex flex-wrap gap-8">
              <li className="flex flex-col items-center justify-center">
                <ReactJs width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-500">React.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Tailwindcss width={30} height={30} className="mb-2 text-blue-200" />
                <span className="text-sm text-gray-500">Tailwindcss</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Gatsby width={30} height={30} className="mb-2 text-purple-500" />
                <span className="text-sm text-gray-500">Gatsby</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Nextdotjs width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Next.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Firebase width={30} height={30} className="mb-2 text-yellow-500" />
                <span className="text-sm text-gray-500">Firebase</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Graphql width={30} height={30} className="mb-2 text-pink-500" />
                <span className="text-sm text-gray-500">Graphql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Swift width={30} height={30} className="mb-2 text-orange-500" />
                <span className="text-sm text-gray-500">Swift</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Php width={30} height={30} className="mb-2 text-purple-300" />
                <span className="text-sm text-gray-500">PHP</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">開発環境、ツールたち</p>
            <ul className="flex flex-wrap gap-8">
              <li className="flex flex-col items-center justify-center">
                <Neovim width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-500">Neovim</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Visualstudiocode width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-500">VS Code</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <ItermTwo width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Iterm2</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Figma width={30} height={30} className="mb-2 text-red-300" />
                <span className="text-sm text-gray-500">Figma</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Postman width={30} height={30} className="mb-2 text-orange-500" />
                <span className="text-sm text-gray-500">Postman</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Slack width={30} height={30} className="mb-2 text-purple-400" />
                <span className="text-sm text-gray-500">Slack</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Github width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Github</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Apple width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-500">Apple</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
