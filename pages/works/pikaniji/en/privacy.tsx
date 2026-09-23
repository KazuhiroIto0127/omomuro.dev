import PikanijiDocument from '@/components/pikaniji/Document';
export default function Page() {
  return (
    <PikanijiDocument language="en" title="Privacy policy" description="Information about Pikaniji">
      <p>Last updated: September 24, 2026. Provided by Kazuhiro Ito (omomuro.dev).</p>
      <p>
        Pikaniji is a drawing app designed for young children. This policy explains how information is handled so
        parents can use the app with confidence.
      </p>
      <h2>Information we collect</h2>
      <p>
        The app does not collect names, email addresses, location, photos, contacts, device identifiers or any other
        information that identifies children or parents. No account is required. Drawings and activity are not sent to
        the developer’s servers.
      </p>
      <h2>Storage and deletion</h2>
      <p>
        Drawings, selected coloring pages and sound settings are stored in the app on your device. You can delete a
        drawing by pressing and holding it in the gallery. Deleting the app deletes all of its drawings. Depending on
        device settings, app data may be included in Apple device backups.
      </p>
      <h2>Camera, photos and microphone</h2>
      <p>
        The app does not request access to the camera, photo library, microphone or location. Drawing sounds are
        generated on the device.
      </p>
      <h2>In-app purchases</h2>
      <p>
        Apple StoreKit handles purchases and restoration. The app uses verified purchase information to unlock all
        features. A parental gate (a math question) is shown before the purchase screen. Purchase history is not sent to
        the developer’s servers, and the app does not receive payment details such as credit card numbers. Apple
        services are subject to Apple’s privacy policy.
      </p>
      <h2>Advertising, analytics and external links</h2>
      <p>
        The app has no advertising or third-party analytics SDKs. Screens intended for parents, such as purchase and
        settings, are shown only after the parental gate.
      </p>
      <h2>This website</h2>
      <p>
        This website is separate from the app and uses Vercel Web Analytics and Speed Insights. If Google Analytics is
        configured, browsing information may be sent to Google. Hosting providers may process access information when
        serving pages. Drawings and information from the app are not shared with these services.
      </p>
      <h2>Contact and updates</h2>
      <p>
        Email addresses and messages sent to support are used to respond to inquiries. Changes to information handling
        will be reflected on this page with an updated date.
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Privacy</a> /{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
      </p>
      <h2>Contact</h2>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Pikaniji%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        Please contact us as a parent or guardian. For bugs, include your device model, iOS and app versions, and steps
        to reproduce. Do not send your child&apos;s personal information, passwords or payment details.
      </p>
    </PikanijiDocument>
  );
}
