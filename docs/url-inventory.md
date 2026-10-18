# 固定URL一覧

サイト構成を変えるときに守るURLです。変える場合は必ず 301 リダイレクト（`next.config.js` の `redirects`）を入れてください。
正規ドメインは https://omomuro.dev（www なし）。

## 変更禁止：App Store Connect に登録しているURL

サポートURL・プライバシーポリシーURLとして App Store Connect に登録しているURLです。パスを変えないでください。

- https://omomuro.dev/works/dot-biyori/support
- https://omomuro.dev/works/dot-biyori/privacy
- https://omomuro.dev/works/dot-biyori/en/support
- https://omomuro.dev/works/dot-biyori/en/privacy
- https://omomuro.dev/works/kakei-pocket/support
- https://omomuro.dev/works/kakei-pocket/privacy
- https://omomuro.dev/works/kakei-pocket/en/support
- https://omomuro.dev/works/kakei-pocket/en/privacy
- https://omomuro.dev/works/kakusu/support
- https://omomuro.dev/works/kakusu/privacy
- https://omomuro.dev/works/kakusu/en/support
- https://omomuro.dev/works/kakusu/en/privacy
- https://omomuro.dev/works/kazoku-board/support
- https://omomuro.dev/works/kazoku-board/privacy
- https://omomuro.dev/works/kazoku-board/en/support
- https://omomuro.dev/works/kazoku-board/en/privacy
- https://omomuro.dev/works/little-playground/support
- https://omomuro.dev/works/little-playground/privacy
- https://omomuro.dev/works/mieru/support
- https://omomuro.dev/works/mieru/privacy
- https://omomuro.dev/works/mieru/en/support
- https://omomuro.dev/works/mieru/en/privacy
- https://omomuro.dev/works/pikaniji/support
- https://omomuro.dev/works/pikaniji/privacy
- https://omomuro.dev/works/pikaniji/en/support
- https://omomuro.dev/works/pikaniji/en/privacy
- https://omomuro.dev/works/seal-atsume/support
- https://omomuro.dev/works/seal-atsume/privacy
- https://omomuro.dev/works/seal-atsume/en/support
- https://omomuro.dev/works/seal-atsume/en/privacy

## 英語のサポート・プライバシー（2026-10-18 追加、App Store Connect には未登録）

- https://omomuro.dev/works/little-playground/en/support
- https://omomuro.dev/works/little-playground/en/privacy

## アプリ紹介ページ

- https://omomuro.dev/works/dot-biyori
- https://omomuro.dev/works/dot-biyori/en
- https://omomuro.dev/works/kakei-pocket
- https://omomuro.dev/works/kakei-pocket/en
- https://omomuro.dev/works/kakusu
- https://omomuro.dev/works/kakusu/en
- https://omomuro.dev/works/kazoku-board
- https://omomuro.dev/works/kazoku-board/en
- https://omomuro.dev/works/little-playground
- https://omomuro.dev/works/little-playground/en
- https://omomuro.dev/works/mieru
- https://omomuro.dev/works/mieru/en
- https://omomuro.dev/works/pikaniji
- https://omomuro.dev/works/pikaniji/en
- https://omomuro.dev/works/seal-atsume
- https://omomuro.dev/works/seal-atsume/en

## その他

- https://omomuro.dev/
- https://omomuro.dev/en
- https://omomuro.dev/about
- https://omomuro.dev/about/en

## リダイレクト（廃止したURL）

`/works`・`/labs`・`/labs/*` → `/`、`/gallery` → `/about#gallery`（いずれも 308）。昔の作品ページ（Star Catcher など）は削除済みで 404。

## 次のアップデート時に App Store Connect で直すこと（2026-10-19 確認）

マーケティングURL・サポートURLはバージョンごとの項目なので、配信中のバージョンでは変えられません。各アプリの次のバージョンを申請するときに直してください。

- **www を外す**（今もリダイレクトで開けるが、正規URLにそろえる）
  - ドット日和（ja・en-US・ko・zh-Hant）、ちいさなあそびば（ja・en-US）、かくす（ja・en-US・en-AU・en-CA・en-GB）、Mieru（iOS・macOS の ja・en-US）
- **ちいさなあそびばの en-US を英語ページに**
  - マーケティングURL: https://omomuro.dev/works/little-playground/en
  - サポートURL: https://omomuro.dev/works/little-playground/en/support
