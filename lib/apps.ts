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
  /** App Store から取り込んだスクリーンショットの枚数（public/images/apps/screens/<slug>/<ja|en>/<n>.jpg） */
  screenshotCount: number;
  pixelated?: boolean;
  /** schema.org の applicationCategory */
  schemaCategory: string;
  operatingSystem: string;
  en: { name: string; description: string; catch: string; pricing: string };
};

export const appCategories: { id: AppCategory; title: string; titleEn: string }[] = [
  { id: 'family', title: '家族・暮らし', titleEn: 'Family & home' },
  { id: 'kids', title: 'こども', titleEn: 'Kids' },
  { id: 'media', title: '写真・動画', titleEn: 'Photos & video' },
];

export const publishedApps: PublishedApp[] = [
  {
    slug: 'kakei-pocket',
    name: '家計ポケット',
    category: 'family',
    icon: '/images/apps/kakei-pocket.png',
    summary:
      'iCloudで夫婦・パートナーと共有できる家計簿アプリ。レシート読み取り、固定費の1タップ記録、「共通・自分・パートナー」の分類に対応します。',
    devices: 'iPhone・iPad',
    pricing: '無料（広告あり）・Pro買い切り',
    catch: 'ふたりで共有できる家計簿',
    tint: '#ECE6F4',
    screenshotCount: 2,
    schemaCategory: 'FinanceApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Kakei Pocket',
      description:
        'Track spending on your own or share a household budget with your partner via iCloud. One-tap fixed costs, no bank linking. Sharing is free; Pro is a one-time purchase.',
      catch: 'A budget you can share with your partner',
      pricing: 'Free with ads · Pro one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6819167469',
  },
  {
    slug: 'kazoku-board',
    name: 'かぞくボード',
    category: 'family',
    icon: '/images/apps/kazoku-board.png',
    summary:
      '家族カレンダー、学校プリント、買い物や行きたいところのリスト、送迎や持ち物を家族で共有。プリントは撮影して文字を読み取り、そのまま予定にできます。',
    devices: 'iPhone・iPad',
    pricing: '無料（広告あり）・Pro買い切り',
    catch: '家族の予定と学校プリントを共有',
    tint: '#F2E4D6',
    screenshotCount: 2,
    schemaCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Kazoku Board',
      description:
        'Share your family calendar, school handouts, shopping and places-to-go lists, pick-ups and things to bring via iCloud. Snap a handout to turn it into events. Sharing is free; one Pro purchase covers the whole family.',
      catch: 'Share family plans and school handouts',
      pricing: 'Free with ads · Pro one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6816839974',
  },
  {
    slug: 'dot-biyori',
    name: 'ドット日和',
    category: 'family',
    icon: '/images/apps/dot-biyori.png',
    summary:
      'いまの天気がドット絵の景色になる天気予報アプリ。日本と世界の景色が、その土地の今の天気と時刻で移り変わります。天気キャラクターや部屋の窓からも眺められます。',
    devices: 'iPhone・iPad',
    pricing: '無料（広告あり）・PRO',
    catch: 'ドット絵の景色で見る天気予報',
    tint: '#F6EAD8',
    screenshotCount: 2,
    schemaCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Sky in Pixels',
      description:
        'Your forecast as pixel-art landscapes from Japan and around the world, each changing with its local weather and time of day. Free to start on iPhone and iPad.',
      catch: 'Weather as pixel-art landscapes',
      pricing: 'Free with ads · PRO',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6815891206',
    pixelated: true,
  },
  {
    slug: 'pikaniji',
    name: 'ぴかにじ',
    category: 'kids',
    icon: '/images/apps/pikaniji.png',
    summary:
      'キラキラ光るペンとにじ色クレヨンで遊べる、2〜5歳向けのお絵かき・ぬりえアプリ。文字が読めなくても大きなボタンで遊べます。',
    devices: 'iPhone・iPad',
    pricing: '広告なし・買い切り',
    catch: '広告なしのお絵かき・ぬりえ',
    tint: '#F8E6E1',
    screenshotCount: 2,
    schemaCategory: 'EducationalApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Pikaniji',
      description:
        'Glowing pens, rainbow crayons and coloring pages for kids aged 2–5. No ads, no accounts, and big buttons that work before kids can read. Apple Pencil supported on iPad.',
      catch: 'Ad-free drawing and coloring for kids',
      pricing: 'No ads · one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6815297304',
  },
  {
    slug: 'little-playground',
    name: 'ちいさなあそびば',
    category: 'kids',
    icon: '/images/apps/little-playground.png',
    summary:
      'お花が咲く、どうぶつとばあ！、ピアノや水あそび。0〜5歳ごろの親子で楽しむ、7つのタッチあそびが入ったミニゲーム集です。',
    devices: 'iPhone・iPad',
    pricing: '広告なし・買い切り',
    catch: '0〜5歳のタッチあそび',
    tint: '#E3EED9',
    screenshotCount: 2,
    schemaCategory: 'GameApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Little Playground',
      description:
        'Make flowers bloom, play peekaboo, explore a piano and a pond. Seven gentle games for kids aged 0–5 to play with a grown-up on iPhone and iPad. No ads, no accounts. Try each game for a minute a day; a one-time purchase removes the limit.',
      catch: 'Touch-and-play games for ages 0–5',
      pricing: 'No ads · one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6812550189',
  },
  {
    slug: 'kakusu',
    name: 'かくす',
    category: 'media',
    icon: '/images/apps/kakusu.png',
    summary:
      '写真・動画に写った顔を自動で検出し、モザイク・ぼかし・塗りつぶし・スタンプで隠すアプリ。人物を残して背景だけを隠すこともできます。処理は端末の中で完結します。',
    devices: 'iPhone・iPad',
    pricing: '無料（広告あり）・Pro買い切り',
    catch: '写真・動画の顔や背景をかくす',
    tint: '#F1E7DA',
    screenshotCount: 2,
    schemaCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Kakusu',
      description:
        'Automatically detect faces in photos and videos and hide them with mosaic, blur, solid fills, or stickers. Keep people and hide the background, too. Everything runs on your iPhone or iPad, with no watermarks. Free with ads; Pro removes ads with a one-time purchase.',
      catch: 'Hide faces and backgrounds in photos and videos',
      pricing: 'Free with ads · Pro one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6809350160',
  },
  {
    slug: 'mieru',
    name: 'Mieru',
    category: 'media',
    icon: '/images/apps/mieru.png',
    summary:
      '写真やファイルの動画を、月ごとの一覧・プレイリスト・縦スクロールのフィードで楽しめる動画プレイヤー。Macにも対応しています。',
    devices: 'iPhone・iPad・Mac',
    pricing: '無料（広告あり）・Plus買い切り',
    catch: '写真アプリの動画を心地よく',
    tint: '#DFE7F3',
    screenshotCount: 2,
    schemaCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS, macOS',
    en: {
      name: 'Mieru',
      description:
        'Browse videos from Photos and Files by month, in playlists or a vertical feed, on iPhone, iPad and Mac. Free to use; Mieru Plus is a one-time purchase that adds background play and Picture in Picture.',
      catch: 'A calm player for your own videos',
      pricing: 'Free with ads · Plus one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6818041206',
  },
  {
    slug: 'seal-atsume',
    name: 'シール集め',
    category: 'media',
    icon: '/images/apps/seal-atsume.png',
    summary:
      '写真からシールをつくって、集めて、貼れるアプリ。スマホケースやノートPCなど、アプリの中の持ちものを自由にデコレーションできます。',
    devices: 'iPhone・iPad',
    pricing: '無料（広告あり）・買い切り',
    catch: '写真でつくるシール',
    tint: '#E2E5F5',
    screenshotCount: 2,
    schemaCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Sticky Club',
      description:
        'Turn your photos into stickers, collect them, and decorate in-app items like a phone case or laptop. Free to start on iPhone and iPad, no subscription.',
      catch: 'Turn your photos into stickers',
      pricing: 'Free with ads · one-time purchase',
    },
    appStoreUrl: 'https://apps.apple.com/jp/app/id6814130810',
  },
];

export const appStoreId = (app: PublishedApp) => app.appStoreUrl?.match(/id(\d+)/)?.[1];

export const screenshotSrcs = (app: PublishedApp, lang: 'ja' | 'en') =>
  Array.from({ length: app.screenshotCount }, (_, i) => `/images/apps/screens/${app.slug}/${lang}/${i + 1}.jpg`);

export const findApp = (slug: string) => publishedApps.find((app) => app.slug === slug);
