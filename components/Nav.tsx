'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`top health-nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <Link href="/" className="brand" aria-label="Upnest home">
        <Image src="/landing-assets/upnest-mark-black.svg" alt="" width={36} height={36} priority />
        <span className="health-brand-name">Upnest</span>
      </Link>
      <button className="health-menu-toggle" aria-expanded={menuOpen} aria-controls="health-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
      <div id="health-navigation" className={`links${menuOpen ? ' is-open' : ''}`}>
        <Link href="/#placements" onClick={() => setMenuOpen(false)}>Our track record</Link>
        <Link href="/#approach" onClick={() => setMenuOpen(false)}>How we work</Link>
        <Link href="/#other-niches" onClick={() => setMenuOpen(false)}>Other niches</Link>
      </div>
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
