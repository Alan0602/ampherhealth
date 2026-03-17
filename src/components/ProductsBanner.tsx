import React from 'react';

export default function ProductsBanner() {
  return (
    <section className="relative bg-ampharDarkBlue/90 text-white py-16 overflow-hidden">
      {/* Animated Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif" 
          alt="Background Animation" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
      </div>
      <div className="container relative mx-auto px-4 lg:px-8 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Products</h1>
        <p className="text-ampharLightBlue text-lg max-w-2xl">
          Discover our comprehensive range of high-quality pharmaceutical formulations and medical supplies, manufactured to the highest global standards.
        </p>
      </div>
    </section>
  );
}
