import SealDocument from '@/components/seal-atsume/Document';
export default function Page() {
  return (
    <SealDocument
      language="en"
      title="Your photos, your stickers"
      description="Cut out, collect and arrange your favorite moments."
    >
      <p>Now available on the App Store.</p>
      <p>
        <a href="https://apps.apple.com/us/app/id6814130810">Download free on the App Store</a>
      </p>
      <p>
        Take or choose a photo, select its subjects, refine the cutout and add colorful outlines or shadows. Collect
        your stickers and arrange them on boards with intuitive move, resize and rotate controls.
      </p>
      <h2>Make it yours</h2>
      <ul>
        <li>On-device photo cutouts with subject selection and manual refinement</li>
        <li>Print sizes, square boards and portrait layouts</li>
        <li>PNG and JPEG exports to Photos, Files or your favorite sharing destination</li>
        <li>Light, dark and system appearance</li>
        <li>Japanese and English support</li>
      </ul>
      <h2>Start for free</h2>
      <p>
        Save up to 10 stickers and 1 board for free. A one-time in-app purchase removes these limits. There is no
        recurring subscription. Check the purchase screen for your local price.
      </p>
      <h2>Print your creations</h2>
      <p>
        Export your board and use a print service that supports sticker paper. Check supported paper sizes, margins and
        scaling with your provider.
      </p>
      <h2>Private by design</h2>
      <p>
        Photos are processed on your iPhone. No account or ads. Creations sync across your iPhone and iPad through your
        own iCloud.
      </p>
    </SealDocument>
  );
}
