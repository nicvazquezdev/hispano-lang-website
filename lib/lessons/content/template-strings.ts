import { LessonContent } from "../types";

export const templateStrings: LessonContent = {
  badge: { emoji: "📝", text: "Lección 6" },
  title: "Template Strings en",
  titleGradient: " HispanoLang",
  description: "Interpolación de variables en texto",
  prev: { url: "/lecciones/metodos-strings", title: "Métodos de Strings" },
  next: { url: "/lecciones/operadores", title: "Operadores" },
  steps: [
    {
      title: "¿Qué son los Template Strings?",
      content: "Los template strings permiten insertar variables directamente dentro del texto usando backticks (`) y la sintaxis ${variable}.",
      code: `variable nombre = "María"
variable edad = 25

// Forma tradicional con concatenación
mostrar "Hola, me llamo " + nombre + " y tengo " + edad + " años"

// Template strings (más limpio)
mostrar \`Hola, me llamo \${nombre} y tengo \${edad} años\``,
      explanation: "Los template strings usan backticks (`) en lugar de comillas. Las expresiones dentro de ${} se evalúan automáticamente.",
      challenge: "Crea variables para tu nombre y ciudad. Usa un template string para mostrar 'Soy [nombre] de [ciudad]'.",
      validation: {
        requiredCode: ["/`.*\\$\\{.*\\}.*`/"],
      },
    },
    {
      title: "Expresiones en templates",
      content: "Dentro de ${} puedes incluir cualquier expresión válida, no solo variables.",
      code: `variable precio = 100
variable descuento = 20

mostrar \`Precio original: \${precio}\`
mostrar \`Descuento: \${descuento}\`
mostrar \`Precio final: \${precio - descuento}\`
mostrar \`El doble sería: \${precio * 2}\``,
      explanation: "Puedes hacer cálculos directamente dentro de ${}, lo que hace el código más conciso.",
      challenge: "Crea variables a=10 y b=5. Muestra con template strings: 'La suma de 10 + 5 es 15'.",
      validation: {
        requiredCode: ["/`.*\\$\\{.*\\+.*\\}.*`/"],
      },
    },
    {
      title: "Templates con arreglos y objetos",
      content: "Los template strings funcionan perfectamente con propiedades de objetos y arreglos.",
      code: `variable persona = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Ingeniero"
}

mostrar \`\${persona.nombre} tiene \${persona.edad} años\`
mostrar \`Trabaja como \${persona.profesion}\`

variable frutas = ["manzana", "banana", "naranja"]
mostrar \`Tenemos \${frutas.longitud} frutas\`
mostrar \`La primera es: \${frutas[0]}\``,
      explanation: "Accede a propiedades y elementos directamente dentro de los templates.",
      challenge: "Crea un objeto con nombre y puntuación. Muestra '[nombre] tiene [puntuación] puntos'.",
      validation: {
        requiredCode: ["/`.*\\$\\{.*\\..*\\}.*`/"],
      },
    },
    {
      title: "Templates con métodos",
      content: "Puedes llamar métodos dentro de los template strings.",
      code: `variable texto = "hispanoLang"

mostrar \`Original: \${texto}\`
mostrar \`Mayúsculas: \${texto.mayusculas()}\`
mostrar \`Longitud: \${texto.longitud} caracteres\`

variable numeros = [1, 2, 3, 4, 5]
mostrar \`Lista: \${numeros.unir(", ")}\``,
      explanation: "Los métodos se ejecutan y su resultado se inserta en el string.",
      challenge: "Crea un nombre en minúsculas. Usa template string para mostrarlo en mayúsculas y su longitud.",
      validation: {
        requiredCode: ["/`.*\\$\\{.*\\.mayusculas\\(\\).*\\}.*`|`.*\\$\\{.*\\.longitud.*\\}.*`/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Los template strings hacen tu código más legible y fácil de mantener.",
      code: `variable producto = "Laptop"
variable precio = 999.99
variable cantidad = 2
variable descuento = 0.10

variable subtotal = precio * cantidad
variable descuentoTotal = subtotal * descuento
variable total = subtotal - descuentoTotal

mostrar \`--- Factura ---\`
mostrar \`Producto: \${producto}\`
mostrar \`Precio unitario: $\${precio}\`
mostrar \`Cantidad: \${cantidad}\`
mostrar \`Subtotal: $\${subtotal}\`
mostrar \`Descuento (10%): -$\${descuentoTotal}\`
mostrar \`Total: $\${total}\``,
      explanation: "Los template strings son ideales para crear mensajes formateados y reportes.",
      challenge: "Crea una ficha de estudiante con nombre, edad y promedio. Muestra si aprobó (promedio >= 6).",
      summary: "🧠 Recuerda:\n\n• Usa backticks (`) para template strings\n• ${variable} inserta el valor de la variable\n• ${expresion} evalúa y muestra el resultado\n• Puedes usar métodos: ${texto.mayusculas()}\n• Más legible que concatenar con +",
      validation: {
        requiredCode: ["/`.*\\$\\{.*\\}.*`/", "promedio"],
      },
    },
  ],
};
