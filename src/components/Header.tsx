"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `text-sm transition-colors ${isActive(path)
      ? "text-primary font-bold"
      : "text-slate-600 font-medium hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img
              alt="Amphar Health Care Logo"
              className="h-16 w-auto object-contain"
              src="/logo.png"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link className={linkClass("/")} href="/">
              Home
            </Link>
            <Link className={linkClass("/about")} href="/about">
              About Us
            </Link>
            <Link className={linkClass("/products")} href="/products">
              Products
            </Link>
            <Link className={linkClass("/responsibility")} href="/#responsibility">
              Responsibility
            </Link>
            <Link className={linkClass("/contact")} href="/#contact">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
              <span className="material-symbols-outlined text-slate-400 text-xl">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-slate-400"
                placeholder="Search..."
                type="text"
              />
            </div>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-md shadow-primary/20">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
