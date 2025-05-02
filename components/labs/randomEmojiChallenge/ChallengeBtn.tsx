import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';

export default function ChallengeBtn({ doChallenge, gameClear, challengeTotalNum, judging }) {

  const buttonText = gameClear === false ? `${challengeTotalNum + 1}回目チャレンジ` : '🎉一致おめでとう！！🎉';

  return (
    <button
      onClick={doChallenge}
      disabled={judging || gameClear}
      className="mx-auto mb-3 flex w-10/12 max-w-md touch-manipulation select-none items-center
                 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-3 text-white shadow
                 hover:bg-linear-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
      type="button"
    >
      {buttonText}
      {!gameClear && <CursorArrowRaysIcon className="mt-1 ml-2 w-6 animate-bounce transition ease-in-out" />}
    </button>
  );
}
