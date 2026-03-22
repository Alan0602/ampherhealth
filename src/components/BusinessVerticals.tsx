"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BusinessVerticals() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const verticals = [
    { name: "Ortho", icon: "orthopedics" },
    { name: "Medicine", icon: "medical_services" },
    { name: "Gastro", icon: "body_system" },
    { name: "Gynaec", icon: "female" },
    { name: "Dental", icon: "dentistry" },
    { name: "ENT", icon: "hearing" },
    { name: "Dermatology", icon: "vaccines" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden relative">
      <motion.div style={{ y: bgY, willChange: 'transform' }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <img 
          src="/joint.gif" 
          alt="Joint Animation" 
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-secondary text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Core Business Verticals
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 max-w-2xl mx-auto text-base md:text-lg px-4 font-medium backdrop-blur-sm bg-white/30 rounded-lg py-2">
            Specialized care and advanced research across diverse medical fields
            to ensure comprehensive health solutions.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 md:hidden pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 md:hidden pointer-events-none"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-8 pt-4 space-x-4 md:space-x-0 md:grid md:grid-cols-4 lg:grid-cols-7 md:gap-6"
        >
          {verticals.map((vertical, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="group flex-none w-40 md:w-auto flex flex-col items-center p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer snap-center relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors group-hover:scale-110 duration-300 relative z-10">
                <span className="material-symbols-outlined text-3xl">
                  {vertical.icon}
                </span>
              </div>
              <h3 className="text-secondary text-sm font-bold text-center group-hover:text-primary transition-colors relative z-10">
                {vertical.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
