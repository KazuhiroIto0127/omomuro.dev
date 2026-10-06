import KazokuBoardDocument from '@/components/kazoku-board/Document';
export default function Page() {
  return (
    <KazokuBoardDocument
      language="en"
      title="Family plans, in one place"
      description="A shared calendar and school-handout board for parents."
    >
      <p>Preparing for release on the App Store.</p>
      <p>
        Keep family events, tasks, school handouts, links, pickups, and packing lists together. Scan handouts with
        on-device text recognition, review the results, and save suggested events or tasks.
      </p>
      <h2>Free sharing. One purchase for family Pro.</h2>
      <p>
        Invite your family through iCloud for free. The free version includes ads and 10 handout imports per month
        across the family, with unlimited events and tasks. A one-time Pro purchase by the owner removes ads and the
        handout import limit for the whole family.
      </p>
      <p>
        Supports Japanese and English. Requires iOS or iPadOS 26 or later. School-grade calculations follow the Japanese
        school system.
      </p>
    </KazokuBoardDocument>
  );
}
