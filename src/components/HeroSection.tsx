export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img
          src="/Whisk_imy3utmhvtz3emn00inkzgotuwzirtlkrmyl1sn.gif"
          alt="Abstract Molecular Animation"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/30 to-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-transparent to-secondary/70" />
      </div>

      {/* Centered headline */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full animate-fade-in-up">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            Trusted Medicines. {" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,93,151,0.5)]">Better Health.</span>
          </h1>
        </div>
      </div>

      {/* Bottom fade for cinematic transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-secondary to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
