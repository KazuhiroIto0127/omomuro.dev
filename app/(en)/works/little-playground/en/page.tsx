import { appPageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Document from '@/components/little-playground/Document';

const doc = {
  language: 'en',
  page: 'intro',
  title: 'Little Playground',
  description: 'Tap, trace and tilt. Seven gentle mini-games for little ones aged 0–5 and their grown-ups.',
  seoTitle: 'Little Playground — Touch-and-play games for kids aged 0–5',
  seoDescription:
    'Make flowers bloom, play peekaboo with animals, explore a piano and a pond. Seven mini-games for kids aged 0–5 to enjoy with a grown-up on iPhone and iPad. No ads, no accounts. Try each game for one minute a day; a one-time purchase removes the time limit.',
} as const;

export const metadata = appPageMetadata({ slug: 'little-playground', ...doc });

const imageProps = { width: 1000, height: 2173, sizes: '(min-width: 768px) 680px, 90vw' } as const;

export default function Page() {
  return (
    <Document {...doc}>
      <h2>Touch, discover, and play again.</h2>
      <p>
        Tap, trace and tilt. Little Playground is a collection of mini-games where everyday gestures lead to playful
        sounds and movement, on iPhone and iPad.
      </p>
      <p>
        It is designed for children around 0 to 5 years old to enjoy together with a grown-up. Pick a game from the
        shelf on the home screen, whatever they feel like today.
      </p>
      <Image
        src="/images/works/little-playground-garden-en.jpg"
        alt="Flower Garden: tap and flowers pop up on a little island"
        {...imageProps}
      />

      <h2>Seven games</h2>
      <ul>
        <li>
          <strong>Flower Garden</strong> <span lang="ja">（ぽんぽん はなばたけ）</span>: Tap or trace to make flowers
          bloom. Grow a colorful garden and meet the creatures that come to visit.
        </li>
        <li>
          <strong>Peekaboo</strong> <span lang="ja">（いない いない ばあ）</span>: Play peekaboo with friendly animals
          and enjoy their expressions and movements.
        </li>
        <li>
          <strong>Shake &amp; Play</strong> <span lang="ja">（ふりふり おもちゃばこ）</span>: Tilt the device or use
          your finger to roll toys around the toy box.
        </li>
        <li>
          <strong>Piano</strong> <span lang="ja">（ぽろん ピアノ）</span>: Touch the large keys to explore musical
          sounds on a three-dimensional wooden piano.
        </li>
        <li>
          <strong>Pond</strong> <span lang="ja">（ちゃぷちゃぷ いけ）</span>: Play with water in a pond with floating
          ducks. Make ripples and watch the fish and water move.
        </li>
        <li>
          <strong>Munch Munch</strong> <span lang="ja">（ぱくぱく どうぶつ）</span>: See which food the bear wants and
          offer it something to eat. A simple pretend-play activity.
        </li>
        <li>
          <strong>Flower Spinner</strong> <span lang="ja">（くるくる おはな）</span>: Swipe the petals to spin them.
          Three colorful flowers each spin independently.
        </li>
      </ul>
      <p>There are no scores and no winning or losing. Sound effects can be turned off in the parent area.</p>
      <Image src="/images/works/little-playground-piano-en.jpg" alt="Piano: tap the big wooden keys" {...imageProps} />
      <Image
        src="/images/works/little-playground-toybox-en.jpg"
        alt="Shake & Play: roll the toys around the toy box"
        {...imageProps}
      />

      <h2>Try every game for a minute a day.</h2>
      <p>
        Each game can be tried free for one minute per day. The More Play Pack is a one-time purchase (¥480 in Japan)
        that makes every game available without time limits. Existing purchasers keep access at no extra charge. There
        is no subscription or auto-renewal.
      </p>
      <p>
        The app has no ads, no analytics SDKs and no accounts. Purchases, restoring and external links sit in a parent
        area protected by an addition question. Tilt sensor readings are used on the device only to control the games
        and are never saved or sent. Young children should play with a grown-up and take breaks together.
      </p>
      <p>
        Requires iOS 17 or later on iPhone (including iPhone Duo), or iPadOS 17 or later on iPad. Available in English
        and Japanese.
      </p>
    </Document>
  );
}
