# omomuro.dev

イトウカズヒロが個人でつくっている iPhone・iPad アプリのサイトです。<https://omomuro.dev>

各アプリの紹介ページに加えて、App Store Connect に登録しているサポートページとプライバシーポリシーもここで配信しています。日本語と英語に対応しています。

## ページ構成

| ページ | 日本語 | 英語 |
| --- | --- | --- |
| トップ（アプリ一覧） | `/` | `/en` |
| つくった人（プロフィール・ギャラリー） | `/about` | `/about/en` |
| アプリ紹介 | `/works/<app>` | `/works/<app>/en` |
| サポート | `/works/<app>/support` | `/works/<app>/en/support` |
| プライバシーポリシー | `/works/<app>/privacy` | `/works/<app>/en/privacy` |

サポートとプライバシーのURLは App Store Connect に登録しているので、パスを変えないでください。一覧は [docs/url-inventory.md](docs/url-inventory.md) にあります。

ブラウザの言語に日本語が含まれていない人は、日本語ページから英語ページへ自動で移動します（`proxy.ts`）。検索ロボットは対象外で、フッターやアプリページで言語を選ぶと、その選択が Cookie に保存されて優先されます。

## 技術スタック

- Next.js 16（Pages Router）・React 19・TypeScript
- Tailwind CSS v4（色とフォントは `styles/globals.css` のトークン）
- Markdown（gray-matter・react-markdown）
- Vercel（ホスティング、Analytics・Speed Insights）

## 開発

Node.js 22 以降が必要です。

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド（sitemap も生成）
npm run lint    # ESLint
npx tsc --noEmit
```

## 主なファイル

```
lib/apps.ts            アプリの一覧（名前・説明・色・App Store URL・英語名など）
lib/i18n.ts            日英ページの対応表、言語の判定
proxy.ts               ブラウザの言語による英語ページへの振り分け
components/AppHero.tsx     アプリ紹介ページ上部（アイコン・App Store ボタン・スクリーンショット）
components/AppDocument.tsx 英語紹介・サポート・プライバシーの共通レイアウト
components/AppMeta.tsx     Smart App Banner と構造化データ（JSON-LD）
components/pages/      トップとつくった人のページ本体（日英共通）
contents/works/<app>.md    日本語のアプリ紹介文
pages/works/<app>/     サポート・プライバシー・英語ページ
public/images/apps/    アプリアイコンと、App Store から取り込んだスクリーンショット
```

## アプリを追加するとき

1. `lib/apps.ts` にアプリを1件追加する（英語名・英語の説明・App Store URL を含む）
2. アイコンを `public/images/apps/<app>.png` に、スクリーンショットを `public/images/apps/screens/<app>/{ja,en}/1.jpg, 2.jpg` に置く
3. `contents/works/<app>.md` に日本語の紹介文を書く
4. `pages/works/<app>/` にサポート・プライバシー・英語ページを作る（`components/<app>/Document.tsx` から `AppDocument` を使う）
5. `docs/url-inventory.md` に URL を追記する

アイコンとスクリーンショットは iTunes Search API（`https://itunes.apple.com/lookup?id=<id>&country=jp|us`）から取得できます。

## デプロイ

`main` に push すると Vercel が本番にデプロイします。ブランチを push するとプレビューが作られます。
