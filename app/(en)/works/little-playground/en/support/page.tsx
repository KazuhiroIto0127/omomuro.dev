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
            <strong>Flower Garden (free)</strong>
            <br />
            Tap or trace on the screen to make flowers bloom. Touch a flower again to change its color.
          </li>
          <li>
            <strong>Peekaboo! (unlocked with the pack)</strong>
            <br />
            Open three doors to say hello to the hiding animals.
          </li>
          <li>
            <strong>Shape House (unlocked with the pack)</strong>
            <br />
            Move circles, triangles and squares into the house with the same shape.
          </li>
          <li>
            <strong>Bubble Sea (unlocked with the pack)</strong>
            <br />
            Press and hold to blow bubbles, then move them with your finger or by tilting the device.
          </li>
          <li>
            <strong>Animal Band (unlocked with the pack)</strong>
            <br />
            Tap an animal to play its sound and it joins the band.
          </li>
          <li>
            <strong>Yummy Kitchen (unlocked with the pack)</strong>
            <br />
            See what the animal wants and put it on the plate.
          </li>
          <li>
            <strong>Toy Box (unlocked with the pack)</strong>
            <br />
            Tilt the device or use your finger to roll the toys. Place blocks, or send a toy to the star to make a
            flower bloom.
          </li>
        </ul>
        <p>
          There are no scores or time limits. We recommend that young children play together with a parent and take
          breaks.
        </p>
      </section>
      <section>
        <h2>Purchases and restoring</h2>
        <p>
          The More Play Pack is a one-time purchase that unlocks six games. If you bought it in version 1.0, all six
          games are included at no extra cost. The price in Japan is ¥480. There are no monthly fees or auto-renewals.
          Please check the final price on the in-app purchase screen.
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
          iPhone with iOS 17 or later and iPad with iPadOS 17 or later.
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
