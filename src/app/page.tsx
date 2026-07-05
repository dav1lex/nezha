'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Dev-mode forward: visiting `/` in `next dev` redirects to `/en`.
// In production, `public/_redirects` (`/  /en  302`) handles this at the edge
// before this page is ever served, so users never see the empty page.
export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/en');
  }, [router]);
  return null;
}
