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
    });

  return (
    <section id="products" className="py-8 bg-background section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A comprehensive selection of high-quality industrial valves, meticulously designed and manufactured to meet diverse industrial requirements.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((offering, index) => (
            <Card key={index} className={cn(
                "group overflow-hidden rounded-lg shadow-lg text-center flex flex-col border shadow-sm transition-all duration-500",
                isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              )}
              style={{ animationDelay: `${index * 150}ms` }}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
