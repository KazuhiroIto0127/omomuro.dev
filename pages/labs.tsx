import Head from 'next/head';
import LabsLink from '../components/LabsLink';
import Layout from '../components/layouts/oneColumnLayout';
import Switch from '@/components/Switch';
import { useState } from 'react';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';

export default function FirstPost({ allPostsData }: { allPostsData: { date: string; title: string; id: string }[] }) {
  const [bool, setBool] = useState(false);

  const clickFunc = () => {
    setBool(!bool);
  };

  const labsLinks = [
    {
      title: '絵文字一致チャレンジ！',
      id: 'randomEmojiChallenge',
      emoji: '😀 ',
    },
    {
      title: 'typescriptの勉強！',
      id: 'typescriptPractice',
      emoji: 'typescript ',
    },
    { title: 'ライクしよう！', id: '3', emoji: '❤️' },
  ];

  return (
    <>
      <Head>
        <title>Labs</title>
      </Head>

      <Layout>
        <h1 className="m-3 text-2xl">ラボ</h1>

        <div className="grid grid-cols-auto-fit gap-4">
          {labsLinks.map((link) => (
            <LabsLink title={link.title} id={link.id} emoji={link.emoji} key={link.id} />
          ))}
        </div>
        <Switch bool={bool} checkedFunc={setBool} />
        <button onClick={clickFunc}>test</button>
        {bool === true ? <p>on</p> : <p>off</p>}
      </Layout>
    </>
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