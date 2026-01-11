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
      challenge: "Crea tres listas: números favoritos, nombres de amigos, y una mixta.",
      validation: { expectedOutputs: [] },
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
      challenge: "Lista de 5 calificaciones. Muestra la primera y última. Cambia la tercera a 10.",
      validation: { expectedOutputs: [] },
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
      validation: { expectedOutputs: [] },
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
      challenge: "Lista vacía de tareas. Agrega 4 tareas. Remueve 2. Muestra el resultado.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Recorrer Listas",
      content: "Usa .recorrer() con una función para procesar cada elemento.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

frutas.recorrer(funcion(fruta) {
    mostrar "Fruta: " + fruta
})`,
      explanation: "La función se ejecuta para cada elemento de la lista.",
      challenge: "Lista de precios. Recorre y muestra cada precio con IVA (precio * 1.21).",
      validation: { expectedOutputs: [] },
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
      challenge: "Sistema de inventario: lista de productos y cantidades. Verifica si existe un producto. Suma cantidades totales.",
      summary: "🧠 Recuerda:\n\n• Listas: [elem1, elem2, ...]\n• Índices desde 0\n• .longitud(), .primero(), .ultimo()\n• .agregar(), .remover()\n• .recorrer() para procesar elementos",
      validation: { expectedOutputs: [] },
    },
  ],
};
