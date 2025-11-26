
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import images from '@/lib/placeholder-images.json';
import dynamic from 'next/dynamic';

const GateValvesContent = dynamic(() => import('@/components/products/gate-valves-content'));
const GlobeValvesContent = dynamic(() => import('@/components/products/globe-valves-content'));
const ForgedSteelValvesContent = dynamic(() => import('@/components/products/forged-steel-valves-content'));
const NonReturnValvesContent = dynamic(() => import('@/components/products/non-return-valves-content'));
const ControlValvesContent = dynamic(() => import('@/components/products/control-valves-content'));
const ButterflyValvesContent = dynamic(() => import('@/components/products/butterfly-valves-content'));
const StrainersContent = dynamic(() => import('@/components/products/strainers-content'));


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
  const isForgedSteelValves = params.slug === 'forged-steel-valves';
  const isNonReturnValves = params.slug === 'non-return-valves';
  const isControlValves = params.slug === 'control-valves';
  const isButterflyValves = params.slug === 'butterfly-valves';
  const isStrainers = params.slug === 'strainers';

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
          <div className="lg:col-span-3">
            {isGateValves ? (
              <>
                <div className="mb-8">
                    <Image src={images.gateValveBanner.src} alt={images.gateValveBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="valve diagrams" priority />
                </div>
                <GateValvesContent />
              </>
            ) : isGlobeValves ? (
              <>
                <div className="mb-8">
                    <Image src={images.globeValveBanner.src} alt={images.globeValveBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="valve diagrams" priority />
                </div>
                <GlobeValvesContent />
              </>
            ) : isForgedSteelValves ? (
                <>
                  <div className="mb-8">
                      <Image src={images.forgedSteelBanner.src} alt={images.forgedSteelBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="forged steel valve" priority />
                  </div>
                  <ForgedSteelValvesContent />
                </>
            ) : isNonReturnValves ? (
              <>
                <div className="mb-8">
                    <Image src={images.nrvBanner.src} alt={images.nrvBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="check valve diagram" priority />
                </div>
                <NonReturnValvesContent />
              </>
            ) : isControlValves ? (
              <>
                <div className="mb-8">
                    <Image src={images.controlValveBanner.src} alt={images.controlValveBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="control valve diagram" priority />
                </div>
                <ControlValvesContent />
              </>
            ) : isButterflyValves ? (
              <>
                <div className="mb-8">
                    <Image src={images.butterflyBanner.src} alt={images.butterflyBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="butterfly valve diagram" priority />
                </div>
                <ButterflyValvesContent />
              </>
            ) : isStrainers ? (
              <>
                <div className="mb-8">
                    <Image src={images.strainerBanner.src} alt={images.strainerBanner.alt} width={800} height={200} className="w-full rounded-lg shadow-md" data-ai-hint="industrial strainer diagram" priority />
                </div>
                <StrainersContent />
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
                    priority
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
