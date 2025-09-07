import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const WhatsAppFAB = () => {
  return (
    <Link
      href="https://wa.me/919820409988"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      suppressHydrationWarning
    >
      <Button
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 h-16 w-16 shadow-lg p-0 overflow-hidden"
        suppressHydrationWarning
      >
        <Image
          src="https://i.postimg.cc/2Sf5d4CF/360-F-532206245-N1x-YEHr-ZVIWU1iham-Wwm-Dbh1g-ZWGU7-Jl.jpg"
          alt="WhatsApp"
          fill
          className="object-cover"
        />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </Link>
  );
};

export default WhatsAppFAB;
