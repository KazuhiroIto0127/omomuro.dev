import MieruDocument from '@/components/mieru/Document';
export default function Page() {
  return (
    <MieruDocument language="en" title="Help & support" description="Mieru for iPhone">
      <p>Updated October 1, 2026. Provider: Kazuhiro Ito (omomuro.dev).</p>
      <section>
        <h2>Add videos</h2>
        <p>
          Allow photo access to browse your videos. Use + to import files as copies or references. Browse by month
          headings and month chips, and organize videos into playlists.
        </p>
      </section>
      <section>
        <h2>Free and Plus</h2>
        <p>
          The free version has banner ads on list screens. Mieru Plus is a one-time purchase that removes ads and
          unlocks background playback and picture-in-picture. The configured Japanese price is ¥480. Check the price
          shown by Apple before purchasing.
        </p>
      </section>
      <section>
        <h2>Restore purchases</h2>
        <p>
          Use the Apple Account you purchased with and select Restore purchases in Settings. Pending purchases become
          available after approval.
        </p>
      </section>
      <section>
        <h2>Missing videos or playback problems</h2>
        <p>
          Check photo permissions, whether referenced files still exist, your internet connection and available storage.
          iCloud videos may take time to download.
        </p>
      </section>
      <section>
        <h2>Background playback and PiP</h2>
        <p>
          These features require Plus. Use the PiP button to open a floating player. If unavailable, restore purchases
          and check your iPhone PiP settings.
        </p>
      </section>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Mieru">kazuhiroito0127@gmail.com</a>
      </p>
    </MieruDocument>
  );
}
