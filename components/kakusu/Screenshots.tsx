import Image from 'next/image';

export default function KakusuScreenshots({ language = 'ja' }: { language?: 'ja' | 'en' }) {
  const english = language === 'en';
  const shots = [
    ['01-auto-faces.png', english ? 'Automatically mask faces in video' : '動画の顔を自動でモザイク加工'],
    ['02-manual-range.png', english ? 'Add a mask and set its time range' : '隠す場所と時間を自分で追加'],
    ['03-private-home.png', english ? 'Choose a video from the redesigned home screen' : '新しいホーム画面から動画を選択'],
  ];
  return (
    <section className="not-prose my-8" aria-label={english ? 'App screenshots' : 'アプリの画面'}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {shots.map(([file, label]) => (
          <a key={file} href={`/images/works/kakusu/${language}/${file}`} className="mx-auto block w-full max-w-72 overflow-hidden rounded-2xl border border-emerald-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700" aria-label={english ? `${label} — view full size` : `${label}（大きな画像を見る）`}>
            <Image src={`/images/works/kakusu/${language}/${file}`} alt={label} width={1320} height={2868} sizes="(max-width: 639px) 288px, 220px" className="h-auto w-full" />
          </a>
        ))}
      </div>
    </section>
  );
}
