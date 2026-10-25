import { appPageMetadata } from '@/lib/metadata';
import Document from '@/components/little-playground/Document';

const doc = {
  language: 'en',
  page: 'support',
  title: 'Help & support',
  description: 'How to play Little Playground and get help when you need it.',
} as const;

export const metadata = appPageMetadata({ slug: 'little-playground', ...doc });

export default function Page() {
  return (
    <Document {...doc}>
      <section>
        <h2>What games are there?</h2>
        <ul>
          <li>
            <strong>Flower Garden</strong>
            <br />
            Tap or trace to make flowers bloom and meet the creatures that come to visit.
          </li>
          <li>
            <strong>Peekaboo</strong>
            <br />
            Play peekaboo with friendly animals.
          </li>
          <li>
            <strong>Shake &amp; Play</strong>
            <br />
            Tilt the device or use your finger to roll toys around the toy box.
          </li>
          <li>
            <strong>Piano</strong>
            <br />
            Touch the large keys to play sounds freely.
          </li>
          <li>
            <strong>Pond</strong>
            <br />
            Make ripples in a pond with floating ducks and fish.
          </li>
          <li>
            <strong>Munch Munch</strong>
            <br />
            Choose the food the bear wants and feed it.
          </li>
          <li>
            <strong>Flower Spinner</strong>
            <br />
            Swipe the petals to spin the flowers.
          </li>
        </ul>
        <p>
          There are no scores and no winning or losing. We recommend that young children play together with a parent and
          take breaks.
        </p>
      </section>
      <section>
        <h2>Purchases and restoring</h2>
        <p>
          Each game can be tried free for one minute per day. The More Play Pack is a one-time purchase that makes every
          game available without time limits. Existing purchasers keep access at no extra charge. The price in Japan is
          ¥480. There are no monthly fees or auto-renewals. Please check the final price on the in-app purchase screen.
        </p>
        <p>
          Tap the settings button at the top right of the home screen and answer a math question to open the parent
          area. You can buy the pack or tap Restore Purchases there.
        </p>
        <p>
          After changing devices or reinstalling, sign in to the App Store with the same Apple Account you used to
          purchase and try Restore Purchases. An internet connection is needed to load, buy or restore purchases.
        </p>
      </section>
      <section>
        <h2>FAQ</h2>
        <p>
          <strong>There is no sound.</strong>
          <br />
          Check the device&apos;s silent mode and volume, and the sound effects setting in the app. The app&apos;s sound
          effects follow the device&apos;s silent mode.
        </p>
        <p>
          <strong>Are there ads or logins?</strong>
          <br />
          There are no ads and no app accounts.
        </p>
        <p>
          <strong>Which devices are supported?</strong>
          <br />
          iPhone (including iPhone Duo) with iOS 17 or later and iPad with iPadOS 17 or later.
        </p>
      </section>
      <section>
        <h2>Contact (for parents)</h2>
        <address>
          <a href="mailto:kazuhiroito0127@gmail.com">kazuhiroito0127@gmail.com</a>
        </address>
        <p>
          Please tell us your device model, OS version and what is happening. Do not send your child&apos;s name, date
          of birth or photos, your Apple Account password, or payment information.
        </p>
      </section>
    </Document>
  );
}
