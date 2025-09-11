
'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/lib/testimonials';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-8 bg-card section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We take pride in the positive feedback from our valued customers.
            Here’s a glimpse of their experiences with Insha Industries.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg">
                    <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <p className="text-muted-foreground mb-4 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="w-full border-t pt-4">
                        <p className="font-bold text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
