import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';

export default function ResetBtn({ reset, gameClear }) {

  return (
    <>
      {gameClear && (
        <button
          onClick={reset}
          className="mx-auto mb-3 flex touch-manipulation select-none rounded-full bg-red-300 px-5 py-3 text-white"
          type="button"
        >
          リセット
          <CursorArrowRaysIcon className="mt-1 ml-2 w-6 animate-bounce transition ease-in-out" />
        </button>
      )}
    </>
  );
}
