export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-secondary">
      {/* 3D Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      {/* Rotating Molecule Visualization Simulation */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
        data-alt="3D abstract molecular structure rotating in space"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAQDhz3stK1omNFqUbYAxJcF5h80aSjnYaV5rYZR8kTRmku5kl86gjtVsyKlEF2xVDqpa0V1hHYCWNzlVcn64wDZ93lBg7uTCjYxiCCG1hvG6Fc6OClSXokKcBDxHfdkwzA7p9u7YjoSo4ZtvoiSeMeyd-Kg0IhdnLpT6ReI9wLWbLCBvx2wdMNwz1wNQH-PqV2iFiRn2FN2rTUaruTv6LOvunUtK3icMPeOKKIM3zLoNXJ7zrKW6mt-0z8FtU6fGJh6H0bTfzwwE')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Innovative Medical Solutions
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
            Advancing Healthcare for a{" "}
            <span className="text-primary">Better Future</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-lg">
            Dedicated to providing high-quality medical solutions and improving
            lives through scientific innovation and compassionate care.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
              Explore Our Portfolio
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-all">
              Our Vision
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
