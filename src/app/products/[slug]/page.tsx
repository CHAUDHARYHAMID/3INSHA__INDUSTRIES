import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import GateValvesContent from '@/components/products/gate-valves-content';
import GlobeValvesContent from '@/components/products/globe-valves-content';

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

  const isGateValves = params.slug === 'gate-valves';
  const isGlobeValves = params.slug === 'globe-valves';

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            {isGateValves ? (
              <>
                <div className="mb-8">
                    <Image src="https://i.postimg.cc/kGZYgy9t/1-gate-valve-banner-jpeg.jpg" alt="Gate Valve Types" width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="valve diagrams" />
                </div>
                <GateValvesContent />
              </>
            ) : isGlobeValves ? (
              <>
                <div className="mb-8">
                    <Image src="https://i.postimg.cc/k42p3ZPd/2-globe-valve-banner.jpg" alt="Globe Valve Types" width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="valve diagrams" />
                </div>
                <GlobeValvesContent />
              </>
            ) : (
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
                </div>
              </div>
            )}
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Enquire Now</h2>
              <ContactForm />
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
