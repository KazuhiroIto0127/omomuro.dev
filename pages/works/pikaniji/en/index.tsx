import PikanijiDocument from '@/components/pikaniji/Document';
export default function Page() {
  return (
    <PikanijiDocument
      language="en"
      title="Glow drawing for little artists"
      description="Sparkly pens, rainbow crayons and coloring pages, with no ads."
    >
      <p>Preparing for release on the App Store.</p>
      <p>
        Pikaniji is a drawing app for children aged about 2 to 5. Big, text-free buttons make it easy to play even
        before kids can read. It works on both iPhone and iPad, including Apple Pencil.
      </p>
      <h2>Draw, stamp and color</h2>
      <ul>
        <li>Textured crayons, glowing sparkle pens with flying stars, and rainbow pens</li>
        <li>Stamps that pop with a sound</li>
        <li>Gentle sounds while drawing: xylophone, glockenspiel, bubbles or silent</li>
        <li>Coloring pages whose outlines stay on top of every stroke</li>
        <li>Unlimited undo and a press-and-hold clear button to prevent accidents</li>
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
