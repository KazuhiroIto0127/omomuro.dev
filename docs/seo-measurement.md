# 読みものの検索・クリック計測

## 実装したイベント

App Storeへの主要リンクでGA4カスタムイベント `app_store_click` を送ります。`NEXT_PUBLIC_GA_ID` が設定され、Googleタグが読み込まれた場合に送信します。送信失敗や未設定でもリンクは通常どおり開きます。

| パラメータ | 内容 |
| --- | --- |
| `app_slug` | アプリの識別子 |
| `placement` | `app_hero` / `app_footer` / `guide_intro` / `guide_footer` |
| `language` | `ja` / `en` |
| `page_path` | クリック元のパス。クエリ文字列・フラグメントは送らない |

ダウンロードや購入を測るイベントではありません。サイトからApp Storeへ進んだ回数です。既存のちいさなあそびば関連ページの計測除外を維持します。

## GA4側で必要な確認

1. 管理画面のリアルタイム／DebugViewで `app_store_click` の受信を確認する。
2. 必要に応じ、イベントスコープのカスタムディメンションとして `app_slug`、`placement`、`language`、`page_path` を登録する。
3. 探索でページと位置別のクリック数を比較する。PVだけでなく、記事閲覧からのクリック率も確認する。

管理画面の設定・実際の受信確認は、アカウント接続がないため未実施です。

## Search Consoleで確認する項目

実績はまだ取得していません。公開HTMLの200応答やsitemap掲載は、Googleへのインデックス登録を意味しません。

- ドメインプロパティ `sc-domain:omomuro.dev`（または既存のURLプレフィックス）を選ぶ。
- `https://omomuro.dev/sitemap.xml` の送信・読み込み状態を確認する。
- 日本語4記事・英語4記事をURL検査し、登録状態とGoogleが選んだcanonicalを確認する。
- 検索パフォーマンスでページを `/guides/` に絞り、クエリ・表示回数・クリック・CTR・平均掲載順位を出す。
- 公開直後はデータが少ないため、期間と件数を併記し、少数のクリックで結論を出さない。
- 表示回数が増えている疑問を記事に補い、内容と合わない検索語に合わせた水増しはしない。

連携またはエクスポートを受け取ったら、検索語別・ページ別に実績を確認します。サイト側の修正だけで、所有権確認やインデックス登録完了とは扱いません。

## 参照

- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/analytics/devguides/collection/ga4/events
- https://support.google.com/webmasters/answer/7576553
