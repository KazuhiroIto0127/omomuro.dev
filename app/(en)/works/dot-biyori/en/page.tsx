import { appPageMetadata } from '@/lib/metadata';
import DotBiyoriDocument from '@/components/dot-biyori/Document';

const doc = {
  language: 'en',
  page: 'intro',
  title: 'Weather in pixel landscapes',
  description: 'A weather app for iPhone and iPad with pixel-art scenes from Japan and around the world',
  seoTitle: 'Sky in Pixels — Pixel art weather app for iPhone & iPad',
  seoDescription:
    'Your forecast as pixel-art landscapes from Japan and around the world, each changing with its local weather and time of day. Weather characters, a room with a window, and a pixel Earth, Moon and solar system. Free to start on iPhone and iPad.',
} as const;

export const metadata = appPageMetadata({ slug: 'dot-biyori', ...doc });

export default function Page() {
  return (
    <DotBiyoriDocument {...doc}>
      <h2>Weather you can look at</h2>
      <p>
        Sky in Pixels shows the weather at your current or chosen location in pixel art, with hourly and seven-day
        forecasts. You can use it without allowing location access.
      </p>
      <h2>Characters or a window</h2>
      <p>
        Swipe sideways to switch between Simple mode, with friendly weather characters, and Room mode, where you watch
        the weather through a window.
      </p>
      <h2>Travel through Japan and the world</h2>
      <p>
        Swipe down to Places: 10 scenes in Japan and 21 around the world, each changing with its own local weather and
        time. Keep going to reach a pixel Earth, Moon and solar system. Pick a scene from the Earth, check the moon
        phase, moonrise and moonset, and see where the planets are today. Background music is off by default.
      </p>
      <h2>Free and PRO</h2>
      <p>
        Tokyo Tower and Ichihara countryside scenes, the wooden desk room, and the Earth, Moon and solar system are
        free. The free version shows a banner ad at the bottom of the screen.
      </p>
      <p>
        PRO unlocks every scene in Japan and around the world, the tatami and attic rooms, short weather summaries,
        next-hour rain forecasts and more music, and removes ads. Minute-by-minute rain forecasts appear where and when
        available. PRO is a monthly or yearly auto-renewing subscription, with a one-week free trial for eligible users,
        or a one-time purchase.
      </p>
    </DotBiyoriDocument>
  );
}
