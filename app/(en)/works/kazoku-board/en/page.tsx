import { appPageMetadata } from '@/lib/metadata';
import { Shot, Shots } from '@/components/AppShots';
import KazokuBoardDocument from '@/components/kazoku-board/Document';

const img = (name: string) => `/images/apps/screens/kazoku-board/en/${name}.jpg`;
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Family plans, in one place',
  description:
    'For families with kids in daycare or school: share plans and handouts, and snap a handout to turn it into events and tasks.',
  seoTitle: 'Kazoku Board — Shared family calendar & school handouts',
  seoDescription:
    'Share your family calendar, school handouts, and lists for tasks, shopping and places to go via iCloud. Snap a handout to turn it into events. Sharing is free; one Pro purchase covers the whole family.',
} as const;

export const metadata = appPageMetadata({ slug: 'kazoku-board', ...doc });

export default function Page() {
  return (
    <KazokuBoardDocument {...doc}>
      <h2>Snap a handout, get events and tasks</h2>
      <p>
        Scan a school or daycare handout and on-device text recognition turns its dates and things to bring into
        suggested events and tasks. Review, correct and save. Keep multiple pages together and find them later on the
        Board.
      </p>
      <Shots>
        <Shot src={img('import')} alt="Handout scan results with suggested events and tasks" />
        <Shot src={img('board')} alt="The Board, listing handouts and links with previews" />
      </Shots>
      <h2>Your family&apos;s day, on one board</h2>
      <p>
        Home, Calendar, Lists and Board keep your family&apos;s plans and preparations in one place. The Board gathers
        handouts and shared links, with previews so you can find what you need at a glance.
      </p>
      <h2>A calendar with pickups and things to bring</h2>
      <p>
        Open a day to see its plans. Coordinate pickups and items to bring, with event times, responsibilities and due
        dates easy to read.
      </p>
      <Shots>
        <Shot src={img('belongings')} alt="Things to bring for each event" />
        <Shot src={img('lists')} alt="Shared lists for tasks, shopping and places to go" />
      </Shots>
      <h2>Tasks, shopping and places to go</h2>
      <p>
        Share family tasks, shopping and places to go. Track shopping quantities and purchases. Save places with maps
        and photos, then turn them into events. Tasks with deadlines also appear on the calendar.
      </p>
      <h2>Made for iPad and iPhone Duo, too</h2>
      <p>
        On iPad and on an unfolded iPhone Duo in landscape, Home switches to two columns so upcoming events and tasks
        sit side by side. The calendar shows the selected day&apos;s plans to the right, so you can see the month and
        the day at once.
      </p>
      <Shots>
        <Shot kind="duo" src={img('duo-home')} alt="Two-column Home on an unfolded iPhone Duo in landscape" />
      </Shots>
      <Shots>
        <Shot kind="ipad" src={img('ipad-calendar')} alt="iPad calendar with the selected day's plans on the right" />
      </Shots>
      <h2>Free family sharing. Pro is a one-time purchase.</h2>
      <p>
        Invite your family through iCloud to share and edit from iPhone and iPad. Sharing and adding events and tasks
        are free and unlimited. The free version includes ads and 10 handout imports per month across the family. A
        one-time Pro purchase by the owner removes ads and the import limit for the whole family. It&apos;s not a
        subscription, so there&apos;s nothing to pay each month.
      </p>
      <p>
        Supports Japanese and English. Requires iOS or iPadOS 26 or later. School-grade calculations follow the Japanese
        school system.
      </p>
    </KazokuBoardDocument>
  );
}
