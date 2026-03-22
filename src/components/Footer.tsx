import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-8">
              <img
                alt="Amphar Logo"
                className="h-16 w-auto object-contain"
                src="/logo.png"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Leading the way in pharmaceutical innovation and healthcare
              accessibility since 1995. Dedicated to human wellness worldwide.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
              <Link
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">
                  thumb_up
                </span>
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="/products"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Media Center
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>
          {/* Business Verticals */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Medical Specialties
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Orthopedic Care
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Gastroenterology
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  Dermatology Range
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  ENT Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                  href="#"
                >
                  General Medicine
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Get In Touch
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <p className="text-slate-400 text-sm">
                  124 Healthcare Avenue, Life Sciences Park, <br />
                  Global City, 560001
                </p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <p className="text-slate-400 text-sm">+1 (800) AMPHAR-CARE</p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <p className="text-slate-400 text-sm">
                  contact@ampharhealth.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 text-sm md:text-xs">
            © 2024 Amphar Health Care. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            <Link
              className="text-slate-500 hover:text-white text-sm md:text-xs transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-slate-500 hover:text-white text-sm md:text-xs transition-colors"
              href="#"
            >
              Terms of Use
            </Link>
            <Link
              className="text-slate-500 hover:text-white text-sm md:text-xs transition-colors"
              href="#"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
