"use client";

import React, { use } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import products from "@/data/products.json";
import { motion } from "framer-motion";
import Link from "next/link";

type Product = {
  id: string;
  category?: string;
  name: string;
  description: string;
  longDescription: string;
  longDescriptionIndications?: string;
  image?: string;
  image2?: string;
  specImage?: string;
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = (products as Product[]).find((p) => p.id === resolvedParams.id);

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

  const hasIndications = !!product.longDescriptionIndications;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <main className="flex-grow pt-24 pb-20 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-10 text-xs font-bold tracking-widest text-slate-400 uppercase" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-3 opacity-30">/</span>
            <span className="text-secondary">{product.name}</span>
          </nav>

          {/* HERO */}
          <section className="relative pt-6 pb-12 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Product image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative group order-2 md:order-1"
              >
                <div className="absolute -inset-8 bg-gradient-to-tr from-primary/40 via-cyan-300/30 to-secondary/30 rounded-full blur-3xl -z-10 scale-110 animate-pulse"></div>
                <div className="relative aspect-square w-full overflow-hidden border-2 border-secondary shadow-[10px_10px_0_0_#A8D8F0] flex items-center justify-center p-10 md:p-14 transform transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-1">
                  {/* Rotating gradient layer 1 — large conic, slow */}
                  <div
                    className="absolute -inset-1/2 animate-gradient-rotate will-change-transform"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #5DADE2 0%, #87CEEB 25%, #B0E5FF 45%, #E0F6FF 55%, #5DADE2 70%, #87CEEB 85%, #5DADE2 100%)",
                    }}
                  />
                  {/* Rotating gradient layer 2 — smaller, reverse, different stops */}
                  <div
                    className="absolute -inset-1/3 animate-gradient-rotate-reverse will-change-transform opacity-70"
                    style={{
                      background:
                        "conic-gradient(from 180deg, #ADD8E6 0%, #5DADE2 20%, #87CEEB 40%, #B0E5FF 60%, #ADD8E6 80%, #5DADE2 100%)",
                      filter: "blur(40px)",
                    }}
                  />
                  {/* Soft white veil for blend */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>
                  {/* Edge vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 55%, rgba(255,255,255,0.65) 100%)",
                    }}
                  />
                  {/* Top + bottom accent bars */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 z-10"></div>

                  {/* Product image on top */}
                  <img
                    src={product.image2 || "/APS04075.JPG.jpeg"}
                    alt={product.name}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-[0_25px_25px_rgba(2,36,82,0.35)] transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Product details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="flex flex-col items-start space-y-6 order-1 md:order-2"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary text-white">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="text-xs font-black uppercase tracking-[0.2em]">
                    {product.category || "General Health"}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary uppercase italic leading-[0.95] tracking-tighter">
                  {product.name.split(" ").map((word, i, arr) => (
                    <span key={i} className="block">
                      {i === arr.length - 1 ? (
                        <span className="text-primary">{word}</span>
                      ) : (
                        word
                      )}
                    </span>
                  ))}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl border-l-4 border-primary pl-5">
                  {product.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* BENTO GRID */}
          <section className="py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary uppercase italic tracking-tighter">
                Scientific <span className="text-primary">Profile</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base mt-3 font-medium uppercase tracking-widest">
                Therapeutic composition and clinical applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {/* Therapeutic Profile — large card (col-span-2) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="md:col-span-2 relative group"
              >
                <div className="relative bg-white border-2 border-secondary shadow-[8px_8px_0_0_#022452] hover:shadow-[12px_12px_0_0_#005d97] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary text-white flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="material-symbols-outlined text-3xl">clinical_notes</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase italic tracking-tight">
                      Therapeutic Profile
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base md:text-lg leading-[1.85] font-normal">
                    {product.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Category card (col-span-1) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="md:col-span-1 relative group"
              >
                <div className="relative bg-secondary text-white border-2 border-secondary shadow-[8px_8px_0_0_#005d97] hover:shadow-[12px_12px_0_0_rgba(0,93,151,0.5)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 p-7 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="material-symbols-outlined text-3xl">category</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight">
                      Category
                    </h3>
                  </div>
                  <p className="text-white text-2xl md:text-3xl font-black uppercase italic leading-tight tracking-tight">
                    {product.category || "General Health"}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="h-1 w-16 bg-primary"></div>
                  </div>
                </div>
              </motion.div>

              {/* Indications — full width, only if present */}
              {hasIndications && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="md:col-span-3 relative group"
                >
                  <div className="relative bg-white border-2 border-secondary shadow-[8px_8px_0_0_#A8D8F0] hover:shadow-[12px_12px_0_0_#6BB6D6] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 p-7 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary text-white flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <span className="material-symbols-outlined text-3xl">medical_information</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase italic tracking-tight">
                        Indications
                      </h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {product.longDescriptionIndications!.split(",").map((indication, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3 bg-slate-50 border-l-4 border-primary"
                        >
                          <span className="material-symbols-outlined text-primary text-xl mt-0.5 flex-shrink-0">
                            check_circle
                          </span>
                          <span className="text-slate-700 text-base md:text-lg font-medium leading-snug">
                            {indication.trim()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-secondary text-white p-8 md:p-14 shadow-[10px_10px_0_0_#005d97] overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight">
                    Ready to partner with <span className="text-primary">Amphar</span>?
                  </h3>
                  <p className="text-white/70 mt-3 text-base md:text-lg leading-relaxed">
                    Get detailed product specifications, bulk pricing, and distribution opportunities.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                  <Link
                    href="/#contact"
                    className="px-8 py-4 bg-primary text-white text-center font-black uppercase tracking-widest text-xs hover:bg-white hover:text-secondary transition-colors duration-300"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="/products"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white text-center font-black uppercase tracking-widest text-xs hover:bg-white hover:text-secondary transition-colors duration-300"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Brand watermark */}
          <div className="text-center mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300">Amphar Health Care</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
