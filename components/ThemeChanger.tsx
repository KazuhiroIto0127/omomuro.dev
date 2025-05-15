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
            className="rounded-lg bg-white p-3 shadow-lg ring-1 ring-slate-900/10 dark:bg-gray-800 dark:ring-slate-100/10"
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
              <p className="font-medium text-gray-900 dark:text-gray-100">テーマ設定</p>
              <Popover.Close className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                <XMarkIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Popover.Close>
            </div>
            <ul className="mt-2 space-y-1">
              <li
                className={clsx(
                  'flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
                  {
                    'bg-gray-100 dark:bg-gray-700': theme === 'light',
                  }
                )}
                onClick={() => setTheme('light')}
              >
                <SunIcon className="h-5 w-5 text-red-400" />
                <span className="text-gray-900 dark:text-gray-100">ライト</span>
              </li>
              <li
                className={clsx(
                  'flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
                  {
                    'bg-gray-100 dark:bg-gray-700': theme === 'dark',
                  }
                )}
                onClick={() => setTheme('dark')}
              >
                <MoonIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-900 dark:text-gray-100">ダーク</span>
              </li>
              <li
                className={clsx(
                  'flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
                  {
                    'bg-gray-100 dark:bg-gray-700': theme === 'system',
                  }
                )}
                onClick={() => setTheme('system')}
              >
                <ComputerDesktopIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-gray-100">システム</span>
              </li>
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
