import SealDocument from '@/components/seal-atsume/Document';
export default function Page() {
  return (
    <SealDocument language="en" title="Help & support" description="Information about Sticky Club">
      <h2>Getting started</h2>
      <p>
        Tap + in Stickers to take or choose a photo. Select the subjects to cut out, refine the mask if needed, choose
        an outline and shadow, then save. In Boards, tap + to create a board and add stickers. Drag to move, use the
        upper-right handle to rotate and the lower-right handle to resize, then export.
      </p>
      <h2>Free limits and purchase</h2>
      <p>
        Save up to 10 stickers and 1 board for free. A one-time purchase removes these limits. Actual storage capacity
        depends on available device space and resources.
      </p>
      <h2>Cutout problems</h2>
      <p>
        Detection may fail when subjects blend into the background. Try another photo or refine the areas to keep and
        erase manually.
      </p>
      <h2>Saving to Photos</h2>
      <p>
        Allow photo additions in iPhone Settings and check available storage. You can also save to Files through the
        share sheet.
      </p>
      <h2>Restoring a purchase</h2>
      <p>
        Use the same Apple Account used for your purchase, connect to the internet and tap Restore purchases in
        Settings. Pending purchases become available after approval.
      </p>
      <h2>Printing</h2>
      <p>
        Print-size boards export at 300 dpi. Check paper size, margins and scaling with your print service. Sticker
        paper availability varies by provider.
      </p>
      <h2>Keeping your creations</h2>
      <p>
        When you are signed in to iCloud, creations sync automatically across iPhone and iPad with the same Apple ID and
        return when you reinstall the app. If you do not use iCloud, export important creations as images or files
        before deleting the app.
      </p>
      <h2>Creations are not syncing</h2>
      <p>
        Make sure each device is signed in to iCloud with the same Apple ID and that you have enough iCloud storage. You
        can check the iCloud sync status in the app’s Settings. Changes may take a moment to appear depending on your
        connection.
      </p>
      <h2>Contact</h2>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Sticky%20Club%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        For bugs, include your iPhone model, iOS and app versions, and steps to reproduce. Do not send private photos,
        passwords or payment details.
      </p>
    </SealDocument>
  );
}
