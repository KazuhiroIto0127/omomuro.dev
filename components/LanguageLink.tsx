import Link from 'next/link';
import type { ReactNode } from 'react';
import { LANG_COOKIE, type Lang } from '@/lib/i18n';

/** 言語を切り替えるリンク。選んだ言語を Cookie に残し、自動振り分けより優先させる */
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
    <Link
      href={href}
      hrefLang={lang}
      lang={lang}
      className={className}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
      }}
    >
      {children}
    </Link>
  );
}
