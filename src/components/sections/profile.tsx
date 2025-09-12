
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
        loading="lazy"
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
                loading="lazy"
              />
          </div>

          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 uppercase text-white">
              Our Array of Products
            </h2>
            <p className="text-lg text-white/80 mb-4">
              Our products represent a perfect blend of technology, innovation, and design, catering to the critical requirements of our customers. To help clients experience the quality of our offerings, we also provide free samples of our valves.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Our strong commitment to quality has enabled us to earn the trust and satisfaction of our customers. Having established a solid presence in the domestic market, we are now expanding our reach to international markets.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Get in touch with us at <strong className="text-accent">9820409988 | 7021181068</strong> to let us know your requirements, and we will be ready to serve you. Our pricing is competitive and tailored to the services you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
