
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus } from 'lucide-react';
import { productCategories } from '@/lib/product-categories';
import { cn } from '@/lib/utils';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

const ProductDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-md px-4 py-2 text-xl font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-primary"
        >
          PRODUCTS
          <ChevronDown
            className={cn('h-5 w-5 transition-transform', isOpen && 'rotate-180')}
          />
        </button>
        {isOpen && (
          <div className="pl-8 pt-2">
            <div className="flex flex-col space-y-2">
              {productCategories.map(product => (
                <Link
                  key={product.category}
                  href={`/products/${slugify(product.category)}`}
                  className="flex items-center justify-between rounded-md py-2 text-lg font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {product.category}
                  <Plus className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="#products"
        className="relative flex items-center text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
      >
        PRODUCTS
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            {productCategories.map(product => (
              <Link
                key={product.category}
                href={`/products/${slugify(product.category)}`}
                className="flex items-center justify-between px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                <span>{product.category}</span>
                <Plus className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
