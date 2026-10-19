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
            <strong>ぽんぽん はなばたけ（無料）</strong>
            <br />
            画面をタッチしたり、なぞったりすると、お花が咲きます。咲いた花をもう一度さわると色が変わります。
          </li>
          <li>
            <strong>いない いない ばあ（パック購入で解放）</strong>
            <br />
            3つの扉を開いて、隠れている動物たちとごあいさつします。
          </li>
          <li>
            <strong>かたちの おうち（パック購入で解放）</strong>
            <br />
            丸・三角・四角を、同じ形のおうちへ動かします。
          </li>
          <li>
            <strong>ふわふわ あわのうみ（パック購入で解放）</strong>
            <br />
            長押しで泡をふくらませ、指や端末の傾きで動かします。
          </li>
          <li>
            <strong>どうぶつ おんがくたい（パック購入で解放）</strong>
            <br />
            動物をタップして音を鳴らすと、演奏に仲間入りします。
          </li>
          <li>
            <strong>もぐもぐ キッチン（パック購入で解放）</strong>
            <br />
            動物がほしい食べ物を見て、お皿にのせます。
          </li>
          <li>
            <strong>ころころ おもちゃばこ（パック購入で解放）</strong>
            <br />
            端末を傾けたり指で動かしたりして、おもちゃを転がします。積み木を置いたり、星へ届けて花を咲かせたりできます。
          </li>
        </ul>
        <p>点数や時間制限はありません。小さなお子さまは保護者の方と一緒に、休憩をはさみながらお楽しみください。</p>
      </section>
      <section>
        <h2>購入と復元</h2>
        <p>
          「もっとあそぶパック」は、6つの遊びを解放する買い切り商品です。バージョン1.0で購入した方も、追加料金なしで6つすべてを遊べます。日本での価格は480円。月額料金・自動更新はありません。最終的な価格はアプリ内の購入画面でご確認ください。
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
          iOS 17以降のiPhone、iPadOS 17以降のiPadに対応します。
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
