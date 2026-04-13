"use client";
import React from 'react';

export default function ProductsBanner() {
  return (
    <section className="relative bg-secondary text-white overflow-hidden py-20 md:py-28 min-h-[450px] flex items-center">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 h-full">
        <img
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif"
          alt="Background Animation"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary"></div>
      </div>
      
      <div className="max-w-7xl relative mx-auto px-4 lg:px-8 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Healthcare <span className="text-primary italic">Portfolio.</span></h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
          Pioneering pharmaceutical excellence through a diverse range of high-potency formulations and advanced clinical supplies.
        </p>
      </div>

      {/* Bottom fade for cinematic transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}

