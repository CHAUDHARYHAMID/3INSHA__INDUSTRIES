import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[75vh] min-h-[550px] w-full flex items-center justify-center text-white">
        <Image
          src="https://i.postimg.cc/kGZYgy9t/1-gate-valve-banner-jpeg.jpg"
          alt="Gate Valves"
          fill
          className="object-cover"
          data-ai-hint="industrial valves"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="max-w-md text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Gate Valves
            </h1>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg py-7 px-10 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary"
              >
                <Link href="#products">
                  Explore
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute w-[320px] h-[320px] rounded-full border-4 border-accent" />
            <Image
              src="https://i.postimg.cc/26B3bkN9/1-GATE-VALVE-highlight.jpg"
              alt="Gate Valve Highlight"
              width={300}
              height={300}
              className="rounded-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
