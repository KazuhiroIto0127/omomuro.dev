import { appPageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Document from '@/components/little-playground/Document';

const doc = {
  language: 'en',
  page: 'intro',
  title: 'Little Playground',
  description:
    'Touch, discover, and play again. Gentle games for little ones aged 0–5 and their parents, on iPhone and iPad.',
  seoTitle: 'Little Playground — Touch-and-play games for kids aged 0–5',
  seoDescription:
    'Touch to make flowers bloom and animals peek out. Seven gentle games for kids aged 0–5 to play with a parent on iPhone and iPad. No ads, no accounts. The flower game is free; the rest unlock with a one-time purchase.',
} as const;

export const metadata = appPageMetadata({ slug: 'little-playground', ...doc });

export default function Page() {
  return (
    <Document {...doc}>
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
          <strong>Flower Garden</strong> <span lang="ja">（ぽんぽん はなばたけ）</span>: Tap or trace to make flowers
          bloom. Touch a flower again to change its color, and butterflies come to visit as the garden grows.
        </li>
        <li>
          <strong>Peekaboo!</strong> <span lang="ja">（いない いない ばあ）</span>: Open three doors to say hello to the
          animals. Once you&apos;ve met everyone, they hide again for the next round.
        </li>
        <li>
          <strong>Shape House</strong> <span lang="ja">（かたちの おうち）</span>: Move circles, triangles and squares
          into the house with the same shape. Drag or tap.
        </li>
        <li>
          <strong>Bubble Sea</strong> <span lang="ja">（ふわふわ あわのうみ）</span>: Press and hold to blow a bubble,
          then float it around with your finger or by tilting. Pop a big bubble and it splits into little ones.
        </li>
        <li>
          <strong>Animal Band</strong> <span lang="ja">（どうぶつ おんがくたい）</span>: Tap an animal to play its sound
          and it joins the band. The animals play along to the rhythm.
        </li>
        <li>
          <strong>Yummy Kitchen</strong> <span lang="ja">（もぐもぐ キッチン）</span>: See what the animal wants and put
          it on the plate. When everything is there, the animal eats and a new order begins.
        </li>
        <li>
          <strong>Toy Box</strong> <span lang="ja">（ころころ おもちゃばこ）</span>: Tilt the device or use your finger
          to roll the toys. Place blocks, or send a toy to the star to make a flower bloom.
        </li>
      </ul>
      <p>There are no scores or time limits. Sound effects and tilt controls can be turned off in Settings.</p>
      <Image
        src="/images/works/little-playground-toybox.png"
        alt="Toy Box: roll the toys to reach the star"
        width={1320}
        height={2868}
        sizes="(min-width: 768px) 680px, 90vw"
      />
      <Image
        src="/images/works/little-playground-band.png"
        alt="Animal Band: the animals play along to the rhythm"
        width={1320}
        height={2868}
        sizes="(min-width: 768px) 680px, 90vw"
      />

      <h2>The flower game is free. More when you want it.</h2>
      <p>
        Flower Garden is free to play. The More Play Pack is a one-time purchase (¥480 in Japan) that unlocks the other
        six games. There is no subscription.
      </p>
      <p>
        The app has no ads, no analytics SDKs and no accounts. Purchases and external links sit behind a parent check.
        Tilt sensor readings are used on the device only to control the games and are never saved or sent.
      </p>
      <p>Requires iOS 17 or later on iPhone, or iPadOS 17 or later on iPad. Available in English and Japanese.</p>
    </Document>
  );
}
