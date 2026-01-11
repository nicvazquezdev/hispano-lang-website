export * from "./types";
export * from "./content";

export interface LessonInfo {
  id: string;
  title: string;
  description: string;
  emoji: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
}

export const lessons: LessonInfo[] = [
  { id: 'variables', title: 'Variables', description: 'Aprende a almacenar y manipular datos', emoji: '📦', difficulty: 'Principiante', duration: '10 min' },
  { id: 'comentarios', title: 'Comentarios', description: 'Documenta tu código', emoji: '💭', difficulty: 'Principiante', duration: '10 min' },
  { id: 'tipos-datos', title: 'Tipos de Datos', description: 'Números, texto, booleanos y más', emoji: '🔢', difficulty: 'Principiante', duration: '15 min' },
  { id: 'metodos-strings', title: 'Métodos de Strings', description: 'Manipula y transforma texto', emoji: '🔤', difficulty: 'Principiante', duration: '20 min' },
  { id: 'operadores', title: 'Operadores', description: 'Matemáticas y comparaciones', emoji: '➕', difficulty: 'Principiante', duration: '20 min' },
  { id: 'condicionales', title: 'Condicionales', description: 'Toma decisiones en tu código', emoji: '🤔', difficulty: 'Intermedio', duration: '25 min' },
  { id: 'bucles', title: 'Bucles', description: 'Repite acciones automáticamente', emoji: '🔄', difficulty: 'Intermedio', duration: '30 min' },
  { id: 'control-flujo-bucles', title: 'Control de Flujo', description: 'Romper y continuar en bucles', emoji: '🔀', difficulty: 'Intermedio', duration: '20 min' },
  { id: 'funciones', title: 'Funciones', description: 'Crea código reutilizable', emoji: '⚡', difficulty: 'Intermedio', duration: '35 min' },
  { id: 'funciones-matematicas', title: 'Funciones Matemáticas', description: 'Cálculos avanzados integrados', emoji: '🧮', difficulty: 'Intermedio', duration: '25 min' },
  { id: 'listas', title: 'Listas', description: 'Trabaja con colecciones de datos', emoji: '📋', difficulty: 'Intermedio', duration: '30 min' },
  { id: 'objetos', title: 'Objetos', description: 'Organiza datos con propiedades', emoji: '🗂️', difficulty: 'Intermedio', duration: '30 min' },
  { id: 'manejo-errores', title: 'Manejo de Errores', description: 'Crea programas robustos', emoji: '🛡️', difficulty: 'Avanzado', duration: '25 min' },
  { id: 'ejemplos-avanzados', title: 'Ejemplos Avanzados', description: 'Proyectos integrando todo', emoji: '🎓', difficulty: 'Avanzado', duration: '40 min' },
];
