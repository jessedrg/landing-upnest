import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CalProvider from '../components/CalProvider';
import './globals.css';
import './health.css';

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

export const metadata: Metadata = {
  title: 'Upnest — Engineering & GTM Talent in SF & NYC',
  description: 'Specialist recruitment for the companies moving health forward. Engineering, AI, GTM and sales talent for healthtech teams in San Francisco and New York.',
  icons: { icon: '/landing-assets/upnest-mark-black.svg' },
  openGraph: {
    title: 'Upnest — Exceptional people. Better health.',
    description: 'Engineering, AI, GTM and sales talent for ambitious healthtech teams in San Francisco and New York.',
    type: 'website',
    images: [{ url: '/landing-assets/health-san-francisco.jpg', alt: 'The Golden Gate Bridge in San Francisco' }],
  },
};

export const viewport: Viewport = { themeColor: '#F3F1EA', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="health-site">
        <CalProvider>
          <Nav />
          {children}
          <Footer />
        </CalProvider>
      </body>
    </html>
  );
}
