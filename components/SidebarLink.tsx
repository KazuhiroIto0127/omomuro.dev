import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const SidebarLink = ({ path, title }: { path: string; title: string }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link
      href={path}
      className={clsx(
        'group flex items-center rounded-lg p-2 text-base font-normal text-gray-900',
        'hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
        {
          'bg-gray-200 text-sky-500 dark:bg-gray-700 dark:text-sky-400':
            currentRoute === path,
        },
      )}
    >
      <div
        className={clsx(
          'mr-1 h-6 w-6 flex-shrink-0 ease-in-out group-hover:rotate-45',
          'transition duration-75',
          'group-hover:text-sky-500 dark:group-hover:text-sky-400',
        )}
      />
      <span className="ml-3 flex-1 whitespace-nowrap group-hover:text-sky-500 dark:group-hover:text-sky-400">
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
