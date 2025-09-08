import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HeroSection = () => {
  const slides = [
    {
      image: 'https://i.postimg.cc/kGZYgy9t/1-gate-valve-banner-jpeg.jpg',
      hint: 'industrial valves',
      title: 'Excellence in Industrial Valves',
      description:
        'Delivering top-tier, custom-engineered valve solutions for every industry.',
      buttonText: 'Explore Our Products',
      buttonLink: '#products',
    },
    {
      image: 'https://i.postimg.cc/k42p3ZPd/2-globe-valve-banner.jpg',
      hint: 'globe valve',
      title: 'ISO 9001:2015 Certified Quality',
      description:
        'Our commitment to quality ensures every valve meets the highest international standards.',
      buttonText: 'Learn About Our Quality',
      buttonLink: '#why-us',
    },
    {
      image: 'https://i.postimg.cc/zvnpqYd4/3-nrv-banner.png',
      hint: 'non-return valve',
      title: 'Custom Solutions for Your Needs',
      description:
        'We specialize in creating bespoke valve solutions tailored to your specific operational requirements.',
      buttonText: 'Contact Us for a Quote',
      buttonLink: '#contact',
    },
    {
      image: 'https://picsum.photos/1200/800',
      hint: 'industrial pipeline',
      title: 'A Legacy of Trust & Reliability',
      description:
        'With decades of experience, we are the trusted partner for industries worldwide.',
      buttonText: 'Our Company History',
      buttonLink: '#about',
    },
    {
      image: 'https://picsum.photos/1200/800',
      hint: 'global logistics',
      title: 'Global Reach, Local Support',
      description:
        'Serving a diverse clientele across the globe with prompt and efficient service.',
      buttonText: 'View Our Product Catalog',
      buttonLink: '#products',
    },
  ];

  return (
    <section id="home" className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-lg text-white/80 sm:text-xl md:text-2xl">
                      {slide.description}
                    </p>
                    <div className="mt-10">
                      <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="text-lg py-7 px-10"
                      >
                        <Link href={slide.buttonLink}>
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
