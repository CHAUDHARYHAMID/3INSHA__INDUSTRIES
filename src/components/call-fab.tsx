import Link from 'next/link';
import { Phone } from 'lucide-react';

const CallFAB = () => {
  return (
    <Link
      href="tel:+919820407788"
      className="fixed bottom-24 right-6 z-50"
      suppressHydrationWarning
    >
      <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-primary shadow-lg hover:bg-primary/90">
        <Phone className="h-8 w-8 text-white" />
        <span className="sr-only">Call us</span>
      </div>
    </Link>
  );
};

export default CallFAB;
