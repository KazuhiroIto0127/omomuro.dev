import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { motion } from 'framer-motion';
import LinkCard from '@/components/home/LinkCard';
import ImageButton from '@/components/home/ImageButton';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <Layout>
      <HeadMeta type="website" title="Home" />
      <Hero />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-10">
        <div className="md:col-span-2">
          <LinkCard
            href="/about"
            title="自分のこと"
            description={
              <>
                <p className="mb-3 block font-bold">イトウ カズヒロ</p>
                <p className="mb-2 leading-7">
                  1990年 生まれ
                  <br />
                  東京都在住
                  <br />
                  Software Engineer
                </p>
              </>
            }
            imageSrc="/images/penguin_with_pc.png"
            imageAlt="about me"
          />
        </div>

        <div className="md:col-span-2">
          <LinkCard
            href="/works"
            title="作ったもの"
            description={
              <>
                <p className="mb-2 leading-7">
                  iPhoneアプリ
                  <br />
                  ゲーム
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
        </div>

        <div className="md:col-span-2">
          <LinkCard
            href="/labs"
            title="実験室"
            description={
              <>
                <p className="mb-2 leading-7">なにか技術的なことを試す場所</p>
              </>
            }
            imageSrc="/images/labs.png"
            imageAlt="labs"
            imageClassName="w-full transition-transform group-hover:translate-y-5 group-hover:rotate-45 group-hover:scale-150"
          />
        </div>

        <div className="md:col-span-1">
          <ImageButton
            href="/gallery"
            imageSrc="/images/gallery.jpg"
            imageAlt="gallery"
          />
        </div>
      </div>
    </Layout>
  );
}
