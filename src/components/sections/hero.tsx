
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
    objectFit: 'cover',
  },
  {
    title: 'Globe Valves',
    image: 'https://i.postimg.cc/k42p3ZPd/2-globe-valve-banner.jpg',
    hint: 'globe valve',
    highlightImage: 'https://i.postimg.cc/3RwZXkFB/2-GLOBE-VALVE-highlighter.jpg',
    highlightHint: 'globe valve',
    objectFit: 'cover',
  },
  {
    title: 'Non-Return Valves',
    image: 'https://i.postimg.cc/zvnpqYd4/3-nrv-banner.png',
    hint: 'check valve',
    highlightImage: 'https://i.postimg.cc/qMnfNxx4/3-nrv-highlighter-image.jpg',
    highlightHint: 'check valve',
    objectFit: 'cover',
  },
  {
    title: 'Forged Steel Valves',
    image: 'https://i.postimg.cc/vZ78L49j/4th-forged-steel-banner.jpg',
    hint: 'forged steel valve',
    highlightImage: 'https://i.postimg.cc/L6H3g14g/4th-forged-highlighter.jpg',
    highlightHint: 'forged steel valve',
    objectFit: 'cover',
  },
  {
    title: 'Ball Valves',
    image: 'https://i.postimg.cc/1tDDqcpq/5-ball-banner-jpeg.jpg',
    hint: 'ball valve',
    highlightImage: 'https://i.postimg.cc/g2SPWT2k/5th-ball-highlighter.png',
    highlightHint: 'ball valve',
    objectFit: 'contain',
  },
  {
    title: 'Butterfly Valves',
    image: 'https://picsum.photos/1920/1080',
    hint: 'butterfly valve',
    highlightImage: 'https://i.postimg.cc/c1TJPgbN/6th-butterfly-highlighter.jpg',
    highlightHint: 'butterfly valve',
    objectFit: 'contain',
  },
  {
    title: 'Safety Valves',
    image: 'https://picsum.photos/1920/1080',
    hint: 'safety valve',
    highlightImage: 'https://i.postimg.cc/VLDfvJyW/safety-valve-highlighter.png',
    highlightHint: 'safety valve',
    objectFit: 'contain',
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
                    <div
                        className="absolute w-[380px] h-[380px] rounded-full p-2"
                        style={{
                            backgroundImage: 'conic-gradient(hsl(var(--primary)) 0 270deg, maroon 270deg 360deg)',
                        }}
                    >
                        <div className="w-full h-full bg-background rounded-full" />
                    </div>

                    {slide.title === 'Ball Valves' || slide.title === 'Butterfly Valves' || slide.title === 'Safety Valves' ? (
                      <div className="w-[360px] h-[360px] rounded-full bg-white flex items-center justify-center z-10">
                        <Image
                          src={slide.highlightImage}
                          alt={`${slide.title} Highlight`}
                          data-ai-hint={slide.highlightHint}
                          width={slide.title === 'Safety Valves' ? 280 : 250}
                          height={slide.title === 'Safety Valves' ? 280 : 250}
                          className="z-20"
                          style={{ objectFit: slide.objectFit as 'cover' | 'contain' }}
                        />
                      </div>
                    ) : (
                      <Image
                        src={slide.highlightImage}
                        alt={`${slide.title} Highlight`}
                        data-ai-hint={slide.highlightHint}
                        width={360}
                        height={360}
                        className={'rounded-full z-10'}
                        style={{ objectFit: slide.objectFit as 'cover' | 'contain' }}
                      />
                    )}
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
