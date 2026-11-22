'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DepartmentsMenu from './DepartmentsMenu';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const closeNavigation = () => {
    setMenuOpen(false);
    setDepartmentsOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setDepartmentsOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const resetMenu = () => {
      if (!media.matches) {
        setMenuOpen(false);
        setDepartmentsOpen(false);
      }
    };
    media.addEventListener('change', resetMenu);
    if (!menuOpen || !media.matches) return () => media.removeEventListener('change', resetMenu);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      media.removeEventListener('change', resetMenu);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    {menuOpen && <div className="mobile-nav-backdrop" onClick={closeNavigation} aria-hidden="true" />}
    <nav className={`top health-nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' mobile-menu-open' : ''}`} aria-label="Main navigation" onKeyDown={event => {
      if (event.key !== 'Tab' || !menuOpen || !window.matchMedia('(max-width: 760px)').matches) return;
      const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(element => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <Link href="/" className="brand" aria-label="Upnest home">
        <Image src="/landing-assets/upnest-mark-black.svg" alt="" width={36} height={36} priority />
        <span className="health-brand-name">Upnest</span>
      </Link>
      <button type="button" ref={menuToggleRef} className="health-menu-toggle" aria-expanded={menuOpen} aria-controls="health-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => { setMenuOpen(!menuOpen); setDepartmentsOpen(false); }}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <svg className="mobile-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M4 8h16" /><path d="M4 16h16" /></svg>
      </button>
      <div id="health-navigation" className={`links${menuOpen ? ' is-open' : ''}`}>
        <div className="mobile-nav-label">INDEPENDENT MINDS. EXCEPTIONAL PEOPLE.</div>
        <Link className="primary-nav-link" href="/#placements" onClick={closeNavigation}><span className="mobile-nav-index" aria-hidden="true">01</span>Our track record<NavArrow /></Link>
        <Link className="primary-nav-link" href="/#approach" onClick={closeNavigation}><span className="mobile-nav-index" aria-hidden="true">02</span>How we work<NavArrow /></Link>
        <DepartmentsMenu open={departmentsOpen} onOpenChange={setDepartmentsOpen} onNavigate={closeNavigation} />
        <div className="mobile-nav-footer">
          <p>Your next chapter<br /><em>starts with a conversation.</em></p>
          <button className="mobile-partner-button" onClick={closeNavigation} data-cal-namespace="lets-partner" data-cal-link="jessedragstra/lets-partner" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Let&apos;s partner<NavArrow /></button>
        </div>
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
    </>
  );
}

function NavArrow() {
  return <svg className="nav-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}
