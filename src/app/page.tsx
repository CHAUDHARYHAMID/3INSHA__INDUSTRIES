
import AboutSection from '@/components/sections/about';
import CallToActionSection from '@/components/sections/call-to-action';
import HeroSection from '@/components/sections/hero';
import ProductsSection from '@/components/sections/products';
import ProfileSection from '@/components/sections/profile';
import TestimonialsSection from '@/components/sections/testimonials';
import WhyChooseUsSection from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <ProfileSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
