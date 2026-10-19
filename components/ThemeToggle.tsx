'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useMounted } from '@/hooks/useMounted';

export default function ThemeToggle({ english = false }: { english?: boolean }) {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const dark = mounted && resolvedTheme === 'dark';
  const label = english
    ? dark
      ? 'Switch to light mode'
      : 'Switch to dark mode'
    : dark
      ? 'ライトモードにする'
      : 'ダークモードにする';

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={label}
      className="text-sub hover:text-ink flex h-11 w-11 items-center justify-center rounded-full transition-colors"
    >
      {mounted && (dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />)}
    </button>
  );
}
