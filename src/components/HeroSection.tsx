export default function HeroSection() {
  const text = "Trusted Medicines.";

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img
          src="/hero1.gif"
          alt="Abstract Molecular Animation"
          className="w-full h-full object-cover mix-blend-luminosity animate-gif-fade"
        />
        {/* Sky Blue Ambient Light Leaks */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_50%)] z-0 mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,93,151,0.15),transparent_60%)] z-0 mix-blend-screen pointer-events-none" />

      </div>

      {/* Centered headline */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 w-full">
        <div className="max-w-5xl text-center md:text-left mx-auto md:mx-0">
          <h1 
            className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.15] mb-6 md:mb-8 tracking-tight drop-shadow-lg select-none"
            aria-label="Trusted Medicines. Better Health."
          >
            {/* Line 1: Trusted Medicines. */}
            <span className="block" aria-hidden="true">
              <span className="inline-flex flex-wrap">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block overflow-hidden"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    <span
                      className="inline-block animate-text-reveal"
                      style={{
                        animationDelay: `${index * 0.03}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </span>
            </span>

            {/* Line 2: Better Health. with diamond glare shimmer */}
            <span className="block mt-2 md:mt-3" aria-hidden="true">
              <span 
                className="inline-block animate-glow-fade"
                style={{
                  animationDelay: `${text.length * 0.03 + 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                <span className="inline-block bg-[linear-gradient(110deg,#005d97,35%,#93c5fd,45%,#ffffff,55%,#93c5fd,65%,#005d97)] bg-[length:200%_auto] bg-clip-text text-transparent animate-text-glare drop-shadow-[0_0_15px_rgba(0,93,151,0.4)]">
                  Better Health.
                </span>
              </span>
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom fade for cinematic transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-secondary to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
