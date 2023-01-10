import Head from 'next/head';
import { User } from '@/models/User';
import UserCard from '@/components/UserCard';
import { useState } from 'react';
import Layout from '@/components/layouts/oneColumnLayout';
import { AnimatePresence, motion } from 'framer-motion';

export default function randomEmojiChallenge() {
  const [emojiArray, setEmojiArray] = useState<string[]>(['🌹', '🐶', '🐱']);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('🌹');
  const [name, setName] = useState<string>('佐藤');
  const [old, setOld] = useState<number>(10);
  const [users, setUsers] = useState<User[]>([]);
  const [userTotal, setUserTotal] = useState<number>(0);

  const handleRadioChange = (e) => {
    setSelectedEmoji(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOldChange = (e) => {
    setOld(parseInt(e.target.value, 10));
  };

  function addEmoji(): void {
    setEmojiArray((pre) => {
      return [...pre, '😍'];
    });
  }

  function addUser(): void {
    setUserTotal((pre) => {
      return pre + 1;
    });
    setUsers((pre) => {
      const newArray = [...pre];
      newArray.unshift(new User(userTotal, selectedEmoji, name, old));
      return newArray;
      // return [...pre, new User(userTotal, selectedEmoji, name, old)]
    });
  }
  return (
    <Layout>
      <Head>
        <title>typescriptの勉強！</title>
      </Head>

      <h1 className="mb-2 text-xl font-bold">Typescriptについて勉強しよう！</h1>

      <button
        className="mb-3 touch-manipulation rounded-full bg-sky-500 px-5 py-3 text-white"
        type="button"
        onClick={addEmoji}
      >
        絵文字追加
      </button>

      {emojiArray.map((emoji, index) => (
        <span key={index}>{emoji}</span>
      ))}

      <fieldset>
        <legend className="mb-2 text-xl">Userモデルを追加しよう</legend>
        <fieldset>
          <legend>絵文字</legend>
          {emojiArray.map((emoji, index) => (
            <span key={`emoji-${index}`} className="m-1 text-2xl">
              <input
                id={`emoji-${index}`}
                type="radio"
                name="emoji"
                value={emoji}
                onChange={handleRadioChange}
                checked={emoji === selectedEmoji}
              />
              <label
                htmlFor={`emoji-${index}`}
                className="peer-checked/draft:text-sky-500"
              >
                {emoji}
              </label>
            </span>
          ))}
        </fieldset>
        <label className="mb-2 block">
          <span className="block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
            名前
          </span>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="佐藤"
            value={name}
            className="block rounded-md border
                              border-slate-300 bg-white py-2 px-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:ring-1
                              dark:text-black"
          />
        </label>
        <label className="mb-2 block">
          <span className="block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
            年齢
          </span>
          <input
            type="number"
            value={old}
            onChange={handleOldChange}
            className="block rounded-md border
                              border-slate-300 bg-white py-2 px-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:ring-1
                              dark:text-black"
          />
        </label>
      </fieldset>
      <button
        className="mb-3 touch-manipulation rounded-full bg-violet-500 px-3 py-1 text-white hover:bg-violet-600 active:bg-violet-700"
        type="button"
        onClick={addUser}
      >
        User追加
      </button>
      <div className="grid grid-cols-auto-fit gap-4">
        <AnimatePresence mode="popLayout">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              layout
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <UserCard user={user} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
