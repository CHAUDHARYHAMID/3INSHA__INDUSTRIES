import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import images from '@/lib/placeholder-images.json';

const AboutSection = () => {
  return (
    <section id="about" className="py-8 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h2 className="text-xl font-extrabold tracking-tight text-primary mb-6 uppercase">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground">
              <strong className="text-primary">Insha Industries</strong>, an ISO 9001:2015 certified company, specializes in the manufacturing and trading of industrial valves. With a commitment to quality and innovation, we cater to diverse industrial needs by providing a wide range of valves, including gate valves, globe valves, non-return valves, control valves, pneumatic valves, ball valves, butterfly valves, strainers, and special service valves like safety relief valves, pressure reducing valves, and breather valves. Our state-of-the-art manufacturing facilities, stringent quality control measures, and customer-centric approach have established us as a trusted name in the valve industry.
            </p>
          </div>
          <div className="relative h-80 w-full lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={images.aboutBanner.src}
              alt={images.aboutBanner.alt}
              fill
              className="object-cover"
              data-ai-hint="industrial factory"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-muted-foreground">Our mission is to provide superior quality industrial valves that exceed customer expectations through innovative solutions, rigorous quality assurance, and a commitment to excellence. We strive to build long-term relationships with our clients by understanding their unique needs and delivering customized solutions that enhance their operational efficiency and productivity.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
              <p className="text-muted-foreground">Our vision is to be a global leader in the industrial valve manufacturing sector, recognized for our technological advancements, quality products, and exceptional customer service. We aim to set new standards in the industry by continuously innovating and adopting the latest technologies, ensuring that our products meet the highest standards of performance and reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
