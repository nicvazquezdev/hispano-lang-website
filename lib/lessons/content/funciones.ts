import { LessonContent } from "../types";

export const funciones: LessonContent = {
  badge: { emoji: "⚡", text: "Lección 9" },
  title: "Funciones en",
  titleGradient: " HispanoLang",
  description: "Crea código reutilizable con funciones",
  prev: { url: "/lecciones/control-flujo-bucles", title: "Control de Flujo" },
  next: { url: "/lecciones/funciones-matematicas", title: "Funciones Matemáticas" },
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
      challenge: "Crea una función 'despedirse' que muestre dos mensajes. Llámala 3 veces.",
      validation: { expectedOutputs: [] },
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
      challenge: "Crea 'calcularAreaRectangulo(base, altura)' que muestre el área. Pruébala con diferentes valores.",
      validation: { expectedOutputs: [] },
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
      challenge: "Crea 'multiplicar(x, y)' que retorne el producto. Usa la función para calcular 3 áreas.",
      validation: { expectedOutputs: [] },
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
      challenge: "Crea 'mostrarEstadisticas(nombre, puntos)' sin retorno y 'calcularPuntosFinales(puntos, bonus)' con retorno.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Funciones Anónimas",
      content: "Funciones sin nombre guardadas en variables.",
      code: `variable saludar = funcion(nombre) {
    retornar "¡Hola " + nombre + "!"
}

mostrar saludar("Ana")`,
      explanation: "Útiles para callbacks y funciones pequeñas.",
      challenge: "Crea una función anónima que convierta Celsius a Fahrenheit: (c * 9/5) + 32.",
      validation: { expectedOutputs: [] },
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
      challenge: "Sistema de estudiantes: 'calcularNotaFinal', 'determinarEstado', 'mostrarReporte'.",
      summary: "🧠 Recuerda:\n\n• Las funciones encapsulan código reutilizable\n• Los parámetros hacen funciones flexibles\n• 'retornar' devuelve un valor\n• Divide problemas en funciones pequeñas",
      validation: { expectedOutputs: [] },
    },
  ],
};
