import Link from 'next/link';

const LaboLink = ({
  id,
  emoji,
  title,
}: {
  id: string;
  emoji: string;
  title: string;
}) => {
  return (
    <Link href={`/labo/${id}`}>
      <div
        className="rounded-md bg-white p-3 shadow-lg shadow-indigo-500/40 transition ease-in-out hover:scale-105
                            dark:bg-gray-500 dark:text-white"
      >
        <div className="h-32 overflow-hidden text-clip rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-center tracking-widest">
          <span className="text-2xl">{emoji.repeat(60)}</span>
        </div>
        {title}
      </div>
    </Link>
  );
};

export default LaboLink;
