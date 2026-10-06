import KazokuBoardDocument from '@/components/kazoku-board/Document';
export default function Page() {
  return (
    <KazokuBoardDocument language="en" title="Privacy policy" description="How Kazoku Board handles information">
      <p>Last updated: October 6, 2026 / Provider: Kazuhiro Ito (omomuro.dev)</p>
      <h2>Family data and iCloud</h2>
      <p>
        Events, tasks, family names and birth dates, handout images and text, links, pickup details, and packing lists
        are stored on your device and in Apple iCloud and shared with invited family members. The developer does not
        operate a server that receives this family data. An Apple Account-related identifier is used to identify family
        members and support synchronization.
      </p>
      <h2>Camera, text recognition, and AI</h2>
      <p>
        The camera is used to scan handouts. Text recognition and AI analysis on supported devices run on your device.
        Handouts and analysis results are not sent to an external AI service.
      </p>
      <h2>Links and maps</h2>
      <p>
        Link previews communicate with the linked site or relevant services. Place search and maps use Apple MapKit;
        search terms and information about selected places may be processed by Apple. External websites have their own
        privacy policies.
      </p>
      <h2>Advertising</h2>
      <p>
        The free version uses Google AdMob. For ad delivery, measurement, fraud prevention, and diagnostics, Google may
        process IP addresses, approximate location, device or app identifiers, ad views and interactions, and crash or
        performance information. Family names, events, handouts, and extracted text are not included in ad requests. Pro
        families do not see ads.
      </p>
      <h2>Tracking choices</h2>
      <p>
        If you grant permission in the Apple tracking prompt, identifiers such as IDFA may be combined with data from
        other companies’ apps or websites for advertising and measurement. You can use the app without granting
        permission; in that case, the app requests non-personalized ads. Non-personalized ads may still process
        information needed for delivery and related purposes. Change permission in device Settings &gt; Privacy &amp;
        Security &gt; Tracking.
      </p>
      <h2>Purchases and usage</h2>
      <p>
        Purchases and restoration use Apple StoreKit. The app checks verified purchase status; the developer does not
        receive card or payment details. Family Pro status and import records containing an identifier, type, and
        creation date are shared through iCloud. Import records remain after a handout is deleted to preserve the
        monthly usage count.
      </p>
      <h2>Managing your data</h2>
      <p>
        You can edit and delete entries in the app. The family owner manages sharing and participants. Leaving a shared
        family does not delete the original data held by the owner. Deleting the app may leave family data in iCloud.
        Data may also be included in local recovery copies or Apple device backups.
      </p>
      <h2>This website</h2>
      <p>
        This website separately uses Vercel Web Analytics and Speed Insights. When Google Analytics is configured,
        browsing information may be sent to Google. Hosting providers may process access information to deliver the
        site. Family data from the app is not sent to website analytics.
      </p>
      <h2>Contact and updates</h2>
      <p>
        Email addresses and information sent to support are used to respond and provide assistance. Changes to these
        practices will be reflected on this page with an updated date.
      </p>
      <p>
        <a href="mailto:kazuhiroito0127@gmail.com?subject=Kazoku%20Board%20Support">kazuhiroito0127@gmail.com</a>
      </p>
      <p>
        <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a> /{' '}
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a> /{' '}
        <a href="https://developers.google.com/admob/ios/privacy/data-disclosure">Google AdMob data disclosure</a> /{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Privacy</a>
      </p>
    </KazokuBoardDocument>
  );
}
