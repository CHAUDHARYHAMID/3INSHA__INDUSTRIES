import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
    const offerings = [
        {
            category: "Gate Valves",
            image: "https://i.postimg.cc/26B3bkN9/1-GATE-VALVE-highlight.jpg",
            hint: "gate valve",
            description: "We offer a wide range of gate valves including flanged end, butt weld end, and socket weld end for various industrial applications.",
        },
        {
            category: "Globe Valves",
            image: "https://picsum.photos/seed/gv1/400/400",
            hint: "globe valve",
            description: "Our durable globe valves are designed for precise throttling and flow regulation, ensuring reliable performance.",
        },
        {
            category: "Non-Return Valves",
            image: "https://picsum.photos/seed/nrv1/400/400",
            hint: "check valve",
            description: "Prevent backflow with our high-quality non-return (check) valves, available in swing type and lift type configurations.",
        },
        {
            category: "Control Valves",
            image: "https://picsum.photos/seed/cv1/400/400",
            hint: "control valve",
            description: "Automate and control fluid dynamics with our advanced control valves, designed for precision and reliability.",
        },
        {
            category: "Ball Valves",
            image: "https://picsum.photos/seed/bv1/400/400",
            hint: "ball valve",
            description: "Experience reliable sealing and quick shut-off with our robust ball valves, available in 1-piece, 2-piece, and 3-piece designs.",
        },
        {
            category: "Butterfly Valves",
            image: "https://picsum.photos/seed/bfv1/400/400",
            hint: "butterfly valve",
            description: "Our butterfly valves offer a compact design for efficient flow control in large-volume applications like water and HVAC systems.",
        },
        {
            category: "Forged Steel Valves",
            image: "https://picsum.photos/seed/fsv1/400/400",
            hint: "forged steel",
            description: "For high-pressure and high-temperature services, our forged steel valves provide unmatched strength and durability.",
        },
        {
            category: "Strainers",
            image: "https://picsum.photos/seed/s1/400/400",
            hint: "industrial strainer",
            description: "Protect your equipment and pipelines with our Y-type and Basket type strainers, designed to filter out debris effectively.",
        },
        {
            category: "Special Service Valves",
            image: "https://picsum.photos/seed/ssv1/400/400",
            hint: "safety valve",
            description: "We provide special valves like safety relief, pressure reducing, and breather valves for critical service applications.",
        },
    ]

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A comprehensive selection of high-quality industrial valves, meticulously designed and manufactured to meet diverse industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg shadow-lg text-center flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                    src={offering.image}
                    alt={offering.category}
                    fill
                    className="object-cover"
                    data-ai-hint={offering.hint}
                />
              </div>
              <div className="flex flex-col flex-grow p-6 justify-between">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{offering.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground mt-2 flex-grow">{offering.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="w-full">
                      <Link href="#">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
