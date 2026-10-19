import { Zen_Kaku_Gothic_New, Zen_Maru_Gothic } from 'next/font/google';

// 日本語フォントは分割ファイルが多いので先読みしない（ページで使う文字の分だけ読み込まれる）
export const headingFont = Zen_Maru_Gothic({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-heading',
});

export const bodyFont = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-body',
});
