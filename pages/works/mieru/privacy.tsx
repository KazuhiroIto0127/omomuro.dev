import MieruDocument from '@/components/mieru/Document';
export default function Page() {
  return (
    <MieruDocument language="ja" title="プライバシーポリシー" description="Mieru for iPhone">
      <p>最終更新日：2026年10月1日。提供者：Kazuhiro Ito（omomuro.dev）</p>
      <section>
        <h2>動画と利用履歴</h2>
        <p>
          写真ライブラリ・ファイルの動画、タイトル、サムネイル、プレイリスト、お気に入り、再生位置は端末内で扱います。動画や音声を提供者のサーバーや広告サービスにアップロードする機能はありません。写真ライブラリは許可された範囲のみ読み込みます。iCloud上の動画を再生する際はAppleのサービスから取得される場合があります。
        </p>
      </section>
      <section>
        <h2>保存と削除</h2>
        <p>
          取り込み時にコピーを選ぶと動画をアプリ内に保存し、参照を選ぶと元ファイルへのアクセス情報を保存します。コピーや利用履歴はOSのバックアップ対象になる場合があります。アプリ内のコピーは削除できます。写真の動画の非表示は元動画を削除せず、設定から元に戻せます。アプリを削除するとアプリ内のデータは削除されます。元の写真・ファイルやOSのバックアップは各保存先で管理してください。
        </p>
      </section>
      <section>
        <h2>広告と同意</h2>
        <p>
          無料版にはGoogle AdMobのバナー広告を表示します。Google Mobile Ads
          SDKはIPアドレスから推定される大まかな位置、端末・広告識別子、広告の表示・操作、利用状況、クラッシュ・性能情報などを処理する場合があります。広告配信・測定・不正防止・サービス改善に使用されます。地域に応じてGoogleの同意画面を表示します。必要な場合は設定から広告のプライバシー選択を変更できます。アプリをまたいだ追跡はiOSの許可に従い、許可は端末の設定で変更できます。拒否してもアプリを使えます。Plusの権利を確認できた場合はバナーを表示しません。
        </p>
      </section>
      <section>
        <h2>アプリ内購入</h2>
        <p>
          Mieru
          PlusはAppleのStoreKitで購入・復元します。アプリは検証済みの取引情報を使い権利を確認します。提供者のサーバーへ購入履歴を送信する仕組みはありません。支払いカード情報をアプリが取得することはありません。
        </p>
      </section>
      <section>
        <h2>共有・お問い合わせ</h2>
        <p>
          共有先を選ぶと動画が選択したサービスに渡されます。メールでお問い合わせいただいた場合、メールアドレスとご連絡内容を対応に使用します。動画などの私的な内容を送る必要はありません。
        </p>
      </section>
      <section>
        <h2>Webサイト</h2>
        <p>
          このWebサイトはアプリとは別です。Vercel Web Analytics・Speed
          Insightsによる閲覧・性能計測、設定されている場合はGoogle
          Analyticsによる閲覧計測を行います。配信事業者はアクセス情報を処理する場合があります。アプリ内の動画をこれらへ送信しません。
        </p>
      </section>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Mieru">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a> ·{' '}
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> ·{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel</a>
      </p>
    </MieruDocument>
  );
}
