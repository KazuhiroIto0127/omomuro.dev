import { useState } from 'react';
import { useReward } from 'react-rewards';
import ChallengeBtn from './ChallengeBtn';
import ResetBtn from './ResetBtn';
import ResultEmojis from './ResultEmojis';

export default function RandomEmojiChallenge() {
  const emojis = ['🌹', '🐶', '🐱'];
  const [bestScore, setBestScore] = useState(0);
  const [challengeTotalNum, setChallengeTotalNum] = useState(0);
  const [judging, setJudging] = useState(false);
  const [emojiStack, setEmojiStack] = useState<string[][]>([]);
  const [gameClear, setGameClear] = useState(false);
  const [challengeResults, setChallengeResults] = useState<boolean[]>([]);
  const { reward, isAnimating } = useReward('rewardId', 'confetti', {
    lifetime: 1000,
    elementCount: 100,
  });

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

  const reset = (): void => {
    setChallengeTotalNum(0);
    setGameClear(false);
    setEmojiStack([]);
    setChallengeResults([]);
  };

  const doChallenge = (): void => {
    setJudging(true);

    const emojis = pickRandomEmoji()
    const isSuccess = isAllSameEmoji(emojis);

    setEmojiStack((prev) => {
      const newArray = [...prev];
      newArray.unshift(emojis);
      return newArray;
    });
    setChallengeResults((prev) => {
      const newArray = [...prev];
      newArray.push(isSuccess);
      return newArray;
    });
    setChallengeTotalNum((prev) => prev + 1);

    if (isSuccess) {
      reward();
      if (bestScore === 0 || bestScore >= challengeTotalNum) {
        setBestScore(challengeTotalNum + 1);
      }
      setGameClear(true);
    }

    setJudging(false);
  };

  return (
    <div className="text-center">
      <h1 className="mb-2 text-2xl font-bold">絵文字一致チャレンジ！</h1>
      <span id="rewardId" />

      {bestScore != 0 && <div>ベストスコア：{bestScore}回目で成功</div>}
      <ChallengeBtn judging={judging} doChallenge={doChallenge} gameClear={gameClear} challengeTotalNum={challengeTotalNum} />
      <ResetBtn reset={reset} gameClear={gameClear} />
      <ResultEmojis emojiStack={emojiStack} challengeResults={challengeResults}  />
    </div>
  );
}
