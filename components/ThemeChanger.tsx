import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, ComputerDesktopIcon, XMarkIcon } from '@heroicons/react/24/solid';
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          {resolvedTheme === 'light' ? (
            <SunIcon className="w-5 text-red-400" />
          ) : (
            <MoonIcon className="w-5 text-yellow-400" />
          )}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            collisionPadding={10}
            sideOffset={15}
            className="rounded-lg bg-white py-1 shadow-lg ring-1 ring-slate-900/10 dark:bg-gray-500"
          >
            <p className="px-2">Theme</p>
            <ul>
              <li
                className={clsx('flex gap-1 px-3 py-2 text-red-400 hover:cursor-pointer hover:bg-blue-100', {
                  'bg-blue-100': theme === 'light',
                })}
                onClick={() => setTheme('light')}
              >
                <SunIcon className="mr-1 w-5" />
                <span>Light</span>
              </li>
              <li
                className={clsx('flex gap-1 px-3 py-2 text-yellow-400 hover:cursor-pointer hover:bg-blue-100', {
                  'bg-blue-100': theme === 'dark',
                })}
                onClick={() => setTheme('dark')}
              >
                <MoonIcon className="w-5 text-yellow-400" />
                <span>Dark</span>
              </li>
              <li
                className={clsx('flex gap-1 px-3 py-2 hover:cursor-pointer hover:bg-blue-100', {
                  'bg-blue-100': theme === 'system',
                })}
                onClick={() => setTheme('system')}
              >
                <ComputerDesktopIcon className="w-5" />
                <span>System</span>
              </li>
            </ul>
            <Popover.Close className="absolute top-1 right-1 h-4 w-4 rounded-[100%] hover:bg-blue-100">
              <XMarkIcon className="w-5" />
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
