import KazokuBoardDocument from '@/components/kazoku-board/Document';
export default function Page() {
  return (
    <KazokuBoardDocument language="en" title="Help & support" description="Using Kazoku Board and troubleshooting">
      <p>Last updated: October 6, 2026 / Provider: Kazuhiro Ito (omomuro.dev)</p>
      <h2>Plan family life together</h2>
      <p>
        Kazoku Board helps parents organize family events, tasks, school handouts, shared links, pickups, and packing
        lists. Requires iOS or iPadOS 26 or later.
      </p>
      <h2>Invite your family</h2>
      <p>
        Sign in to iCloud, create a family, and choose Invite family in Settings. Other members also need iCloud and can
        join by opening your invitation link. If a messaging app cannot open it, try Safari. Invitations, sharing, and
        editing are free. You can belong to one family at a time.
      </p>
      <h2>Calendar and handouts</h2>
      <p>
        Tap a calendar date to view or add events. Use the plus button on Board to scan a handout or add a link. Text
        recognition runs on your device and suggests events and tasks. Always compare extracted information with the
        original and correct it before saving.
      </p>
      <h2>Free and Pro</h2>
      <p>
        The free version shows ads and allows 10 handout imports per calendar month across the family. Saving several
        pages together counts as one import. Cancellation or failed saves do not count; deleting an imported handout
        does not restore the allowance. Events, tasks, and shared links are unlimited.
      </p>
      <h2>Purchase and restore Pro</h2>
      <p>
        A one-time Pro purchase by the family owner removes ads and the handout import limit for everyone in that
        family. This is not a subscription. Check the purchase screen for your local price. To restore, use the same
        Apple Account that made the purchase and select Restore purchases. Participants do not need to buy Pro
        individually.
      </p>
      <h2>Sync troubleshooting</h2>
      <p>
        Update all devices, check your network connection, and confirm that each person is signed in to iCloud. Changes
        and family Pro status may take time to sync through iCloud. Contact support before deleting the app or switching
        families if you have unsynced changes.
      </p>
      <h2>Language and school grades</h2>
      <p>
        The app supports Japanese and English using your device or app language. School-grade calculations follow the
        Japanese school system.
      </p>
      <h2>Contact</h2>
      <p>
        Include your device, OS and app versions, and the steps that caused the issue. Redact personal details from any
        documents you send. Do not send passwords or payment information.
      </p>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Kazoku%20Board%20Support">kazuhiroito0127@gmail.com</a>
      </p>
    </KazokuBoardDocument>
  );
}
