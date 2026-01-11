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
      challenge: "Crea una lista de 3 elementos y muestra el primero y último usando índices válidos.",
      validation: {
        requiredCode: ["/\\[.*,.*,.*\\]/", "/\\[\\s*0\\s*\\]/", "/\\[\\s*2\\s*\\]/"],
      },
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
      challenge: "Usa intentar-capturar para dividir 100 / 0. Muestra 'División por cero' en el capturar.",
      validation: {
        requiredCode: ["/intentar\\s*\\{/", "/capturar\\s*\\(/", "/\\/\\s*0|0\\s*\\//"],
        expectedOutputs: ["/cero|error|Error/i"],
      },
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
      challenge: "Lista de 3 elementos. Usa intentar-capturar para acceder al índice 10. Muestra un mensaje de error.",
      validation: {
        requiredCode: ["/intentar\\s*\\{/", "/capturar\\s*\\(/", "/\\[\\s*10\\s*\\]/"],
      },
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
      challenge: "Crea 2 bloques intentar-capturar: uno para acceso a índice inválido, otro para división por cero.",
      validation: {
        requiredCode: ["/intentar\\s*\\{[\\s\\S]*capturar[\\s\\S]*intentar\\s*\\{[\\s\\S]*capturar/"],
      },
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
      challenge: "Crea 'obtenerSeguro(lista, indice)' que valide si el índice existe antes de acceder.",
      validation: {
        requiredCode: ["/funcion\\s+\\w+/", "/si\\s+/", "/retornar/"],
      },
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
      challenge: "Función que recibe una lista y un índice. Usa intentar-capturar y retorna el elemento o nulo si falla.",
      summary: "🧠 Recuerda:\n\n• intentar {} contiene código riesgoso\n• capturar (error) {} maneja el error\n• Valida lo predecible\n• Captura lo impredecible\n• Da mensajes claros al usuario",
      validation: {
        requiredCode: ["/funcion\\s+\\w+/", "/intentar\\s*\\{/", "/capturar\\s*\\(/", "/retornar/"],
      },
    },
  ],
};
