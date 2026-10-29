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
  /**
   * App Store の検索結果画像（横長 1 枚、public/images/apps/screens/<slug>/<ja|en>/search.jpg、1200×800）。
   * あるときはページ上部でスクリーンショットの代わりに出す
   */
  searchImage?: boolean;
  /**
   * ページ上部の画像の説明（alt）。画面に何が写っているかを書く。
   * searchImage があるアプリは 1 つ目が検索結果画像、ないアプリはスクリーンショットの順
   */
  shotAlts?: { ja: string[]; en: string[] };
  /** 紹介ページ最後の App Store ボタンの上に出すひとこと（なければ料金） */
  ctaNote?: string;
  pixelated?: boolean;
  /** schema.org の applicationCategory */
  schemaCategory: string;
  operatingSystem: string;
  en: { name: string; description: string; catch: string; pricing: string; ctaNote?: string };
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
    shotAlts: {
      ja: [
        '家計ポケットのホーム画面。今月の収支と、共通・自分・パートナーごとの支出が並ぶ',
        '家計ポケットの記録画面。カテゴリと共通・自分・パートナーを選んで金額を入力する',
      ],
      en: [
        "Kakei Pocket home screen with this month's balance and spending split into Shared and each partner",
        'Kakei Pocket entry screen: choose a category and Shared or a partner, then type the amount',
      ],
    },
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
    devices: 'iPhone・iPhone Duo・iPad',
    pricing: '無料（広告あり）・Pro買い切り',
    catch: '家族の予定と学校プリントを共有',
    tint: '#F2E4D6',
    shotAlts: {
      ja: ['かぞくボードのリスト・カレンダー・ボードの3画面。予定も買い物もお知らせもひとつに'],
      en: ["Kazoku Board's Lists, Calendar and Board screens: plans, shopping and school updates in one place"],
    },
    screenshotCount: 2,
    searchImage: true,
    ctaNote: '家族の共有は無料。Proは買い切りで、一度の購入で家族みんなが使えます。サブスクではありません。',
    schemaCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Kazoku Board',
      description:
        'Share your family calendar, school handouts, shopping and places-to-go lists, pick-ups and things to bring via iCloud. Snap a handout to turn it into events. Sharing is free; one Pro purchase covers the whole family.',
      catch: 'Share family plans and school handouts',
      pricing: 'Free with ads · Pro one-time purchase',
      ctaNote: 'Family sharing is free. Pro is a one-time purchase that covers the whole family — no subscription.',
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
    shotAlts: {
      ja: [
        'ドット日和の天気画面。顔のついたドット絵の太陽と、気温・1時間ごとの予報',
        'ドット日和のへや表示。畳の部屋の窓から雨のドット絵の景色を眺める',
      ],
      en: [
        'Sky in Pixels weather screen: a pixel-art sun with a face, the temperature and an hourly forecast',
        'Sky in Pixels room view: watching pixel-art rain from the window of a tatami room',
      ],
    },
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
    shotAlts: {
      ja: [
        'ぴかにじのお絵かき画面。キラキラ光るペンやにじ色のペンで描いた絵',
        'ぴかにじのぬりえ画面。はみ出して塗っても、ねこの線が色の上に残っている',
      ],
      en: [
        'Pikaniji drawing screen with glowing and rainbow pen strokes',
        "Pikaniji colouring page: the cat's outline stays on top of the colour",
      ],
    },
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
    shotAlts: {
      ja: [
        'ちいさなあそびばのホーム画面。木の棚に7つのあそびが並ぶ',
        'ちいさなあそびばの池の水あそび。さわると波紋が広がり、ひよこや魚が浮かぶ',
      ],
      en: [
        'Little Playground home: seven games on a wooden shelf',
        'Little Playground pond: tap to make ripples around the ducks and fish',
      ],
    },
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
    devices: 'iPhone・iPhone Duo・iPad',
    pricing: '無料（広告あり）・Pro買い切り',
    catch: '写真・動画の顔や背景をかくす',
    tint: '#F1E7DA',
    shotAlts: {
      ja: ['かくすで写真の人物の顔に自動でモザイクがかかった画面。顔を自動検出、モザイクもスタンプも'],
      en: ['Kakusu automatically covering faces in a photo with a mosaic. Mosaic or stickers, your choice'],
    },
    screenshotCount: 2,
    searchImage: true,
    ctaNote: '無料で使えて、動画の長さによる保存制限もありません。Proは買い切りで、サブスクではありません。',
    schemaCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS',
    en: {
      name: 'Kakusu',
      description:
        'Automatically detect faces in photos and videos and hide them with mosaic, blur, solid fills, or stickers. Keep people and hide the background, too. Everything runs on your iPhone or iPad, with no watermarks. Free with ads; Pro removes ads with a one-time purchase.',
      catch: 'Hide faces and backgrounds in photos and videos',
      pricing: 'Free with ads · Pro one-time purchase',
      ctaNote: 'Free to use, with no length limit on saved videos. Pro is a one-time purchase — no subscription.',
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
    shotAlts: {
      ja: [
        'Mieruの縦フィード画面。写真アプリの動画を縦スクロールで再生する',
        'Mieruの一覧画面。動画が月ごとにまとまって並ぶ',
      ],
      en: ['Mieru vertical feed playing a video from Photos', 'Mieru library: videos grouped by month'],
    },
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
    shotAlts: {
      ja: [
        'シール集めのボード画面。写真の上にハートやスマイルのシールを貼っている',
        'シール集めのシール編集画面。切り抜いた人物にフチの太さと色を選ぶ',
      ],
      en: [
        'Sticky Club board: hearts, smileys and other stickers on a photo',
        'Sticky Club sticker editor: choose the border width and colour for a cut-out photo',
      ],
    },
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
