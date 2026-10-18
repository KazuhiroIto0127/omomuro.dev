export type AppCategory = 'family' | 'kids' | 'media';

export type PublishedApp = {
  slug: string;
  name: string;
  category: AppCategory;
  icon: string;
  /** 一覧用の説明（1〜2文。検索にも使われる本文） */
  summary: string;
  /** トップのタイル用の短いひとこと */
  catch: string;
  devices: string;
  pricing: string;
  /** アプリページ上部の色（ライト時。ダーク時は自動で暗くする） */
  tint: string;
  appStoreUrl?: string;
  /** 日本語版スクリーンショット（縦長） */
  screenshots?: { src: string; alt: string }[];
  pixelated?: boolean;
};

export const appCategories: { id: AppCategory; title: string }[] = [
  { id: 'family', title: '家族・暮らし' },
  { id: 'kids', title: 'こども' },
  { id: 'media', title: '写真・動画' },
];

export const publishedApps: PublishedApp[] = [
  {
    slug: 'kakei-pocket',
    name: '家計ポケット',
    category: 'family',
    icon: '/images/works/kakei-pocket.png',
    summary:
      'iCloudで夫婦・パートナーと共有できる家計簿アプリ。レシート読み取り、固定費の1タップ記録、「共通・自分・パートナー」の分類に対応します。',
    devices: 'iPhone・iPad',
    pricing: '無料・Pro買い切り',
    catch: 'ふたりで共有できる家計簿',
    tint: '#ECE6F4',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6819167469',
  },
  {
    slug: 'kazoku-board',
    name: 'かぞくボード',
    category: 'family',
    icon: '/images/works/kazoku-board.png',
    summary:
      '家族カレンダー、やること、学校プリント、送迎や持ち物を家族で共有。プリントは撮影して文字を読み取り、そのまま予定にできます。',
    devices: 'iPhone・iPad',
    pricing: '無料・Pro買い切り',
    catch: '家族の予定と学校プリントを共有',
    tint: '#F2E4D6',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6816839974',
  },
  {
    slug: 'dot-biyori',
    name: 'ドット日和',
    category: 'family',
    icon: '/images/works/dot-biyori.png',
    summary:
      'いまの天気がドット絵の景色になる天気予報アプリ。東京タワーなど日本各地の風景とBGMで、晴れや雨、時間帯の移り変わりを眺められます。',
    devices: 'iPhone・iPad',
    pricing: '無料・PRO',
    catch: 'ドット絵の景色で見る天気予報',
    tint: '#E5E0F1',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6815891206',
    pixelated: true,
  },
  {
    slug: 'pikaniji',
    name: 'ぴかにじ',
    category: 'kids',
    icon: '/images/works/pikaniji.png',
    summary:
      'キラキラ光るペンとにじ色クレヨンで遊べる、2〜5歳向けのお絵かき・ぬりえアプリ。文字が読めなくても大きなボタンで遊べます。',
    devices: 'iPhone・iPad',
    pricing: '広告なし・買い切り',
    catch: '広告なしのお絵かき・ぬりえ',
    tint: '#F8E6E1',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6815297304',
  },
  {
    slug: 'little-playground',
    name: 'ちいさなあそびば',
    category: 'kids',
    icon: '/images/works/little-playground-icon.png',
    summary: 'さわると花が咲き、どうぶつが顔を出す。0〜5歳ごろの親子で楽しむ、7つのタッチあそびが入ったアプリです。',
    devices: 'iPhone・iPad',
    pricing: '広告なし・買い切り',
    catch: '0〜5歳のタッチあそび',
    tint: '#F5E5EC',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6812550189',
  },
  {
    slug: 'kakusu',
    name: 'かくす',
    category: 'media',
    icon: '/images/works/kakusu-icon-current.png',
    summary:
      '動画に写り込んだ顔を自動で検出し、モザイクや塗りつぶしで隠すアプリ。処理はiPhoneの中で完結し、動画をアップロードしません。',
    devices: 'iPhone',
    pricing: '広告なし・Pro買い切り',
    catch: '動画の顔に自動でモザイク',
    tint: '#DCE8E1',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6809350160',
    screenshots: [
      { src: '/images/works/kakusu/ja/01-auto-faces.png', alt: '顔を自動で検出してモザイクをかけた画面' },
      { src: '/images/works/kakusu/ja/02-manual-range.png', alt: '隠す範囲を手動で追加する画面' },
    ],
  },
  {
    slug: 'mieru',
    name: 'Mieru',
    category: 'media',
    icon: '/images/works/mieru.png',
    summary:
      '写真やファイルの動画を、月ごとの一覧・プレイリスト・縦スクロールのフィードで楽しめる動画プレイヤー。Macにも対応しています。',
    devices: 'iPhone・iPad・Mac',
    pricing: '無料・Plus買い切り',
    catch: '写真アプリの動画を心地よく',
    tint: '#DFE7F3',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6818041206',
  },
  {
    slug: 'seal-atsume',
    name: 'シール集め',
    category: 'media',
    icon: '/images/works/seal-atsume.png',
    summary:
      '写真の対象を自動で切り抜いて、自分だけのステッカーに。ふちの色や影を調整し、コレクションやボードに貼って楽しめます。',
    devices: 'iPhone',
    pricing: '無料・買い切り',
    catch: '写真を切り抜いてステッカーに',
    tint: '#E2E5F5',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6814130810',
  },
];

export const findApp = (slug: string) => publishedApps.find((app) => app.slug === slug);
