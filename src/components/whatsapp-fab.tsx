import Link from 'next/link';
import { Button } from './ui/button';
import { FaWhatsapp } from 'react-icons/fa';

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
        className="rounded-full bg-green-500 hover:bg-green-600 h-16 w-16 shadow-lg"
        suppressHydrationWarning
      >
        <FaWhatsapp className="h-10 w-10 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </Link>
  );
};

export default WhatsAppFAB;
