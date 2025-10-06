"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
                  Hispano Lang
                </span>
              </Link>
            </div>

            <div></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
