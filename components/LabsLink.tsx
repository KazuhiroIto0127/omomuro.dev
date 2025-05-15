import Link from 'next/link';

const LabsLink = ({ id, emoji, title }: { id: string; emoji: string; title: string }) => {
  return (
    <Link href={`/labs/${id}`}>
      <div
        className="rounded-md bg-white p-3 shadow-lg shadow-gray-300/60 transition ease-in-out hover:scale-105
                            dark:bg-gray-500 dark:text-white dark:shadow-gray-500/60"
      >
        <div className="h-32 overflow-hidden border-1 border-gray-300/60 text-clip rounded-md text-center tracking-widest bg-gray-100 dark:bg-gray-400 flex items-center justify-center">
          <span className="text-8xl">{emoji}</span>
        </div>
        <p className="p-2">{title}</p>
      </div>
    </Link>
  );
};

export default LabsLink;
