import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CalProvider from '../components/CalProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-newsreader',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Upnest — Senior hires, fixed bounty.',
  description:
    'Upnest connects companies and agencies with vetted recruiters. First candidate in 5 days, hire in ~25 — one flat fee per hire.',
  icons: {
    icon: '/landing-assets/logomark.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${mono.variable}`}>
      <body>
        <CalProvider>
          <Nav />
          {children}
          <Footer />
        </CalProvider>
      </body>
    </html>
  );
}
