import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Excellence in Industrial Valves
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
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
