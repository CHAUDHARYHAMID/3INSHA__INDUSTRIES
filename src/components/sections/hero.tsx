
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
import { products } from '@/lib/products';
import images from '@/lib/placeholder-images.json';

const slides = [
  {
    title: 'GATE VALVES',
    image: images.gateValveBanner.src,
    hint: 'industrial valves',
    highlightImage: images.gateValveHighlight.src,
    highlightHint: 'gate valve',
    objectFit: 'cover',
  },
  {
    title: 'GLOBE VALVES',
    image: images.globeValveBanner.src,
    hint: 'globe valve',
    highlightImage: images.globeValveHighlighter.src,
    highlightHint: 'globe valve',
    objectFit: 'cover',
  },
  {
    title: 'NON-RETURN VALVES',
    image: images.nrvBanner.src,
    hint: 'check valve',
    highlightImage: images.nrvHighlighter.src,
    highlightHint: 'check valve',
    objectFit: 'cover',
  },
  {
    title: 'FORGED STEEL VALVES',
    image: images.forgedSteelBanner.src,
    hint: 'forged steel valve',
    highlightImage: images.forgedSteelHighlighter.src,
    highlightHint: 'forged steel valve',
    objectFit: 'contain',
  },
  {
    title: 'BALL VALVES',
    image: images.ballValveBanner.src,
    hint: 'ball valve',
    highlightImage: images.ballValveHighlighter.src,
    highlightHint: 'ball valve',
    objectFit: 'contain',
  },
  {
    title: 'BUTTERFLY VALVES',
    image: images.butterflyBanner.src,
    hint: 'butterfly valve',
    highlightImage: images.butterflyValveHighlighter.src,
    highlightHint: 'butterfly valve',
    objectFit: 'contain',
  },
  {
    title: 'SAFETY VALVES',
    image: images.safetyValveBg.src,
    hint: 'safety valve',
    highlightImage: images.safetyValveHighlighter.src,
    highlightHint: 'safety valve',
    objectFit: 'contain',
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

const HeroSection = () => {

  const getProductHref = (slideTitle: string) => {
    const slug = slugify(slideTitle);

    if (slug === 'safety-valves') {
        return '/products/special-service-valves';
    }

    const productExists = products.some(p => slugify(p.category) === slug);
    if (productExists) {
      return `/products/${slug}`;
    }
    
    return '#products';
  }

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
              <div className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center text-white">
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
                        <Link href={getProductHref(slide.title)}>
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

                    {slide.title === 'BALL VALVES' || slide.title === 'BUTTERFLY VALVES' || slide.title === 'SAFETY VALVES' || slide.title === 'FORGED STEEL VALVES' ? (
                      <div className="w-[360px] h-[360px] rounded-full bg-white flex items-center justify-center z-10">
                        <Image
                          src={slide.highlightImage}
                          alt={`${slide.title} Highlight`}
                          data-ai-hint={slide.highlightHint}
                          width={250}
                          height={250}
                          className="z-20"
                          style={{ objectFit: slide.objectFit as 'cover' | 'contain' }}
                          priority={index === 0}
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
                        priority={index === 0}
                      />
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-primary border-white/50">
           <ArrowLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-primary border-white/50">
            <ArrowRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </section>
  );
};

export default HeroSection;
