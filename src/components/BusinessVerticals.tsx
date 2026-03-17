export default function BusinessVerticals() {
  const verticals = [
    { name: "Ortho", icon: "orthopedics" },
    { name: "Medicine", icon: "medical_services" },
    { name: "Gastro", icon: "body_system" },
    { name: "Gynaec", icon: "female" },
    { name: "Dental", icon: "dentistry" },
    { name: "ENT", icon: "hearing" },
    { name: "Dermatology", icon: "vaccines" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Core Business Verticals
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Specialized care and advanced research across diverse medical fields
            to ensure comprehensive health solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {verticals.map((vertical, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  {vertical.icon}
                </span>
              </div>
              <h3 className="text-secondary text-sm font-bold text-center">
                {vertical.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
