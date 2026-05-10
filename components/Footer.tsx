import Link from 'next/link';

const LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'For companies' },
  { href: '/recruiters', label: 'For recruiters' },
  { href: '/customers', label: 'Customers' },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div>© 2026 Upnest · Senior hires, lower fees.</div>
      <div className="links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <a href="https://www.linkedin.com/company/upnesttalent" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
