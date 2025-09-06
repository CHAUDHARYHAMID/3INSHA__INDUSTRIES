import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const ProductsSection = () => {
    const offerings = [
        {
            category: "Gate Valves",
            image: "https://picsum.photos/400/300?random=1",
            hint: "gate valve",
            description: "We offer a wide range of gate valves including flanged end, butt weld end, and socket weld end for various industrial applications.",
        },
        {
            category: "Globe Valves",
            image: "https://picsum.photos/400/300?random=2",
            hint: "globe valve",
            description: "Our durable globe valves are designed for precise throttling and flow regulation, ensuring reliable performance.",
        },
        {
            category: "Non-Return Valves",
            image: "https://picsum.photos/400/300?random=3",
            hint: "check valve",
            description: "Prevent backflow with our high-quality non-return (check) valves, available in swing type and lift type configurations.",
        },
        {
            category: "Control Valves",
            image: "https://picsum.photos/400/300?random=4",
            hint: "control valve",
            description: "Automate and control fluid dynamics with our advanced control valves, designed for precision and reliability.",
        },
        {
            category: "Ball Valves",
            image: "https://picsum.photos/400/300?random=5",
            hint: "ball valve",
            description: "Experience reliable sealing and quick shut-off with our robust ball valves, available in 1-piece, 2-piece, and 3-piece designs.",
        },
        {
            category: "Butterfly Valves",
            image: "https://picsum.photos/400/300?random=6",
            hint: "butterfly valve",
            description: "Our butterfly valves offer a compact design for efficient flow control in large-volume applications like water and HVAC systems.",
        },
        {
            category: "Forged Steel Valves",
            image: "https://picsum.photos/400/300?random=7",
            hint: "forged steel",
            description: "For high-pressure and high-temperature services, our forged steel valves provide unmatched strength and durability.",
        },
        {
            category: "Strainers",
            image: "https://picsum.photos/400/300?random=8",
            hint: "industrial strainer",
            description: "Protect your equipment and pipelines with our Y-type and Basket type strainers, designed to filter out debris effectively.",
        },
        {
            category: "Special Service Valves",
            image: "https://picsum.photos/400/300?random=9",
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
            <Card key={index} className="group overflow-hidden rounded-lg shadow-lg text-center flex flex-col relative">
              <div className="relative overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.category}
                  width={400}
                  height={300}
                  data-ai-hint={offering.hint}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1/2 overflow-hidden">
                <div className="w-16 h-16 bg-primary rounded-full flex items-start justify-center pt-2 border-2 border-white">
                  <Plus className="h-6 w-6 text-white" />
                </div>
              </div>
               <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">{offering.category}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">{offering.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
