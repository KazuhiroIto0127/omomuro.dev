import Link from 'next/link';
import Layout from '@/components/layouts/oneColumnLayout';
import Image from 'next/image';
import HeadMeta from '@/components/Head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <HeadMeta type="website" title="Home" />

      <section className="item-center ma-auto mt-16 mb-32 flex w-full flex-col justify-center text-center md:my-44 ">
        <div className="flex w-full justify-center">
          <h1
            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pb-11 text-6xl
                         font-extrabold tracking-tight text-transparent transition-transform hover:scale-105 md:text-8xl"
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

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="group grid grid-cols-2 place-items-center gap-4 overflow-hidden rounded-lg border bg-sky-100 py-5 px-8 dark:border-gray-500 dark:bg-gray-600"
          >
            <div className="col-span-2 mb-4">
              <h2 className="text-3xl font-bold md:text-4xl">自分のこと</h2>
            </div>
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
              <p className="py-2 text-sky-400">＞もっと知りたい</p>
            </div>

            <Image
              priority
              src="/images/programming.png"
              alt="neko"
              className="w-full transition-transform group-hover:scale-150"
              height={400}
              width={400}
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          viewport={{ once: true }}
        >
          <Link
            href="/works"
            className="group grid grid-cols-2 place-items-center gap-4 overflow-hidden rounded-lg border bg-sky-100 py-5 px-8 dark:border-gray-500 dark:bg-gray-600"
          >
            <div className="col-span-2 mb-4">
              <h2 className="text-3xl font-bold md:text-4xl">作ったもの</h2>
            </div>
            <Image
              priority
              src="/images/mono.png"
              alt="works"
              className="w-full transition-transform group-hover:scale-150"
              height={400}
              width={400}
            />

            <div>
              <p className="mb-2 leading-7">
                iPhoneアプリ
                <br />
                ラインスタンプ
                <br />
                Webサービス
                <br />
              </p>
              <p className="block py-2 text-sky-400">＞もっと知りたい</p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          viewport={{ once: true }}
        >
          <Link
            href="/labs"
            className="group grid grid-cols-2 place-items-center gap-4 overflow-hidden rounded-lg border bg-sky-100 py-5 px-8 dark:border-gray-500 dark:bg-gray-600"
          >
            <div className="col-span-2 mb-4">
              <h2 className="text-3xl font-bold md:text-4xl">実験室</h2>
            </div>
            <div>
              <div>
                <p className="mb-2 leading-7">なにか技術的なことを試したいときの場所だよ</p>
                <p className="block py-2 text-sky-400">＞もっと知りたい</p>
              </div>
            </div>

            <Image
              priority
              src="/images/labs.png"
              alt="labs"
              className="w-full transition-transform group-hover:scale-150"
              height={400}
              width={400}
            />
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
