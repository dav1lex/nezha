import type { Metadata } from 'next';
import { baseUrl } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/en',
  },
};

// Production redirects `/` to `/en` through public/_redirects.
export default function RootPage() {
  return null;
}
