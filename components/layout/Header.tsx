"use client";
import { useState, useEffect } from "react";

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
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-3/4 px-4 z-50 bg-transparent backdrop-blur-lg border border-transparent rounded-2xl transition-shadow duration-100 ${
        isScrolled ? "border-white/10 shadow-[0_3px_20px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hispano Lang
                </span>
              </span>
            </div>

            <div></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
