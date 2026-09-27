import DotBiyoriDocument from '@/components/dot-biyori/Document';

export default function Page() {
  return (
    <DotBiyoriDocument
      language="en"
      title="Help & support"
      description="Using Sky in Pixels and resolving common issues"
    >
      <h2>Weather and scenery</h2>
      <p>
        Allow location access in the app to show weather for your current location. You can still view Tokyo weather
        without granting access, or select another place in Settings. Scenery can be set to change randomly or stay
        fixed.
      </p>
      <h2>Weather is not updating</h2>
      <p>
        Check your internet connection and tap Retry if it appears. If you use Current Location, check the app&apos;s
        location permission in device Settings. Minute-by-minute rain forecasts are not available in every region or at
        every time.
      </p>
      <h2>Music</h2>
      <p>
        Background music is off by default. Turn on Play BGM in Settings to choose a track and volume. If you cannot
        hear it, check these settings and your device volume.
      </p>
      <h2>PRO purchases and restoration</h2>
      <p>
        Tokyo Tower and Ichihara Satoyama scenery are free. PRO unlocks all scenery and additional features. Choose a
        monthly or yearly subscription, or a one-time purchase. If a purchase is missing, connect to the internet with
        the Apple Account used to buy it and tap Restore Purchases on the purchase screen.
      </p>
      <p>
        To view or cancel a subscription, open your iPhone or iPad Settings, select your Apple Account, then
        Subscriptions. Deleting the app does not cancel a subscription.
      </p>
      <h2>Contact</h2>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Sky%20in%20Pixels%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        For bugs, include your device model, iOS and app versions, and steps to reproduce. Do not send passwords or
        payment details.
      </p>
    </DotBiyoriDocument>
  );
}
