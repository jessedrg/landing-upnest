'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV: { href: string; label: string }[] = [
  { href: '/', label: 'For companies' },
  { href: '/recruiters', label: 'For recruiters' },
  { href: '/customers', label: 'Customers' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <nav className={`top${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="brand">
        <Image src="/landing-assets/logomark.svg" alt="Upnest" width={30} height={30} priority />
      </Link>
      <div className="links">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? 'active' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="right">
        <span
          className="signin"
          data-cal-namespace="lets-partner"
          data-cal-link="jessedragstra/lets-partner"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          style={{ cursor: 'pointer' }}
        >
          Sign in
        </span>
        <button
          className="btn btn-ink"
          data-cal-namespace="lets-partner"
          data-cal-link="jessedragstra/lets-partner"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          Get a demo
        </button>
      </div>
    </nav>
  );
}
