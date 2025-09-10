import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function getProductBySlug(slug: string) {
  return products.find(p => slugify(p.category) === slug);
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="link">
            <Link href="/#products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.category}
              fill
              className="object-contain"
              data-ai-hint={product.hint}
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              {product.category}
            </h1>
            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>
            <p className="text-lg text-muted-foreground">
                For detailed specifications, availability, and pricing, please contact us. Our team is ready to assist you with your specific requirements and provide you with the best possible solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: slugify(product.category),
  }));
}
