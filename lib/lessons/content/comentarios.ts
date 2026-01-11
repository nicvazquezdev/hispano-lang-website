import { LessonContent } from "../types";

export const comentarios: LessonContent = {
  badge: { emoji: "💭", text: "Lección 3" },
  title: "Comentarios en",
  titleGradient: " HispanoLang",
  description: "Aprende a documentar tu código con comentarios útiles",
  prev: { url: "/lecciones/constantes", title: "Constantes" },
  next: { url: "/lecciones/tipos-datos", title: "Tipos de Datos" },
  steps: [
    {
      title: "¿Qué son los comentarios?",
      content: "Los comentarios son líneas que el programa ignora. Sirven para escribir notas o explicaciones en tu código.",
      code: `// Este es un comentario
variable x = 10
mostrar x`,
      explanation: "Los comentarios empiezan con //. Todo lo que escribas después es ignorado por el programa.",
      challenge: "Crea una variable con tu nombre y muéstrala. Agrega un comentario antes explicando qué hace tu código.",
      validation: {
        requiredCode: ["//", "/variable\\s+\\w+\\s*=/", "mostrar"],
      },
    },
    {
      title: "Comentarios en Diferentes Lugares",
      content: "Los comentarios pueden ir en su propia línea o al final de una línea de código.",
      code: `// Comentario en su propia línea
variable edad = 25

variable nombre = "Ana"  // Comentario al final

// Varias líneas de comentarios
// una debajo de la otra
variable ciudad = "Madrid"

mostrar nombre`,
      explanation: "Puedes poner comentarios donde más te convenga para explicar tu código.",
      challenge: "Crea tres variables (nombre, edad, ciudad). Agrega un comentario al inicio explicando el programa.",
      validation: {
        requiredCode: ["//", "/nombre\\s*=/", "/edad\\s*=/", "/ciudad\\s*=/"],
      },
    },
    {
      title: "Comentarios para Desactivar Código",
      content: "Puedes desactivar código agregando // al inicio. Esto es útil para probar sin borrar.",
      code: `variable numero = 10

mostrar "El número es: " + numero

// mostrar "Esta línea no se ejecuta"

variable doble = numero * 2
mostrar "El doble es: " + doble`,
      explanation: "La línea comentada no se ejecuta. Puedes activarla quitando //.",
      challenge: "Escribe 4 mensajes con mostrar. Comenta 2 de ellos y ejecuta. Solo se verán 2 mensajes.",
      validation: {
        requiredCode: ["/\\/\\/\\s*mostrar/", "/mostrar\\s+\"/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Usa comentarios para organizar y documentar tu código.",
      code: `// Mi primer programa con comentarios

variable mi_nombre = "Pedro"  // Cambia por tu nombre
variable mi_edad = 20  // Cambia por tu edad

mostrar "Hola, soy " + mi_nombre
mostrar "Tengo " + mi_edad + " años"`,
      explanation: "Los comentarios te ayudan a entender tu código cuando lo revisas después.",
      challenge: "Crea un programa que sume dos números. Agrega comentarios explicando cada paso.",
      summary: "🧠 Recuerda:\n\n• Los comentarios empiezan con //\n• El programa ignora los comentarios\n• Úsalos para explicar tu código\n• Puedes comentar código para desactivarlo",
      validation: {
        requiredCode: ["//", "+"],
      },
    },
  ],
};
