import Link from 'next/link';
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
      <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors">
        <Image
          src="https://i.postimg.cc/CZ7Y7G0m/whatsapp-logo.png"
          alt="WhatsApp"
          width={40}
          height={40}
        />
        <span className="sr-only">Contact us on WhatsApp</span>
      </div>
    </Link>
  );
};

export default WhatsAppFAB;
