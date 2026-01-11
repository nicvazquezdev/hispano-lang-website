import { LessonContent } from "../types";

export const funciones: LessonContent = {
  badge: { emoji: "⚡", text: "Lección 13" },
  title: "Funciones en",
  titleGradient: " HispanoLang",
  description: "Crea código reutilizable con funciones",
  prev: { url: "/lecciones/bucles-avanzados", title: "Bucles Avanzados" },
  next: { url: "/lecciones/funciones-flecha", title: "Funciones Flecha" },
  steps: [
    {
      title: "¿Qué son las funciones?",
      content: "Las funciones son bloques de código reutilizables.",
      code: `funcion saludar() {
    mostrar "¡Hola mundo!"
}

saludar()
saludar()`,
      explanation: "Definimos una función con 'funcion' y la llamamos con su nombre y paréntesis.",
      challenge: "Crea una función 'despedirse' que muestre '¡Adiós!'. Llámala 2 veces.",
      validation: {
        requiredCode: ["/funcion\\s+despedirse\\s*\\(/", "/despedirse\\(\\)/"],
        expectedOutputs: ["/Adi|adi|Chao|chao|Hasta/"],
      },
    },
    {
      title: "Funciones con Parámetros",
      content: "Los parámetros son valores que le pasamos a la función.",
      code: `funcion saludar(nombre) {
    mostrar "¡Hola " + nombre + "!"
}

saludar("María")
saludar("Carlos")`,
      explanation: "El parámetro 'nombre' recibe el valor que pasamos al llamar la función.",
      challenge: "Crea 'calcularDoble(numero)' que muestre el doble de un número. Pruébala con 5 y 10.",
      validation: {
        requiredCode: ["/funcion\\s+\\w+\\s*\\(\\s*\\w+/", "/\\*\\s*2|2\\s*\\*/"],
        expectedOutputs: ["10", "20"],
      },
    },
    {
      title: "Funciones que Retornan",
      content: "'retornar' devuelve un valor que podemos usar.",
      code: `funcion sumar(a, b) {
    retornar a + b
}

variable resultado = sumar(5, 3)
mostrar "5 + 3 = " + resultado`,
      explanation: "El valor retornado se puede guardar en una variable o usar directamente.",
      challenge: "Crea 'multiplicar(x, y)' que retorne el producto. Muestra el resultado de 6 × 7.",
      validation: {
        requiredCode: ["/funcion\\s+multiplicar/", "/retornar/", "/\\*/"],
        expectedOutputs: ["42"],
      },
    },
    {
      title: "Con y Sin Retorno",
      content: "Funciones sin retorno ejecutan acciones. Con retorno, producen valores.",
      code: `funcion imprimirTabla(numero) {
    para (variable i = 1; i <= 5; i = i + 1) {
        mostrar numero + " x " + i + " = " + (numero * i)
    }
}

funcion calcularPromedio(a, b, c) {
    retornar (a + b + c) / 3
}

imprimirTabla(3)
mostrar "Promedio: " + calcularPromedio(8, 9, 7)`,
      explanation: "Usa funciones sin retorno para acciones, con retorno para cálculos.",
      challenge: "Crea 'calcularSuma(a, b, c)' que retorne la suma de tres números. Muestra la suma de 10, 20, 30.",
      validation: {
        requiredCode: ["/funcion\\s+\\w+\\s*\\(\\s*\\w+\\s*,\\s*\\w+\\s*,\\s*\\w+/", "/retornar/"],
        expectedOutputs: ["60"],
      },
    },
    {
      title: "Funciones Anónimas",
      content: "Funciones sin nombre guardadas en variables.",
      code: `variable saludar = funcion(nombre) {
    retornar "¡Hola " + nombre + "!"
}

mostrar saludar("Ana")`,
      explanation: "Útiles para callbacks y funciones pequeñas.",
      challenge: "Crea una función anónima que calcule el cuadrado de un número. Muestra el cuadrado de 8.",
      validation: {
        requiredCode: ["/variable\\s+\\w+\\s*=\\s*funcion/", "/\\*\\s*\\w+|\\w+\\s*\\*\\s*\\w+/"],
        expectedOutputs: ["64"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Crea funciones útiles y modulares.",
      code: `funcion calcularIMC(peso, altura) {
    retornar peso / (altura * altura)
}

variable miIMC = calcularIMC(70, 1.75)
mostrar "Tu IMC es: " + miIMC`,
      explanation: "Las funciones dividen problemas grandes en piezas pequeñas.",
      challenge: "Crea 'esMayorDeEdad(edad)' que retorne verdadero si edad >= 18. Prueba con 15 y 20.",
      summary: "🧠 Recuerda:\n\n• Las funciones encapsulan código reutilizable\n• Los parámetros hacen funciones flexibles\n• 'retornar' devuelve un valor\n• Divide problemas en funciones pequeñas",
      validation: {
        requiredCode: ["/funcion\\s+esMayorDeEdad|funcion\\s+es_mayor/", "/>=?\\s*18|>\\s*17/", "/retornar/"],
      },
    },
  ],
};
