import LessonPage from "@/components/lessons/LessonPage";

export default function OperadoresLesson() {
  const steps = [
    {
      title: "¿Qué son los operadores?",
      content:
        "Los operadores son símbolos especiales que nos permiten realizar operaciones con valores y variables. Son como herramientas matemáticas y lógicas que transforman datos: podemos sumar números, comparar valores, combinar condiciones, y mucho más. Los operadores son fundamentales para crear programas que tomen decisiones y procesen información.",
      code: `variable a = 10
variable b = 5

mostrar a + b
mostrar a - b
mostrar a * b
mostrar a / b

mostrar "Suma: " + (a + b)
mostrar "Resta: " + (a - b)`,
      explanation:
        "Aquí vemos los operadores aritméticos básicos en acción: suma (+), resta (-), multiplicación (*) y división (/). Estos operadores toman dos valores (llamados operandos) y producen un resultado. Por ejemplo, `a + b` toma los valores de a (10) y b (5) y produce 15. Es importante notar que cuando usamos operadores dentro de concatenaciones con texto, podemos usar paréntesis para asegurar que la operación se realice primero. Los operadores son la base para hacer que nuestros programas realicen cálculos y procesen datos de forma automática.",
      challenge:
        "🧩 Desafío rápido: Crea dos variables con números de tu elección y muestra el resultado de las cuatro operaciones básicas (suma, resta, multiplicación, división) con mensajes descriptivos.",
    },
    {
      title: "Operadores Aritméticos",
      content:
        "Los operadores aritméticos nos permiten realizar cálculos matemáticos. Además de las cuatro operaciones básicas, tenemos el módulo (%) que nos da el resto de una división. Estos operadores son esenciales para crear calculadoras, procesar datos numéricos, o realizar cualquier cálculo matemático.",
      code: `variable a = 17
variable b = 5

variable suma = a + b
variable resta = a - b
variable producto = a * b
variable division = a / b
variable modulo = a % b

mostrar "Suma: " + suma
mostrar "Resta: " + resta
mostrar "Producto: " + producto
mostrar "División: " + division
mostrar "Módulo (resto): " + modulo`,
      explanation:
        "Los cinco operadores aritméticos básicos son:\n\n• `+` suma dos números\n• `-` resta el segundo del primero\n• `*` multiplica dos números\n• `/` divide el primero entre el segundo\n• `%` devuelve el resto de la división\n\nEl operador módulo (%) es especialmente útil para determinar si un número es par o impar (si num % 2 == 0, es par), o para trabajar con ciclos y patrones. En este ejemplo, 17 % 5 = 2 porque 17 dividido entre 5 es 3 con resto 2. Estos operadores siguen las reglas matemáticas estándar de precedencia: multiplicación y división se ejecutan antes que suma y resta.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que calcule el área de un círculo. Pide el radio al usuario y usa la fórmula: área = 3.14159 * radio * radio.",
    },
    {
      title: "Operadores de Comparación",
      content:
        "Los operadores de comparación nos permiten comparar dos valores y obtener un resultado verdadero o falso. Son fundamentales para tomar decisiones en nuestros programas: '¿es mayor?', '¿son iguales?', '¿es diferente?'. El resultado siempre es un valor booleano (verdadero o falso).",
      code: `variable a = 10
variable b = 5

mostrar "a > b: " + (a > b)
mostrar "a < b: " + (a < b)
mostrar "a >= b: " + (a >= b)
mostrar "a <= b: " + (a <= b)
mostrar "a == b: " + (a == b)
mostrar "a != b: " + (a != b)`,
      explanation:
        "Los operadores de comparación son:\n\n• `>` mayor que\n• `<` menor que\n• `>=` mayor o igual que\n• `<=` menor o igual que\n• `==` igual a (comparación)\n• `!=` diferente de\n\nEs importante no confundir `=` (asignación) con `==` (comparación). El primero guarda un valor en una variable, el segundo compara si dos valores son iguales. Estos operadores son la base de las estructuras condicionales: nos permiten hacer que el programa tome diferentes caminos según las condiciones. Por ejemplo, podemos verificar si un usuario es mayor de edad (edad >= 18) o si una contraseña es correcta (password == 'secreto').",
      challenge:
        "🧩 Desafío rápido: Crea dos variables con edades y compara si la primera persona es mayor, menor o igual que la segunda. Muestra los resultados de las tres comparaciones.",
    },
    {
      title: "Operadores Lógicos",
      content:
        "Los operadores lógicos nos permiten combinar múltiples condiciones. Son como conectores que unen preguntas: '¿es mayor de edad Y tiene licencia?', '¿llueve O hace frío?'. Con ellos podemos crear condiciones complejas que evalúan múltiples factores antes de tomar una decisión.",
      code: `variable es_mayor = verdadero
variable tiene_licencia = verdadero
variable tiene_auto = falso

variable puede_conducir = es_mayor y tiene_licencia
mostrar "¿Puede conducir?: " + puede_conducir

variable necesita_taxi = !tiene_auto
mostrar "¿Necesita taxi?: " + necesita_taxi

variable puede_viajar = tiene_auto o tiene_licencia
mostrar "¿Puede viajar?: " + puede_viajar`,
      explanation:
        "Los tres operadores lógicos principales son:\n\n• `y` (AND): Verdadero solo si AMBAS condiciones son verdaderas\n• `o` (OR): Verdadero si AL MENOS UNA condición es verdadera\n• `!` (NOT): Invierte el valor (verdadero → falso, falso → verdadero)\n\nEstos operadores son fundamentales para crear lógica compleja. Por ejemplo, 'puede conducir' requiere que AMBAS condiciones sean verdaderas (es mayor Y tiene licencia). En cambio, 'puede viajar' solo necesita UNA (tiene auto O tiene licencia). El operador NOT (!) es muy útil para invertir condiciones: si tiene auto es falso, entonces necesita taxi es verdadero. Dominar estos operadores es esencial para escribir programas que tomen decisiones inteligentes.",
      challenge:
        "🧩 Desafío rápido: Simula un sistema de acceso: el usuario puede entrar si tiene tarjeta Y (tiene código O es administrador). Crea las variables y muestra si puede entrar.",
    },
    {
      title: "Operadores de Asignación",
      content:
        "Los operadores de asignación nos permiten modificar variables de forma más rápida y clara. En lugar de escribir 'x = x + 5', podemos escribir 'x += 5'. Estos atajos hacen nuestro código más conciso y legible, especialmente cuando trabajamos con contadores o acumuladores.",
      code: `variable x = 10
mostrar "Valor inicial: " + x

x += 5
mostrar "Después de += 5: " + x

x -= 3
mostrar "Después de -= 3: " + x

x *= 2
mostrar "Después de *= 2: " + x

x /= 4
mostrar "Después de /= 4: " + x`,
      explanation:
        "Los operadores de asignación combinan una operación con la asignación:\n\n• `+=` suma y asigna (x += 5 es igual a x = x + 5)\n• `-=` resta y asigna (x -= 3 es igual a x = x - 3)\n• `*=` multiplica y asigna (x *= 2 es igual a x = x * 2)\n• `/=` divide y asigna (x /= 4 es igual a x = x / 4)\n• `%=` módulo y asigna (x %= 3 es igual a x = x % 3)\n\nEstos operadores son muy útiles cuando trabajamos con contadores, acumuladores o cuando necesitamos actualizar un valor basándonos en su valor anterior. Por ejemplo, en un juego podríamos usar `puntos += 10` cada vez que el jugador anote, o `vidas -= 1` cuando reciba daño. Estos atajos son una convención estándar en programación y hacen el código más profesional y fácil de leer.",
      challenge:
        "🧩 Desafío rápido: Simula un sistema de puntos en un juego. Comienza con 100 puntos, suma 50 por una victoria, resta 20 por una derrota, y multiplica por 1.5 por un bonus. Muestra el resultado en cada paso.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de combinar todos los operadores que has aprendido. Crea programas que realicen cálculos complejos, tomen decisiones basadas en múltiples condiciones, y actualicen valores de forma dinámica. Los operadores son tus herramientas para transformar datos y crear lógica sofisticada.",
      code: `variable numero = 15

mostrar "Número original: " + numero
mostrar "Es par?: " + (numero % 2 == 0)

numero *= 2
mostrar "Después de duplicar: " + numero

variable es_grande = numero > 20
mostrar "¿Es mayor que 20?: " + es_grande`,
      explanation:
        "En esta práctica libre puedes experimentar combinando diferentes tipos de operadores. Intenta crear calculadoras más complejas, sistemas de validación con múltiples condiciones, o simulaciones que usen tanto operadores aritméticos como lógicos. La clave está en entender qué operador usar en cada situación: aritméticos para cálculos, comparación para evaluaciones, lógicos para condiciones complejas, y asignación para actualizar valores. Cuanto más practiques, más natural te resultará combinarlos para resolver problemas complejos.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que calcule el IMC (Índice de Masa Corporal). Pide peso y altura al usuario, calcula IMC = peso / (altura * altura), y muestra si es menor, igual o mayor que 25.",
      summary:
        "🧠 Recuerda:\n\n• Operadores aritméticos (+, -, *, /, %) para cálculos matemáticos.\n• Operadores de comparación (>, <, >=, <=, ==, !=) devuelven verdadero/falso.\n• Operadores lógicos (y, o, !) combinan condiciones.\n• Operadores de asignación (+=, -=, *=, /=) son atajos útiles.\n• Usa paréntesis para controlar el orden de las operaciones.\n• ¡Los operadores son tus herramientas para procesar datos y crear lógica!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "➕", text: "Lección 4" }}
      title="Operadores en"
      titleGradient=" Hispano Lang"
      description="Aprende a usar operadores aritméticos, de comparación, lógicos y de asignación"
      steps={steps}
    />
  );
}
