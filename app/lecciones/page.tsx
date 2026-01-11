import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LessonCard from "@/components/lessons/LessonCard";
import Section from "@/components/ui/Section";
import { lessons } from "@/lib/lessons";

export default function LeccionesPage() {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <Section
          background="light"
          badge={{ emoji: "🎓", text: "Aprende Programando" }}
          title="Lecciones Interactivas de"
          titleGradient=" HispanoLang"
          description="Tutoriales paso a paso con ejemplos en vivo. Desde básico hasta avanzado."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
