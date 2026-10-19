import { appPageMetadata } from '@/lib/metadata';
import KazokuBoardDocument from '@/components/kazoku-board/Document';
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Family plans, in one place',
  description: 'A shared calendar and school-handout board for parents.',
  seoTitle: 'Kazoku Board — Shared family calendar & school handouts',
  seoDescription:
    'Share your family calendar, to-dos, school handouts, pick-ups and things to bring via iCloud. Snap a handout to turn it into events. Sharing is free; one Pro purchase covers the whole family.',
} as const;

export const metadata = appPageMetadata({ slug: 'kazoku-board', ...doc });

export default function Page() {
  return (
    <KazokuBoardDocument {...doc}>
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
