"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/lecciones"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Lecciones
              </Link>
              <Link
                href="/documentacion"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Documentación
              </Link>
              <a
                href="https://github.com/nicvazquezdev/hispano-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
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
            className="px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors border-b border-slate-100"
          >
            Inicio
          </Link>
          <Link
            href="/lecciones"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors border-b border-slate-100"
          >
            Lecciones
          </Link>
          <Link
            href="/documentacion"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors border-b border-slate-100"
          >
            Documentación
          </Link>
          <a
            href="https://github.com/nicvazquezdev/hispano-lang"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
