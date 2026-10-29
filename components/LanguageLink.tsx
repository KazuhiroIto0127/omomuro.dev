'use client';

import type { ReactNode } from 'react';
import { LANG_COOKIE, type Lang } from '@/lib/i18n';

/**
 * 言語を切り替えるリンク。選んだ言語を Cookie に残し、自動振り分けより優先させる。
 * next/link だと切り替え前の Cookie で先読みしたリダイレクト結果が使われ、元の言語に戻ってしまうため、
 * 通常のページ遷移にして、クリック時に書いた Cookie でサーバーに振り分けさせる。
 */
export default function LanguageLink({
  href,
  lang,
  className,
  children,
}: {
  href: string;
  lang: Lang;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      hrefLang={lang}
      lang={lang}
      className={className}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
      }}
    >
      {children}
    </a>
  );
}
