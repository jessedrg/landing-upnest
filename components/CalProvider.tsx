'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'lets-partner' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return <>{children}</>;
}
