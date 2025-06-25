# omomuro.dev プロジェクト概要

## 概要

このプロジェクトは、[omomuro.dev](https://omomuro.dev) のソースコードです。Next.js を使用して構築されたポートフォリオサイトです。

## 主要な技術スタック

*   **フレームワーク:** [Next.js](https://nextjs.org/)
*   **言語:** [TypeScript](https://www.typescriptlang.org/)
*   **スタイリング:** [Tailwind CSS](https://tailwindcss.com/)
*   **UIライブラリ:**
    *   [Headless UI](https://headlessui.com/)
    *   [Radix UI](https://www.radix-ui.com/)
*   **アニメーション:**
    *   [Framer Motion](https://www.framer.com/motion/)
    *   [Rive](https://rive.app/)
    *   [GSAP](https://gsap.com/)
    *   [Three.js](https://threejs.org/)
*   **リンター & フォーマッター:**
    *   [ESLint](https://eslint.org/)
    *   [Prettier](https://prettier.io/)

## ディレクトリ構造

*   `components/`: 再利用可能なReactコンポーネント
*   `pages/`: Next.jsのルーティングに対応するページコンポーネント
*   `public/`: 画像やフォントなどの静的ファイル
*   `styles/`: グローバルなスタイルシート
*   `contents/`: Markdown形式のコンテンツ（ブログ記事、作品紹介など）
*   `hooks/`: カスタムフック
*   `context/`: グローバルな状態管理

## 主要なコマンド

*   `npm run dev`: 開発サーバーを起動します。
*   `npm run build`: プロダクション用にプロジェクトをビルドします。
*   `npm run start`: ビルドされたアプリケーションを起動します。
*   `npm run lint`: ESLintを実行してコードを静的解析します。
*   `npm run format`: Prettierを実行してコードをフォーマットします。