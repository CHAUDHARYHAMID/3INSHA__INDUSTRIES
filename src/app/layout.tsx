import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import CallFAB from '@/components/call-fab';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import WhatsAppFAB from '@/components/whatsapp-fab';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Insha Industries',
  description: 'Leading manufacturer and supplier of industrial valves.',
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
