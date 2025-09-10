import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProfileSection = () => {
  return (
    <section id="profile" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 w-full lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.postimg.cc/v81Cg457/2nd-banner.jpg"
              alt="Insha Industries Profile"
              fill
              className="object-cover"
              data-ai-hint="industrial valves"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl mb-6 uppercase">
              Profile
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our array of products is a perfect blend of technology, innovation and design, which serves the critical requirements of our customers. To enable our customer, experience our products, bwe also provide free sampling of our valves. Our adherence towards quality, help us in acquiring the satisfaction of our customers. After creating a strong foothold in the domestic arena, we are now venturing into exports.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Get in contact with us on <strong className="text-primary">9820443935 | 9867322862</strong> to let us know what you need, and we will be there to serve you. Our prices are affordable and vary depending on the services that you require from us.
            </p>
            <Button asChild variant="link" size="lg" className="px-0">
                <Link href="#contact">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
