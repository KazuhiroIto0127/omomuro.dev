import MieruDocument from '@/components/mieru/Document';
export default function Page() {
  return (
    <MieruDocument language="en" title="Privacy policy" description="Mieru for iPhone">
      <p>Updated October 1, 2026. Provider: Kazuhiro Ito (omomuro.dev).</p>
      <section>
        <h2>Videos and viewing history</h2>
        <p>
          Videos, titles, thumbnails, playlists, favorites and playback positions are handled on your device. Mieru has
          no feature that uploads your videos or audio to the developer or advertising services. Only the permitted part
          of your photo library is accessed. Videos stored in iCloud may be downloaded from Apple when played.
        </p>
      </section>
      <section>
        <h2>Storage and deletion</h2>
        <p>
          Copy imports store a video inside the app; reference imports store access information for the original file.
          Copies and viewing history may be included in OS backups. You can delete app copies. Hiding a photo video does
          not delete the original, and can be undone in Settings. Removing the app deletes its local data. Manage
          originals and OS backups at their respective locations.
        </p>
      </section>
      <section>
        <h2>Advertising and consent</h2>
        <p>
          The free version displays Google AdMob banners. The Google Mobile Ads SDK may process approximate location
          derived from IP addresses, device and advertising identifiers, ad impressions and interactions, usage
          information, crash logs and performance information for advertising, measurement, fraud prevention and service
          improvement. Google consent messages are shown where required. You can revisit advertising privacy choices in
          Settings when available. Cross-app tracking follows your iOS permission, which you can change in device
          settings. You can use Mieru without allowing tracking. Banners are hidden when your Plus entitlement is
          confirmed.
        </p>
      </section>
      <section>
        <h2>In-app purchases</h2>
        <p>
          Mieru Plus purchases and restoration use Apple StoreKit. Verified transaction information determines access.
          Mieru does not send purchase history to a developer server or access your payment card details.
        </p>
      </section>
      <section>
        <h2>Sharing and support</h2>
        <p>
          When you select a sharing destination, your video is passed to that service. If you contact support by email,
          your email address and message are used to respond. You do not need to send private videos.
        </p>
      </section>
      <section>
        <h2>Website</h2>
        <p>
          This website is separate from the app. It uses Vercel Web Analytics and Speed Insights and, when configured,
          Google Analytics for website usage and performance. Hosting providers may process access information. Your
          in-app videos are not sent to these services.
        </p>
      </section>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Mieru">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a> ·{' '}
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> ·{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel</a>
      </p>
    </MieruDocument>
  );
}
