"use client";
import React from 'react';

export default function ProductsBanner() {
  return (
    <section className="relative bg-ampharDarkBlue/90 text-white overflow-hidden py-12 md:py-16 min-h-[400px] flex items-center">
      {/* Animated Background GIF without Parallax */}
      <div className="absolute inset-0 z-0 h-full top-0">
        <img
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif"
          alt="Background Animation"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
      </div>
      <div className="container relative mx-auto px-4 lg:px-8 z-10 text-center md:text-left text-white drop-shadow-md">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Our Products</h1>
        <p className="text-ampharLightBlue text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Discover our comprehensive range of high-quality pharmaceutical formulations and medical supplies, manufactured to the highest global standards.
        </p>
      </div>
    </section>
  );
}

