import { LessonContent } from "../types";

export const metodosNumericos: LessonContent = {
  badge: { emoji: "🔢", text: "Lección 16" },
  title: "Métodos Numéricos en",
  titleGradient: " HispanoLang",
  description: "Operaciones especiales con números",
  prev: { url: "/lecciones/conversion-tipos", title: "Conversión de Tipos" },
  next: { url: "/lecciones/listas", title: "Listas" },
  steps: [
    {
      title: "Métodos de números",
      content: "Los números en HispanoLang tienen métodos especiales que puedes llamar directamente.",
      code: `variable n = 42

mostrar n.esPar()        // verdadero
mostrar n.esImpar()      // falso
mostrar n.esPositivo()   // verdadero
mostrar n.esNegativo()   // falso
mostrar n.aTexto()       // "42"`,
      explanation: "Cada número tiene métodos que puedes usar con la notación de punto.",
      challenge: "Crea una variable con el número 7 y verifica si es par o impar.",
      validation: {
        requiredCode: [".esPar()", ".esImpar()"],
      },
    },
    {
      title: "Par e Impar",
      content: "Usa .esPar() y .esImpar() para verificar la paridad de números.",
      code: `variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mostrar "Números pares:"
para cada n en numeros {
    si n.esPar() {
        mostrar n
    }
}

mostrar "Números impares:"
para cada n en numeros {
    si n.esImpar() {
        mostrar n
    }
}`,
      explanation: "Estos métodos son útiles para clasificar o filtrar números.",
      challenge: "Crea una lista del 1 al 10. Cuenta cuántos son pares y cuántos son impares.",
      validation: {
        requiredCode: [".esPar()", ".esImpar()"],
      },
    },
    {
      title: "Positivo y Negativo",
      content: "Verifica el signo de un número con .esPositivo() y .esNegativo().",
      code: `variable temperaturas = [25, -5, 0, 18, -12, 30]

mostrar "Análisis de temperaturas:"
para cada temp en temperaturas {
    si temp.esPositivo() {
        mostrar temp + "°: Sobre cero"
    } sino si temp.esNegativo() {
        mostrar temp + "°: Bajo cero"
    } sino {
        mostrar temp + "°: Punto de congelación"
    }
}`,
      explanation: "El cero no es positivo ni negativo, ambos métodos retornan falso para 0.",
      challenge: "Crea una lista con números positivos, negativos y cero. Clasifica cada uno.",
      validation: {
        requiredCode: [".esPositivo()", ".esNegativo()"],
      },
    },
    {
      title: "Convertir a texto",
      content: "El método .aTexto() convierte un número a su representación en texto.",
      code: `variable precio = 99.99
variable cantidad = 5

mostrar "Precio: $" + precio.aTexto()
mostrar "Cantidad: " + cantidad.aTexto() + " unidades"

// Útil para formateo
variable puntos = 1500
variable mensaje = "Has ganado " + puntos.aTexto() + " puntos"
mostrar mensaje

// Con literales (requieren paréntesis)
mostrar (42).aTexto()
mostrar (3.14).aTexto()`,
      explanation: "Con números literales necesitas paréntesis: (42).aTexto()",
      challenge: "Crea un número de teléfono como número. Conviértelo a texto y muéstralo.",
      validation: {
        requiredCode: [".aTexto()"],
      },
    },
    {
      title: "Métodos con literales",
      content: "Para usar métodos directamente con números literales, envuélvelos en paréntesis.",
      code: `// Con paréntesis funciona
mostrar (7).esImpar()       // verdadero
mostrar (8).esPar()         // verdadero
mostrar (-5).esNegativo()   // verdadero
mostrar (100).esPositivo()  // verdadero
mostrar (0).esPositivo()    // falso
mostrar (0).esNegativo()    // falso

// Tabla de verificación
mostrar "=== Tabla de paridad ==="
para i desde 1 hasta 5 {
    mostrar i + " es par: " + i.esPar()
}`,
      explanation: "Los paréntesis son necesarios para que el parser entienda que es un número y no parte de otra expresión.",
      challenge: "Verifica si los números 15, 20 y 33 son pares o impares usando literales con paréntesis.",
      validation: {
        requiredCode: ["/\\(\\d+\\)\\.es/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina los métodos numéricos para crear programas útiles.",
      code: `variable numeros = [12, -7, 0, 25, -3, 8, 15, -20]

variable pares = 0
variable impares = 0
variable positivos = 0
variable negativos = 0

para cada n en numeros {
    si n.esPar() {
        pares = pares + 1
    } sino {
        impares = impares + 1
    }

    si n.esPositivo() {
        positivos = positivos + 1
    } sino si n.esNegativo() {
        negativos = negativos + 1
    }
}

mostrar "=== Estadísticas ==="
mostrar "Pares: " + pares.aTexto()
mostrar "Impares: " + impares.aTexto()
mostrar "Positivos: " + positivos.aTexto()
mostrar "Negativos: " + negativos.aTexto()`,
      explanation: "Los métodos numéricos simplifican el código de clasificación y análisis.",
      challenge: "Crea una lista de 6 números variados. Muestra solo los que son pares Y positivos.",
      summary: "🧠 Métodos Numéricos:\n\n• .esPar() - verdadero si divisible por 2\n• .esImpar() - verdadero si no divisible por 2\n• .esPositivo() - verdadero si mayor que 0\n• .esNegativo() - verdadero si menor que 0\n• .aTexto() - convierte a cadena de texto\n• Con literales usar: (número).método()",
      validation: {
        requiredCode: [".esPar()", ".esPositivo()"],
      },
    },
  ],
};
