import DotBiyoriDocument from '@/components/dot-biyori/Document';

export default function Page() {
  return (
    <DotBiyoriDocument language="en" title="Privacy policy" description="How Sky in Pixels handles your information">
      <p>Last updated: October 4, 2026. Provided by Kazuhiro Ito (omomuro.dev).</p>
      <h2>Location and weather</h2>
      <p>
        If you choose Current Location and grant permission, the app obtains your device&apos;s location. It uses the
        location with Apple WeatherKit to retrieve the weather and with Apple location services to turn coordinates into
        a place name. If you do not grant permission, you can view weather for a selected place or the default location
        in Tokyo.
      </p>
      <p>
        Place search uses Apple MapKit. Search text and suggestions are processed by Apple&apos;s services. The selected
        place name and coordinates are stored on your device; its coordinates are used for WeatherKit requests. You can
        change location permission at any time in your device&apos;s Settings.
      </p>
      <h2>Storage on your device</h2>
      <p>
        Your selected place, scenery, display and music preferences are stored on your device. The developer does not
        operate a server that stores your location, searches, settings or weather history. Deleting the app removes its
        local data. Depending on your device settings, app data may be included in Apple backups.
      </p>
      <h2>In-app purchases</h2>
      <p>
        Monthly and yearly subscriptions and the one-time purchase are handled through Apple StoreKit. The app checks
        verified purchase status to enable PRO features. It does not send purchase history to the developer&apos;s
        servers or receive payment details such as credit card numbers.
      </p>
      <h2>Advertising and analytics</h2>
      <p>
        The free version displays Google AdMob banner ads. PRO does not display ads, and ads are not loaded until
        purchase status has been checked. For ad delivery, measurement, fraud prevention and diagnostics, Google may
        process IP addresses (which may be used to estimate a general location), device or app-related identifiers, ad
        impressions and interactions, and crash and performance data. Location obtained for weather and place search
        information are not passed to the advertising SDK.
      </p>
      <p>
        Before loading ads in the free version, the app requests Apple App Tracking Transparency (ATT) permission. If
        allowed, device advertising identifiers (IDFA) may be used for relevant ads and advertising measurement together
        with data from other companies’ apps and websites. If permission is denied, the app requests non-personalized
        ads and remains usable. Permission can be changed in device Settings → Privacy &amp; Security → Tracking.
        Non-personalized ads may still process information needed for ad delivery. Where required, Google&apos;s User
        Messaging Platform displays privacy choices. Ads are requested only when permitted. You can change available
        choices under Settings → Privacy → Ad privacy settings, where this option is required for your region and
        settings.
      </p>
      <p>
        Google&apos;s privacy policy applies to advertising data. The app has no developer-operated analytics SDK.
        Information handled by Apple services is subject to Apple&apos;s privacy policy.
      </p>
      <p>
        <a href="https://policies.google.com/technologies/ads">Google advertising and data use</a>
      </p>
      <h2>This website</h2>
      <p>
        This website is separate from the app and uses Vercel Web Analytics and Speed Insights. If Google Analytics is
        configured, browsing information may be sent to Google. Hosting providers may process access information to
        deliver the site. App location and preferences are not passed to this website&apos;s analytics.
      </p>
      <h2>Contact and changes</h2>
      <p>
        Email addresses and messages sent to support are used to respond to inquiries. If these practices change, this
        page and its update date will be revised.
      </p>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Sky%20in%20Pixels%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Privacy</a> /{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
      </p>
    </DotBiyoriDocument>
  );
}
