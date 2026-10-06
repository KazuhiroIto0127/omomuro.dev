import KazokuBoardDocument from '@/components/kazoku-board/Document';
export default function Page() {
  return (
    <KazokuBoardDocument language="ja" title="プライバシーポリシー" description="かぞくボードにおける情報の取り扱い">
      <p>最終更新日：2026年10月6日 / 提供者：Kazuhiro Ito（omomuro.dev）</p>
      <h2>家族データとiCloud</h2>
      <p>
        予定、やること、家族の名前や生年月日、プリント画像・本文、リンク、送迎や持ち物の情報は端末とAppleのiCloudに保存され、招待した家族の間で共有されます。開発者独自のサーバーへ家族データを送る仕組みはありません。Apple
        Accountに関連する識別子は、家族内での本人確認と同期のために使用します。
      </p>
      <h2>カメラ・文字認識・AI</h2>
      <p>
        カメラはプリントの撮影に使います。文字認識と、対応端末で利用できるAI解析は端末内で行います。プリントや解析結果を外部のAIサービスへ送信しません。
      </p>
      <h2>リンクと地図</h2>
      <p>
        リンクのプレビュー取得ではリンク先等のサービスと通信します。場所の検索や地図にはAppleのMapKitを使い、検索語句や選択地点に関する情報がAppleのサービスで処理される場合があります。外部リンクを開いた際はリンク先のプライバシーポリシーが適用されます。
      </p>
      <h2>広告</h2>
      <p>
        無料版ではGoogle
        AdMobの広告を表示します。広告配信、効果測定、不正防止、診断のため、GoogleがIPアドレス、おおよその位置、端末・アプリに関する識別子、広告の表示や操作、クラッシュや性能情報等を処理する場合があります。家族の名前、予定、プリント、文字認識結果を広告リクエストに含めません。Proの家族には広告を表示しません。
      </p>
      <h2>トラッキングの選択</h2>
      <p>
        Appleのトラッキング確認画面で許可した場合、IDFA等が他社のアプリ・Webサイトのデータと組み合わされた広告配信や効果測定に使われる場合があります。許可しなくてもアプリは利用でき、その場合は非パーソナライズ広告を要求します。非パーソナライズ広告でも配信等に必要な情報は処理される場合があります。許可は端末の「設定」→「プライバシーとセキュリティ」→「トラッキング」から変更できます。
      </p>
      <h2>購入と利用件数</h2>
      <p>
        購入と復元はAppleのStoreKitで処理し、アプリは検証済みの購入状態を確認します。開発者はクレジットカード等の決済情報を取得しません。家族のPro状態と、プリント取り込みの識別子・種類・作成日時をiCloudで共有します。プリントを削除しても、その月の利用件数を保つため取り込み記録は残ります。
      </p>
      <h2>データの管理</h2>
      <p>
        登録した内容はアプリ内で編集・削除できます。共有参加者や共有の管理は家族のオーナーが行います。共有から抜けることは、オーナーが保有する元データの削除を意味しません。アプリを削除してもiCloudの家族データは残る場合があります。端末内バックアップやAppleのバックアップにデータが含まれる場合があります。
      </p>
      <h2>このWebサイト</h2>
      <p>
        このサイトはアプリとは別にVercel Web AnalyticsとSpeed Insightsを利用します。Google
        Analyticsが設定されている場合は閲覧情報がGoogleへ送信されることがあります。配信に伴いホスティング事業者がアクセス情報を処理する場合があります。アプリ内の家族データをサイトの解析へ渡すことはありません。
      </p>
      <h2>お問い合わせ・改定</h2>
      <p>
        お問い合わせでいただくメールアドレスと内容は、返信とサポートに使用します。取り扱いを変更する際は、このページと更新日を改めます。
      </p>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Kazoku%20Board%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> /{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a> /{' '}
        <a href="https://developers.google.com/admob/ios/privacy/data-disclosure">Google AdMob data disclosure</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Privacy</a>
      </p>
    </KazokuBoardDocument>
  );
}
