"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("scroll-lock");
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `text-sm transition-colors relative ${
      isActive(path)
        ? "text-primary font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
        : "text-slate-600 font-medium hover:text-primary"
    }`;

  const mobileLinkClass = (path: string) =>
    `block py-3 text-lg transition-colors ${
      isActive(path)
        ? "text-primary font-bold border-l-4 border-primary pl-4 -ml-4"
        : "text-slate-600 font-medium hover:text-primary"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center z-50">
              <img
                alt="Amphar Health Care Logo"
                className="h-12 md:h-16 w-auto object-contain transition-all"
                src="/logo.png"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
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

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden z-50 p-2 -mr-2 text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 xl:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto pt-24 px-6 pb-6">
          <nav className="flex flex-col space-y-2 mb-8">
            <Link className={mobileLinkClass("/")} href="/">
              Home
            </Link>
            <Link className={mobileLinkClass("/about")} href="/about">
              About Us
            </Link>
            <Link className={mobileLinkClass("/products")} href="/products">
              Products
            </Link>
            <Link className={mobileLinkClass("/responsibility")} href="/#responsibility">
              Responsibility
            </Link>
            <Link className={mobileLinkClass("/contact")} href="/#contact">
              Contact Us
            </Link>
          </nav>

          <div className="border-t border-slate-100 pt-8 flex flex-col gap-4">
            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200">
              <span className="material-symbols-outlined text-slate-400 text-xl mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-base w-full placeholder:text-slate-400"
                placeholder="Search products..."
                type="text"
              />
            </div>
            <button className="w-full bg-primary text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
