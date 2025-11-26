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
      <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-primary shadow-lg hover:bg-primary/90 overflow-hidden">
        <Image
          src="https://i.postimg.cc/3R5RK1c5/360-F-532206245-N1x-YEHr-ZVIWU1iham-Wwm-Dbh1g-ZWGU7Jl.jpg"
          alt="WhatsApp"
          width={64}
          height={64}
          className="object-cover"
        />
        <span className="sr-only">Contact on WhatsApp</span>
      </div>
    </Link>
  );
};

export default WhatsAppFAB;
