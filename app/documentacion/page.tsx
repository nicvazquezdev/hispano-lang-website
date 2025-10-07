"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import DocNav from "@/components/docs/DocNav";
import DocSection from "@/components/docs/DocSection";
import { docsData } from "@/lib/data";

export default function DocumentacionPage() {
  const [activeSection, setActiveSection] = useState("variables");

  const sections = [
    { id: "variables", title: "Variables" },
    { id: "tiposDatos", title: "Tipos de Datos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden pt-10">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Section
          background="light"
          badge={{ emoji: "📚", text: "Referencia Completa" }}
          title="Documentación de"
          titleGradient=" Hispano Lang"
          description="Referencia completa de sintaxis, comandos y características del lenguaje"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <DocNav
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeSection && (
                <DocSection
                  title={docsData[activeSection as keyof typeof docsData].title}
                  description={
                    docsData[activeSection as keyof typeof docsData].description
                  }
                  subsections={
                    docsData[activeSection as keyof typeof docsData].subsections
                  }
                />
              )}
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
