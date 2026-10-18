import Link from 'next/link';
import Document from '@/components/little-playground/Document';

export default function Page() {
  return (
    <Document language="en" title="Privacy policy" description="How Little Playground handles information.">
      <p>Last updated: September 19, 2026</p>
      <p>Provider: Kazuhiro Ito (omomuro.dev)</p>
      <p>
        This is an English translation of the Japanese privacy policy. If there is any difference, the{' '}
        <Link href="/works/little-playground/privacy" hrefLang="ja">
          Japanese version
        </Link>{' '}
        takes precedence.
      </p>
      <section>
        <h2>Information the app collects</h2>
        <p>
          The app does not send to or collect for the developer any personal information about children or parents, play
          history, location, photos, audio, or the device&apos;s advertising identifier. It uses no advertising,
          analytics or tracking SDKs, and has no app accounts.
        </p>
        <p>
          The app uses the device&apos;s motion sensor for tilt controls. Sensor readings are processed in memory on the
          device only while playing and are never saved or sent. Tilt controls can be turned off to play with fingers
          instead.
        </p>
        <p>The sound effects on/off setting is saved on the device and is not sent to the developer&apos;s servers.</p>
      </section>
      <section>
        <h2>In-app purchases</h2>
        <p>
          Purchases and restoring purchases use Apple&apos;s App Store and StoreKit. The app checks purchase information
          processed by Apple on the device and unlocks purchased games. The developer never receives credit card
          information or Apple Account passwords. Apple&apos;s handling of information is governed by Apple&apos;s
          privacy policy.
        </p>
        <p>
          Purchase and restore buttons and links to external websites are placed in a parent area protected by a math
          question.
        </p>
      </section>
      <section>
        <h2>Contacting us</h2>
        <p>
          If a parent contacts us by email, we use the email address and message only to respond and resolve the issue.
          We do not use them for advertising or sell them. Please do not send a child&apos;s personal information or
          payment information. We delete information once it is no longer needed for support. To request deletion of
          your inquiry, please contact us at the address below.
        </p>
      </section>
      <section>
        <h2>This website</h2>
        <p>
          The support site is served using Vercel. These support and privacy pages have no ads or analytics. Vercel may
          process technical information such as IP addresses to deliver the site and keep it secure.
        </p>
      </section>
      <section>
        <h2>Changes and contact</h2>
        <p>We will update this page if the app&apos;s features or handling of information change.</p>
        <address>
          Operator: Kazuhiro Ito
          <br />
          <a href="mailto:kazuhiroito0127@gmail.com">kazuhiroito0127@gmail.com</a>
        </address>
      </section>
    </Document>
  );
}
