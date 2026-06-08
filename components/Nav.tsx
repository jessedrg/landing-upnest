'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`top${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="brand">
        <Image src="/landing-assets/logomark.png" alt="Upnest" width={30} height={30} priority quality={100} />
      </Link>
      <div className="right">
        <button
          className="btn btn-ink"
          data-cal-namespace="lets-partner"
          data-cal-link="jessedragstra/lets-partner"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          Let&apos;s partner
        </button>
      </div>
    </nav>
  );
}
