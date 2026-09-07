# かくすの公開ページ

- 紹介：`/works/kakusu`（`contents/works/kakusu.md`。作品一覧にも表示）
- サポート：`/works/kakusu/support`
- プライバシー：`/works/kakusu/privacy`

アプリ公開前の下書き。2026-09-07時点ではユーザー希望によりメールアドレスを掲載せず、問い合わせ窓口は準備中としている。Appleの審査へ提出する前には、サポートページとアプリから利用できる連絡手段（問い合わせフォームなど）を用意する。メールアドレス自体が必須ではない。

紹介の公開準備中表示は、App Store公開後に正式なダウンロードリンクへ差し替える。未登録の価格は掲載しない。

アプリにアクセス解析SDKはないが、既存WebサイトはVercel Analytics・Speed Insightsと、環境変数設定時のGoogle Analyticsを使用する。ポリシーではこの違いを明示。公開時には本番の環境設定と記述を再確認する。

本番サイトへ反映してURLの応答を確認してから、iOSアプリの設定画面へサポート・プライバシーリンクを追加する。ホスティングはVercel。GitHubの `main` へのpushを本番デプロイに利用する。GitHub DeploymentsのProduction状態と本番URLの両方で反映を確認する。
