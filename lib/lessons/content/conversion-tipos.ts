import { LessonContent } from "../types";

export const conversionTipos: LessonContent = {
  badge: { emoji: "🔄", text: "Lección 15" },
  title: "Conversión de Tipos en",
  titleGradient: " HispanoLang",
  description: "Transforma datos entre diferentes tipos",
  prev: { url: "/lecciones/funciones-matematicas", title: "Funciones Matemáticas" },
  next: { url: "/lecciones/metodos-numericos", title: "Métodos Numéricos" },
  steps: [
    {
      title: "¿Por qué convertir tipos?",
      content: "A veces necesitas convertir datos de un tipo a otro. Por ejemplo, convertir un texto que contiene un número a un número real para hacer cálculos.",
      code: `variable textoEdad = "25"
variable edad = entero(textoEdad)

mostrar "Texto: " + textoEdad
mostrar "Número: " + edad
mostrar "En 5 años: " + (edad + 5)`,
      explanation: "entero() convierte un texto a número entero, permitiéndonos hacer operaciones matemáticas.",
      challenge: "Convierte el texto '42' a número y súmale 8. Muestra el resultado.",
      validation: {
        requiredCode: ["entero("],
        expectedOutputs: ["50"],
      },
    },
    {
      title: "Función entero()",
      content: "Convierte valores a números enteros. Trunca los decimales.",
      code: `mostrar entero("42")        // 42
mostrar entero("3.7")       // 3 (trunca decimales)
mostrar entero(3.9)         // 3
mostrar entero(verdadero)   // 1
mostrar entero(falso)       // 0

// Útil para cálculos
variable precio = "99"
variable cantidad = 3
mostrar "Total: " + (entero(precio) * cantidad)`,
      explanation: "entero() trunca decimales (no redondea). Los booleanos se convierten a 1 o 0.",
      challenge: "Convierte el texto '15.8' a entero y muestra el resultado.",
      validation: {
        requiredCode: ["entero("],
        expectedOutputs: ["15"],
      },
    },
    {
      title: "Función decimal()",
      content: "Convierte valores a números decimales, preservando la parte fraccionaria.",
      code: `mostrar decimal("3.14")     // 3.14
mostrar decimal("42")       // 42.0
mostrar decimal(42)         // 42.0
mostrar decimal(verdadero)  // 1.0
mostrar decimal(falso)      // 0.0

// Cálculos con decimales
variable pi = decimal("3.14159")
variable radio = 5
mostrar "Área: " + (pi * radio * radio)`,
      explanation: "decimal() es útil cuando necesitas preservar la precisión decimal.",
      challenge: "Convierte el texto '2.5' a decimal y calcula el área de un cuadrado con ese lado.",
      validation: {
        requiredCode: ["decimal("],
        expectedOutputs: ["6.25"],
      },
    },
    {
      title: "Función texto()",
      content: "Convierte cualquier valor a cadena de texto.",
      code: `mostrar texto(123)          // "123"
mostrar texto(3.14)         // "3.14"
mostrar texto(verdadero)    // "verdadero"
mostrar texto(falso)        // "falso"
mostrar texto(nulo)         // "nulo"
mostrar texto([1, 2, 3])    // "[1, 2, 3]"

// Útil para concatenar
variable puntos = 100
variable mensaje = "Tienes " + texto(puntos) + " puntos"
mostrar mensaje`,
      explanation: "texto() es útil para mostrar valores o concatenarlos con otros strings.",
      challenge: "Convierte el número 42 a texto y concatena ' es la respuesta'.",
      validation: {
        requiredCode: ["texto("],
        expectedOutputs: ["42 es la respuesta"],
      },
    },
    {
      title: "Funciones booleano() y tipo()",
      content: "booleano() convierte a verdadero/falso. tipo() retorna el tipo del valor.",
      code: `// booleano()
mostrar booleano(1)         // verdadero
mostrar booleano(0)         // falso
mostrar booleano(100)       // verdadero
mostrar booleano("")        // falso
mostrar booleano("hola")    // verdadero
mostrar booleano(nulo)      // falso

mostrar "---"

// tipo()
mostrar tipo(42)            // "numero"
mostrar tipo("hola")        // "texto"
mostrar tipo(verdadero)     // "booleano"
mostrar tipo([1, 2])        // "arreglo"
mostrar tipo({a: 1})        // "objeto"
mostrar tipo(nulo)          // "nulo"`,
      explanation: "booleano() sigue reglas de 'truthiness'. tipo() es útil para verificar tipos en tiempo de ejecución.",
      challenge: "Usa tipo() para verificar el tipo de una variable numérica y una de texto. Muestra ambos.",
      validation: {
        requiredCode: ["tipo("],
        expectedOutputs: ["/numero|texto/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Las conversiones de tipos son esenciales para procesar datos de usuarios y APIs.",
      code: `// Simulando entrada de usuario
variable entradaEdad = "25"
variable entradaPrecio = "99.99"
variable entradaActivo = "1"

// Convertir a tipos apropiados
variable edad = entero(entradaEdad)
variable precio = decimal(entradaPrecio)
variable activo = booleano(entero(entradaActivo))

mostrar "Tipo de edad: " + tipo(edad)
mostrar "Tipo de precio: " + tipo(precio)
mostrar "Activo: " + activo

// Validación con tipo()
variable valor = "123"
si tipo(valor) == "texto" {
    mostrar "Convirtiendo texto a número..."
    valor = entero(valor)
}
mostrar "Valor final: " + valor + " (tipo: " + tipo(valor) + ")"`,
      explanation: "Combina las funciones de conversión para procesar y validar datos.",
      challenge: "Crea un programa que reciba edad (texto), la convierta a entero, verifique si es mayor de edad y muestre el resultado.",
      summary: "🧠 Funciones de Conversión:\n\n• entero(valor) - convierte a número entero\n• decimal(valor) - convierte a número decimal\n• texto(valor) - convierte a cadena de texto\n• booleano(valor) - convierte a verdadero/falso\n• tipo(valor) - retorna el tipo como texto",
      validation: {
        requiredCode: ["entero(", "tipo(", "/>=?\\s*18|>\\s*17/"],
      },
    },
  ],
};
