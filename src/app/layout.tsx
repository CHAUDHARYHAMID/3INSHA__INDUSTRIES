
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import CallFAB from '@/components/call-fab';
import { Poppins } from 'next/font/google';
import WhatsAppFAB from '@/components/whatsapp-fab';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const siteUrl = 'https://www.inshaindustries.com';
const logoUrl = 'https://i.postimg.cc/MpLqyh0q/logo.jpg';
const siteTitle = 'Insha Industries | Manufacturer & Supplier of Industrial Valves';
const siteDescription =
  'Insha Industries, an ISO 9001:2015 certified company, is a leading manufacturer and supplier of high-quality industrial valves including gate, globe, ball, and butterfly valves.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: logoUrl, type: 'image/jpeg' }],
    shortcut: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Insha Industries',
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'Insha Industries Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [logoUrl],
  },
};

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Insha Industries',
    url: siteUrl,
    logo: logoUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9820409988',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    sameAs: [
        "https://wa.me/919820409988"
        // Add links to your social media profiles here if you have them
    ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Fallback favicon link to be extra sure */}
        <link rel="icon" href={logoUrl} sizes="any" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          poppins.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallFAB />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
