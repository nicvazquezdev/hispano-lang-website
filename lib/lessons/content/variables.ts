import { LessonContent } from "../types";

export const variables: LessonContent = {
  badge: { emoji: "📦", text: "Lección 1" },
  title: "Variables en",
  titleGradient: " HispanoLang",
  description: "Aprende a almacenar y manipular datos paso a paso",
  next: { url: "/lecciones/comentarios", title: "Comentarios" },
  steps: [
    {
      title: "¿Qué son las variables?",
      content: "Las variables son uno de los conceptos más importantes en programación. Son como cajas donde guardamos información que queremos usar más adelante. En HispanoLang, usamos la palabra `variable` para crear una nueva caja con un nombre y un valor.",
      code: `variable mi_nombre = "Ana"
mostrar mi_nombre`,
      explanation: "Aquí creamos una variable llamada `mi_nombre` y le asignamos el valor 'Ana'. El texto va entre comillas dobles. Luego usamos `mostrar` para imprimir el valor en pantalla.",
      challenge: "Crea una variable llamada `mi_edad` con tu edad y muéstrala en pantalla.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Diferentes tipos de variables",
      content: "En programación, no toda la información es igual. Tenemos texto, números y valores verdadero/falso (booleanos).",
      code: `variable nombre = "Juan"
variable edad = 25
variable es_estudiante = verdadero

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad
mostrar "Es estudiante: " + es_estudiante`,
      explanation: "Creamos tres variables: texto (entre comillas), número (sin comillas) y booleano (verdadero/falso). Usamos + para concatenar.",
      challenge: "Crea variables para tu color favorito, tu número de la suerte y si te gusta programar. Muestra todo.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Cambiar el valor de una variable",
      content: "Podemos cambiar el contenido de una variable en cualquier momento usando =.",
      code: `variable contador = 0
mostrar "Contador inicial: " + contador

contador = 5
mostrar "Contador después: " + contador

contador = contador + 3
mostrar "Contador final: " + contador`,
      explanation: "Cambiamos el valor del contador varias veces. En `contador = contador + 3`, tomamos el valor actual y le sumamos 3.",
      challenge: "Crea una variable `puntos` que empiece en 10, cámbiala a 25, y súmale 5. Muestra el resultado en cada paso.",
      validation: { expectedOutputs: ["10", "25", "30"] },
    },
    {
      title: "Variables con operaciones matemáticas",
      content: "Las variables pueden participar en operaciones matemáticas: +, -, *, /",
      code: `variable precio = 100
variable descuento = 20
variable precio_final = precio - descuento

mostrar "Precio original: " + precio
mostrar "Descuento: " + descuento
mostrar "Precio final: " + precio_final`,
      explanation: "Usamos operadores matemáticos para calcular el precio final.",
      challenge: "Crea variables `base` y `altura`, calcula el área (base × altura) y muéstrala.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "¡Práctica libre!",
      content: "Ahora es tu turno. Crea tus propias variables y experimenta.",
      code: `variable mi_variable = "¡Hola mundo!"
mostrar mi_variable`,
      explanation: "Practica creando variables de diferentes tipos y combinándolas.",
      challenge: "Crea una variable `pais` y muestra 'Vivo en [tu país]'. Agrega `ciudad` y combina ambas.",
      summary: "🧠 Recuerda:\n\n• Usa `variable` para crear una nueva caja.\n• Puedes cambiar su contenido en cualquier momento.\n• Las variables pueden guardar texto, números o booleanos.\n• Usa `mostrar` para ver el contenido.",
      validation: { expectedOutputs: ["Vivo en"] },
    },
  ],
};
