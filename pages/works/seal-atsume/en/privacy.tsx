import SealDocument from '@/components/seal-atsume/Document';
export default function Page() {
  return (
    <SealDocument language="en" title="Privacy policy" description="Information about Seal Atsume">
      <p>Last updated: September 20, 2026. Provided by Kazuhiro Ito (omomuro.dev).</p>
      <h2>Photo processing</h2>
      <p>
        Subject detection, cutouts, outlines and shadows are processed on your device. Photos and analysis results are
        not sent to the developer’s servers. The app does not perform facial recognition to identify people.
      </p>
      <h2>Storage and deletion</h2>
      <p>
        Sticker images, board layouts and appearance settings are stored in the app. You can delete your creations in
        the app. Images used on a board remain while that board needs them. Deleting the app deletes its local
        creations. Original photos and exported images are not changed or deleted. Depending on device settings, app
        data may be included in Apple device backups.
      </p>
      <h2>Photos and camera access</h2>
      <p>
        The app reads photos you select using the system photo picker. Camera access is requested for taking photos, and
        add-only photo access for saving exported images. Permissions can be changed in iPhone Settings. Photos stored
        in iCloud may be downloaded through Apple services.
      </p>
      <h2>In-app purchases</h2>
      <p>
        Apple StoreKit handles purchases and restoration. The app uses verified purchase information to unlock storage
        limits. Purchase history is not sent to the developer’s servers, and the app does not receive payment details
        such as credit card numbers. Apple services are subject to Apple’s privacy policy.
      </p>
      <h2>Advertising, analytics and sharing</h2>
      <p>
        The app has no advertising or third-party analytics SDKs and requires no account. When you choose a destination
        in the share sheet, the image is passed to that destination. Its own privacy policy applies.
      </p>
      <h2>This website</h2>
      <p>
        This website is separate from the app and uses Vercel Web Analytics and Speed Insights. If Google Analytics is
        configured, browsing information may be sent to Google. Hosting providers may process access information when
        serving pages. Photos and analysis results from the app are not shared with these services.
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
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Seal%20Atsume%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        For bugs, include your iPhone model, iOS and app versions, and steps to reproduce. Do not send private photos,
        passwords or payment details.
      </p>
    </SealDocument>
  );
}
