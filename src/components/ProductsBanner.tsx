"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductsBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative bg-ampharDarkBlue/90 text-white overflow-hidden py-12 md:py-16 min-h-[400px] flex items-center">
      {/* Animated Background GIF with Parallax */}
      <motion.div style={{ y: bgY, willChange: 'transform' }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif" 
          alt="Background Animation" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
      </motion.div>
      <motion.div style={{ y: textY, opacity, willChange: 'transform, opacity' }} className="container relative mx-auto px-4 lg:px-8 z-10 text-center md:text-left text-white drop-shadow-md">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Our Products</h1>
        <p className="text-ampharLightBlue text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Discover our comprehensive range of high-quality pharmaceutical formulations and medical supplies, manufactured to the highest global standards.
        </p>
      </motion.div>
    </section>
  );
}
