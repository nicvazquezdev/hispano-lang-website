import { LessonContent } from "../types";

export const buclesAvanzados: LessonContent = {
  badge: { emoji: "🔁", text: "Lección 12" },
  title: "Bucles Avanzados en",
  titleGradient: " HispanoLang",
  description: "hacer/mientras y para cada",
  prev: { url: "/lecciones/control-flujo-bucles", title: "Control de Flujo" },
  next: { url: "/lecciones/funciones", title: "Funciones" },
  steps: [
    {
      title: "El bucle hacer/mientras",
      content: "hacer/mientras ejecuta el bloque AL MENOS UNA VEZ, luego repite mientras la condición sea verdadera.",
      code: `variable contador = 1

hacer {
    mostrar "Contador: " + contador
    contador = contador + 1
} mientras (contador <= 5)

mostrar "Fin del bucle"`,
      explanation: "A diferencia de 'mientras', 'hacer/mientras' garantiza al menos una ejecución porque la condición se evalúa AL FINAL.",
      challenge: "Crea un contador que empiece en 10 y baje hasta 1 usando hacer/mientras.",
      validation: {
        requiredCode: ["hacer", "mientras"],
        expectedOutputs: ["10", "1"],
      },
    },
    {
      title: "Diferencia con mientras",
      content: "La diferencia clave: mientras puede no ejecutarse nunca, hacer/mientras siempre ejecuta al menos una vez.",
      code: `variable x = 10

// Con mientras: nunca se ejecuta porque x ya es >= 5
mientras (x < 5) {
    mostrar "Mientras: " + x
    x = x + 1
}
mostrar "Después de mientras: nada se ejecutó"

variable y = 10

// Con hacer/mientras: se ejecuta una vez aunque y >= 5
hacer {
    mostrar "Hacer: " + y
    y = y + 1
} mientras (y < 5)
mostrar "Después de hacer/mientras: se ejecutó una vez"`,
      explanation: "Usa hacer/mientras cuando necesitas que el código se ejecute al menos una vez.",
      challenge: "Crea un programa que muestre un número aleatorio y lo repita mientras sea menor a 50.",
      validation: {
        requiredCode: ["hacer", "mientras"],
      },
    },
    {
      title: "El bucle para cada",
      content: "para cada itera sobre cada elemento de un arreglo de forma simple y elegante.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

para cada fruta en frutas {
    mostrar "Fruta: " + fruta
}

mostrar "---"

variable numeros = [10, 20, 30, 40, 50]
variable suma = 0

para cada num en numeros {
    suma = suma + num
}
mostrar "Suma total: " + suma`,
      explanation: "para cada es más limpio que un bucle para cuando solo necesitas los elementos, no los índices.",
      challenge: "Crea una lista de 4 nombres. Usa para cada para saludar a cada uno con '¡Hola, [nombre]!'.",
      validation: {
        requiredCode: ["para cada", "en"],
      },
    },
    {
      title: "Para cada vs Para tradicional",
      content: "Compara ambos enfoques para entender cuándo usar cada uno.",
      code: `variable colores = ["rojo", "verde", "azul"]

// Bucle para tradicional (cuando necesitas el índice)
mostrar "Con bucle para:"
para i desde 0 hasta colores.longitud - 1 {
    mostrar i + ": " + colores[i]
}

mostrar "---"

// Bucle para cada (cuando solo necesitas el valor)
mostrar "Con para cada:"
para cada color en colores {
    mostrar color
}`,
      explanation: "Usa 'para' cuando necesites el índice. Usa 'para cada' cuando solo necesites los valores.",
      challenge: "Crea una lista de precios. Usa para cada para calcular el total y muéstralo.",
      validation: {
        requiredCode: ["para cada", "en"],
      },
    },
    {
      title: "Para cada con objetos",
      content: "para cada es muy útil para procesar listas de objetos.",
      code: `variable personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 28 }
]

mostrar "Lista de personas:"
para cada persona en personas {
    mostrar \`\${persona.nombre} tiene \${persona.edad} años\`
}

mostrar "---"

// Calcular edad promedio
variable sumaEdades = 0
para cada p en personas {
    sumaEdades = sumaEdades + p.edad
}
mostrar "Edad promedio: " + sumaEdades / personas.longitud`,
      explanation: "Combina para cada con template strings para código muy legible.",
      challenge: "Crea una lista de productos con nombre y precio. Muestra cada producto y calcula el total.",
      validation: {
        requiredCode: ["para cada", "en", "/\\{.*nombre.*\\}/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina los diferentes tipos de bucles según lo que necesites.",
      code: `// Ejemplo 1: Menú con hacer/mientras
variable opcion = 0
hacer {
    mostrar "=== MENÚ ==="
    mostrar "1. Opción A"
    mostrar "2. Opción B"
    mostrar "3. Salir"
    opcion = 3  // Simulamos selección

    elegir (opcion) {
        caso 1:
            mostrar "Ejecutando A..."
        caso 2:
            mostrar "Ejecutando B..."
        caso 3:
            mostrar "¡Adiós!"
    }
} mientras (opcion != 3)

// Ejemplo 2: Procesar lista con para cada
variable tareas = ["Estudiar", "Programar", "Ejercicio"]
variable completadas = 0

para cada tarea en tareas {
    mostrar "Tarea: " + tarea + " - Completada"
    completadas = completadas + 1
}

mostrar "Total completadas: " + completadas + "/" + tareas.longitud`,
      explanation: "hacer/mientras es perfecto para menús. para cada es ideal para procesar colecciones.",
      challenge: "Crea una lista de notas de estudiantes. Usa para cada para contar cuántos aprobaron (nota >= 60).",
      summary: "🧠 Recuerda:\n\n• hacer { } mientras (condición) - ejecuta al menos una vez\n• para cada elemento en lista { } - itera sobre elementos\n• hacer/mientras: condición se evalúa al final\n• para cada: no necesitas manejar índices\n• Elige el bucle según tu necesidad",
      validation: {
        requiredCode: ["para cada", "en", "/>=?\\s*60|>\\s*59/"],
      },
    },
  ],
};
