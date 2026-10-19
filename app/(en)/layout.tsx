import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import RootShell from '@/components/site/RootShell';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
