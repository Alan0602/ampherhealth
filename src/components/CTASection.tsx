"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative bg-gray-50/90 py-16 md:py-20 border-t border-gray-100 overflow-hidden">
      {/* Animated Background GIF with parallax */}
      <motion.div style={{ y: bgY, willChange: 'transform' }} className="absolute inset-0 z-0 h-[130%] -top-[15%] pointer-events-none">
        <img 
          src="/sun.gif" 
          alt="Sun Animation" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </motion.div>

      <div className="container relative mx-auto px-4 lg:px-8 text-center max-w-4xl z-10 backdrop-blur-md bg-white/60 p-8 rounded-2xl shadow-sm border border-white/50">
        <h2 className="text-3xl font-extrabold text-ampharDarkBlue mb-6">Looking for a specific formulation?</h2>
        <p className="text-gray-800 font-medium text-lg mb-8">
          Our Research &amp; Development team can assist in custom formulations for institutional requirements. Partner with us for cutting-edge medical solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="bg-ampharLightBlue text-white px-8 py-4 sm:py-3 rounded-xl sm:rounded-md font-bold hover:bg-ampharDarkBlue transition-all shadow-lg text-center" href="#">
            Enquire Now
          </a>
          <a className="bg-white border-2 border-ampharDarkBlue text-ampharDarkBlue px-8 py-4 sm:py-3 rounded-xl sm:rounded-md font-bold hover:bg-ampharBg transition-all text-center" href="#">
            Download Catalog (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
