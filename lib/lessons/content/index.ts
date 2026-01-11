import { LessonContent } from "../types";
import { variables } from "./variables";
import { comentarios } from "./comentarios";
import { tiposDatos } from "./tipos-datos";
import { metodosStrings } from "./metodos-strings";
import { operadores } from "./operadores";
import { condicionales } from "./condicionales";
import { bucles } from "./bucles";
import { controlFlujoBucles } from "./control-flujo-bucles";
import { funciones } from "./funciones";
import { funcionesMatematicas } from "./funciones-matematicas";
import { listas } from "./listas";
import { objetos } from "./objetos";
import { manejoErrores } from "./manejo-errores";
import { ejemplosAvanzados } from "./ejemplos-avanzados";

export const lessonsContent: Record<string, LessonContent> = {
  "variables": variables,
  "comentarios": comentarios,
  "tipos-datos": tiposDatos,
  "metodos-strings": metodosStrings,
  "operadores": operadores,
  "condicionales": condicionales,
  "bucles": bucles,
  "control-flujo-bucles": controlFlujoBucles,
  "funciones": funciones,
  "funciones-matematicas": funcionesMatematicas,
  "listas": listas,
  "objetos": objetos,
  "manejo-errores": manejoErrores,
  "ejemplos-avanzados": ejemplosAvanzados,
};
