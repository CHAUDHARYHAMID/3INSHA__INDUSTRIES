
import React from 'react';

// --- Placeholder Components (So the page works immediately) ---

const HeroSection = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-blue-600 text-white p-8 text-center">
    <h1 className="text-5xl font-bold mb-4">Insha Industries</h1>
    <p className="text-xl max-w-2xl">Excellence in manufacturing and innovation. Your trusted partner for industrial solutions.</p>
    <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition">
      Get Started
    </button>
  </section>
);

const AboutSection = () => (
  <section className="py-20 px-8 bg-white text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
    <p className="text-gray-600 max-w-4xl mx-auto">
      We are dedicated to providing top-tier products with a focus on durability and precision.
      With years of experience, we lead the industry in quality and customer satisfaction.
    </p>
  </section>
);

const ProductsSection = () => (
  <section className="py-20 px-8 bg-gray-50">
    <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white p-6 rounded-xl shadow-md">
          <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
            Product Image {item}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Industrial Unit {item}</h3>
          <p className="text-gray-600">High-performance unit designed for heavy-duty usage.</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-20 px-8 bg-blue-900 text-white text-center">
    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      <div className="p-4 border border-blue-700 rounded-lg w-64">
        <h3 className="font-bold text-xl mb-2">Quality</h3>
        <p className="text-blue-200">Certified premium materials.</p>
      </div>
      <div className="p-4 border border-blue-700 rounded-lg w-64">
        <h3 className="font-bold text-xl mb-2">Support</h3>
        <p className="text-blue-200">24/7 Dedicated assistance.</p>
      </div>
      <div className="p-4 border border-blue-700 rounded-lg w-64">
        <h3 className="font-bold text-xl mb-2">Speed</h3>
        <p className="text-blue-200">Fast manufacturing and delivery.</p>
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="py-20 px-8 bg-black text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
    <p className="mb-8 text-gray-400">Contact us today to get a quote for your project.</p>
    <button className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition">
      Contact Us
    </button>
  </section>
);

// --- The Main Page Component ---

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </main>
  );
}
