import { appPageMetadata } from '@/lib/metadata';
import PlaygroundDocument from '@/components/little-playground/Document';

const doc = {
  language: 'ja',
  page: 'support',
  title: '使い方・サポート',
} as const;

export const metadata = appPageMetadata({ slug: 'little-playground', ...doc });

export default function Page() {
  return (
    <PlaygroundDocument {...doc}>
      <p>
        <a href="https://apps.apple.com/jp/app/id6812550189">App Storeでダウンロード</a>
      </p>
      <section>
        <h2>どんな遊びがあるの？</h2>
        <ul>
          <li>
            <strong>ぽんぽん はなばたけ</strong>
            <br />
            さわったり、なぞったりすると花が咲きます。遊びに来る生き物たちにも会えます。
          </li>
          <li>
            <strong>いない いない ばあ</strong>
            <br />
            かわいい動物たちと、いないいないばあ。表情や動きを楽しめます。
          </li>
          <li>
            <strong>ふりふり おもちゃばこ</strong>
            <br />
            端末をかたむけたり指で動かしたりして、おもちゃを転がします。
          </li>
          <li>
            <strong>ぽろん ピアノ</strong>
            <br />
            大きな鍵盤にさわって、自由に音を鳴らせます。
          </li>
          <li>
            <strong>ちゃぷちゃぷ いけ</strong>
            <br />
            ひよこが浮かぶ池で水あそび。さわって波紋を広げます。
          </li>
          <li>
            <strong>ぱくぱく どうぶつ</strong>
            <br />
            クマがほしい食べ物を選んで、食べさせてあげます。
          </li>
          <li>
            <strong>くるくる おはな</strong>
            <br />
            花びらを指でくるっと回して遊びます。
          </li>
        </ul>
        <p>点数や勝ち負けはありません。小さなお子さまは保護者の方と一緒に、休憩をはさみながらお楽しみください。</p>
      </section>
      <section>
        <h2>購入と復元</h2>
        <p>
          どの遊びも1日1分まで無料でおためしできます。「もっとあそぶパック」は、すべての遊びが時間制限なしになる買い切り商品です。購入済みの方は追加料金なしでご利用いただけます。日本での価格は480円。月額料金・自動更新はありません。最終的な価格はアプリ内の購入画面でご確認ください。
        </p>
        <p>
          ホーム画面右上の設定ボタンから、計算問題に答えると保護者向け画面が開きます。購入や「購入を復元」はこの画面で行えます。
        </p>
        <p>
          機種変更や再インストール後は、購入したときと同じApple AccountでApp
          Storeにサインインして「購入を復元」をお試しください。購入情報の取得・購入・復元にはインターネット接続が必要です。
        </p>
      </section>
      <section>
        <h2>よくあるご質問</h2>
        <p>
          <strong>音が出ません。</strong>
          <br />
          本体の消音設定と音量、アプリ内の効果音設定をご確認ください。アプリの効果音は本体の消音設定に従います。
        </p>
        <p>
          <strong>広告やログインはありますか？</strong>
          <br />
          広告やアプリ独自のアカウント登録はありません。
        </p>
        <p>
          <strong>対応端末は？</strong>
          <br />
          iOS 17以降のiPhone（iPhone Duoを含む）、iPadOS 17以降のiPadに対応します。
        </p>
      </section>
      <section>
        <h2>お問い合わせ（保護者の方へ）</h2>
        <address>
          <a href="mailto:kazuhiroito0127@gmail.com">kazuhiroito0127@gmail.com</a>
        </address>
        <p>
          端末の種類、OSのバージョン、困っていることをお知らせください。お子さまの氏名・生年月日・写真や、Apple
          Accountのパスワード、決済情報は送らないでください。
        </p>
      </section>
    </PlaygroundDocument>
  );
}
