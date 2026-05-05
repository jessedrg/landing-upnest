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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <nav className={`top${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="brand">
          <Image src="/landing-assets/logomark.png" alt="Upnest" width={30} height={30} priority quality={100} />
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
          <button
            className="btn btn-ink desktop-only"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Let&apos;s partner
          </button>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'open' : ''} />
            <span className={mobileMenuOpen ? 'open' : ''} />
            <span className={mobileMenuOpen ? 'open' : ''} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-content">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-link${isActive(item.href) ? ' active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="btn btn-ink mobile-cta"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a demo
          </button>
        </div>
      </div>
    </>
  );
}
