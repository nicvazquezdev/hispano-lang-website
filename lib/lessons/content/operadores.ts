import { LessonContent } from "../types";

export const operadores: LessonContent = {
  badge: { emoji: "➕", text: "Lección 5" },
  title: "Operadores en",
  titleGradient: " HispanoLang",
  description: "Aprende a usar operadores aritméticos, de comparación y lógicos",
  prev: { url: "/lecciones/metodos-strings", title: "Métodos de Strings" },
  next: { url: "/lecciones/condicionales", title: "Condicionales" },
  steps: [
    {
      title: "¿Qué son los operadores?",
      content: "Los operadores son símbolos para realizar operaciones con valores.",
      code: `variable a = 10
variable b = 5

mostrar a + b
mostrar a - b
mostrar a * b
mostrar a / b`,
      explanation: "Operadores básicos: + (suma), - (resta), * (multiplicación), / (división).",
      challenge: "Crea dos variables numéricas y muestra las cuatro operaciones básicas.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Operadores Aritméticos",
      content: "Además de +, -, *, /, tenemos % (módulo) que da el resto de una división.",
      code: `variable a = 17
variable b = 5

mostrar "Módulo: " + (a % b)`,
      explanation: "17 % 5 = 2 porque 17 dividido 5 es 3 con resto 2. Útil para detectar pares (n % 2 == 0).",
      challenge: "Calcula el área de un círculo: 3.14159 * radio * radio. Usa radio = 5.",
      validation: { expectedOutputs: ["78"] },
    },
    {
      title: "Operadores de Comparación",
      content: "Comparan valores y retornan verdadero o falso.",
      code: `variable a = 10
variable b = 5

mostrar "a > b: " + (a > b)
mostrar "a < b: " + (a < b)
mostrar "a == b: " + (a == b)
mostrar "a != b: " + (a != b)`,
      explanation: "> (mayor), < (menor), >= (mayor o igual), <= (menor o igual), == (igual), != (diferente).",
      challenge: "Crea dos edades y compara si la primera es mayor, menor o igual que la segunda.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Operadores Lógicos",
      content: "Combinan condiciones: 'y' (AND), 'o' (OR), '!' (NOT).",
      code: `variable es_mayor = verdadero
variable tiene_licencia = verdadero

variable puede_conducir = es_mayor y tiene_licencia
mostrar "¿Puede conducir?: " + puede_conducir

variable necesita_taxi = !tiene_licencia
mostrar "¿Necesita taxi?: " + necesita_taxi`,
      explanation: "'y' requiere ambas verdaderas. 'o' requiere al menos una. '!' invierte el valor.",
      challenge: "Sistema de acceso: puede entrar si tiene tarjeta Y (tiene código O es admin).",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Operadores de Asignación",
      content: "Atajos para modificar variables: +=, -=, *=, /=",
      code: `variable x = 10
x += 5
mostrar "Después de += 5: " + x

x -= 3
mostrar "Después de -= 3: " + x

x *= 2
mostrar "Después de *= 2: " + x`,
      explanation: "x += 5 es lo mismo que x = x + 5. Más corto y claro.",
      challenge: "Sistema de puntos: empieza en 100, suma 50 (victoria), resta 20 (derrota), multiplica por 1.5 (bonus).",
      validation: { expectedOutputs: ["100", "150", "130", "195"] },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina todos los operadores en programas útiles.",
      code: `variable numero = 15

mostrar "Es par?: " + (numero % 2 == 0)

numero *= 2
mostrar "Duplicado: " + numero`,
      explanation: "Los operadores son tus herramientas básicas para procesar datos.",
      challenge: "Calcula el IMC: peso / (altura * altura). Muestra si es menor, igual o mayor que 25.",
      summary: "🧠 Recuerda:\n\n• Aritméticos: +, -, *, /, %\n• Comparación: >, <, >=, <=, ==, !=\n• Lógicos: y, o, !\n• Asignación: +=, -=, *=, /=",
      validation: { expectedOutputs: [] },
    },
  ],
};
