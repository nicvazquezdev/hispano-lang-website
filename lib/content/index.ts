import { LessonContent } from "@/lib/lessons/types";

// Lecciones migradas
import { lesson as variablesLesson } from "./variables/lesson";
import { lesson as constantesLesson } from "./constantes/lesson";
import { lesson as comentariosLesson } from "./comentarios/lesson";
import { lesson as tiposDatosLesson } from "./tipos-datos/lesson";
import { lesson as metodosStringsLesson } from "./metodos-strings/lesson";
import { lesson as templateStringsLesson } from "./template-strings/lesson";
import { lesson as operadoresLesson } from "./operadores/lesson";
import { lesson as condicionalesLesson } from "./condicionales/lesson";
import { lesson as elegirCasoLesson } from "./elegir-caso/lesson";
import { lesson as buclesLesson } from "./bucles/lesson";
import { lesson as controlFlujoBuclesLesson } from "./control-flujo-bucles/lesson";
import { lesson as buclesAvanzadosLesson } from "./bucles-avanzados/lesson";
import { lesson as funcionesLesson } from "./funciones/lesson";
import { lesson as funcionesFlechaLesson } from "./funciones-flecha/lesson";
import { lesson as funcionesMatematicasLesson } from "./funciones-matematicas/lesson";
import { lesson as conversionTiposLesson } from "./conversion-tipos/lesson";
import { lesson as metodosNumericosLesson } from "./metodos-numericos/lesson";
import { lesson as listasLesson } from "./listas/lesson";
import { lesson as objetosLesson } from "./objetos/lesson";
import { lesson as clasesLesson } from "./clases/lesson";
import { lesson as herenciaLesson } from "./herencia/lesson";
import { lesson as manejoErroresLesson } from "./manejo-errores/lesson";
import { lesson as ejemplosAvanzadosLesson } from "./ejemplos-avanzados/lesson";

export const lessonsContent: Record<string, LessonContent> = {
  "variables": variablesLesson,
  "constantes": constantesLesson,
  "comentarios": comentariosLesson,
  "tipos-datos": tiposDatosLesson,
  "metodos-strings": metodosStringsLesson,
  "template-strings": templateStringsLesson,
  "operadores": operadoresLesson,
  "condicionales": condicionalesLesson,
  "elegir-caso": elegirCasoLesson,
  "bucles": buclesLesson,
  "control-flujo-bucles": controlFlujoBuclesLesson,
  "bucles-avanzados": buclesAvanzadosLesson,
  "funciones": funcionesLesson,
  "funciones-flecha": funcionesFlechaLesson,
  "funciones-matematicas": funcionesMatematicasLesson,
  "conversion-tipos": conversionTiposLesson,
  "metodos-numericos": metodosNumericosLesson,
  "listas": listasLesson,
  "objetos": objetosLesson,
  "clases": clasesLesson,
  "herencia": herenciaLesson,
  "manejo-errores": manejoErroresLesson,
  "ejemplos-avanzados": ejemplosAvanzadosLesson,
};

export function getLessonContent(id: string): LessonContent | null {
  return lessonsContent[id] || null;
}

export function getAllLessonIds(): string[] {
  return Object.keys(lessonsContent);
}
