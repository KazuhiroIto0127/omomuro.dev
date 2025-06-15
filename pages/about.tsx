import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import { AcademicCapIcon, CommandLineIcon, LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import RiveAnimation from '@/components/RiveAnimation';
import {
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiPostman,
  SiRedis,
  SiSlack,
  SiSwift,
  SiApple,
  SiChartdotjs,
  SiDocker,
  SiGatsby,
  SiGithub,
  SiNeovim,
  SiPhp,
  SiGo,
  SiIterm2,
  SiNuxt,
  SiCss,
  SiOpenai,
  SiPython,
  SiZenn,
  SiQiita,
  SiX,
  Si1password,
  SiWarp,
} from '@icons-pack/react-simple-icons';
import SkillIcon from '@/components/about/SkillIcon';

export default function About() {
  return (
    <Layout>
      <HeadMeta type="website" title="自分のこと" />

      <HeroSection
        title="自分のこと"
        emoji="👋"
        description="Software Engineer として日々学び続けています"
        backgroundGradient="from-sky-400 via-sky-600 to-sky-400"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* プロフィールカード */}
        <section className="group lg:col-span-1">
          <div className="h-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="bg-gradient-to-br from-blue-50/60 to-indigo-100/60 p-6 dark:from-gray-700/60 dark:to-gray-600/60">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-white/80 p-4 shadow-lg dark:bg-gray-400/80">
                  <RiveAnimation src="/animations/penguin_anime.riv" width={120} height={120} />
                </div>
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">イトウ カズヒロ</h2>
                <div className="mb-4 space-y-1 text-gray-600 dark:text-gray-300">
                  <p>1990年生まれ</p>
                  <p>東京都在住</p>
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400">Software Engineer</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">#プログラミング</span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 dark:bg-purple-900 dark:text-purple-300">#デザイン</span>
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 dark:bg-pink-900 dark:text-pink-300">#イラスト</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                はじめまして！こんなところまで見て頂きとても嬉しいです！
                <br />
                このomomuro.devは、私のポートフォリオのようなサイトです。
              </p>
            </div>
          </div>
        </section>

        {/* 来歴セクション */}
        <section className="group lg:col-span-2">
          <div className="h-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:from-gray-700 dark:to-gray-600">
              <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <AcademicCapIcon className="mr-3 h-8 w-8 text-purple-600" />
                来歴
              </h3>
            </div>
            <div className="p-6">
              <ol className="relative border-l-2 border-purple-200 dark:border-purple-700">
                <li className="mb-8 ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-purple-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-purple-600 dark:text-purple-400">
                    2021年 4月 〜 現在
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">保育Techベンチャーへ</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    サーバーサイドエンジニアとして従事。引き続きRailsとVue.js等を使ってシステム開発、インフラはAWSを活用。ECS、Lambda等の使い方を学びました。
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    2018年 4月 〜 2021年 2月
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    コミュニティ系ベンチャーでWebエンジニアになる
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    サーバーサイドエンジニアとして従事。RailsとVue.jsやMySqlを使ってシステム開発をしました。Webサービスの開発のいろはを学びました。
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-blue-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-blue-600 dark:text-blue-400">
                    2014年 3月 〜 2018年 4月
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">システムエンジニアになる</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    基幹系の業務システムの開発・保守などをやってました。OracleのPL/SQL（データベース言語SQL）をたくさん読み書きしました。
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-green-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-green-600 dark:text-green-400">
                    2014年 3月
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    大分大学大学院 工学研究科知能情報システム工学専攻 卒業
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    セマンティックWebという技術を研究していました。RDFやLinked Open Dataを使ったりしていました。
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-yellow-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    2012年 3月
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    大分大学 工学部 知能情報システム工学科 卒業
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    プログラミングを覚えました。趣味でHSP（ホットスーププロセッサー）というゲームが作れるツールを利用してタイピングゲームを作ったりしました。Flashゲームを作ったりもしました。
                  </p>
                </li>
                <li className="ml-6">
                  <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-pink-600 dark:border-gray-800"></div>
                  <time className="mb-2 block text-sm font-semibold text-pink-600 dark:text-pink-400">
                    1990年 1月
                  </time>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">大分県で誕生</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    絵を書いたり図画工作が好きでした。
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* スキルセクション */}
        <section className="group lg:col-span-2">
          <div className="h-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:from-gray-700 dark:to-gray-600">
              <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <CommandLineIcon className="mr-3 h-8 w-8 text-blue-600" />
                プログラミングについて
              </h3>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white border-l-4 border-blue-500 pl-3">
                  業務で使ったことがある技術、言語
                </h4>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
                  <SkillIcon IconComponent={SiRuby} name="Ruby" colorClassName="text-red-500" />
                  <SkillIcon IconComponent={SiRubyonrails} name="Rails" colorClassName="text-red-500" />
                  <SkillIcon IconComponent={SiNuxt} name="Nuxt.js" colorClassName="text-green-500" />
                  <SkillIcon IconComponent={SiVuedotjs} name="Vue.js" colorClassName="text-green-500" />
                  <SkillIcon IconComponent={SiTypescript} name="TypeScript" colorClassName="text-blue-500" />
                  <SkillIcon IconComponent={SiJavascript} name="JavaScript" colorClassName="text-yellow-500" />
                  <SkillIcon IconComponent={SiHtml5} name="HTML5" colorClassName="text-orange-500" />
                  <SkillIcon IconComponent={SiCss} name="CSS" colorClassName="text-blue-500" />
                  <SkillIcon IconComponent={SiMysql} name="MySQL" colorClassName="dark:text-blue-300" />
                  <SkillIcon IconComponent={SiPostgresql} name="PostgreSQL" colorClassName="dark:text-blue-300" />
                  <SkillIcon IconComponent={SiTailwindcss} name="TailwindCSS" colorClassName="text-sky-500" />
                  <SkillIcon IconComponent={SiChartdotjs} name="Chart.js" colorClassName="text-red-500" />
                  <SkillIcon IconComponent={SiDocker} name="Docker" colorClassName="text-blue-600" />
                  <SkillIcon IconComponent={SiRedis} name="Redis" colorClassName="text-red-600" />
                  <SkillIcon IconComponent={SiPython} name="Python" colorClassName="text-yellow-500" />
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white border-l-4 border-purple-500 pl-3">
                  趣味で使った技術、言語
                </h4>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
                  <SkillIcon IconComponent={SiReact} name="React" colorClassName="text-sky-500" />
                  <SkillIcon IconComponent={SiNextdotjs} name="Next.js" />
                  <SkillIcon IconComponent={SiGraphql} name="GraphQL" colorClassName="text-pink-500" />
                  <SkillIcon IconComponent={SiFirebase} name="Firebase" colorClassName="text-yellow-500" />
                  <SkillIcon IconComponent={SiSwift} name="Swift" colorClassName="text-orange-500" />
                  <SkillIcon IconComponent={SiPhp} name="PHP" colorClassName="text-indigo-500" />
                  <SkillIcon IconComponent={SiGo} name="Go" colorClassName="text-cyan-500" />
                  <SkillIcon IconComponent={SiGatsby} name="Gatsby" colorClassName="text-purple-600" />
                  <SkillIcon IconComponent={SiOpenai} name="OpenAI" />
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white border-l-4 border-green-500 pl-3">
                  その他
                </h4>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
                  <SkillIcon IconComponent={SiFigma} name="Figma" />
                  <SkillIcon IconComponent={SiPostman} name="Postman" colorClassName="text-orange-500" />
                  <SkillIcon IconComponent={SiSlack} name="Slack" colorClassName="text-purple-500" />
                  <SkillIcon IconComponent={SiApple} name="Apple" />
                  <SkillIcon IconComponent={SiGithub} name="GitHub" />
                  <SkillIcon IconComponent={SiNeovim} name="Neovim" colorClassName="text-green-500" />
                  <SkillIcon IconComponent={SiIterm2} name="iTerm2" />
                  <SkillIcon IconComponent={Si1password} name="1Password" colorClassName="text-sky-600" />
                  <SkillIcon IconComponent={SiWarp} name="Warp" colorClassName="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SNSリンクセクション */}
        <section className="group lg:col-span-1">
          <div className="h-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800/80">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 dark:from-gray-700 dark:to-gray-600">
              <h3 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <LinkIcon className="mr-3 h-8 w-8 text-pink-600" />
                SNSリンク
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://x.com/KazuhiroIto0127"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-col items-center rounded-xl border border-gray-200 p-4 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md dark:border-gray-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                >
                  <SiX width={32} height={32} className="mb-2 text-gray-700 dark:text-gray-300" />
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    X
                    <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
                <a
                  href="https://github.com/KazuhiroIto0127"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-col items-center rounded-xl border border-gray-200 p-4 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-md dark:border-gray-600 dark:hover:border-gray-400 dark:hover:bg-gray-700/50"
                >
                  <SiGithub width={32} height={32} className="mb-2 text-gray-700 dark:text-gray-300" />
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    Github
                    <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
                <a
                  href="https://zenn.dev/kazuhiroito0127"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-col items-center rounded-xl border border-gray-200 p-4 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md dark:border-gray-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
                >
                  <SiZenn width={32} height={32} className="mb-2 text-blue-500" />
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    Zenn
                    <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
                <a
                  href="https://qiita.com/KazuhiroIto0127"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex flex-col items-center rounded-xl border border-gray-200 p-4 transition-all hover:border-green-300 hover:bg-green-50 hover:shadow-md dark:border-gray-600 dark:hover:border-green-500 dark:hover:bg-green-900/20"
                >
                  <SiQiita width={32} height={32} className="mb-2 text-green-500" />
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    Qiita
                    <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
