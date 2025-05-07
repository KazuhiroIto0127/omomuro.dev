import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { motion } from 'framer-motion';
import LinkCard from '@/components/home/LinkCard';

export default function Home() {
  return (
    <Layout>
      <HeadMeta type="website" title="Home" />

      <section className="item-center ma-auto mt-16 mb-32 flex w-full flex-col justify-center text-center md:my-44 ">
        <div className="flex w-full justify-center">
          <h1
            className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text pb-11 text-6xl
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
        <LinkCard
          href="/about"
          title="自分のこと"
          description={
            <>
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
            </>
          }
          imageSrc="/images/programming.png"
          imageAlt="about me"
        />

        <LinkCard
          href="/works"
          title="作ったもの"
          description={
            <>
              <p className="mb-2 leading-7">
                iPhoneアプリ
                <br />
                ラインスタンプ
                <br />
                Webサービス
                <br />
              </p>
            </>
          }
          imageSrc="/images/mono.png"
          imageAlt="works"
          reverseLayout={true}
        />

        <LinkCard
          href="/labs"
          title="実験室"
          description={
            <>
              <p className="mb-2 leading-7">なにか技術的なことを試したいときの場所だよ</p>
            </>
          }
          imageSrc="/images/labs.png"
          imageAlt="labs"
          imageClassName="w-full transition-transform group-hover:translate-y-5 group-hover:rotate-45 group-hover:scale-150"
        />

        <LinkCard
          href="/gallery"
          title="ギャラリー"
          description={
            <>
              <p className="mb-2 leading-7">作成したイラストや画像を展示しています</p>
            </>
          }
          imageSrc="/images/gallery.jpg"
          imageAlt="gallery"
          reverseLayout={true}
        />
      </div>
    </Layout>
  );
}
