import Link from 'next/link';
import Layout from '@/components/layouts/oneColumnLayout';

export default function Custom404() {
  return (
    <Layout>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-16 text-center">
        <h1 className="font-maru text-5xl font-bold">404</h1>
        <p className="text-sub" lang="ja">
          ページが見つかりませんでした。
        </p>
        <p className="text-sub" lang="en">
          This page could not be found.
        </p>
        <div className="mt-2 flex gap-6 text-[15px]">
          <Link href="/" className="text-accent hover:underline">
            アプリ一覧へ
          </Link>
          <Link href="/en" lang="en" className="text-accent hover:underline">
            All apps
          </Link>
        </div>
      </div>
    </Layout>
  );
}
