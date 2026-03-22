import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Animated Background Banner */}
        <section className="relative bg-ampharDarkBlue/90 text-white py-24 lg:py-32 overflow-hidden">
          {/* Animated Background GIF */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif" 
              alt="Background Animation" 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Amphar</h1>
            <p className="text-ampharLightBlue text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              We are dedicated to providing high-quality medical solutions and improving lives through scientific innovation and compassionate care.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-ampharDarkBlue mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              At Amphar Health Care, our mission is to empower healthier lives globally by developing, manufacturing, and distributing innovative pharmaceutical products. We strive for excellence in every formulation, ensuring maximum efficacy and patient safety.
            </p>

            <h2 className="text-3xl font-bold text-ampharDarkBlue mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              To be the world&apos;s most trusted healthcare partner, pioneering breakthroughs in medicine and making world-class treatments accessible to all communities, regardless of geography.
            </p>
            
            <h2 className="text-3xl font-bold text-ampharDarkBlue mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">science</span>
                <h3 className="text-xl font-bold text-ampharDarkBlue mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously pushing the boundaries of medical research to find better solutions.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">handshake</span>
                <h3 className="text-xl font-bold text-ampharDarkBlue mb-2">Integrity</h3>
                <p className="text-gray-600">Upholding the highest ethical standards in all our manufacturing and business practices.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">health_and_safety</span>
                <h3 className="text-xl font-bold text-ampharDarkBlue mb-2">Quality</h3>
                <p className="text-gray-600">Uncompromising commitment to safety and efficacy in every single product we create.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">globe</span>
                <h3 className="text-xl font-bold text-ampharDarkBlue mb-2">Accessibility</h3>
                <p className="text-gray-600">Making life-saving treatments affordable and available to communities worldwide.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
