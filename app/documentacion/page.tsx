"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import DocNav from "@/components/docs/DocNav";
import DocSection from "@/components/docs/DocSection";
import { docsData } from "@/lib/data";

function DocumentacionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState(
    searchParams.get("seccion") || "variables",
  );

  useEffect(() => {
    const seccion = searchParams.get("seccion");
    if (seccion && docsData[seccion as keyof typeof docsData]) {
      setActiveSection(seccion);
      // Scroll hacia arriba en mobile cuando cambia la sección
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [searchParams]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    router.push(`/documentacion?seccion=${sectionId}`, { scroll: false });
  };

  const sections = [
    { id: "variables", title: "Variables" },
    { id: "comentarios", title: "Comentarios" },
    { id: "tiposDatos", title: "Tipos de Datos" },
    { id: "entradaSalida", title: "Entrada y Salida" },
    { id: "operadores", title: "Operadores" },
    { id: "condicionales", title: "Condicionales" },
    { id: "bucles", title: "Bucles" },
    { id: "funciones", title: "Funciones" },
    { id: "listas", title: "Listas" },
    { id: "objetos", title: "Objetos" },
    { id: "funcionesMatematicas", title: "Funciones Matemáticas" },
    { id: "manejoErrores", title: "Manejo de Errores" },
  ];

  // Obtener índice de la sección actual
  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection,
  );

  // Calcular sección anterior y siguiente (circular)
  const previousSection =
    currentIndex > 0
      ? sections[currentIndex - 1]
      : sections[sections.length - 1];

  const nextSection =
    currentIndex < sections.length - 1
      ? sections[currentIndex + 1]
      : sections[0];

  return (
    <Section
      background="light"
      badge={{ emoji: "📚", text: "Referencia Completa" }}
      title="Documentación de"
      titleGradient=" HispanoLang"
      description="Referencia completa de sintaxis, comandos y características del lenguaje"
      className="overflow-visible"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 w-full">
          <nav className="sticky top-24">
            <DocNav
              sections={sections}
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
            />
          </nav>
        </aside>

        {/* Main Content */}
        <article className="lg:w-3/4 w-full min-h-screen">
          {activeSection && (
            <DocSection
              title={docsData[activeSection as keyof typeof docsData].title}
              description={
                docsData[activeSection as keyof typeof docsData].description
              }
              subsections={
                docsData[activeSection as keyof typeof docsData].subsections
              }
              currentSection={activeSection}
              previousSection={previousSection}
              nextSection={nextSection}
            />
          )}
        </article>
      </div>
    </Section>
  );
}

export default function DocumentacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          }
        >
          <DocumentacionContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
