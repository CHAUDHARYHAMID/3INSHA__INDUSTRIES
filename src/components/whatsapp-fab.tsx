import Link from 'next/link';
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
      <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-white shadow-lg">
        <FaWhatsapp className="h-12 w-12 text-green-500" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </div>
    </Link>
  );
};

export default WhatsAppFAB;
