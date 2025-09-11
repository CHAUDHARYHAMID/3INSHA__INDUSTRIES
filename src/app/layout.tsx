import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import WhatsAppFAB from '@/components/whatsapp-fab';
import CallFAB from '@/components/call-fab';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
          poppins.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <CallFAB />
        <Toaster />
      </body>
    </html>
  );
}
