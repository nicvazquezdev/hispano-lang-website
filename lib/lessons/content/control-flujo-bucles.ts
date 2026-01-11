import { LessonContent } from "../types";

export const controlFlujoBucles: LessonContent = {
  badge: { emoji: "🔀", text: "Lección 11" },
  title: "Control de Flujo en",
  titleGradient: " HispanoLang",
  description: "Aprende a usar romper y continuar",
  prev: { url: "/lecciones/bucles", title: "Bucles" },
  next: { url: "/lecciones/bucles-avanzados", title: "Bucles Avanzados" },
  steps: [
    {
      title: "¿Qué es el control de flujo?",
      content: "Podemos modificar el comportamiento de los bucles con 'romper' y 'continuar'.",
      code: `variable i = 1
mientras i <= 5 {
    mostrar "Número: " + i
    i = i + 1
}`,
      explanation: "Este es un bucle normal. Aprenderemos a controlarlo mejor.",
      challenge: "Crea un bucle que cuente del 1 al 10.",
      validation: {
        requiredCode: ["/mientras|para/"],
        expectedOutputs: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    },
    {
      title: "Romper: Salir del Bucle",
      content: "'romper' termina el bucle inmediatamente.",
      code: `variable contador = 0

mientras contador < 10 {
    mostrar contador
    contador = contador + 1
    si contador == 3 {
        romper
    }
}
mostrar "Terminado"`,
      explanation: "El bucle se detiene cuando contador llega a 3, aunque la condición decía < 10.",
      challenge: "Busca el número 7 en una secuencia del 1 al 20. Usa 'romper' cuando lo encuentres y muestra 'Encontrado: 7'.",
      validation: {
        requiredCode: ["/romper/", "/==\\s*7|7\\s*==/"],
        expectedOutputs: ["7"],
      },
    },
    {
      title: "Continuar: Saltar Iteración",
      content: "'continuar' salta al inicio de la siguiente iteración.",
      code: `variable i = 0

mientras i < 5 {
    i = i + 1
    si i == 3 {
        continuar
    }
    mostrar i
}`,
      explanation: "Se muestran 1, 2, 4, 5. El 3 se salta porque usamos 'continuar'.",
      challenge: "Bucle del 1 al 10. Usa 'continuar' para saltar los números pares. Muestra solo impares.",
      validation: {
        requiredCode: ["/continuar/", "/%\\s*2/"],
        expectedOutputs: ["1", "3", "5", "7", "9"],
      },
    },
    {
      title: "Romper vs Continuar",
      content: "Romper termina el bucle. Continuar solo salta la iteración actual.",
      code: `mostrar "Con ROMPER:"
para (variable i = 1; i <= 5; i = i + 1) {
    si i == 3 { romper }
    mostrar i
}

mostrar "Con CONTINUAR:"
para (variable j = 1; j <= 5; j = j + 1) {
    si j == 3 { continuar }
    mostrar j
}`,
      explanation: "Romper: 1, 2. Continuar: 1, 2, 4, 5.",
      challenge: "Crea dos bucles del 1 al 10. En uno usa 'romper' en 6, en otro 'continuar' en 6. Muestra ambos resultados.",
      validation: {
        requiredCode: ["/romper/", "/continuar/"],
      },
    },
    {
      title: "Casos Prácticos",
      content: "Romper para búsquedas, continuar para filtrar.",
      code: `variable numeros = [5, -2, 8, -1, 3]
mostrar "Números positivos:"

para (variable i = 0; i < numeros.longitud(); i = i + 1) {
    si numeros[i] < 0 {
        continuar
    }
    mostrar numeros[i]
}`,
      explanation: "Usamos 'continuar' para saltar los negativos y solo mostrar positivos.",
      challenge: "Lista de números del 1 al 15. Muestra solo los que son divisibles por 3.",
      validation: {
        requiredCode: ["/para\\s*\\(|mientras/", "/%\\s*3/"],
        expectedOutputs: ["3", "6", "9", "12", "15"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina romper y continuar para bucles eficientes.",
      code: `variable numeros = [2, 4, 6, 7, 8, 10]

para (variable i = 0; i < numeros.longitud(); i = i + 1) {
    si numeros[i] % 2 == 0 {
        continuar
    }
    mostrar "Primer impar: " + numeros[i]
    romper
}`,
      explanation: "Filtramos pares con 'continuar' y terminamos con 'romper' al encontrar el primero impar.",
      challenge: "Lista de 10 números. Busca el primero que sea mayor que 50 y muéstralo.",
      summary: "🧠 Recuerda:\n\n• 'romper' termina el bucle completamente\n• 'continuar' salta a la siguiente iteración\n• Romper para salir temprano\n• Continuar para filtrar elementos",
      validation: {
        requiredCode: ["/romper/", "/>\\s*50|50\\s*</"],
      },
    },
  ],
};
