import MieruDocument from '@/components/mieru/Document';
export default function Page() {
  return (
    <MieruDocument language="ja" title="使い方・サポート" description="Mieru for iPhone">
      <p>最終更新日：2026年10月1日。提供者：Kazuhiro Ito（omomuro.dev）</p>
      <section>
        <h2>動画を追加</h2>
        <p>
          写真へのアクセスを許可すると動画を一覧で閲覧できます。「＋」からファイルをコピーまたは参照として追加できます。月の見出し・月チップで動画を探し、プレイリストにまとめられます。
        </p>
      </section>
      <section>
        <h2>無料とPlus</h2>
        <p>
          無料版には一覧のバナー広告があります。Mieru
          Plusは買い切りで広告非表示・バックグラウンド再生・PiPを解放します。日本での設定価格は480円です。購入前に表示されるAppleの価格を確認してください。
        </p>
      </section>
      <section>
        <h2>購入を復元</h2>
        <p>
          購入時と同じApple Accountを使い、設定の「購入を復元」を押してください。承認待ちの場合は承認後に利用できます。
        </p>
      </section>
      <section>
        <h2>動画が見つからない・再生できない</h2>
        <p>
          iPhoneの写真アクセス設定、元ファイルの存在、ネット接続、空き容量を確認してください。iCloudの動画はダウンロードに時間がかかる場合があります。
        </p>
      </section>
      <section>
        <h2>バックグラウンド・PiP</h2>
        <p>
          Plus購入後に利用できます。PiPボタンから小窓に切り替えられます。利用できない場合は購入の復元とiPhoneのPiP設定を確認してください。
        </p>
      </section>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Mieru">kazuhiroito0127@gmail.com</a>
      </p>
    </MieruDocument>
  );
}
