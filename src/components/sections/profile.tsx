import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-16 lg:pt-24 pb-48 bg-primary text-white border-b-8 border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          <div className="w-full h-full flex items-center justify-center">
            <svg
                className="w-[450px] h-[450px]"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
                    <stop offset="100%" style={{ stopColor: 'maroon' }} />
                    </linearGradient>
                    <clipPath id="morph-clip">
                    <path
                        className="morph-path"
                        d="M 433,250 C 433,354 354,433 250,433 146,433 67,354 67,250 67,146 146,67 250,67 354,67 433,146 433,250 Z"
                    />
                    </clipPath>
                </defs>
                <g clipPath="url(#morph-clip)">
                    <image
                    href="https://i.postimg.cc/v81Cg457/2nd-banner.jpg"
                    x="0"
                    y="0"
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                    data-ai-hint="industrial valves"
                    />
                </g>
                <path
                    className="morph-path"
                    d="M 433,250 C 433,354 354,433 250,433 146,433 67,354 67,250 67,146 146,67 250,67 354,67 433,146 433,250 Z"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                />
            </svg>
          </div>

          <Separator orientation="vertical" className="h-full bg-black hidden lg:block" />
          <Separator orientation="horizontal" className="w-full bg-black lg:hidden" />

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
