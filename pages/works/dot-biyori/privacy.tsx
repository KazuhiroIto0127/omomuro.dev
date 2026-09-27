import DotBiyoriDocument from '@/components/dot-biyori/Document';

export default function Page() {
  return (
    <DotBiyoriDocument language="ja" title="プライバシーポリシー" description="ドット日和における情報の取り扱い">
      <p>最終更新日：2026年9月27日 / 提供者：Kazuhiro Ito（omomuro.dev）</p>
      <h2>位置情報と天気</h2>
      <p>
        「現在地」を選び、位置情報を許可した場合に限り、端末の位置を取得します。位置は現在地の天気を取得するためAppleのWeatherKitに渡し、地名の表示のためAppleの位置情報サービスで住所への変換にも利用します。位置情報を許可しない場合は、指定した地点、または東京の天気を表示できます。
      </p>
      <p>
        「地点を指定」の検索にはAppleのMapKitを利用します。検索語句や候補の取得はAppleのサービスで処理されます。選んだ地点の名前と座標は端末内に保存し、座標をWeatherKitでの天気取得に利用します。位置情報の許可は端末の「設定」からいつでも変更できます。
      </p>
      <h2>端末内の保存</h2>
      <p>
        選んだ地点、景色、表示、BGMなどの設定は端末内に保存します。提供者の独自サーバーに位置、検索語句、設定や天気の履歴を保存する仕組みはありません。アプリを削除すると端末内のアプリデータも削除されます。端末の設定によってはAppleのバックアップに含まれる場合があります。
      </p>
      <h2>アプリ内購入</h2>
      <p>
        月額・年額のサブスクリプションと買い切りの購入・復元にはAppleのStoreKitを使用します。アプリは検証済みの購入状態を確認してPRO機能を提供します。提供者のサーバーへ購入履歴を送信せず、クレジットカード番号などの決済情報も取得しません。
      </p>
      <h2>広告と解析</h2>
      <p>
        アプリに広告や提供者によるアクセス解析SDKはありません。Appleのサービスで取り扱われる情報には、Appleのプライバシーポリシーが適用されます。
      </p>
      <h2>このWebサイト</h2>
      <p>
        このWebサイトはアプリとは別に、Vercel Web AnalyticsとSpeed Insightsを利用します。Google
        Analyticsが設定されている場合は閲覧情報がGoogleへ送信されることがあります。サイトの配信に伴い、ホスティング事業者がアクセス情報を処理する場合があります。アプリ内の位置や設定をこのサイトの解析に渡すことはありません。
      </p>
      <h2>お問い合わせ・改定</h2>
      <p>
        お問い合わせでいただいたメールアドレスと内容は、返信とサポートのために利用します。取り扱いを変更する際は、このページと更新日を改めます。
      </p>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Dot%20Biyori%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Appleのプライバシーポリシー</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercelのデータ取り扱い</a> /{' '}
        <a href="https://policies.google.com/privacy?hl=ja">Googleのプライバシーポリシー</a>
      </p>
    </DotBiyoriDocument>
  );
}
