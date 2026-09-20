import SealDocument from '@/components/seal-atsume/Document';
export default function Page() {
  return (
    <SealDocument
      language="ja"
      title="プライバシーポリシー"
      description="シール集めのご案内"
    >
      <p>最終更新日：2026年9月20日 / 提供者：Kazuhiro Ito（omomuro.dev）</p>
      <h2>写真の加工</h2>
      <p>
        写真の対象物の検出・切り抜き・ふちや影の加工は端末内で行います。提供者のサーバーへ写真や解析結果を送信しません。個人を識別するための顔認証は行いません。
      </p>
      <h2>保存と削除</h2>
      <p>
        ステッカー画像、ボードの配置、表示テーマをアプリ内に保存します。作品はアプリ内で削除できます。ボードで使用中の画像は、そのボードに必要な間は残ります。アプリを削除するとアプリ内の作品も削除されます。写真アプリの元画像や書き出した画像は変更・削除しません。端末の設定によりアプリのデータがAppleのバックアップに含まれる場合があります。
      </p>
      <h2>写真・カメラへのアクセス</h2>
      <p>
        システムの写真選択機能で利用者が選んだ写真を読み込みます。撮影時はカメラ、書き出した画像を写真へ保存する際は写真への追加許可を求めます。許可はiPhoneの設定で変更できます。iCloud上の写真はAppleのサービスからダウンロードされる場合があります。
      </p>
      <h2>アプリ内購入</h2>
      <p>
        購入と復元にはAppleのStoreKitを利用し、検証済みの購入情報で保存上限の解除を確認します。提供者のサーバーに購入履歴を送信する仕組みはありません。アプリはクレジットカード番号などの決済情報を取得しません。AppleのサービスにはAppleのプライバシーポリシーが適用されます。
      </p>
      <h2>広告・解析・共有</h2>
      <p>
        アプリに広告や独自のアクセス解析SDKはなく、アカウント登録もありません。利用者が共有機能で送信先を選んだときは、その画像が選んだサービスへ渡されます。共有先のポリシーをご確認ください。
      </p>
      <h2>このWebサイトについて</h2>
      <p>
        このWebサイトはアプリとは別に、Vercel Web Analytics・Speed Insightsを使用します。Google
        Analyticsが設定されている場合は閲覧情報などがGoogleへ送信されます。配信に伴いホスティング事業者がアクセス情報を処理することがあります。これらにアプリ内の写真や解析結果を渡すことはありません。
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
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Seal%20Atsume%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        不具合の場合は機種・iOSとアプリのバージョン・操作手順をお知らせください。個人情報を含む写真や、パスワード・決済情報は送らないでください。
      </p>
    </SealDocument>
  );
}
