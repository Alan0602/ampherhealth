import React from 'react';
import Link from 'next/link';
import products from '@/data/products.json';

export default function ProductList() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Dynamic Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {products.map((product, index) => (
          <article 
            key={index} 
            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,93,151,0.15)] transition-all duration-500 flex flex-col hover:-translate-y-2"
          >
            {/* Visual Header / Image Box */}
            <div className="bg-slate-50/50 h-64 flex items-center justify-center p-8 relative overflow-hidden">
              {/* Background accent glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <img
                alt={product.name}
                className="h-full w-auto object-contain drop-shadow-lg transform transition-transform duration-700 group-hover:scale-110"
                src={product.image}
              />
              
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black text-secondary uppercase tracking-widest shadow-sm border border-slate-100">
                  {product.category || "Healthcare"}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-7 flex-grow flex flex-col bg-white/40">
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed font-medium">
                {product.description}
              </p>
              
              <Link 
                href={`/products/${product.id}`} 
                className="inline-flex items-center justify-center w-full py-4 bg-secondary text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                View Specifications
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
