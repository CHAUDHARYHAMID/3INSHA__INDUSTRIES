import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section id="call-to-action">
      <div className="relative flex overflow-x-hidden bg-primary py-3 text-primary-foreground">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
          <span className="mx-4 text-lg font-semibold">INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES</span>
        </div>
      </div>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-card p-8 text-center shadow-lg md:flex-row md:text-left">
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Have any questions?
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                Our team is ready to assist you. Call us now for expert advice.
                </p>
            </div>
            <div className="flex-shrink-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="tel:+919820409988">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +91 9820409988
                </Link>
                </Button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
