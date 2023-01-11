import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

export const ThemeChangerRadioBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <RadioGroup.Root className="flex justify-between rounded-md text-sm font-light ring-1 ring-slate-200 dark:ring-slate-600">
      <div className="flex items-center justify-center">
        <RadioGroup.Item
          className={clsx('flex gap-1 px-3 py-2 text-red-400 hover:cursor-pointer hover:bg-blue-100', {
            'bg-blue-100': theme === 'light',
          })}
          value="one"
          id="r1"
          onClick={() => setTheme('light')}
        >
          <RadioGroup.Indicator className="RadioGroupIndicator" />
          <SunIcon className="mr-1 w-5 text-red-400" />
          <span>Light</span>
        </RadioGroup.Item>
      </div>

      <div className="flex items-center justify-center">
        <RadioGroup.Item
          className={clsx('flex gap-1 px-3 py-2 text-yellow-400 hover:cursor-pointer hover:bg-blue-100', {
            'bg-blue-100': theme === 'dark',
          })}
          value="two"
          id="r2"
          onClick={() => setTheme('dark')}
        >
          <RadioGroup.Indicator className="RadioGroupIndicator" />
          <MoonIcon className="w-5 text-yellow-400" />
          <span>Dark</span>
        </RadioGroup.Item>
      </div>

      <div className="flex items-center justify-center">
        <RadioGroup.Item
          className={clsx('flex gap-1 px-3 py-2 hover:cursor-pointer hover:bg-blue-100', {
            'bg-blue-100': theme === 'system',
          })}
          value="three"
          id="r3"
          onClick={() => setTheme('system')}
        >
          <RadioGroup.Indicator className="RadioGroupIndicator" />
          <ComputerDesktopIcon className="w-5" />
          <span>System</span>
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  );
};
