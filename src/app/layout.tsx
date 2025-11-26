import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import CallFAB from '@/components/call-fab';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Insha Industries',
  description: 'Leading manufacturer and supplier of industrial valves.',
};

const WhatsAppFAB = () => {
  return (
    <Link
      href="https://wa.me/919820409988"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-6 z-50"
      suppressHydrationWarning
    >
      <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-primary shadow-lg hover:bg-primary/90">
        <svg
          aria-label="WhatsApp"
          className="h-8 w-8 text-white"
          fill="currentColor"
          height="40"
          role="img"
          viewBox="0 0 24 24"
          width="40"
        >
          <path d="M19.2,4.8A9.8,9.8,0,0,0,12,2,9.8,9.8,0,0,0,2.3,12a9.8,9.8,0,0,0,9.8,9.8h0a9.8,9.8,0,0,0,9.8-9.8,9.7,9.7,0,0,0-2.6-6.9ZM12,20.3a8.3,8.3,0,1,1,8.3-8.3A8.3,8.3,0,0,1,12,20.3Zm4.5-6.1a4,4,0,0,1-2.1,1,6.5,6.5,0,0,1-1.3.1,3.4,3.4,0,0,1-3.2-3.2,3.3,3.3,0,0,1,.8-2.2,2.9,2.9,0,0,1,2.2-.9,1.7,1.7,0,0,1,1.2.5,1.5,1.5,0,0,1,.6,1.1H16A2.8,2.8,0,0,0,13.4,8a1.6,1.6,0,0,0-1.7,1.7,1.8,1.8,0,0,0,1.8,1.8,3,3,0,0,0,1.1-.2,1.7,1.7,0,0,0,1-1.5H12.6v-1h3.9c0,.2.1,1.1,0,2.1a4.2,4.2,0,0,1-2,2.4,5,5,0,0,1-2.9.9,5.2,5.2,0,0,1-5.1-5.1A5.1,5.1,0,0,1,12,6.5a5.1,5.1,0,0,1,4.4,2.5l-1.5,1a3.1,3.1,0,0,0-2.9-1.5,3.1,3.1,0,0,0,0,6.2,2.4,2.4,0,0,0,2.5-1.9H12.6V12h4.5a3.6,3.6,0,0,1-.1,1.1A3.1,3.1,0,0,1,16.5,14.2Z" />
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </div>
    </Link>
  );
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallFAB />
        <WhatsAppFAB />
        <Toaster />
      </body>
    </html>
  );
}
