import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero';

const AboutSection = dynamic(() => import('@/components/sections/about'));
const ProductsSection = dynamic(() => import('@/components/sections/products'));
const WhyChooseUsSection = dynamic(() => import('@/components/sections/why-choose-us'));
const ProfileSection = dynamic(() => import('@/components/sections/profile'));
const CallToActionSection = dynamic(() => import('@/components/sections/call-to-action'));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ProfileSection />
      <div className="h-16" />
      <CallToActionSection />
    </>
  );
}
