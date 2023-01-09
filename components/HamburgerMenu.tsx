import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const HamburgerMenu = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <button>
                <FontAwesomeIcon icon={faBars} className="w-5" />
            </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content collisionPadding={10} sideOffset={0}
                                className='p-6 bg-white dark:bg-gray-500 shadow-lg rounded-lg py-1 ring-1 ring-slate-900/10'>
            <DropdownMenu.Label />
            <DropdownMenu.Item>
                <Link className={clsx('hover:text-sky-500', {'text-sky-500' : currentRoute === '/'})}
                        href="/">Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <Link className={clsx('hover:text-sky-500',{'text-sky-500' : currentRoute === '/about'})}
                          href="/about">About Me</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <Link className={clsx('hover:text-sky-500',{'text-sky-500' : currentRoute === '/works'})}
                          href="/works">Works</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <Link className={clsx('hover:text-sky-500',{'text-sky-500' : currentRoute === '/labo'})}
                          href="/labo">Labo</Link>
            </DropdownMenu.Item>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Item />
            </DropdownMenu.Group>

          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
}
