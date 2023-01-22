import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

type ContactEvent = {
  action: 'submit_form';
  category: 'contact';
  label: string;
  value: string;
};

type ClickEvent = {
  action: 'click';
  category: 'other';
  label: string;
  value: string;
};

export type Event = ContactEvent | ClickEvent;

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== '';

// PVを測定する
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// GAイベントを発火させる
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
  if (!existsGaId) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
