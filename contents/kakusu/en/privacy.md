Provider: Kazuhiro Ito (omomuro.dev)

Last updated: October 14, 2026.

## Photos, videos, and face data

Kakusu processes only the photos and videos you select, using Apple's Vision framework on your device. Face data processed by the app includes detected face rectangles (position and size), their positions over time in videos, randomly assigned identifiers for face tracks within the current project, cropped face thumbnails, thumbnail quality scores, and numerical image feature representations of face crops for comparing their visual similarity within that project.

This data is used only to find and follow faces, apply blur, mosaic, or stickers, show face-selection thumbnails, combine similar face tracks within the same project, and restore your unfinished edits. It is not used to identify a person's real-world identity, authenticate anyone, build profiles across projects, target advertisements, or train machine-learning models.

## Face data storage, retention, and deletion

To let you resume editing, the app saves a copy of the selected photo or video and the current project's face data and editing settings in its private storage on your device. This includes face rectangles, track identifiers, thumbnails, quality scores, and image feature representations when generated. Working media and editing data are excluded from device backups. Temporary import and preview files may also be created in the app's temporary storage.

There is no fixed retention period or automatic expiry for the current project. Its working media and face data remain until you delete the working data, successfully replace the project by importing another photo or video, or delete the app. Closing and reopening the app does not delete the project. Use **Settings & help > Delete working data** to delete the current working copy, saved face-analysis and editing data, and the app's export copy. Temporary import and preview files are removed after use or when the preview is closed or replaced; iOS may also purge temporary files. Deleting the app removes its local data; offloading the app is not the same as deleting it.

Original media and copies you save to Photos, Files, or another destination are separate from the working project. They remain until you delete them at that destination and may be synchronized or backed up according to that service's settings. General preferences such as mask style and appearance remain when you delete working data; they do not contain face images or face-analysis results.

## Face data disclosure and sharing

Kakusu does not upload photos, videos, audio, face thumbnails, face-analysis results, or image feature representations to the provider or to third-party servers for processing or storage. No face data is shared with Google AdMob, advertising partners, or analytics services. There is no provider-operated cloud storage for face data.

Only when you explicitly save or share an edited photo or video is that output passed to Photos, Files, or your chosen destination. Face-analysis records, track identifiers, thumbnails, and image feature representations are not attached to the exported file. Faces you choose not to hide, or faces not detected or covered by a mask, may remain visible in the output. The destination's privacy and storage policies apply to the exported media.

## Photos access and network communication

The app imports photos and videos you select with the system photo picker. It asks for permission to add to Photos when saving edited media. You can change this permission in device Settings. If selected media is stored only in iCloud, it may be downloaded from Apple's services. This does not send the app's face-analysis data to Apple.

## In-app purchases

Pro purchases and restoration use Apple’s StoreKit. The app checks verified purchase information to determine Pro access. It does not send purchase history to the provider’s servers and does not obtain payment information such as credit card numbers. Information handled by Apple’s services is subject to [Apple’s privacy policy](https://www.apple.com/legal/privacy/).

## Advertising and analytics

The free plan in ad-supported versions uses Google AdMob. Google and advertising partners may process IP addresses (including approximate location), device identifiers, ad impressions and interactions, app interactions, and crash and performance information for advertising, measurement, and fraud prevention. Photos, videos, audio, and face data are not provided to advertising services.

Where required, Google’s User Messaging Platform (UMP) presents consent choices. In applicable regions, you can change them under **Settings & help > Ad privacy settings**. iOS App Tracking Transparency (ATT) permission is optional. Declining it does not block free features; ads may still appear. You can change tracking permission in iPhone Settings.

Pro does not display ads. When Pro ownership is verified at startup, the app does not initialize the advertising SDK or show advertising consent or ATT prompts. The app has no separate analytics SDK or account registration.

See [Google’s privacy policy](https://policies.google.com/privacy?hl=en) and [Google’s advertising information](https://policies.google.com/technologies/ads?hl=en).

This website is separate from the app. The website uses Vercel Web Analytics and Speed Insights to measure visits and performance. If Google Analytics is configured, browsing information may be sent to Google. Hosting providers may process access information when serving pages. Photos and videos edited in the app and face data are not provided to these services.

See [Vercel’s data practices](https://vercel.com/docs/analytics/privacy-policy) and [Google’s privacy policy](https://policies.google.com/privacy?hl=en).

## Sharing outside the app

When you choose a destination through the sharing feature, the edited photo or video is passed to that service as described in "Face data disclosure and sharing" above. Refer to the destination service’s policy for how it handles information.

## Contact and changes

Contact details are available on the [support page](https://www.omomuro.dev/works/kakusu/en/support). If information handling changes, the policy and its update date will be revised.
