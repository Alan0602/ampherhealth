"use client";

import React, { use } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import products from "@/data/products.json";
import { motion } from "framer-motion";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col pt-24 items-center justify-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link href="/" className="mt-4 text-primary hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <main className="flex-grow pt-24 pb-16 relative overflow-hidden">
        {/* Animated background blobs for depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Futuristic Breadcrumbs */}
          <nav className="flex mb-10 text-sm font-bold tracking-tight text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors uppercase">Home</Link>
            <span className="mx-3 opacity-30">/</span>
            <span className="text-secondary uppercase">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Product Image with Impulsive Shadow & Glassmorphsm */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group w-full aspect-square md:aspect-[4/5]"
              >
                {/* Impulsive shadow container - deep, spread out primary glow */}
                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-[60px] group-hover:blur-[80px] transition-all duration-700 opacity-80 animate-pulse"></div>

                {/* Glassmorphic image wrapper */}
                <div className="relative h-full w-full bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 md:p-12">
                  <img
                    src={product.image2 || "/APS04075.JPG.jpeg"}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] transform transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 pt-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-5 py-2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping mr-3"></span>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                    {product.category || "General Health"}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary mb-8 leading-[1.05] tracking-tighter">
                  {product.name}
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-medium max-w-2xl">
                  {product.description}
                </p>

                {/* Info Card (Glassmorphism) with impulsive shadow */}
                <div className="relative group/card mb-12">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/50 backdrop-blur-2xl border border-white/60 p-10 rounded-[2rem] shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transform -rotate-3 group-hover/card:rotate-0 transition-transform duration-500">
                        <span className="material-symbols-outlined font-bold">clinical_notes</span>
                      </div>
                      <h3 className="text-secondary font-black text-2xl ml-4">Therapeutic Profile</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-[1.7] font-normal">
                      {product.longDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5">
                  <button className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(2,36,82,0.3)] transition-all duration-300">
                    Inquire Now
                  </button>
                  <button className="px-10 py-5 bg-white/60 backdrop-blur-md border border-white/80 text-secondary rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-sm">
                    Download Portfolio
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Technical Section: Visual Breakdown (The Larger Image) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight tracking-tighter">
                Engineering <span className="text-primary italic">Wellness.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg font-medium">Precision manufacturing for superior clinical efficacy.</p>
            </div>

            <div className="relative max-w-6xl mx-auto group/tech">
              {/* Giant Primary Pulsing Shadow */}
              <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[80px] group-hover/tech:bg-primary/10 transition-all duration-1000 opacity-60"></div>

              <div className="relative bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[3rem] p-3 md:p-6 shadow-2xl overflow-hidden">
                <div className="aspect-[21/9] md:aspect-[3/1] relative rounded-[2.5rem] overflow-hidden bg-slate-200">
                  <img
                    src={(product as any).image2 ? product.image : "/APS04075.JPG.jpeg"}
                    alt="Product detail closeup"
                    className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2000ms] group-hover/tech:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/20 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="max-w-md text-white"
                    >
                      <div className="h-0.5 w-12 bg-primary mb-6"></div>
                      <h3 className="text-3xl md:text-4xl font-black mb-4">Uncompromising Quality</h3>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                        Every dosage is a result of advanced molecular research and rigorous pharmaceutical standards.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
