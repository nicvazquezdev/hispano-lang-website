import { LessonContent } from "../types";

export const listas: LessonContent = {
  badge: { emoji: "📋", text: "Lección 11" },
  title: "Listas en",
  titleGradient: " HispanoLang",
  description: "Trabaja con colecciones de datos",
  prev: { url: "/lecciones/funciones-matematicas", title: "Funciones Matemáticas" },
  next: { url: "/lecciones/objetos", title: "Objetos" },
  steps: [
    {
      title: "¿Qué son las listas?",
      content: "Las listas almacenan múltiples valores en una sola variable.",
      code: `variable numeros = [1, 2, 3, 4, 5]
variable frutas = ["manzana", "banana", "naranja"]

mostrar numeros
mostrar frutas`,
      explanation: "Se crean con corchetes [] y elementos separados por comas.",
      challenge: "Crea una lista con tus 3 colores favoritos y muéstrala.",
      validation: {
        requiredCode: ["/\\[.*,.*,.*\\]/"],
      },
    },
    {
      title: "Acceder a Elementos",
      content: "Los índices empiezan desde 0.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

mostrar "Primera: " + frutas[0]
mostrar "Segunda: " + frutas[1]

frutas[1] = "pera"
mostrar "Modificada: " + frutas`,
      explanation: "Usamos [índice] para acceder o modificar elementos.",
      challenge: "Crea una lista de 4 números. Muestra el primero y el último. Cambia el segundo a 100.",
      validation: {
        requiredCode: ["/\\[\\s*0\\s*\\]/", "/\\[\\s*3\\s*\\]/", "/=\\s*100/"],
      },
    },
    {
      title: "Métodos de Listas",
      content: "longitud(), primero(), ultimo() para información básica.",
      code: `variable numeros = [10, 20, 30, 40]

mostrar "Longitud: " + numeros.longitud()
mostrar "Primero: " + numeros.primero()
mostrar "Último: " + numeros.ultimo()`,
      explanation: "Métodos útiles para trabajar con listas sin recordar índices.",
      challenge: "Lista con días de la semana. Muestra cuántos hay, el primero y el último.",
      validation: {
        requiredCode: ["/\\.longitud\\(\\)/", "/\\.primero\\(\\)/", "/\\.ultimo\\(\\)/"],
        expectedOutputs: ["7"],
      },
    },
    {
      title: "Agregar y Remover",
      content: "agregar() añade, remover() quita el último.",
      code: `variable frutas = ["manzana"]

frutas.agregar("banana")
mostrar frutas

variable eliminada = frutas.remover()
mostrar "Eliminada: " + eliminada
mostrar frutas`,
      explanation: "Las listas son dinámicas: crecen y se reducen.",
      challenge: "Lista vacía. Agrega 3 elementos. Remueve 1. Muestra la lista final.",
      validation: {
        requiredCode: ["/\\.agregar\\(/", "/\\.remover\\(\\)/"],
      },
    },
    {
      title: "Recorrer Listas",
      content: "Usa .recorrer() con una función para procesar cada elemento.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

frutas.recorrer(funcion(fruta) {
    mostrar "Fruta: " + fruta
})`,
      explanation: "La función se ejecuta para cada elemento de la lista.",
      challenge: "Lista de 3 precios. Recorre y muestra cada precio con IVA (precio * 1.21).",
      validation: {
        requiredCode: ["/\\.recorrer\\s*\\(\\s*funcion/", "/\\*\\s*1\\.21|1\\.21\\s*\\*/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina listas con todo lo aprendido.",
      code: `variable estudiantes = ["Ana", "Carlos", "María"]
variable notas = [85, 92, 78]

estudiantes.recorrer(funcion(nombre, i) {
    mostrar nombre + ": " + notas[i]
})`,
      explanation: "Listas relacionadas para datos más complejos.",
      challenge: "Lista de 5 números. Calcula y muestra la suma total.",
      summary: "🧠 Recuerda:\n\n• Listas: [elem1, elem2, ...]\n• Índices desde 0\n• .longitud(), .primero(), .ultimo()\n• .agregar(), .remover()\n• .recorrer() para procesar elementos",
      validation: {
        requiredCode: ["/\\[.*,.*,.*,.*,.*\\]/", "/\\+/"],
      },
    },
  ],
};
