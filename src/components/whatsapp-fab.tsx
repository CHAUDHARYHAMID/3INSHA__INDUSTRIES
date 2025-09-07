import Link from 'next/link';
import { Button } from './ui/button';

const WhatsAppIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="32px"
    height="32px"
    >
        <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
        />
        <path
            fill="#fff"
            d="M34.4,30.3c-0.4-0.2-2.3-1.1-2.7-1.3c-0.4-0.2-0.7-0.2-1,0.2c-0.3,0.4-1,1.3-1.3,1.5c-0.2,0.2-0.5,0.3-0.9,0.1c-0.4-0.2-1.7-0.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8c-0.2-0.4-0.1-0.7,0.2-0.9c0.2-0.2,0.4-0.5,0.7-0.8c0.2-0.2,0.3-0.4,0.5-0.7c0.2-0.3,0.1-0.6,0-0.8c-0.1-0.2-1-2.5-1.4-3.4c-0.4-0.9-0.8-0.7-1-0.7c-0.2,0-0.5,0-0.7,0c-0.2,0-0.7,0.1-1,0.5c-0.3,0.4-1.3,1.2-1.3,3c0,1.7,1.3,3.5,1.5,3.7c0.2,0.2,2.5,4,6.2,5.5c3.6,1.5,3.6,1,4.3,1c0.6,0,2-0.8,2.2-1.6c0.3-0.8,0.3-1.5,0.2-1.6C35.1,30.5,34.8,30.4,34.4,30.3z"
        />
    </svg>
);

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
        <WhatsAppIcon />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </Link>
  );
};

export default WhatsAppFAB;
