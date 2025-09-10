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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const brands = "Audco, KSB, L&T, AIL, BDK, BHEL, Leader, Forbes Marshal, Uniklinger, Spirax, Sarco and more.";
  const leadingText = "INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES LIKE";
  const fullText = `${leadingText} ${brands}`;

  return (
    <div
      ref={ref}
      className="flex items-center overflow-hidden bg-primary py-3 text-lg font-semibold text-primary-foreground"
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
    </div>
  );
};

export default ScrollingBanner;
