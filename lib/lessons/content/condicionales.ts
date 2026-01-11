import { LessonContent } from "../types";

export const condicionales: LessonContent = {
  badge: { emoji: "🤔", text: "Lección 6" },
  title: "Condicionales en",
  titleGradient: " HispanoLang",
  description: "Aprende a tomar decisiones en tus programas",
  prev: { url: "/lecciones/operadores", title: "Operadores" },
  next: { url: "/lecciones/bucles", title: "Bucles" },
  steps: [
    {
      title: "¿Qué son los condicionales?",
      content: "Los condicionales permiten ejecutar código solo cuando se cumple una condición.",
      code: `variable edad = 18

si edad >= 18 {
    mostrar "Eres mayor de edad"
}

mostrar "Programa terminado"`,
      explanation: "El código dentro del 'si' solo se ejecuta si la condición es verdadera.",
      challenge: "Crea una variable con tu edad y muestra un mensaje solo si eres mayor de 21.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Condicional Si-Sino",
      content: "Si-sino cubre dos caminos: uno si la condición es verdadera, otro si es falsa.",
      code: `variable edad = 15

si edad >= 18 {
    mostrar "Eres mayor de edad"
} sino {
    mostrar "Eres menor de edad"
}`,
      explanation: "Siempre se ejecuta exactamente uno de los dos bloques.",
      challenge: "Pide un número y usa si-sino para mostrar si es par o impar (usa % 2).",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Condicionales Anidados",
      content: "Podemos poner un 'si' dentro de otro para lógica más compleja.",
      code: `variable edad = 25
variable tiene_licencia = verdadero

si edad >= 18 {
    si tiene_licencia {
        mostrar "Puedes conducir"
    } sino {
        mostrar "Necesitas licencia"
    }
} sino {
    mostrar "Eres menor de edad"
}`,
      explanation: "Los condicionales anidados crean árboles de decisiones.",
      challenge: "Evalúa si un estudiante aprobó (nota >= 70). Si aprobó y nota >= 90, muestra '¡Excelente!'.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Cadenas de Condiciones",
      content: "Para múltiples opciones, encadenamos si-sino.",
      code: `variable nota = 85

si nota >= 90 {
    mostrar "A - Excelente"
} sino {
    si nota >= 80 {
        mostrar "B - Muy bien"
    } sino {
        si nota >= 70 {
            mostrar "C - Bien"
        } sino {
            mostrar "F - Reprobado"
        }
    }
}`,
      explanation: "Se evalúa en orden hasta encontrar una condición verdadera.",
      challenge: "Categoriza temperatura: >= 30 'Calor', >= 20 'Agradable', >= 10 'Fresco', sino 'Frío'.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Condiciones Complejas",
      content: "Combina condiciones con 'y', 'o' para evaluaciones sofisticadas.",
      code: `variable edad = 25
variable tiene_entrada = verdadero

si edad >= 18 y tiene_entrada {
    mostrar "¡Bienvenido al evento!"
} sino {
    mostrar "No puedes entrar"
}`,
      explanation: "Usa 'y' cuando ambas deben ser verdaderas, 'o' cuando al menos una.",
      challenge: "Sistema de login: puede entrar si (nombre == 'admin' y password == '1234') o es_invitado.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "¡Práctica libre!",
      content: "Crea programas que tomen decisiones complejas.",
      code: `variable temperatura = 25

si temperatura > 30 {
    mostrar "Hace mucho calor"
} sino {
    si temperatura > 20 {
        mostrar "Clima agradable"
    } sino {
        mostrar "Hace frío"
    }
}`,
      explanation: "Los condicionales son el cerebro de tus programas.",
      challenge: "Calculadora de descuentos: >= 100 da 20%, >= 50 da 10%, sino 0%. Calcula precio final.",
      summary: "🧠 Recuerda:\n\n• 'si' ejecuta código cuando la condición es verdadera\n• 'sino' cubre el caso contrario\n• Puedes anidar condicionales\n• Usa 'y', 'o' para condiciones complejas",
      validation: { expectedOutputs: [] },
    },
  ],
};
