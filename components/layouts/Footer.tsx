import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageLink from '@/components/LanguageLink';
import { alternatePaths, pathLanguage } from '@/lib/i18n';

export default function Footer() {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const english = pathLanguage(path) === 'en';
  const alternate = alternatePaths(path) ?? { ja: '/', en: '/en' };

  return (
    <footer className="text-sub mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-between gap-3 px-5 pt-8 pb-12 text-[13px] md:px-6">
      <span>© {new Date().getFullYear()} Kazuhiro Ito</span>
      <nav aria-label={english ? 'Footer' : 'フッター'} className="flex items-center gap-5">
        <Link href={english ? '/about/en' : '/about'} className="hover:text-ink py-2">
          {english ? 'About' : 'つくった人'}
        </Link>
        {english ? (
          <LanguageLink href={alternate.ja} lang="ja" className="hover:text-ink py-2">
            日本語
          </LanguageLink>
        ) : (
          <LanguageLink href={alternate.en} lang="en" className="hover:text-ink py-2">
            English
          </LanguageLink>
        )}
      </nav>
    </footer>
  );
}
