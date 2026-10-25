import { appPageMetadata } from '@/lib/metadata';
import PikanijiDocument from '@/components/pikaniji/Document';
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Glow drawing for little artists',
  description: 'Sparkly pens, rainbow crayons and coloring pages, with no ads.',
  seoTitle: 'Pikaniji — Ad-free drawing & coloring app for kids',
  seoDescription:
    'Glowing pens, rainbow crayons and coloring pages for kids aged 2–5. No ads, no accounts, and big buttons that work before kids can read. Apple Pencil supported on iPad.',
} as const;

export const metadata = appPageMetadata({ slug: 'pikaniji', ...doc });

export default function Page() {
  return (
    <PikanijiDocument {...doc}>
      <p>
        Pikaniji is a drawing app for children aged about 2 to 5. Big, text-free buttons make it easy to play even
        before kids can read. It works on iPhone and iPad, including Apple Pencil, and on iPhone Duo you can draw across
        the large unfolded display with a one-row toolbar in landscape.
      </p>
      <h2>Draw, stamp and color</h2>
      <ul>
        <li>Textured crayons, glowing sparkle pens with flying stars, and rainbow pens</li>
        <li>Stamps that pop with a sound</li>
        <li>Gentle sounds while drawing: xylophone, glockenspiel, bubbles or silent</li>
        <li>Coloring pages whose outlines stay on top of every stroke</li>
        <li>Unlimited undo, two- and three-finger taps for undo and redo, and a press-and-hold clear button</li>
        <li>A gallery to save drawings and continue them later</li>
      </ul>
      <h2>No ads, one-time purchase</h2>
      <p>
        There are no ads. For free, you can use 1 coloring page, 2 stamps and save up to 2 drawings. A one-time in-app
        purchase unlocks all coloring pages, stamps and sounds and removes the save limit. There is no recurring
        subscription, and purchases are protected by a parental gate.
      </p>
      <h2>For parents</h2>
      <p>
        No account is needed, and the app does not collect or send your child&apos;s information. Drawings are stored
        only on the device. The in-app settings explain how to use Guided Access to keep your child in the app.
      </p>
    </PikanijiDocument>
  );
}
