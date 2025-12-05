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

export const metadata: Metadata = {
  title: 'Insha Industries',
  description: 'Leading manufacturer and supplier of industrial valves.',
  icons: {
    icon: 'https://i.postimg.cc/MpLqyh0q/logo.jpg',
    shortcut: 'https://i.postimg.cc/MpLqyh0q/logo.jpg',
    apple: 'https://i.postimg.cc/MpLqyh0q/logo.jpg',
  },
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
        <CallFAB />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
