import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsBanner from '@/components/ProductsBanner';
import ProductSidebar from '@/components/ProductSidebar';
import ProductList from '@/components/ProductList';
import CTASection from '@/components/CTASection';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProductsBanner />
        
        {/* Main Content Area */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProductSidebar />
              <ProductList />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
