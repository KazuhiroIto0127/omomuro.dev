import Link from 'next/link';

export default function Header() {
  return (
    <footer className={`grid-in-footer flex flex-col items-center justify-center p-1 mt-3`}>
        <p>created by Kazuhiro Ito</p>
        <Link href="/" className="block text-xl text-blue-500">omomuro.dev</Link>
    </footer>
  )
}
