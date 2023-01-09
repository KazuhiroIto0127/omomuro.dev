import Link from 'next/link'
import DateFormat from '@/components/date'
import Layout from '@/components/layouts/oneColumnLayout'
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next'
import Image from 'next/image'

export default function Home({ allPostsData }: { allPostsData: {date: string, title: string, id: string }[] }) {
  return (
    <Layout>
      <section className='w-[100%] h-[300px] md:h-[500px] flex flex-col justify-center item-center ma-auto'>
        <div className='w-[100%] flex justify-center'>
          <h1 className="text-4xl md:text-7xl py-10 px-3 font-bold text-transparent hover:scale-105 transition-transform
                         bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Hello World.<br />
            Omomuro development.
          </h1>
        </div>
        <p className='w-[100%] flex justify-center'>
          こんにちは！<br />
          おもむろに開発をします。<br />
        </p>
      </section>

      <section className='w-[100%] h-[300px] md:h-[400px] flex justify-center items-center'>
        <div className='w-[50%] p-4 flex justify-center items-center flex-col '>
          <h2 className='text-2xl my-3'>自分のこと</h2>
          <p className=''>
            <span className='block m-1'>名前：イトウ カズヒロ</span>
            <span className='block m-1'>住まい： 東京都</span>
            <span className='block m-1'>誕生日： 1990年1月27日</span>
            <span className='block m-1'>職業： エンジニア</span>
            <span className='block m-1'>趣味： イラスト、プログラミング</span>
            <span className='block m-1'>SNS: twitter, github</span>
            <Link className="block text-sky-400 p-2" href="/about">＞もっと知りたい</Link>
          </p>
        </div>
        <div className='w-[50%] flex justify-center items-center'>
          <Image priority src="/images/neko.png"
                      className="hover:scale-105 transition-transform" height={200} width={400} />
        </div>
      </section>

      <section className='w-[100%] h-[300px] md:h-[400px] flex justify-center items-center'>
        <div className='w-[50%] flex justify-center items-center'>
          <Image priority src="/images/works.png"
                      className="hover:scale-105 transition-transform" height={200} width={400} />
        </div>
        <div className='w-[50%] p-4 flex justify-center items-center flex-col '>
          <h2 className='text-2xl my-3'>作ったもの</h2>
          <p className=''>
            <span className='block m-1'>iPhoneアプリ</span>
            <span className='block m-1'>ラインスタンプ</span>
            <span className='block m-1'>Webサービス</span>
            <Link className="block text-sky-400 p-2" href="/works">＞もっと知りたい</Link>
          </p>
        </div>
      </section>

      <section className="m-3">
        <h2 className="text-2xl">Blog</h2>
        <ul className="">
          {allPostsData.map(({id, date, title}) => (
            <li className="border border-solid" key={id}>
              <Link href={`/posts/${id}`} className="text-xl text-blue-500">{title}</Link>
              <br />
              <small className="text-gray-500">
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}
