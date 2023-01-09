import Link from 'next/link'
import { useRouter } from 'next/router';
import clsx from 'clsx';

const SidebarLink = ({ path, title }: { path: string, title: string }) => {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <Link href={path} className={clsx(
            'group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg',
            'dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
            {'text-sky-500 bg-gray-200 dark:bg-gray-700 dark:text-sky-400' : currentRoute === path}
        )}>
            <div className={clsx(
                "mr-1 group-hover:rotate-45 ease-in-out flex-shrink-0 w-6 h-6",
                "transition duration-75",
                "group-hover:text-sky-500 dark:group-hover:text-sky-400"
            )} />
            <span className="flex-1 ml-3 whitespace-nowrap group-hover:text-sky-500 dark:group-hover:text-sky-400">
                {title}
            </span>
        </Link>
    )
};

export default SidebarLink;
