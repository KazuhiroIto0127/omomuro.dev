import PikanijiDocument from '@/components/pikaniji/Document';
export default function Page() {
  return (
    <PikanijiDocument language="ja" title="プライバシーポリシー" description="ぴかにじのご案内">
      <p>最終更新日：2026年9月24日 / 提供者：Kazuhiro Ito（omomuro.dev）</p>
      <p>
        ぴかにじは、小さなお子さまが使うことを想定したお絵かきアプリです。保護者の方に安心してお使いいただけるよう、情報の取り扱いを以下のとおり定めます。
      </p>
      <h2>集める情報</h2>
      <p>
        アプリは、氏名・メールアドレス・位置情報・写真・連絡先・端末の識別子など、お子さまや保護者の方を特定できる情報を収集しません。アカウント登録もありません。お子さまが描いた絵や操作内容を、提供者のサーバーへ送信する仕組みはありません。
      </p>
      <h2>保存と削除</h2>
      <p>
        描いた絵、ぬりえの種類、音の設定をアプリ内（端末の中）に保存します。絵はギャラリーで長押しして削除できます。アプリを削除すると、アプリ内の絵もすべて削除されます。端末の設定によっては、アプリのデータがAppleのバックアップに含まれる場合があります。
      </p>
      <h2>カメラ・写真・マイク</h2>
      <p>
        アプリはカメラ、写真ライブラリ、マイク、位置情報へのアクセスを求めません。描いたときに鳴る音は、端末の中で作って鳴らしています。
      </p>
      <h2>アプリ内購入</h2>
      <p>
        購入と復元にはAppleのStoreKitを利用し、検証済みの購入情報ですべての機能の解除を確認します。購入画面の前には保護者確認（計算問題）があります。提供者のサーバーに購入履歴を送信する仕組みはなく、アプリはクレジットカード番号などの決済情報を取得しません。AppleのサービスにはAppleのプライバシーポリシーが適用されます。
      </p>
      <h2>広告・解析・外部リンク</h2>
      <p>
        アプリに広告や独自のアクセス解析SDKはありません。購入画面や設定画面など、保護者の方向けの画面は保護者確認のあとにだけ表示します。
      </p>
      <h2>このWebサイトについて</h2>
      <p>
        このWebサイトはアプリとは別に、Vercel Web Analytics・Speed Insightsを使用します。Google
        Analyticsが設定されている場合は閲覧情報などがGoogleへ送信されます。配信に伴いホスティング事業者がアクセス情報を処理することがあります。これらにアプリ内の絵や情報を渡すことはありません。
      </p>
      <h2>お問い合わせと変更</h2>
      <p>
        お問い合わせで送られたメールアドレスや内容は、お問い合わせへの対応に利用します。情報の取り扱いが変わる場合、このページと更新日を更新します。
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Privacy</a> /{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
      </p>
      <h2>お問い合わせ</h2>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Pikaniji%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        お問い合わせは保護者の方からお願いします。不具合の場合は機種・iOSとアプリのバージョン・操作手順をお知らせください。お子さまの個人情報や、パスワード・決済情報は送らないでください。
      </p>
    </PikanijiDocument>
  );
}
