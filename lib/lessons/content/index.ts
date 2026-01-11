import { LessonContent } from "../types";
import { variables } from "./variables";
import { constantes } from "./constantes";
import { comentarios } from "./comentarios";
import { tiposDatos } from "./tipos-datos";
import { metodosStrings } from "./metodos-strings";
import { templateStrings } from "./template-strings";
import { operadores } from "./operadores";
import { condicionales } from "./condicionales";
import { elegirCaso } from "./elegir-caso";
import { bucles } from "./bucles";
import { controlFlujoBucles } from "./control-flujo-bucles";
import { buclesAvanzados } from "./bucles-avanzados";
import { funciones } from "./funciones";
import { funcionesFlecha } from "./funciones-flecha";
import { funcionesMatematicas } from "./funciones-matematicas";
import { conversionTipos } from "./conversion-tipos";
import { metodosNumericos } from "./metodos-numericos";
import { listas } from "./listas";
import { objetos } from "./objetos";
import { clases } from "./clases";
import { herencia } from "./herencia";
import { manejoErrores } from "./manejo-errores";
import { ejemplosAvanzados } from "./ejemplos-avanzados";

export const lessonsContent: Record<string, LessonContent> = {
  "variables": variables,
  "constantes": constantes,
  "comentarios": comentarios,
  "tipos-datos": tiposDatos,
  "metodos-strings": metodosStrings,
  "template-strings": templateStrings,
  "operadores": operadores,
  "condicionales": condicionales,
  "elegir-caso": elegirCaso,
  "bucles": bucles,
  "control-flujo-bucles": controlFlujoBucles,
  "bucles-avanzados": buclesAvanzados,
  "funciones": funciones,
  "funciones-flecha": funcionesFlecha,
  "funciones-matematicas": funcionesMatematicas,
  "conversion-tipos": conversionTipos,
  "metodos-numericos": metodosNumericos,
  "listas": listas,
  "objetos": objetos,
  "clases": clases,
  "herencia": herencia,
  "manejo-errores": manejoErrores,
  "ejemplos-avanzados": ejemplosAvanzados,
};
