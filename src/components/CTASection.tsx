import React from 'react';

export default function CTASection() {
  return (
    <section className="relative bg-gray-50/90 py-20 border-t border-gray-100 overflow-hidden">
      {/* Animated Background GIF */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif" 
          alt="Background Animation" 
          className="w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
      </div>
      <div className="container relative mx-auto px-4 lg:px-8 text-center max-w-4xl z-10">
        <h2 className="text-3xl font-extrabold text-ampharDarkBlue mb-6">Looking for a specific formulation?</h2>
        <p className="text-gray-600 text-lg mb-8">
          Our Research &amp; Development team can assist in custom formulations for institutional requirements. Partner with us for cutting-edge medical solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="bg-ampharLightBlue text-white px-8 py-3 rounded-md font-bold hover:bg-ampharDarkBlue transition-all shadow-lg" href="#">
            Enquire Now
          </a>
          <a className="bg-white border-2 border-ampharDarkBlue text-ampharDarkBlue px-8 py-3 rounded-md font-bold hover:bg-ampharBg transition-all" href="#">
            Download Catalog (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
