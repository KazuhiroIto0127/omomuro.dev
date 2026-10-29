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
| 読みもの（一覧） | `/guides` | `/guides/en` |
| 読みもの（記事） | `/guides/<slug>` | `/guides/<slug>/en` |

サポートとプライバシーのURLは App Store Connect に登録しているので、パスを変えないでください。一覧は [docs/url-inventory.md](docs/url-inventory.md) にあります。

ブラウザの言語に日本語が含まれていない人は、日本語ページから英語ページへ自動で移動します（`proxy.ts`）。検索ロボットは対象外で、フッターやアプリページで言語を選ぶと、その選択が Cookie に保存されて優先されます。

## 技術スタック

- Next.js 16（App Router）・React 19・TypeScript
- Tailwind CSS v4（色とフォントは `styles/globals.css` のトークン）
- Markdown（gray-matter・react-markdown）
- Vercel（ホスティング、Analytics・Speed Insights）

## 開発

Node.js 24.22.2（24系LTS）・npm 12.2.1 を使います。`.nvmrc` と `.node-version` で開発環境を揃え、Vercelも `package.json` の `engines.node` により24系でビルドします。

```bash
nvm install
nvm use
npm install --global npm@12.2.1
npm ci
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド（sitemap も生成）
npm run lint    # ESLint
npx tsc --noEmit
```

## 主なファイル

```
app/(ja)/                  日本語ページ（ルートレイアウトで <html lang="ja">）
app/(en)/                  英語ページ（<html lang="en">、URL は /…/en）
app/(ja)/works/[slug]/     日本語のアプリ紹介（contents/works/<app>.md を表示）
app/(ja)/works/<app>/      日本語のサポート・プライバシー
app/(en)/works/<app>/en/   英語の紹介・サポート・プライバシー
app/global-not-found.tsx   404 ページ（日英共通）
app/api/og/route.tsx       OG画像（?app=<slug>&lang=ja|en、または ?title=）
lib/apps.ts                アプリの一覧（名前・説明・料金・色・App Store URL・英語名など）
lib/metadata.ts            title・canonical・hreflang・OG・Smart App Banner をまとめて作る
lib/i18n.ts                日英ページの対応表、言語の判定
proxy.ts                   ブラウザの言語による英語ページへの振り分け
components/site/           ヘッダー・フッター・ルートの共通部分
components/AppHero.tsx     アプリ紹介ページ上部（アイコン・App Store ボタン・スクリーンショット）
components/AppDocument.tsx 英語紹介・サポート・プライバシーの共通レイアウト
components/AppJsonLd.tsx   構造化データ（JSON-LD）
components/pages/          トップとつくった人のページ本体（日英共通）
contents/works/<app>.md    日本語のアプリ紹介文
contents/guides/<slug>.md  読みもの（日本語）。英語は contents/guides/en/<slug>.md。frontmatter は title・description・publishedAt・updatedAt・apps
public/images/apps/        アプリアイコンと、App Store から取り込んだスクリーンショット
```

## アプリを追加するとき

1. `lib/apps.ts` にアプリを1件追加する（英語名・英語の説明・App Store URL を含む）
2. アイコンを `public/images/apps/<app>.png` に、スクリーンショットを `public/images/apps/screens/<app>/{ja,en}/1.jpg, 2.jpg` に置く
3. `contents/works/<app>.md` に日本語の紹介文を書く
4. `app/(ja)/works/<app>/{support,privacy}/page.tsx` と `app/(en)/works/<app>/en/{,support/,privacy/}page.tsx` を作る。各ページは `AppDocument` で本文を囲み、`export const metadata = appPageMetadata({ slug, language, page, title, description })` でメタ情報を出す
5. `docs/url-inventory.md` に URL を追記する

アイコンとスクリーンショットは `npm run sync:appstore` で App Store から取り込めます（日本のストア→`ja`、米国のストア→`en`）。

## デプロイ

`main` に push すると Vercel が本番にデプロイします。ブランチを push するとプレビューが作られます。

依存更新時は `npm outdated` で確認してください。ESLintはReactプラグインが対応する9系、TypeScriptはtypescript-eslintが対応する6.0系の最新を使用しています。各プラグインの対応後にメジャー更新します。`.claude/` のローカルツールはサイトのlint対象外です。

`@tailwindcss/typography` が固定している `postcss-selector-parser` は、GHSA-rj75-hqrm-r3gf の修正版6.1.5へ `overrides` で更新しています。上流が修正版へ更新されたら、この指定を削除できます。
