import { LessonContent } from "../types";

export const manejoErrores: LessonContent = {
  badge: { emoji: "🛡️", text: "Lección 13" },
  title: "Manejo de Errores en",
  titleGradient: " HispanoLang",
  description: "Crea programas robustos",
  prev: { url: "/lecciones/objetos", title: "Objetos" },
  next: { url: "/lecciones/ejemplos-avanzados", title: "Ejemplos Avanzados" },
  steps: [
    {
      title: "¿Qué son los errores?",
      content: "Errores son situaciones inesperadas: división por cero, índice inválido, etc.",
      code: `variable numero = 10
variable divisor = 0

mostrar "Inicio"
// variable resultado = numero / divisor  // Esto causaría error
mostrar "Fin"`,
      explanation: "Sin manejo, los errores detienen el programa abruptamente.",
      challenge: "Intenta acceder a un índice que no existe en una lista. Observa qué pasa.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Intentar-Capturar",
      content: "'intentar' contiene código riesgoso. 'capturar' maneja el error.",
      code: `intentar {
    variable x = 10 / 0
    mostrar "No se ejecuta"
} capturar (error) {
    mostrar "Error: " + error
}

mostrar "El programa continúa"`,
      explanation: "Si hay error, salta al bloque 'capturar' y el programa sigue.",
      challenge: "Usa intentar-capturar para acceder a un índice inválido. Muestra un mensaje amigable.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Errores en Operaciones",
      content: "Maneja errores en diferentes tipos de operaciones.",
      code: `variable numeros = [10, 20, 30]

intentar {
    mostrar numeros[0]
    mostrar numeros[5]  // Error
} capturar (error) {
    mostrar "Índice inválido"
}`,
      explanation: "El bloque capturar nos permite dar feedback útil al usuario.",
      challenge: "Objeto persona. Usa intentar-capturar para acceder a una propiedad inexistente.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Múltiples Bloques",
      content: "Podemos tener varios intentar-capturar independientes.",
      code: `intentar {
    mostrar lista[10]
} capturar (error) {
    mostrar "Error 1: índice"
}

intentar {
    variable x = 100 / 0
} capturar (error) {
    mostrar "Error 2: división"
}

mostrar "Programa completado"`,
      explanation: "Cada bloque maneja sus propios errores.",
      challenge: "Crea 3 bloques: uno para división, otro para índice, otro para propiedad inexistente.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Validación Preventiva",
      content: "Combina validación previa con captura de errores.",
      code: `funcion dividirSeguro(a, b) {
    si b == 0 {
        mostrar "No se puede dividir por cero"
        retornar nulo
    }
    retornar a / b
}

mostrar dividirSeguro(10, 2)
mostrar dividirSeguro(10, 0)`,
      explanation: "Valida lo predecible, captura lo impredecible.",
      challenge: "Función 'obtenerElementoSeguro(lista, indice)' que valide antes de acceder.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "¡Práctica libre!",
      content: "Crea programas robustos que manejen errores.",
      code: `funcion procesarDatos(numero) {
    intentar {
        variable resultado = raiz(numero)
        mostrar "Raíz: " + resultado
        retornar resultado
    } capturar (error) {
        mostrar "No se pudo procesar"
        retornar nulo
    }
}

procesarDatos(16)`,
      explanation: "Combina funciones, validación y manejo de errores.",
      challenge: "Calculadora de promedio que valide lista no vacía y maneje errores inesperados.",
      summary: "🧠 Recuerda:\n\n• intentar {} contiene código riesgoso\n• capturar (error) {} maneja el error\n• Valida lo predecible\n• Captura lo impredecible\n• Da mensajes claros al usuario",
      validation: { expectedOutputs: [] },
    },
  ],
};
