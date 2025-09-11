"use client";

import { cn } from '@/lib/utils';

const ScrollingBanner = () => {

  const brands = "Audco, KSB, L&T, AIL, BDK, BHEL, Leader, Forbes Marshal, Uniklinger, Spirax, Sarco and more.";
  const leadingText = "INSHA INDUSTRIES ALSO KNOWN AS - LEADING STOCKIST AND SUPPLIER OF PREMIUM BRANDED INDUSTRIAL VALVES LIKE";
  const fullText = `${leadingText} ${brands}`;

  return (
    <div
      className="relative flex overflow-x-hidden bg-primary py-4 text-xl font-semibold text-primary-foreground group"
    >
      <div
        className='flex animate-marquee-infinite whitespace-nowrap'
      >
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
