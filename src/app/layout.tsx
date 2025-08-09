import { Special_Elite } from 'next/font/google';
import './../styles/globals.css';
import { siteConfig } from '@/config/site';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/header';
import Footer from '@/components/Footer';

const specialElite = Special_Elite({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  icons: {
    icon: '/icons/favicon.png',
    shortcut: '/icons/favicon.png',
    apple: '/icons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": siteConfig.author.name,
              "url": siteConfig.url,
              "email": siteConfig.author.email,
              "sameAs": [
                siteConfig.twitter ? `https://twitter.com/${siteConfig.twitter.replace('@', '')}` : '',
                // Add other social media links here, e.g., LinkedIn, ResearchGate
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className={`antialiased ${specialElite.className}`} style={{ backgroundColor: '#f9f9f8' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
