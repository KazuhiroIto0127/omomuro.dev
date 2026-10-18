import Image from 'next/image';
import Document from '@/components/little-playground/Document';

export default function Page() {
  return (
    <Document
      language="en"
      seoTitle="Little Playground — Touch-and-play games for kids aged 0–5"
      seoDescription="Touch to make flowers bloom and animals peek out. Seven gentle games for kids aged 0–5 to play with a parent on iPhone and iPad. No ads, no accounts. The flower game is free; the rest unlock with a one-time purchase."
      title="Little Playground"
      description="Touch, discover, and play again. Gentle games for little ones aged 0–5 and their parents, on iPhone and iPad."
    >
      <h2>Touch, discover, and play again.</h2>
      <p>
        Tap the screen and flowers bloom, animals peek out, and shapes find their homes. Little Playground is packed
        with the simple joy of touching things with small fingers.
      </p>
      <p>
        It is designed for children around 0 to 5 years old to enjoy together with a parent. Pick the game that suits
        their age and interests.
      </p>
      <Image
        src="/images/works/little-playground-home.png"
        alt="Home screen with flower, animal and shape games to choose from"
        width={2064}
        height={2752}
        sizes="(min-width: 768px) 680px, 90vw"
      />

      <h2>Seven games</h2>
      <ul>
        <li>
          <strong>Flower Field</strong> <span lang="ja">（ぽんぽん はなばたけ）</span>: Flowers pop up wherever you tap
          or trace.
        </li>
        <li>
          <strong>Peekaboo</strong> <span lang="ja">（いない いない ばあ）</span>: Open the doors to find out which
          animal is hiding.
        </li>
        <li>
          <strong>Shape Houses</strong> <span lang="ja">（かたちの おうち）</span>: Move circles, triangles and squares
          into the house with the same shape. Drag or tap.
        </li>
        <li>
          <strong>Rolling Toy Box</strong> <span lang="ja">（ころころ おもちゃばこ）</span>: Tilt the device to roll the
          ball to the star and make a flower bloom. Place blocks and ramps to build things up and knock them down, or
          move them with your finger.
        </li>
        <li>
          <strong>Bubble Sea</strong> <span lang="ja">（ふわふわ あわのうみ）</span>: Press and hold to blow a bubble,
          then float it around with your finger or by tilting. Pop a big bubble and it splits into little ones.
        </li>
        <li>
          <strong>Animal Band</strong> <span lang="ja">（どうぶつ おんがくたい）</span>: Layer three instruments on an
          eight-beat loop to make your own rhythm. Arrange the sounds and change the tempo.
        </li>
        <li>
          <strong>Yum-Yum Kitchen</strong> <span lang="ja">（もぐもぐ キッチン）</span>: Pick ingredients, then cut, mix
          and feed them to the animals. The juice color and the animals&apos; reactions change with what you combine and
          how you cook.
        </li>
      </ul>
      <Image
        src="/images/works/little-playground-toybox.png"
        alt="Rolling Toy Box: move ramps and balls to reach the star"
        width={1320}
        height={2868}
        sizes="(min-width: 768px) 680px, 90vw"
      />
      <Image
        src="/images/works/little-playground-band.png"
        alt="Animal Band: layer three instruments to make a rhythm"
        width={1320}
        height={2868}
        sizes="(min-width: 768px) 680px, 90vw"
      />

      <h2>The flower game is free. More when you want it.</h2>
      <p>
        Flower Field is free to play. The More Play Pack is a one-time purchase (¥480 in Japan) that unlocks the other
        six games. There is no subscription.
      </p>
      <p>
        The app has no ads, no analytics SDKs and no accounts. Purchases and external links sit behind a parent check.
        Tilt sensor readings are used on the device only to control the games and are never saved or sent.
      </p>
      <p>Requires iOS 17 or later on iPhone, or iPadOS 17 or later on iPad. Available in Japanese.</p>
    </Document>
  );
}
