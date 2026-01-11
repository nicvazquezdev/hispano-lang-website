import { LessonContent } from "../types";

export const bucles: LessonContent = {
  badge: { emoji: "🔄", text: "Lección 10" },
  title: "Bucles en",
  titleGradient: " HispanoLang",
  description: "Aprende a automatizar tareas repetitivas",
  prev: { url: "/lecciones/elegir-caso", title: "Elegir/Caso" },
  next: { url: "/lecciones/control-flujo-bucles", title: "Control de Flujo" },
  steps: [
    {
      title: "¿Qué son los bucles?",
      content: "Los bucles repiten código múltiples veces sin escribirlo una y otra vez.",
      code: `variable i = 1

mientras i <= 5 {
    mostrar "Número: " + i
    i = i + 1
}

mostrar "Bucle terminado"`,
      explanation: "El bucle 'mientras' repite mientras la condición sea verdadera. ¡No olvides incrementar!",
      challenge: "Usa un bucle para mostrar los números del 10 al 1 (cuenta regresiva).",
      validation: {
        requiredCode: ["/mientras/"],
        expectedOutputs: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
      },
    },
    {
      title: "Bucle Mientras",
      content: "Perfecto cuando no sabemos cuántas veces se repetirá.",
      code: `variable contador = 0
variable suma = 0

mientras contador < 5 {
    contador = contador + 1
    suma = suma + contador
    mostrar "Suma parcial: " + suma
}

mostrar "Suma total: " + suma`,
      explanation: "Usamos un bucle para acumular valores.",
      challenge: "Calcula el factorial de 5 (5! = 5 × 4 × 3 × 2 × 1 = 120).",
      validation: {
        requiredCode: ["/mientras/", "/\\*/"],
        expectedOutputs: ["120"],
      },
    },
    {
      title: "Bucle Para",
      content: "Ideal cuando sabemos exactamente cuántas veces repetir.",
      code: `para (variable i = 1; i <= 5; i = i + 1) {
    mostrar "Iteración: " + i
}`,
      explanation: "El bucle 'para' tiene: inicialización, condición, incremento.",
      challenge: "Crea la tabla de multiplicar del 7 (7 x 1 = 7, 7 x 2 = 14, ... hasta 7 x 10).",
      validation: {
        requiredCode: ["/para\\s*\\(/", "/7\\s*\\*/"],
        expectedOutputs: ["7", "14", "21", "28", "35", "42", "49", "56", "63", "70"],
      },
    },
    {
      title: "Continuar y Romper",
      content: "'continuar' salta a la siguiente iteración. 'romper' termina el bucle.",
      code: `para (variable i = 1; i <= 10; i = i + 1) {
    si i == 5 {
        continuar
    }
    mostrar i
}`,
      explanation: "Se muestran 1,2,3,4,6,7,8,9,10 (falta el 5 porque se salta).",
      challenge: "Bucle del 1 al 20. Salta múltiplos de 3 y detente al llegar a 15.",
      validation: {
        requiredCode: ["/para\\s*\\(|mientras/", "/continuar/", "/romper/"],
      },
    },
    {
      title: "Bucles Anidados",
      content: "Un bucle dentro de otro para patrones bidimensionales.",
      code: `para (variable i = 1; i <= 3; i = i + 1) {
    para (variable j = 1; j <= 3; j = j + 1) {
        mostrar "i=" + i + ", j=" + j
    }
}`,
      explanation: "El bucle interno se ejecuta completamente por cada iteración del externo.",
      challenge: "Crea una tabla de multiplicar del 1 al 3 (3x3 combinaciones).",
      validation: {
        requiredCode: ["/para\\s*\\(.*para\\s*\\(|mientras.*mientras/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Automatiza tareas con bucles.",
      code: `variable suma = 0

para (variable i = 1; i <= 10; i = i + 1) {
    suma = suma + i
}

mostrar "Suma de 1 a 10: " + suma`,
      explanation: "Los bucles son fundamentales para automatizar.",
      challenge: "Encuentra todos los números pares entre 1 y 50 y súmalos. Muestra la suma total.",
      summary: "🧠 Recuerda:\n\n• 'mientras' repite mientras condición sea verdadera\n• 'para' cuando sabes el número de iteraciones\n• 'continuar' salta a la siguiente iteración\n• 'romper' termina el bucle",
      validation: {
        requiredCode: ["/para\\s*\\(|mientras/", "/%\\s*2/"],
        expectedOutputs: ["650"],
      },
    },
  ],
};
