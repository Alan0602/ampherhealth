import React from 'react';
import Link from 'next/link';
import products from '@/data/products.json';

export default function ProductList() {
  return (
    <div className="w-full lg:w-3/4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <p className="text-gray-600 mb-4 sm:mb-0">Showing 1-6 of 64 products</p>
        <div className="flex items-center space-x-3">
          <label htmlFor="sort" className="text-sm text-gray-500 font-medium">Sort by:</label>
          <select id="sort" className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-ampharLightBlue focus:border-ampharLightBlue block p-2">
            <option>Featured</option>
            <option>Newest Arrivals</option>
            <option>A-Z Alphabetical</option>
            <option>Z-A Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <article key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
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
            <div className="p-5">
              <h3 className="text-lg font-bold text-ampharDarkBlue mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>
              <Link href={`/products/${product.id}`} className="w-full block text-center py-2.5 bg-ampharDarkBlue text-white text-sm font-bold rounded hover:bg-ampharLightBlue transition-colors">
                Details &amp; Specifications
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-center space-x-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-ampharLightBlue hover:text-ampharLightBlue transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-ampharLightBlue text-white font-bold">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-ampharLightBlue hover:text-ampharLightBlue transition-all">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-ampharLightBlue hover:text-ampharLightBlue transition-all">3</button>
        <span className="px-2 text-gray-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-ampharLightBlue hover:text-ampharLightBlue transition-all">7</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-ampharLightBlue hover:text-ampharLightBlue transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
