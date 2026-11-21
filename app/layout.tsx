import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Fraunces } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'], display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sohail Ahmed | Senior Front-End & CMS Developer',
  description: 'Sohail Ahmed is a Senior Front-End & CMS Developer from Karachi, Pakistan with 5+ years of experience and 50+ websites delivered across WordPress, Shopify, HubSpot, Webflow and Squarespace.',
  keywords: ['Sohail Ahmed', 'Front-End Developer', 'CMS Developer', 'WordPress', 'Shopify', 'Webflow', 'Karachi'],
  openGraph: { title: 'Sohail Ahmed | Senior Front-End & CMS Developer', description: 'Modern websites, interactive experiences and high-performance digital solutions.', type: 'website', images: ['/sohail.webp'] },
};
export const viewport: Viewport = { themeColor: '#fbf7ef' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
