import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { ThemeChanger } from '@/components/ThemeChanger';
import MobileNav from '@/components/MobileNav';

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Me',
      path: '/about',
    },
    {
      title: 'Works',
      path: '/works',
    },
    {
      title: 'Books',
      path: '/books',
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
  ];

  return (
    <>
      <header className="md:fixed relative top-0 left-0 right-0 z-10 h-15 bg-white/0 backdrop-blur-md dark:bg-slate-900/0">
        <div className="container mx-auto flex h-full items-center justify-between px-6 font-semibold">
          <Link href="/" className="flex items-center justify-center transition-transform hover:scale-105">
            <Image priority src="/images/omo_pen.png" className="mr-2" height={30} width={30} alt="logo" />
            <div className="text-lg font-bold md:text-2xl">omomuro.dev</div>
          </Link>
          <div className="hidden items-center md:flex">
            <nav className="">
              <ul className="flex items-center space-x-8 text-lg">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      className={clsx('hover:text-sky-500', {
                        'text-sky-500': currentRoute === link.path,
                      })}
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}{' '}
              </ul>
            </nav>
            <div className="ml-6 border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="h-5 w-5">
                <ThemeChanger />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="h-5 w-5">
              <ThemeChanger />
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
}
