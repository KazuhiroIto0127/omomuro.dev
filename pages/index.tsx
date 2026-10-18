import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import Layout from '@/components/layouts/oneColumnLayout';
import HeadMeta from '@/components/Head';
import { appCategories, publishedApps } from '@/lib/apps';

const card =
  'rounded-3xl border border-stone-200/80 bg-white/85 backdrop-blur-sm dark:border-slate-600/70 dark:bg-slate-800/80';

export default function Home() {
  return (
    <Layout>
      <HeadMeta
        type="website"
        title="暮らしと家族のiPhone・iPadアプリ"
        description="家計簿の共有、家族の予定、こどものお絵かき、動画の顔モザイクまで。個人開発者イトウカズヒロがApp Storeで公開している8つのiPhone・iPadアプリの一覧です。"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-16 pb-8">
        <section className="flex flex-col gap-5 pt-6 md:pt-10">
          <p className="text-sm font-bold tracking-widest text-orange-700 dark:text-orange-300">iPhone・iPad アプリ</p>
          <h1 className="text-4xl leading-tight font-bold md:text-6xl md:leading-tight">
            暮らしと家族の、
            <br />
            ちいさな困りごとに。
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-700 md:text-lg dark:text-slate-200">
            omomuro.dev は、イトウカズヒロが一人でつくっている iPhone・iPad
            アプリのサイトです。家計簿や家族の予定、こどものあそび、写真や動画の道具まで、
            {publishedApps.length}つのアプリを App Store で公開しています。
          </p>
          <nav aria-label="カテゴリ" className="flex flex-wrap gap-3 pt-1">
            {appCategories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={clsx(
                  card,
                  'px-5 py-2.5 text-sm font-bold hover:border-orange-400 dark:hover:border-orange-300',
                )}
              >
                {c.title}
              </a>
            ))}
          </nav>
        </section>

        {appCategories.map((c) => (
          <section key={c.id} id={c.id} className="flex scroll-mt-24 flex-col gap-5">
            <h2 className="text-2xl font-bold md:text-3xl">{c.title}</h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publishedApps
                .filter((app) => app.category === c.id)
                .map((app) => (
                  <li key={app.slug}>
                    <Link
                      href={`/works/${app.slug}`}
                      className={clsx(
                        card,
                        'flex h-full flex-col gap-4 p-6 transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-lg dark:hover:border-orange-300',
                      )}
                    >
                      <Image
                        src={app.icon}
                        alt={`${app.name}のアイコン`}
                        width={72}
                        height={72}
                        className={clsx(
                          'h-[72px] w-[72px] rounded-2xl',
                          app.pixelated && '[image-rendering:pixelated]',
                        )}
                      />
                      <h3 className="text-xl font-bold">{app.name}</h3>
                      <p className="flex-1 text-[15px] leading-7 text-stone-700 dark:text-slate-200">{app.summary}</p>
                      <p className="text-[13px] text-stone-600 dark:text-slate-300">
                        {app.devices} ／ {app.pricing}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <section className={clsx(card, 'flex flex-col items-start gap-6 p-8 md:flex-row md:items-center')}>
          <Image src="/images/penguin_with_pc.png" alt="パソコンに向かうペンギンのイラスト" width={120} height={120} />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold md:text-2xl">つくっている人</h2>
            <p className="text-[15px] leading-8 text-stone-700 dark:text-slate-200">
              東京在住のソフトウェアエンジニア、イトウカズヒロです。企画からデザイン、開発、サポートまで一人で行っています。ゲームやWebの試作は実験室や作品一覧にまとめています。
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-bold text-orange-700 dark:text-orange-300">
              <Link href="/about" className="hover:underline">
                プロフィール
              </Link>
              <Link href="/works" className="hover:underline">
                これまでの作品
              </Link>
              <Link href="/labs" className="hover:underline">
                実験室
              </Link>
              <Link href="/gallery" className="hover:underline">
                ギャラリー
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
