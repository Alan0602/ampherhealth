"use client";
import React from 'react';

export default function ResponsibilitySection() {
  const initiatives = [
    {
      title: "Zero-Carbon Manufacturing",
      desc: "Pioneering sustainable operations and green energy across all facilities.",
      icon: "eco"
    },
    {
      title: "Affordable Medicine Access",
      desc: "Ensuring life-saving treatments reach underserved communities globally.",
      icon: "volunteer_activism"
    },
    {
      title: "Strict Ethical Compliance",
      desc: "Upholding the highest integrity in clinical trials and research.",
      icon: "verified"
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background GIF */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: "url('/sun.gif')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        {/* An extra gradient overlay to ensure text legibility at the bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md self-start">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                Our Commitment
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Our Responsibility <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 drop-shadow-sm">
                to the World
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
              We believe healthcare extends beyond medicine. Our commitment to
              sustainability, ethics, and community support is at the core of
              everything we do.
            </p>

            <div className="pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-extrabold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center gap-2">
                  CSR Report 2024
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Feature Cards in Glassmorphism */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 pt-8 lg:pt-0 lg:pl-10">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-600/20 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <span className="material-symbols-outlined text-amber-400 text-3xl md:text-4xl">
                      {item.icon}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
