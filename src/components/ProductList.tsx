import React from 'react';
import Link from 'next/link';
import products from '@/data/products.json';

export default function ProductList() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <article key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="bg-[#f0f4f8] h-56 flex items-center justify-center p-8 relative overflow-hidden">
              <img
                alt={product.name}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                src={product.image}
              />
              <span className="absolute top-4 left-4 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-ampharDarkBlue uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-ampharDarkBlue mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">{product.description}</p>
              <Link href={`/products/${product.id}`} className="w-full block text-center py-3 md:py-2.5 bg-ampharDarkBlue text-white text-sm font-bold rounded-lg md:rounded hover:bg-ampharLightBlue transition-colors mt-auto">
                Details &amp; Specifications
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
