import { appPageMetadata } from '@/lib/metadata';
import MieruDocument from '@/components/mieru/Document';
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Mieru',
  description: 'A comfortable home for your videos.',
  seoTitle: 'Mieru — A calm video player for your photo library',
  seoDescription:
    'Browse videos from Photos and Files by month, in playlists or a vertical feed, on iPhone, iPad and Mac. Free to use; Mieru Plus is a one-time purchase that adds background play and Picture in Picture.',
} as const;

export const metadata = appPageMetadata({ slug: 'mieru', ...doc });

export default function Page() {
  return (
    <MieruDocument {...doc}>
      <p>
        Browse videos from Photos and Files by month, enjoy a vertical feed, and keep favorites in playlists. Resume
        where you left off and watch at your preferred speed.
      </p>
      <p>
        Mieru is available for iPhone, iPad and Mac on the App Store. On iPad, like on Mac, your library is on the left
        with the player and a collapsible info panel on the right. On iPhone Duo, unfold for a two-column layout, or
        hold it like a book to use each side of the fold. In the feed, vertical videos are never cropped on wide
        screens.
      </p>
      <h2>Made for your Mac, too</h2>
      <p>
        Use keyboard shortcuts for playback, 5-second seeking and speed changes. Open videos directly from Finder in
        separate windows without importing them into your library.
      </p>
      <h2>Free to use. Plus is a one-time purchase.</h2>
      <p>
        On iPhone and iPad, Mieru Plus removes banner ads and unlocks background playback and picture-in-picture. The
        Mac version has no ads and supports up to 10 library videos for free; Plus removes that limit and unlocks
        picture-in-picture. There are no monthly fees. See the in-app price before purchasing.
      </p>
    </MieruDocument>
  );
}
