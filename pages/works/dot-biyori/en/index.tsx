import DotBiyoriDocument from '@/components/dot-biyori/Document';

export default function Page() {
  return (
    <DotBiyoriDocument
      language="en"
      title="Weather in pixel landscapes"
      description="A weather app for iPhone and iPad with changing scenes from Japan"
    >
      <p>
        <strong>Coming to the App Store.</strong>
      </p>
      <h2>Weather you can look at</h2>
      <p>
        Sky in Pixels changes its pixel-art sky and landscape to match the weather at your current or chosen location.
        Watch the scene shift through sun, rain, snow, day, dusk and night, with hourly and seven-day forecasts close at
        hand.
      </p>
      <h2>Travel through Japan</h2>
      <p>
        Explore ten scenes, including Tokyo Tower, tea fields beneath Mount Fuji, Shirakawa-go, Himeji Castle and Kouri
        Beach. Let the scenery change at random or keep a favorite on screen. Background music is off by default and can
        be enabled in Settings.
      </p>
      <h2>Free and PRO</h2>
      <p>
        Tokyo Tower and Ichihara Satoyama scenery are free. PRO unlocks every scene, more music, choosing a place and
        short weather summaries. Minute-by-minute rain forecasts appear where and when available. PRO offers monthly and
        yearly subscriptions and a one-time purchase. Check the app for current purchase prices.
      </p>
    </DotBiyoriDocument>
  );
}
