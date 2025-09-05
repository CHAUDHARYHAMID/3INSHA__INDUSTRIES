import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const ProductsSection = () => {
  const products = [
    {
      title: 'Plastic Household Items',
      description: 'Durable and stylish plastic essentials for modern homes.',
      image: 'https://picsum.photos/400/300',
      hint: 'plastic household items',
    },
    {
      title: 'Industrial Components',
      description: 'High-precision components for various industrial applications.',
      image: 'https://picsum.photos/400/300',
      hint: 'industrial components',
    },
    {
      title: 'Plastic Containers',
      description: 'Versatile and sturdy containers for storage and transport.',
      image: 'https://picsum.photos/400/300',
      hint: 'plastic containers',
    },
    {
      title: 'Custom Molded Products',
      description: 'Tailor-made solutions to meet your specific requirements.',
      image: 'https://picsum.photos/400/300',
      hint: 'plastic furniture',
    },
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our wide range of high-quality plastic products, designed for durability and performance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.title} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    data-ai-hint={product.hint}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="pt-2">{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
