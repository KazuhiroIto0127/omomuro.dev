'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { isAnalyticsExcluded as isPrivate } from '@/lib/analytics';
import { GoogleAnalytics, pageview } from '@/components/gtag';

/** ちいさなあそびばのサポート・プライバシー（子ども向けアプリのページ）ではアクセス解析をしない */

export default function SiteAnalytics() {
  const path = usePathname() ?? '/';
  const first = useRef(true);

  useEffect(() => {
    // 最初の表示は gtag の初期化で送られるので、ページ移動のときだけ送る
    if (first.current) {
      first.current = false;
      return;
    }
    pageview(path);
  }, [path]);

  if (isPrivate(path)) return null;

  return (
    <>
      <GoogleAnalytics />
      <Analytics beforeSend={(event) => (isPrivate(new URL(event.url).pathname) ? null : event)} />
      <SpeedInsights beforeSend={(event) => (isPrivate(new URL(event.url).pathname) ? null : event)} />
    </>
  );
}
