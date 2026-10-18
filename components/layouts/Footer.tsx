import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-sub mx-auto flex w-full max-w-[1080px] flex-wrap justify-between gap-3 px-5 pt-8 pb-12 text-[13px] md:px-6">
      <span>© {new Date().getFullYear()} Kazuhiro Ito</span>
      <Link href="/about" className="hover:text-ink">
        自分のこと
      </Link>
    </footer>
  );
}
