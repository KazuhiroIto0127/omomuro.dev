import { appPageMetadata } from '@/lib/metadata';
import SealDocument from '@/components/seal-atsume/Document';
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Your photos, your stickers',
  description: 'Make stickers from your photos, collect them, and stick them on anything you love.',
  seoTitle: 'Sticky Club — Turn your photos into stickers',
  seoDescription:
    'Cut out subjects from your photos automatically and turn them into stickers. Decorate in-app items like a phone case, laptop or skateboard. 23 starter stickers, PNG and JPEG export, iPhone and iPad. Free to start, no subscription.',
} as const;

export const metadata = appPageMetadata({ slug: 'seal-atsume', ...doc });

export default function Page() {
  return (
    <SealDocument {...doc}>
      <p>
        Make stickers from your photos, collect them, and stick them on the things you love. Decorate a phone case,
        laptop, skateboard, suitcase, fridge, water bottle or notebook inside the app, or use paper or one of your own
        photos as a board.
      </p>
      <h2>Stickers from your photos</h2>
      <p>
        Pick a photo or take one, and the subject is cut out automatically. You can also trace around it with your
        finger or choose a shape. Finish with an outline color, width and shadow. Make several stickers at once from
        multiple photos.
      </p>
      <h2>23 stickers to start</h2>
      <p>
        Hearts, smiley faces, butterflies, flip phones, cherries and other pop and Y2K motifs are included from the
        start. You can also make text and hand-drawn stickers.
      </p>
      <h2>Stick, arrange, repeat</h2>
      <ul>
        <li>Move, resize and rotate stickers</li>
        <li>Scatter or pack layouts</li>
        <li>Protect areas you don&apos;t want covered, like a camera or handle</li>
        <li>Export PNG or JPEG to Photos or Files (paper boards at 300 dpi)</li>
        <li>Sync stickers and boards through iCloud with the same Apple Account</li>
        <li>iPhone and iPad, in English and Japanese</li>
      </ul>
      <h2>Start for free</h2>
      <p>
        Make up to 12 of your own stickers and 6 boards for free. The 23 starter stickers don&apos;t count toward the
        limit. The free version shows banner ads. A one-time in-app purchase removes the limits and the ads. There is no
        subscription.
      </p>
      <p>
        Photo cutouts are processed on your device. Automatic cutout results vary by photo. Export important creations
        as images or files to keep them safe.
      </p>
    </SealDocument>
  );
}
