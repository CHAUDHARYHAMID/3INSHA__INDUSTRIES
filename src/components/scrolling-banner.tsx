"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ScrollingBanner = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: '0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const brands = "Audco, KSB, L&T, AIL, BDK, BHEL, Leader, Forbes Marshal, Uniklinger, Spirax, Sarco and more.";
  const leadingText = "INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES LIKE";
  const fullText = `${leadingText} ${brands}`;

  return (
    <div
      ref={ref}
      className="relative flex overflow-hidden bg-primary py-3 text-lg font-semibold text-primary-foreground"
    >
      <div
        className={cn(
          'flex whitespace-nowrap',
          isIntersecting ? 'animate-marquee' : ''
        )}
      >
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </div>
      <div
        className={cn(
          'absolute top-0 flex whitespace-nowrap py-3',
          isIntersecting ? 'animate-marquee2' : ''
        )}
      >
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
