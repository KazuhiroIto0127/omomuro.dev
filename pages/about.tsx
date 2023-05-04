import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { AcademicCapIcon, CommandLineIcon, LinkIcon } from '@heroicons/react/24/outline';
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
  Amazonaws,
  Firebase,
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
  Go
} from '@icons-pack/react-simple-icons';

export default function About() {
  return (
    <Layout>
      <HeadMeta type="website" title="自分のこと" />

      <h1 className="mb-2">自分のこと</h1>
      <div className="grid-col-1 md:grid-col-2 lg:grid-col-3 md:grid-row-5 grid gap-6 md:grid-flow-col">
        <section
          className="row-span-2 rounded-md bg-slate-100 p-3 shadow-lg dark:bg-slate-600 "
          style={{
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%239C92AC' fill-opacity='0.16' fill-rule='evenodd'/%3E%3C/svg%3E"
            )`,
          }}
        >
          <div className="grid grid-cols-2 place-items-center rounded-lg bg-white bg-opacity-60 p-3 dark:bg-gray-700 dark:bg-opacity-40">
            <Image priority src="/images/omo_pen.png" height={100} width={100} alt="logo" />
            <div>
              <p className="mx-auto my-3 block text-xl font-bold">イトウ カズヒロ</p>
              <p className="mb-2 leading-7">
                1990年1月27日 生まれ
                <br />
                大分県出身、東京都在住
                <br />
                エンジニア
                <br />
                趣味はイラスト、プログラミング
              </p>
            </div>
          </div>

          <p className="pt-3 leading-7">
            はじめまして！こんにちは。
            <br /> こんなところまで見て頂きとても嬉しいです！
            <br /> このomomuro.devは、私のポートフォリオのようなサイトになります。
            <br /> 技術的な実験を試みたりもするので、たまに見るとサイトが変わってたりするかもです！
          </p>
        </section>

        <section
          className="rounded-lg bg-slate-100 p-4 shadow-lg dark:bg-slate-600 md:row-span-2 md:row-start-3 md:row-end-5"
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

        <section
          className="rounded-lg bg-gray-100 p-4 shadow-lg dark:bg-slate-600 md:col-start-2 md:row-span-3"
          style={{
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%239C92AC' fill-opacity='0.16'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E"
            )`,
          }}
        >
          <p className="mb-4 flex items-center">
            <CommandLineIcon className="mr-2 inline w-6" />
            <span>プログラミングについて</span>
          </p>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">業務で使ったことがある技術、言語</p>
            <ul className="grid grid-flow-row grid-cols-5 gap-8">
              <li className="flex flex-col items-center justify-center">
                <Ruby width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-400">Ruby</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Rubyonrails width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-400">Rails</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Nuxtdotjs width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-400">Nuxt.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Vuedotjs width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-400">Vue.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Typescript width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-400">Typescript</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Javascript width={30} height={30} className="mb-2 text-yellow-500" />
                <span className="text-sm text-gray-400">Javascript</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Html5 width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-400">Html5</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <CssThree width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-400">CSS3</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Mysql width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Mysql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Postgresql width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Postgresql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Redis width={30} height={30} className="mb-2 text-red-500" />
                <span className="text-sm text-gray-400">Redis</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Amazonaws width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">AWS</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Chartdotjs width={30} height={30} className="mb-2 text-pink-300" />
                <span className="text-sm text-gray-400">Chart.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Docker width={30} height={30} className="mb-2 text-cyan-400" />
                <span className="text-sm text-gray-400">Docker</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">趣味で使った技術、言語</p>
            <ul className="grid grid-flow-row grid-cols-5 gap-8">
              <li className="flex flex-col items-center justify-center">
                <Go width={30} height={30} className="mb-2 text-blue-200" />
                <span className="text-sm text-gray-400">Go</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <ReactJs width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-400">React.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Tailwindcss width={30} height={30} className="mb-2 text-blue-200" />
                <span className="text-sm text-gray-400">Tailwindcss</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Gatsby width={30} height={30} className="mb-2 text-purple-500" />
                <span className="text-sm text-gray-400">Gatsby</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Nextdotjs width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Next.js</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Firebase width={30} height={30} className="mb-2 text-yellow-500" />
                <span className="text-sm text-gray-400">Firebase</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Graphql width={30} height={30} className="mb-2 text-pink-500" />
                <span className="text-sm text-gray-400">Graphql</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Swift width={30} height={30} className="mb-2 text-orange-500" />
                <span className="text-sm text-gray-400">Swift</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Php width={30} height={30} className="mb-2 text-purple-300" />
                <span className="text-sm text-gray-400">PHP</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <p className="mb-4 w-fit border-b-2 border-gray-300">開発環境、ツールたち</p>
            <ul className="grid grid-flow-row grid-cols-5 gap-8">
              <li className="flex flex-col items-center justify-center">
                <Neovim width={30} height={30} className="mb-2 text-green-500" />
                <span className="text-sm text-gray-400">Neovim</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Visualstudiocode width={30} height={30} className="mb-2 text-blue-500" />
                <span className="text-sm text-gray-400">VS Code</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <ItermTwo width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Iterm2</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Figma width={30} height={30} className="mb-2 text-red-300" />
                <span className="text-sm text-gray-400">Figma</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Postman width={30} height={30} className="mb-2 text-orange-500" />
                <span className="text-sm text-gray-400">Postman</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Slack width={30} height={30} className="mb-2 text-purple-400" />
                <span className="text-sm text-gray-400">Slack</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Github width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Github</span>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Apple width={30} height={30} className="mb-2" />
                <span className="text-sm text-gray-400">Apple</span>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="rounded-lg bg-gray-100 p-4 shadow-lg dark:bg-slate-600 md:col-start-2 md:row-span-1 md:row-start-1 lg:col-start-3"
          style={{
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d27489' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E"
            )`,
          }}
        >
          <p className="mb-4 flex items-center">
            <LinkIcon className="mr-2 inline w-6" />
            <span>SNSリンク</span>
          </p>
          <div className="grid grid-cols-3 place-items-center gap-5">
            <a
              href="https://twitter.com/KazuhiroIto0127"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center text-sky-400"
            >
              <TwitterLogoIcon className="h-6 w-6" /> Twitter
            </a>
            <a
              href="https://github.com/KazuhiroIto0127"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center text-sky-400"
            >
              <GitHubLogoIcon className="h-6 w-6" /> Github
            </a>
            <a href="https://zenn.dev/kazuhiroito0127" target="_blank" rel="noreferrer" className="block text-sky-400">
              Zenn
            </a>
            <a href="https://qiita.com/KazuhiroIto0127" target="_blank" rel="noreferrer" className="block text-sky-400">
              Qiita
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
