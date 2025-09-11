
"use client";

import { BadgeCheck, Wrench, Timer, Users, Factory, Globe, Award, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const WhyChooseUsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, triggerOnce: false });

  const features = [
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: 'Manufacturing Excellence',
      description: 'Our state-of-the-art facilities are equipped with the latest technology, ensuring high-quality, reliable, and efficient products.',
      animation: 'animate-slide-in-from-left',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Trading Expertise',
      description: 'We source and supply a wide range of valves from leading global manufacturers, ensuring timely delivery and competitive pricing.',
      animation: 'animate-slide-in-from-bottom',
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: 'Commitment to Quality',
      description: 'Adhering to ISO 9001:2015 standards, we ensure our products and processes meet the highest quality benchmarks.',
      animation: 'animate-slide-in-from-right',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Commitment to Excellence',
      description: 'We continuously improve our products and services, fostering a culture of innovation to exceed customer expectations.',
      animation: 'animate-slide-in-from-left',
    },
     {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: 'Customer-Centric Approach',
      description: 'Our customers are at the heart of everything we do, and we provide tailored solutions and dedicated support.',
      animation: 'animate-slide-in-from-bottom',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Customer Satisfaction',
      description: 'Our ultimate goal is the satisfaction and loyalty of our customers, building long-lasting partnerships.',
      animation: 'animate-slide-in-from-right',
    },
  ];

  return (
    <section id="why-us" className="py-8 bg-card section-padding overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className={cn("text-3xl font-extrabold tracking-tight text-primary sm:text-4xl transition-all duration-500", isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10')}>
            Why Choose Insha Industries?
          </h2>
          <p className={cn("mx-auto max-w-3xl text-lg text-muted-foreground transition-all duration-500 delay-200", isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10')}>
            Our commitment to excellence sets us apart. We blend advanced technology with industry expertise to deliver unparalleled value to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className={cn(
              "text-center transition-all duration-700",
              isIntersecting ? feature.animation : 'opacity-0',
              index % 3 === 0 ? 'delay-100' : '',
              index % 3 === 1 ? 'delay-200' : '',
              index % 3 === 2 ? 'delay-300' : ''
            )}>
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
