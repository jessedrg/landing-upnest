'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

interface CalProviderProps {
  children: ReactNode;
}

export default function CalProvider({ children }: CalProviderProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'lets-partner' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return <>{children}</>;
}
