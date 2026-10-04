import MieruDocument from '@/components/mieru/Document';
export default function Page() {
  return (
    <MieruDocument language="en" title="Mieru" description="A comfortable home for your videos.">
      <p>
        Browse videos from Photos and Files by month, enjoy a vertical feed, and keep favorites in playlists.
        Resume where you left off and watch at your preferred speed.
      </p>
      <p>
        Mieru is available for iPhone and iPad on the App Store. Version 1.1, with a collapsible iPad landscape
        sidebar and improved layouts, is under review. The Mac version is also under review.
      </p>
      <p><a href="https://apps.apple.com/app/id6818041206">Download free on the App Store</a></p>
      <h2>Made for your Mac, too</h2>
      <p>
        Use keyboard shortcuts for playback, 5-second seeking and speed changes. Open videos directly from
        Finder in separate windows without importing them into your library.
      </p>
      <h2>Free to use. Plus is a one-time purchase.</h2>
      <p>
        On iPhone and iPad, Mieru Plus removes banner ads and unlocks background playback and picture-in-picture.
        The Mac version has no ads and supports up to 10 library videos for free; Plus removes that limit and
        unlocks picture-in-picture. There are no monthly fees. See the in-app price before purchasing.
      </p>
    </MieruDocument>
  );
}
