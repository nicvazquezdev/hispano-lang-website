import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "🎓", text: "Lección 23" },
  title: "Ejemplos Avanzados en",
  titleGradient: " HispanoLang",
  description: "Integra todo en proyectos completos",
  prev: { url: "/lecciones/manejo-errores", title: "Manejo de Errores" },
  steps: [
    {
      title: "Integrando Conceptos",
      content: "Combina todo lo aprendido para crear programas completos.",
      code: `funcion esAdulto(edad) {
    retornar edad >= 18
}

variable nombre = "Ana"
variable edad = 25

si esAdulto(edad) {
    mostrar nombre + " es adulto"
}`,
      explanation: "Variables + funciones + condicionales trabajando juntos.",
      challenge: "Crea 'esPar(n)' que retorne verdadero si n es par. Úsala para mostrar si 10 es par.",
      validation: {
        requiredCode: ["/funcion\\s+esPar|funcion\\s+es_par/", "/%\\s*2/", "/retornar/"],
        expectedOutputs: ["/verdadero|par/i"],
      },
    },
    {
      title: "Calculadora",
      content: "Función que decide qué operación hacer según un parámetro.",
      code: `funcion calculadora(a, b, op) {
    si op == "suma" { retornar a + b }
    sino { si op == "resta" { retornar a - b }
    sino { si op == "mult" { retornar a * b }
    sino { retornar a / b } } }
}

mostrar calculadora(10, 5, "suma")`,
      explanation: "Patrón común: función que decide basada en parámetros.",
      challenge: "Crea una calculadora con operaciones: suma, resta, multiplicación. Muestra 8 + 4.",
      validation: {
        requiredCode: ["/funcion\\s+calculadora/", "/si\\s+.*==/", "/retornar.*\\+/", "/retornar.*\\-/", "/retornar.*\\*/"],
        expectedOutputs: ["12"],
      },
    },
    {
      title: "Procesamiento de Listas",
      content: "Clasificar elementos en diferentes categorías.",
      code: `variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
variable pares = []
variable impares = []

numeros.recorrer(funcion(n) {
    si n % 2 == 0 {
        pares.agregar(n)
    } sino {
        impares.agregar(n)
    }
})

mostrar "Pares: " + pares
mostrar "Impares: " + impares`,
      explanation: "Filtrar y clasificar es un patrón muy común.",
      challenge: "Lista [1,2,3,4,5,6]. Separa en pares e impares. Muestra ambas listas.",
      validation: {
        requiredCode: ["/\\.recorrer/", "/%\\s*2/", "/\\.agregar/"],
        expectedOutputs: ["/2.*4.*6|pares/i", "/1.*3.*5|impares/i"],
      },
    },
    {
      title: "Sistema de Estudiantes",
      content: "Listas de objetos para representar entidades.",
      code: `variable estudiantes = [
    {nombre: "Ana", nota: 95},
    {nombre: "Carlos", nota: 87},
    {nombre: "María", nota: 92}
]

estudiantes.recorrer(funcion(est) {
    si est.nota >= 90 {
        mostrar est.nombre + " - Excelente"
    }
})`,
      explanation: "Recorrer, filtrar y procesar objetos.",
      challenge: "Lista de 3 estudiantes con nombre y nota. Muestra solo los que tienen nota >= 80.",
      validation: {
        requiredCode: ["/\\[\\s*\\{/", "/nombre\\s*:/", "/nota\\s*:/", "/\\.recorrer/", "/>=?\\s*80|>\\s*79/"],
      },
    },
    {
      title: "Sistema de Inventario",
      content: "Programa completo con múltiples funciones.",
      code: `variable inventario = []

funcion agregarProducto(nombre, precio, cantidad) {
    inventario.agregar({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    })
}

funcion calcularValorTotal() {
    variable total = 0
    inventario.recorrer(funcion(p) {
        total = total + (p.precio * p.cantidad)
    })
    retornar total
}

agregarProducto("Laptop", 1000, 5)
agregarProducto("Mouse", 25, 20)

mostrar "Valor total: " + calcularValorTotal()`,
      explanation: "Funciones especializadas que trabajan con datos compartidos.",
      challenge: "Crea un inventario con 2 productos. Calcula y muestra el valor total.",
      validation: {
        requiredCode: ["/funcion\\s+\\w+/", "/\\.agregar\\s*\\(\\s*\\{/", "/\\.recorrer/", "/retornar/"],
      },
    },
    {
      title: "¡Proyecto Final!",
      content: "Crea tu propio proyecto integrando todo.",
      code: `// ¡Tu proyecto aquí!
// Ideas:
// - Sistema de tareas
// - Juego de adivinanzas
// - Gestor de gastos
// - Agenda de contactos

mostrar "¡Felicidades por completar el curso!"`,
      explanation: "Has aprendido todo lo necesario para crear programas completos.",
      challenge: "Crea un programa que use: variables, una función, un condicional y una lista. ¡Demuestra lo aprendido!",
      summary: "🎓 Has Completado el Curso:\n\n• Variables y tipos de datos\n• Operadores y condicionales\n• Bucles y funciones\n• Listas y objetos\n• Manejo de errores\n\n¡Ahora puedes crear programas completos en español!",
      validation: {
        requiredCode: ["/variable/", "/funcion/", "/si\\s+/", "/\\[/"],
      },
    },
  ],
};
