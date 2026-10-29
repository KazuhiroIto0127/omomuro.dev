'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { appStoreEvent, type StorePlacement } from '@/lib/analytics';
import { existsGaId } from '@/components/gtag';

export default function AppStoreLink({
  href,
  app,
  placement,
  language,
  className,
  children,
}: {
  href: string;
  app: string;
  placement: StorePlacement;
  language: 'ja' | 'en';
  className?: string;
  children: ReactNode;
}) {
  const path = usePathname() ?? '/';
  const record = () => {
    const params = appStoreEvent(app, placement, language, path);
    if (!params || !existsGaId || typeof window.gtag !== 'function') return;
    try {
      window.gtag('event', 'app_store_click', { ...params, transport_type: 'beacon' });
    } catch {
      /* Analytics must never prevent navigation. */
    }
  };
  return (
    <a
      href={href}
      className={className}
      data-app-store={app}
      data-placement={placement}
      onClick={record}
      onAuxClick={(event) => {
        if (event.button === 1) record();
      }}
    >
      {children}
    </a>
  );
}
