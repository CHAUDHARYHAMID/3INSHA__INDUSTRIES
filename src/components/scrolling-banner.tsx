"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ScrollingBanner = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start animation when element is intersecting, but don't stop it.
        // This prevents jarring resets when scrolling away and back.
        if (entry.isIntersecting) {
            setIntersecting(true);
            // We can disconnect the observer once it has been triggered.
            observer.disconnect();
        }
      },
      { rootMargin: '0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // In case component unmounts before intersecting
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
      className="relative flex overflow-x-hidden bg-primary py-4 text-lg font-semibold text-primary-foreground group"
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
