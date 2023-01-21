import { useEffect, useState, useMemo } from 'react';
import { useReward } from 'react-rewards';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

export default function RandomEmojiChallenge() {
  const emojis = ['🌹', '🐶', '🐱'];
  const [bestScore, setBestScore] = useState(0);
  const [challengeTotalNum, setChallengeTotalNum] = useState(0);
  const [emojiStack, setEmojiStack] = useState<string[][]>([]);
  const [gameClear, setGameClear] = useState(false);
  const [challengeResults, setChallengeResults] = useState<boolean[]>([]);
  const { reward, isAnimating } = useReward('rewardId', 'confetti', {
    lifetime: 1000,
    elementCount: 100,
  });

  const buttonText = useMemo(() => {
    return gameClear === false ? `${challengeTotalNum + 1}回目チャレンジ` : '🎉一致おめでとう！！🎉';
  }, [gameClear, challengeTotalNum]);

  const resultText = (result: boolean) => (result ? '◯' : 'X');

  const isAllSameEmoji = (array: string[]): boolean => {
    return array.every((value) => value === array[0]);
  };
  const pickRandomEmoji = (): string[] => {
    let array: string[] = [];
    for (let i = 0; i < 5; i++) {
      array.push(emojis[Math.floor(Math.random() * emojis.length)]);
    }
    return array;
  };

  const addEmoji = (): void => {
    setEmojiStack((prev) => {
      const newArray = [...prev];
      newArray.unshift(pickRandomEmoji());
      return newArray;
    });
  };

  const reset = (): void => {
    setChallengeTotalNum(0);
    setGameClear(false);
    setEmojiStack([]);
    setChallengeResults([]);
  };

  useEffect(() => {
    if (emojiStack[challengeTotalNum]) {
      const result = isAllSameEmoji(emojiStack[0]);
      setChallengeResults((prev) => {
        const newArray = [...prev];
        newArray.push(result);
        return newArray;
      });
      setChallengeTotalNum((prev) => prev + 1);
      if (result === true) {
        reward();
        if (bestScore === 0 || bestScore >= challengeTotalNum) {
          setBestScore(challengeTotalNum + 1);
        }
        setGameClear(true);
      }
    }
  }, [bestScore, challengeTotalNum, emojiStack, reward]);

  return (
    <div className="text-center">
      <h1 className="mb-2 text-2xl font-bold">絵文字一致チャレンジ！</h1>
      <span id="rewardId" />

      {bestScore != 0 && <div>ベストスコア：{bestScore}回目で成功</div>}
      <button
        onClick={addEmoji}
        disabled={gameClear}
        className="mx-auto mb-3 flex w-10/12 max-w-md touch-manipulation select-none items-center
                         justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-white shadow
                           hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
        type="button"
      >
        {buttonText}
        {!gameClear && <CursorArrowRaysIcon className="mt-1 ml-2 w-6 animate-bounce transition ease-in-out" />}
      </button>

      {gameClear && (
        <button
          onClick={reset}
          className="mx-auto mb-3 flex
                           touch-manipulation select-none rounded-full bg-red-300 px-5 py-3 text-white"
          type="button"
        >
          リセット
          <CursorArrowRaysIcon className="mt-1 ml-2 w-6 animate-bounce transition ease-in-out" />
        </button>
      )}
      <div>
        <AnimatePresence mode="popLayout">
          {emojiStack.map((emoji, index) => (
            <motion.div
              key={emojiStack.length - index}
              layout
              initial={{ opacity: 0, scale: 0, translateY: -100 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="touch-manipulation select-none">
                <span>{emojiStack.length - index}回目</span>
                <span
                  className={clsx({
                    'mb-1 text-4xl': index === 0,
                    'text-xl': index !== 0,
                  })}
                >
                  {emoji}
                </span>
                <span>
                  ・・・
                  {resultText(challengeResults[emojiStack.length - 1 - index])}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
