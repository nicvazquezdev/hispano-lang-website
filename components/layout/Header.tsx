"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GitHubIcon from "@/components/ui/GitHubIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-2 sm:top-5 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-3/4 px-3 sm:px-4 z-50 bg-transparent backdrop-blur-lg border border-transparent rounded-xl sm:rounded-2xl transition-shadow duration-100 ${
        isScrolled ? "border-white/10 shadow-[0_3px_20px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-12 sm:h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  HispanoLang
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  pathname === "/"
                    ? "text-purple-600"
                    : "text-slate-700 hover:text-purple-600"
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/lecciones"
                className={`font-medium transition-colors ${
                  pathname?.startsWith("/lecciones")
                    ? "text-purple-600"
                    : "text-slate-700 hover:text-purple-600"
                }`}
              >
                Lecciones
              </Link>
              <Link
                href="/documentacion"
                className={`font-medium transition-colors ${
                  pathname?.startsWith("/documentacion")
                    ? "text-purple-600"
                    : "text-slate-700 hover:text-purple-600"
                }`}
              >
                Documentación
              </Link>
              <a
                href="https://github.com/nicvazquezdev/hispano-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-2"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-700 p-1 relative w-6 h-6"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Abrir menú</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-3 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${
          isMenuOpen
            ? "opacity-100 scale-y-100 max-h-96"
            : "opacity-0 scale-y-95 max-h-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`px-6 py-4 font-medium transition-all border-b border-slate-100 ${
              pathname === "/"
                ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-l-4 border-purple-500"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {pathname === "/" && (
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              )}
              <span>Inicio</span>
            </div>
          </Link>
          <Link
            href="/lecciones"
            onClick={() => setIsMenuOpen(false)}
            className={`px-6 py-4 font-medium transition-all border-b border-slate-100 ${
              pathname?.startsWith("/lecciones")
                ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-l-4 border-purple-500"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {pathname?.startsWith("/lecciones") && (
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              )}
              <span>Lecciones</span>
            </div>
          </Link>
          <Link
            href="/documentacion"
            onClick={() => setIsMenuOpen(false)}
            className={`px-6 py-4 font-medium transition-all border-b border-slate-100 ${
              pathname?.startsWith("/documentacion")
                ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-l-4 border-purple-500"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {pathname?.startsWith("/documentacion") && (
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              )}
              <span>Documentación</span>
            </div>
          </Link>
          <a
            href="https://github.com/nicvazquezdev/hispano-lang"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 text-slate-700 hover:bg-slate-50 font-medium transition-colors flex items-center gap-2"
          >
            <GitHubIcon />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
