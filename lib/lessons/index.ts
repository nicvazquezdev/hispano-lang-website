export * from "./types";
export * from "./content";

export interface LessonInfo {
  id: string;
  title: string;
  description: string;
  emoji: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
}

export const lessons: LessonInfo[] = [
  // Fundamentos (1-4)
  {
    id: "variables",
    title: "Variables",
    description: "Aprende a almacenar y manipular datos",
    emoji: "📦",
    difficulty: "Principiante",
    duration: "10 min",
  },
  {
    id: "constantes",
    title: "Constantes",
    description: "Valores que no pueden cambiar",
    emoji: "🔒",
    difficulty: "Principiante",
    duration: "8 min",
  },
  {
    id: "comentarios",
    title: "Comentarios",
    description: "Documenta tu código",
    emoji: "💭",
    difficulty: "Principiante",
    duration: "10 min",
  },
  {
    id: "tipos-datos",
    title: "Tipos de Datos",
    description: "Números, texto, booleanos y más",
    emoji: "🔢",
    difficulty: "Principiante",
    duration: "15 min",
  },

  // Strings (5-6)
  {
    id: "metodos-strings",
    title: "Métodos de Strings",
    description: "Manipula y transforma texto",
    emoji: "🔤",
    difficulty: "Principiante",
    duration: "25 min",
  },
  {
    id: "template-strings",
    title: "Template Strings",
    description: "Interpolación de variables en texto",
    emoji: "📝",
    difficulty: "Principiante",
    duration: "15 min",
  },

  // Operadores y Condicionales (7-9)
  {
    id: "operadores",
    title: "Operadores",
    description: "Matemáticas y comparaciones",
    emoji: "➕",
    difficulty: "Principiante",
    duration: "20 min",
  },
  {
    id: "condicionales",
    title: "Condicionales",
    description: "Toma decisiones en tu código",
    emoji: "🤔",
    difficulty: "Intermedio",
    duration: "25 min",
  },
  {
    id: "elegir-caso",
    title: "Elegir/Caso",
    description: "Múltiples caminos de decisión",
    emoji: "🎯",
    difficulty: "Intermedio",
    duration: "20 min",
  },

  // Bucles (10-12)
  {
    id: "bucles",
    title: "Bucles",
    description: "Repite acciones automáticamente",
    emoji: "🔄",
    difficulty: "Intermedio",
    duration: "30 min",
  },
  {
    id: "control-flujo-bucles",
    title: "Control de Flujo",
    description: "Romper y continuar en bucles",
    emoji: "🔀",
    difficulty: "Intermedio",
    duration: "20 min",
  },
  {
    id: "bucles-avanzados",
    title: "Bucles Avanzados",
    description: "hacer/mientras y para cada",
    emoji: "🔁",
    difficulty: "Intermedio",
    duration: "20 min",
  },

  // Funciones (13-14)
  {
    id: "funciones",
    title: "Funciones",
    description: "Crea código reutilizable",
    emoji: "⚡",
    difficulty: "Intermedio",
    duration: "35 min",
  },
  {
    id: "funciones-flecha",
    title: "Funciones Flecha",
    description: "Sintaxis concisa para funciones anónimas",
    emoji: "➡️",
    difficulty: "Intermedio",
    duration: "30 min",
  },
  {
    id: "funciones-matematicas",
    title: "Funciones Matemáticas",
    description: "Cálculos avanzados integrados",
    emoji: "🧮",
    difficulty: "Intermedio",
    duration: "25 min",
  },

  // Tipos y Números (15-16)
  {
    id: "conversion-tipos",
    title: "Conversión de Tipos",
    description: "Transforma datos entre diferentes tipos",
    emoji: "🔄",
    difficulty: "Intermedio",
    duration: "15 min",
  },
  {
    id: "metodos-numericos",
    title: "Métodos Numéricos",
    description: "Operaciones especiales con números",
    emoji: "🔢",
    difficulty: "Intermedio",
    duration: "15 min",
  },

  // Estructuras de Datos (17-18)
  {
    id: "listas",
    title: "Listas",
    description: "Trabaja con colecciones de datos",
    emoji: "📋",
    difficulty: "Intermedio",
    duration: "35 min",
  },
  {
    id: "objetos",
    title: "Objetos",
    description: "Organiza datos con propiedades",
    emoji: "🗂️",
    difficulty: "Intermedio",
    duration: "30 min",
  },

  // POO (19-20)
  {
    id: "clases",
    title: "Clases",
    description: "Programación orientada a objetos",
    emoji: "🏗️",
    difficulty: "Avanzado",
    duration: "35 min",
  },
  {
    id: "herencia",
    title: "Herencia",
    description: "Extender clases con extiende y super",
    emoji: "🌳",
    difficulty: "Avanzado",
    duration: "30 min",
  },

  // Avanzado (21-22)
  {
    id: "manejo-errores",
    title: "Manejo de Errores",
    description: "Crea programas robustos",
    emoji: "🛡️",
    difficulty: "Avanzado",
    duration: "25 min",
  },
  {
    id: "ejemplos-avanzados",
    title: "Ejemplos Avanzados",
    description: "Proyectos integrando todo",
    emoji: "🎓",
    difficulty: "Avanzado",
    duration: "40 min",
  },
];
