import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LessonCard from "@/components/lessons/LessonCard";
import Section from "@/components/ui/Section";

export default function LeccionesPage() {
  const lessons = [
    {
      id: "variables",
      title: "Variables",
      description: "Aprende a almacenar y manipular datos",
      emoji: "📦",
      difficulty: "Principiante",
      duration: "10 min",
      completed: false,
    },
    {
      id: "tipos-datos",
      title: "Tipos de Datos",
      description: "Números, texto, booleanos y más",
      emoji: "🔢",
      difficulty: "Principiante",
      duration: "15 min",
      completed: false,
    },
    {
      id: "entrada-salida",
      title: "Entrada y Salida",
      description: "Interactúa con el usuario",
      emoji: "💬",
      difficulty: "Principiante",
      duration: "12 min",
      completed: false,
    },
    {
      id: "operadores",
      title: "Operadores",
      description: "Matemáticas y comparaciones",
      emoji: "➕",
      difficulty: "Principiante",
      duration: "20 min",
      completed: false,
    },
    {
      id: "condicionales",
      title: "Condicionales",
      description: "Toma decisiones en tu código",
      emoji: "🤔",
      difficulty: "Intermedio",
      duration: "25 min",
      completed: false,
    },
    {
      id: "bucles",
      title: "Bucles",
      description: "Repite acciones automáticamente",
      emoji: "🔄",
      difficulty: "Intermedio",
      duration: "30 min",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
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
          badge={{ emoji: "🎓", text: "Aprende Programando" }}
          title="Lecciones Interactivas"
          titleGradient=" de Hispano Lang"
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
