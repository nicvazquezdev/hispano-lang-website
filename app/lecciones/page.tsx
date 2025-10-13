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
      id: "comentarios",
      title: "Comentarios",
      description: "Documenta tu código",
      emoji: "💭",
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
      id: "metodos-strings",
      title: "Métodos de Strings",
      description: "Manipula y transforma texto",
      emoji: "🔤",
      difficulty: "Principiante",
      duration: "20 min",
      completed: false,
    },
    /*{
      id: "entrada-salida",
      title: "Entrada y Salida",
      description: "Interactúa con el usuario",
      emoji: "💬",
      difficulty: "Principiante",
      duration: "12 min",
      completed: false,
    },*/
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
    {
      id: "control-flujo-bucles",
      title: "Control de Flujo en Bucles",
      description: "Romper y continuar en bucles",
      emoji: "🔀",
      difficulty: "Intermedio",
      duration: "20 min",
      completed: false,
    },
    {
      id: "funciones",
      title: "Funciones",
      description: "Crea código reutilizable",
      emoji: "⚡",
      difficulty: "Intermedio",
      duration: "35 min",
      completed: false,
    },
    {
      id: "funciones-matematicas",
      title: "Funciones Matemáticas",
      description: "Cálculos avanzados integrados",
      emoji: "🧮",
      difficulty: "Intermedio",
      duration: "25 min",
      completed: false,
    },
    {
      id: "listas",
      title: "Listas",
      description: "Trabaja con colecciones de datos",
      emoji: "📋",
      difficulty: "Intermedio",
      duration: "30 min",
      completed: false,
    },
    {
      id: "objetos",
      title: "Objetos",
      description: "Organiza datos con propiedades",
      emoji: "🗂️",
      difficulty: "Intermedio",
      duration: "30 min",
      completed: false,
    },
    {
      id: "manejo-errores",
      title: "Manejo de Errores",
      description: "Crea programas robustos",
      emoji: "🛡️",
      difficulty: "Avanzado",
      duration: "25 min",
      completed: false,
    },
    {
      id: "ejemplos-avanzados",
      title: "Ejemplos Avanzados",
      description: "Proyectos integrando todo",
      emoji: "🎓",
      difficulty: "Avanzado",
      duration: "40 min",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
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
