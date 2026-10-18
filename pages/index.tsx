import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { appCategories, publishedApps } from '@/lib/apps';

export default function Home() {
  return (
    <Layout>
      <HeadMeta
        type="website"
        title="暮らしと家族のiPhone・iPadアプリ"
        description="家計簿の共有、家族の予定、こどものお絵かき、動画の顔モザイクまで。個人開発者イトウカズヒロがApp Storeで公開しているiPhone・iPadアプリの一覧です。"
      />

      <div className="flex flex-col gap-14">
        <section className="flex flex-col items-center gap-4 pt-6 text-center md:pt-10">
          <h1 className="font-maru text-[30px] leading-snug font-bold sm:text-4xl md:text-[46px]">
            暮らしと家族の、
            <br />
            ちいさな困りごとに。
          </h1>
          <p className="text-sub max-w-xl text-[15px] leading-8 md:text-base">
            一人でつくっている iPhone・iPad アプリです。
            <br className="hidden sm:inline" />
            どれも App Store から無料でダウンロードできます。
          </p>
        </section>

        {appCategories.map((c) => (
          <section key={c.id} aria-labelledby={`cat-${c.id}`} className="flex flex-col gap-4">
            <h2 id={`cat-${c.id}`} className="font-maru text-xl font-bold">
              {c.title}
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {publishedApps
                .filter((app) => app.category === c.id)
                .map((app) => (
                  <li key={app.slug}>
                    <Link
                      href={`/works/${app.slug}`}
                      className="bg-card flex h-full items-center gap-[18px] rounded-3xl p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,28,25,0.08)]"
                    >
                      <Image
                        src={app.icon}
                        alt=""
                        width={72}
                        height={72}
                        className={clsx(
                          'app-icon h-[72px] w-[72px] shrink-0 rounded-[17px]',
                          app.pixelated && '[image-rendering:pixelated]',
                        )}
                      />
                      <span className="flex min-w-0 flex-col gap-1">
                        <span className="font-maru text-lg font-bold">{app.name}</span>
                        <span className="text-sub text-sm leading-6">{app.catch}</span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </Layout>
  );
}
