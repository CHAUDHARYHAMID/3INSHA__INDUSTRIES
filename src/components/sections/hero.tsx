import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src="https://i.postimg.cc/2Sf5d4CF/360-F-532206245-N1x-YEHr-ZVIWU1iham-Wwm-Dbh1g-ZWGU7-Jl.jpg"
        alt="Industrial valves background"
        fill
        className="object-cover"
        data-ai-hint="industrial valves"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Excellence in Industrial Valves
          </h1>
          <p className="mt-6 text-lg text-white/80 sm:text-xl md:text-2xl">
            Delivering top-tier, custom-engineered valve solutions for every industry.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="text-lg py-7 px-10">
              <Link href="#products">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
