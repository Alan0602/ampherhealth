export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-secondary">
      {/* Immersive Background GIF instead of right-side image */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif"
          alt="Abstract Molecular Animation"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full animate-fade-in-up">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border border-primary/20 shadow-sm backdrop-blur-sm">
            Innovative Medical Solutions
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            Advancing Healthcare for a{" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,93,151,0.5)]">Better Future</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 drop-shadow-md">
            Dedicated to providing high-quality medical solutions and improving
            lives through scientific innovation and compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
              Explore Our Portfolio
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-all">
              Our Vision
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
