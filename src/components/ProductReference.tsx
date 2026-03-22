import Link from "next/link";
import productsData from "@/data/products.json";

export default function ProductReference() {
  // Show only the first 3 products on the home page
  const displayedProducts = productsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-xl">
            <h2 className="text-secondary text-3xl font-black tracking-tight mb-4">
              Quality &amp; Precision
            </h2>
            <p className="text-slate-500">
              Our medical portfolio is designed with industrial-grade precision,
              following the strictest global standards for pharmaceutical and
              medical device manufacturing.
            </p>
          </div>
          <Link
            href="/products"
            className="w-full md:w-auto text-center bg-white md:bg-transparent border border-slate-200 md:border-none py-3 md:py-0 rounded-xl md:rounded-none text-primary font-bold flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all shadow-sm md:shadow-none"
          >
            View Full Product Range
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="h-56 md:h-64 bg-slate-100 overflow-hidden flex items-center justify-center relative p-6 md:p-8">
                <img
                  alt={product.name}
                  className="h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">
                  {product.category}
                </span>
                <h4 className="text-secondary text-xl font-bold mb-3">
                  {product.name}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  href={`/products/${product.id}`}
                  className="w-full block text-center py-3.5 md:py-3 bg-secondary text-white text-sm font-bold hover:bg-primary transition-colors rounded-lg md:rounded-none"
                >
                  Details &amp; Specifications
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
