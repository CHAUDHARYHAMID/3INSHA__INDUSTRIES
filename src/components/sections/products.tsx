"use client";

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

const ProductsSection = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        triggerOnce: false,
    });

  return (
    <section id="products" className="py-8 bg-background section-padding overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className={cn("text-3xl font-extrabold tracking-tight text-primary sm:text-4xl transition-all duration-500", isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10')}>
            Our Products
          </h2>
          <p className={cn("mx-auto max-w-3xl text-lg text-muted-foreground transition-all duration-500 delay-200", isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10')}>
            A comprehensive selection of high-quality industrial valves, meticulously designed and manufactured to meet diverse industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((offering, index) => {
            const animationClass = 
                index % 3 === 0 ? 'animate-slide-in-from-left' :
                index % 3 === 1 ? 'animate-slide-in-from-bottom' :
                'animate-slide-in-from-right';
            
            const animationDelay = 
              index % 3 === 0 ? 'delay-100' :
              index % 3 === 1 ? 'delay-200' :
              'delay-300';
            
            return (
            <Card key={index} className={cn(
                "group overflow-hidden rounded-lg shadow-lg text-center flex flex-col border shadow-sm transition-all duration-700",
                isIntersecting ? animationClass : 'opacity-0',
                animationDelay
              )}>
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={offering.image}
                    alt={offering.category}
                    fill
                    className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    data-ai-hint={offering.hint}
                />
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl font-bold text-primary">{offering.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <CardDescription className="text-sm text-muted-foreground mt-2 flex-grow">{offering.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="link" className="w-full">
                      <Link href={`/products/${slugify(offering.category)}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
