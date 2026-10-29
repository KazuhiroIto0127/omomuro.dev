import { appPageMetadata } from '@/lib/metadata';
import { Shot, Shots } from '@/components/AppShots';
import Document from '@/components/kakei-pocket/Document';

const img = (name: string) => `/images/apps/screens/kakei-pocket/en/${name}.jpg`;
const doc = {
  language: 'en',
  page: 'intro',
  title: 'Kakei Pocket',
  description:
    'On your own or with your partner. Record expenses by hand or from receipts, and see how your spending changes.',
  seoTitle: 'Kakei Pocket — Shared budget app for couples',
  seoDescription:
    'Share a household budget via iCloud. Scan and save receipts, set a monthly budget and compare spending. No bank linking. Sharing is free; Pro is a one-time purchase.',
} as const;

export const metadata = appPageMetadata({ slug: 'kakei-pocket', ...doc });

export default function Page() {
  return (
    <Document {...doc}>
      <h2>A few taps, or a receipt</h2>
      <p>
        Choose an amount and category to record an expense. Add notes and line items when you need them. No bank or
        credit card connection is required.
      </p>
      <p>
        Take a receipt photo or choose one from your library, then check the date, amount, store and items before
        saving. Text recognition runs on your device and works without Apple Intelligence.
      </p>
      <Shots>
        <Shot src={img('add')} alt="Entry screen with an amount keypad and categories" />
        <Shot src={img('receipt')} alt="Recognized receipt items and the original receipt image" />
      </Shots>
      <h2>Keep the receipt, too</h2>
      <p>
        Save receipt images with your entries to reopen, zoom in or export to Photos or Files. Saved images sync with
        the ledger through iCloud and are available to your partner when sharing. Choose whether to save images in
        Settings.
      </p>
      <h2>Find your spending and see the pace</h2>
      <p>
        Pick a date in History or find entries by store or category. Reports bring together your spending pace, category
        breakdown, comparisons with last month and individual spending. Mid-month comparisons use the same number of
        days from last month.
      </p>
      <p>
        Set a monthly budget to see what remains and a daily guideline. With Pro, explore income and expense trends over
        six months or a year.
      </p>
      <Shots>
        <Shot src={img('history')} alt="History calendar showing daily spending and entries" />
        <Shot src={img('report')} alt="Monthly report with spending pace and category comparisons" />
      </Shots>
      <h2>Shared expenses and your own spending</h2>
      <p>
        Share a ledger with one partner through iCloud and separate shared expenses from each person&apos;s spending. You can
        also use the app on your own.
      </p>
      <p>
        Start your bookkeeping month on any day from 1 to 28, optionally moving it to the previous Friday when it falls
        on a weekend. Save rent and subscriptions as fixed expenses, then record them with one tap when paid. Entries
        are never created automatically.
      </p>
      <h2>Room to see more on iPad and iPhone Duo</h2>
      <p>
        On iPad and an unfolded iPhone Duo in landscape, Home shows your balance and recent entries side by side. Review
        your reports on the larger screen, too.
      </p>
      <Shots>
        <Shot
          kind="duo"
          src={img('duo-home')}
          alt="Landscape iPhone Duo Home showing the balance and recent entries side by side"
        />
      </Shots>
      <Shots>
        <Shot kind="ipad" src={img('ipad-report')} alt="Monthly report on iPad" />
      </Shots>
      <h2>Bring your records, or try a sample first</h2>
      <p>
        Import records from a spreadsheet using Settings → Import CSV, checking the entry count and date range first.
        Export records as CSV or JSON. On first launch, try the sample ledger to explore recording and reports.
      </p>
      <h2>Free sharing. One Pro purchase for both of you.</h2>
      <p>
        Recording, editing, sharing, fixed expenses and exports are free. The free version includes ads, 10 successful
        receipt scans per calendar month per device and up to three custom categories.
      </p>
      <p>
        A one-time Pro purchase by the ledger owner removes ads and unlocks unlimited receipt scans and custom
        categories, plus six-month and yearly trends for both members. Your partner does not need to buy Pro separately.
        There is no subscription.
      </p>
      <p>
        Supports Japanese and English on iPhone and iPad running iOS/iPadOS 26 or later. All amounts use Japanese yen.
        Receipt recognition is designed for Japanese receipts.
      </p>
    </Document>
  );
}
