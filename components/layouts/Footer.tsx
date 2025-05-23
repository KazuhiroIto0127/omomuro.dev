import Link from 'next/link';

export default function Header() {
  return (
    <footer className="mt-10 mb-26 flex flex-col items-center justify-center p-1">
      <p>created by Kazuhiro Ito</p>
      <Link href="/" className="block text-xl text-blue-500">
        omomuro.dev
      </Link>
    </footer>
  );
}
