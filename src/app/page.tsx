import AboutSection from '@/components/sections/about';
import ClientsSection from '@/components/sections/clients';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero';
import OfferingsSection from '@/components/sections/offerings';
import ProductsSection from '@/components/sections/products';
import WhyChooseUsSection from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <OfferingsSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
