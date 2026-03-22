import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import productsData from '@/data/products.json';

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = productsData.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Product Image */}
              <div className="lg:w-1/2 bg-[#f0f4f8] p-8 md:p-12 flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-[300px] md:max-h-[500px] w-auto object-contain drop-shadow-2xl"
                />
                <span className="absolute top-8 left-8 bg-white/90 backdrop-blur px-3 py-1.5 rounded text-xs font-bold text-ampharDarkBlue uppercase tracking-wide shadow-sm">
                  {product.category}
                </span>
              </div>
              
              {/* Product Info */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ampharDarkBlue mb-4 sm:mb-6">
                  {product.name}
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-500 font-medium mb-6 sm:mb-8">
                  {product.description}
                </p>
                
                <div className="prose prose-lg text-gray-600 mb-12 border-t border-gray-100 pt-8">
                  <h3 className="text-lg font-bold text-ampharDarkBlue mb-4">Detailed Specifications</h3>
                  <p>{product.longDescription}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button className="flex-1 bg-ampharLightBlue text-white px-8 py-4 rounded-xl font-bold hover:bg-ampharDarkBlue transition-all shadow-lg text-lg">
                    Request Quote
                  </button>
                  <button className="flex-1 bg-white text-ampharDarkBlue border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-ampharDarkBlue transition-all text-lg">
                    Download Info Sheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
