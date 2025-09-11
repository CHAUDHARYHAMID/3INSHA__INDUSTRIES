
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import images from '@/lib/placeholder-images.json';

const ProfileSection = () => {
  return (
    <section id="profile" className="relative py-12 text-white border-b-8 border-white section-padding">
      <Image
        src={images.profileBanner.src}
        alt={images.profileBanner.alt}
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="industrial valves"
      />
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full flex items-center justify-center">
             <Image
                src={images.profileBanner.src}
                alt={images.profileBanner.alt}
                width={650}
                height={650}
                className="rounded-lg shadow-2xl"
                data-ai-hint="industrial equipment"
              />
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 uppercase text-white">
              Profile
            </h2>
            <p className="text-lg text-white/80 mb-4">
              Our array of products is a perfect blend of technology, innovation and design, which serves the critical requirements of our customers. To enable our customer, experience our products, bwe also provide free sampling of our valves. Our adherence towards quality, help us in acquiring the satisfaction of our customers. After creating a strong foothold in the domestic arena, we are now venturing into exports.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Get in contact with us on <strong className="text-accent">9820443935 | 9867322862</strong> to let us know what you need, and we will be there to serve you. Our prices are affordable and vary depending on the services that you require from us.
            </p>
            <Button asChild variant="link" size="lg" className="px-0 text-white hover:text-accent">
                <Link href="#contact">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
