
'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const slides = [
  {
    title: 'Gate Valves',
    image: 'https://i.postimg.cc/kGZYgy9t/1-gate-valve-banner-jpeg.jpg',
    hint: 'industrial valves',
    highlightImage: 'https://i.postimg.cc/26B3bkN9/1-GATE-VALVE-highlight.jpg',
    highlightHint: 'gate valve',
  },
  {
    title: 'Globe Valves',
    image: 'https://i.postimg.cc/k42p3ZPd/2-globe-valve-banner.jpg',
    hint: 'globe valve',
    highlightImage: 'https://i.postimg.cc/3RwZXkFB/2-GLOBE-VALVE-highlighter.jpg',
    highlightHint: 'globe valve',
  },
  {
    title: 'Non-Return Valves',
    image: 'https://i.postimg.cc/zvnpqYd4/3-nrv-banner.png',
    hint: 'check valve',
    highlightImage: 'https://picsum.photos/300/300',
    highlightHint: 'check valve',
  },
  {
    title: 'Control Valves',
    image: 'https://picsum.photos/1920/1080',
    hint: 'control valve',
    highlightImage: 'https://i.postimg.cc/qvVqyWxD/4-control-valve-highlighter.jpg',
    highlightHint: 'control valve',
  },
  {
    title: 'Ball Valves',
    image: 'https://i.postimg.cc/1tDDqcpq/5-ball-banner-jpeg.jpg',
    hint: 'ball valve',
    highlightImage: 'https://picsum.photos/300/300',
    highlightHint: 'ball valve',
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[75vh] min-h-[550px] w-full flex items-center justify-center text-white">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                  <div className="max-w-md text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
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
                      src={slide.highlightImage}
                      alt={`${slide.title} Highlight`}
                      data-ai-hint={slide.highlightHint}
                      width={300}
                      height={300}
                      className="rounded-full object-cover z-10"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-white/50">
           <ArrowLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-white/50">
            <ArrowRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </section>
  );
};

export default HeroSection;
