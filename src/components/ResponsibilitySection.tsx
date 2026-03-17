export default function ResponsibilitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-black mb-8">
              Our Responsibility to the World
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We believe healthcare extends beyond medicine. Our commitment to
              sustainability, ethics, and community support is at the core of
              everything we do.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                Zero-carbon manufacturing initiatives
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                Affordable medicine access programs
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                Strict ethical research compliance
              </li>
            </ul>
            <button className="bg-white text-secondary px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors self-start">
              CSR Report 2024
            </button>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            <img
              alt="Corporate Social Responsibility"
              className="w-full h-full object-cover"
              data-alt="Clean modern laboratory with professional scientists"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGUR8lOmKaCNhID8jTHfyApYbsoiCCaXUUTYMFIOAlW1eISCrX4UkWjB61m89BP9PiUDr7ZcI2pOALsktFboeltiRsxjr36GKwHWQSZj914OdqjSH9t4ZVftIMD0dQkJhGOK_zHOKqnBXOGvMz_q8Nqtng5X_NCEVbV4abm7V4mWfckwD3y0XXWC_QIgAW2fpX1gu4rQso9FlwGphVnPdduLtYmY9FPQfDRuT4Rb-PoEzqqNQ8AOLmXXfQkKzdvQyCjYznXH_UNHU"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
