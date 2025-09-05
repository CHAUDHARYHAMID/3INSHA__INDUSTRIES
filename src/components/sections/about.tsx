import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const coreValues = [
    'Uncompromising Quality',
    'Customer-Centric Approach',
    'Innovation and Technology',
    'Sustainable Practices',
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://picsum.photos/600/800"
                alt="Industrial valves"
                data-ai-hint="industrial valves"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              About Insha Industries
            </h2>
            <p className="text-lg text-muted-foreground">
              Insha Industries, an ISO 9001:2015 certified company, specializes in the manufacturing and trading of industrial valves. With a commitment to quality and innovation, we cater to diverse industrial needs by providing a wide range of valves, including gate valves, globe valves, non-return valves, control valves, pneumatic valves, ball valves, butterfly valves, strainers, and special service valves like safety relief valves, pressure reducing valves, and breather valves. Our state-of-the-art manufacturing facilities, stringent quality control measures, and customer-centric approach have established us as a trusted name in the valve industry.
            </p>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                {coreValues.map((value) => (
                  <li key={value} className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3" />
                    <span className="font-medium text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
