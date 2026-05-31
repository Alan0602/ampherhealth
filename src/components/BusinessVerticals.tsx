"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BusinessVerticals() {
  const verticals = [
    { name: "Ortho", image: "/ortho_vertical.jpg" },
    { name: "Surgery", image: "/surgery_vertical.png" },
    { name: "Medicine", image: "/medicine_vertical.jpg" },
    { name: "Gynec", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBr-vyOR8pJgWAYQmIdCYDWVU_WkDlS7HfWg&s" },
    { name: "Dental", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GkBOXZHTy4vWStAY82Vtu8SN0YVwcaFfUQ&s" },
    { name: "Skin", image: "/skin_vertical.png" },
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
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Top fade for cinematic transition */}
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-secondary to-transparent z-10 pointer-events-none"></div>

      {/* <div className="absolute inset-0 z-0 h-full top-0">
        <img
          src="/sun.gif"
          alt="Joint Animation"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-secondary text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Dedicated Care for Every Need.
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 max-w-2xl mx-auto text-base md:text-lg px-4 font-medium backdrop-blur-sm bg-white/30 rounded-lg py-2">
            Your health is our priority. Explore our specialized departments, where compassionate care meets the latest in medical innovation.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8"
        >
          {verticals.map((vertical, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  alt={vertical.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={vertical.image}
                />
                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8">
                <h3 className="text-secondary text-xl font-bold">{vertical.name}</h3>
                <div className="h-1 w-12 bg-primary mt-3 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

