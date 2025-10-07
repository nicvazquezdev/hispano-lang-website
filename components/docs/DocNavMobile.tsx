"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface NavSection {
  id: string;
  title: string;
}

interface DocNavMobileProps {
  sections: NavSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function DocNavMobile({
  sections,
  activeSection,
  onSectionChange,
}: DocNavMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    // Scroll hacia arriba con animación suave
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mobileMenu = (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        aria-label="Abrir menú de contenido"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay Modal */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-800">Contenido</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation List */}
            <nav className="p-4 max-h-[60vh] overflow-y-auto">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all text-lg font-medium ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-l-4 border-purple-500"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {activeSection === section.id && (
                          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        )}
                        <span>{section.title}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );

  if (!mounted) return null;

  return createPortal(mobileMenu, document.body);
}
