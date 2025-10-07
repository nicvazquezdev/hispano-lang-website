import LessonPage from "@/components/lessons/LessonPage";

export default function FuncionesMatematicasLesson() {
  const steps = [
    {
      title: "¿Qué son las funciones matemáticas integradas?",
      content:
        "HispanoLang incluye un conjunto de funciones matemáticas predefinidas que están disponibles sin necesidad de crearlas. Estas funciones nos permiten realizar cálculos complejos como raíces cuadradas, potencias, trigonometría, y más, con solo llamarlas por su nombre. Son como una calculadora científica integrada en el lenguaje, lista para usar en cualquier momento.",
      code: `variable raiz = raiz(16)
variable potencia = potencia(2, 3)

mostrar "La raíz cuadrada de 16 es: " + raiz
mostrar "2 elevado a la 3 es: " + potencia

variable numero = 25
mostrar "La raíz de " + numero + " es: " + raiz(numero)`,
      explanation:
        "Las funciones matemáticas integradas son funciones que HispanoLang proporciona automáticamente. No necesitamos definirlas, solo llamarlas con sus nombres. `raiz(16)` calcula la raíz cuadrada de 16 y retorna 4. `potencia(2, 3)` calcula 2³ (2 × 2 × 2) y retorna 8. Estas funciones aceptan parámetros y retornan resultados que podemos guardar en variables o usar directamente. Son fundamentales para crear programas que realicen cálculos matemáticos complejos sin tener que implementar los algoritmos desde cero.",
      challenge:
        "🧩 Desafío rápido: Calcula la raíz cuadrada de 144 y 2 elevado a la 5. Muestra ambos resultados con mensajes descriptivos.",
    },
    {
      title: "Funciones Trigonométricas",
      content:
        "Las funciones trigonométricas (seno, coseno, tangente) son útiles para cálculos de geometría, física, animaciones, y gráficos. Trabajan con ángulos y nos permiten calcular relaciones entre lados de triángulos o crear movimientos circulares. Aunque son avanzadas, HispanoLang las incluye para cálculos científicos.",
      code: `variable seno0 = seno(0)
variable coseno0 = coseno(0)
variable tangente0 = tangente(0)

mostrar "Seno de 0: " + seno0
mostrar "Coseno de 0: " + coseno0
mostrar "Tangente de 0: " + tangente0

variable angulo = 90
mostrar "Seno de 90: " + seno(angulo)`,
      explanation:
        "Las funciones trigonométricas son:\n\n• `seno(angulo)` calcula el seno del ángulo\n• `coseno(angulo)` calcula el coseno del ángulo\n• `tangente(angulo)` calcula la tangente del ángulo\n\nEstas funciones retornan valores numéricos que representan las razones trigonométricas. seno(0) = 0, coseno(0) = 1, tangente(0) = 0. Aunque parezcan avanzadas, son muy útiles en programación para crear animaciones, calcular trayectorias, trabajar con gráficos, o resolver problemas de geometría. No necesitas ser un experto en trigonometría para usarlas: solo entender que toman un ángulo y retornan un número.",
      challenge:
        "🧩 Desafío rápido: Calcula el seno, coseno y tangente del ángulo 45. Muestra los tres resultados organizadamente.",
    },
    {
      title: "Funciones de Redondeo",
      content:
        "Las funciones de redondeo nos permiten convertir números decimales en enteros de diferentes formas. `redondear()` va al entero más cercano, `techo()` siempre redondea hacia arriba, y `piso()` siempre hacia abajo. Son muy útiles para cálculos de dinero, cantidades de productos, o cuando necesitamos números enteros.",
      code: `variable decimal = 3.7

mostrar "Número original: " + decimal
mostrar "Redondeado: " + redondear(decimal)
mostrar "Techo: " + techo(decimal)
mostrar "Piso: " + piso(decimal)

mostrar "---"

variable precio = 19.99
mostrar "Precio: " + precio
mostrar "Redondeado: " + redondear(precio)

variable medida = 5.2
mostrar "Techo de " + medida + ": " + techo(medida)
mostrar "Piso de " + medida + ": " + piso(medida)`,
      explanation:
        "Las tres funciones de redondeo tienen diferentes comportamientos:\n\n• `redondear(3.7)` retorna 4 (más cercano)\n• `redondear(3.2)` retorna 3 (más cercano)\n• `techo(3.2)` retorna 4 (siempre arriba)\n• `piso(3.8)` retorna 3 (siempre abajo)\n\nEstas funciones son muy útiles en situaciones reales:\n\n• Redondear precios para mostrar al usuario\n• Calcular cantidad de paquetes necesarios (siempre redondear arriba)\n• Trabajar con divisiones que deben dar números enteros\n• Convertir medidas a unidades completas\n\n`techo()` es útil cuando necesitas asegurar que siempre tienes suficiente (ej: paquetes), y `piso()` cuando necesitas el máximo entero que cabe (ej: distribución de recursos).",
      challenge:
        "🧩 Desafío rápido: Calcula cuántos paquetes de 6 unidades necesitas para 20 unidades (usa división y techo). Luego muestra cuántas unidades completas tienes en 25.7 (usa piso).",
    },
    {
      title: "Valor Absoluto y Logaritmo",
      content:
        "El valor absoluto convierte números negativos en positivos (la distancia desde cero). El logaritmo es útil para cálculos exponenciales y científicos. Estas funciones son herramientas matemáticas especializadas que aparecen en muchos algoritmos y cálculos del mundo real.",
      code: `variable negativo = -5
variable positivo = 15

mostrar "Valor absoluto de -5: " + valorAbsoluto(negativo)
mostrar "Valor absoluto de 15: " + valorAbsoluto(positivo)

variable diferencia = valorAbsoluto(10 - 25)
mostrar "Diferencia absoluta: " + diferencia

variable log10 = logaritmo(10)
variable log100 = logaritmo(100)

mostrar "Logaritmo de 10: " + log10
mostrar "Logaritmo de 100: " + log100`,
      explanation:
        "Estas funciones tienen usos específicos:\n\n• `valorAbsoluto(numero)` retorna el valor sin signo. valorAbsoluto(-5) = 5, valorAbsoluto(5) = 5. Es útil para calcular distancias, diferencias, o cuando solo importa la magnitud y no la dirección.\n\n• `logaritmo(numero)` calcula el logaritmo natural del número. Es útil en cálculos científicos, crecimiento exponencial, o escalas logarítmicas.\n\nEl valor absoluto es muy común: por ejemplo, para calcular la diferencia entre dos números sin importar cuál es mayor (|10 - 25| = 15). El logaritmo es más especializado pero importante en campos como finanzas, ciencias, o análisis de datos donde trabajamos con crecimiento exponencial.",
      challenge:
        "🧩 Desafío rápido: Crea dos variables con números, una positiva y una negativa. Calcula el valor absoluto de ambas y su diferencia absoluta. Muestra todos los resultados.",
    },
    {
      title: "Números Aleatorios",
      content:
        "La función `aleatorio()` genera números aleatorios (al azar). Podemos usarla sin parámetros para obtener un número entre 0 y 1, con un parámetro para establecer el máximo, o con dos parámetros para definir un rango. Los números aleatorios son fundamentales para juegos, simulaciones, selección aleatoria, o cualquier situación donde necesitemos azar.",
      code: `// Aleatorio entre 0 y 1
variable random1 = aleatorio()
mostrar "Entre 0 y 1: " + random1

// Aleatorio entre 0 y 10
variable random2 = aleatorio(10)
mostrar "Entre 0 y 10: " + random2

// Aleatorio entre 5 y 15
variable random3 = aleatorio(5, 15)
mostrar "Entre 5 y 15: " + random3

// Simular dado (1-6)
variable dado = piso(aleatorio(1, 7))
mostrar "Resultado del dado: " + dado`,
      explanation:
        "La función `aleatorio()` tiene tres formas de uso:\n\n• `aleatorio()` → número entre 0.0 y 1.0\n• `aleatorio(max)` → número entre 0.0 y max\n• `aleatorio(min, max)` → número entre min y max\n\nLos números son decimales. Para obtener enteros, combínala con `piso()` o `redondear()`. En el ejemplo del dado, usamos `aleatorio(1, 7)` para obtener entre 1.0 y 6.999..., y `piso()` para truncar a enteros (1, 2, 3, 4, 5, 6). Los números aleatorios son esenciales para:\n\n• Crear juegos (dados, cartas, enemigos)\n• Simulaciones y pruebas\n• Seleccionar elementos al azar\n• Generar datos de prueba",
      challenge:
        "🧩 Desafío rápido: Simula tirar dos dados (1-6) y suma sus valores. Luego genera una temperatura aleatoria entre 15 y 35 grados. Muestra ambos resultados.",
    },
    {
      title: "Funciones de Agregación",
      content:
        "Las funciones de agregación procesan múltiples números y retornan un solo resultado. `maximo()` encuentra el mayor, `minimo()` el menor, `suma()` los suma todos, y `promedio()` calcula el promedio. Estas funciones aceptan múltiples argumentos y son muy útiles para análisis de datos y estadísticas básicas.",
      code: `variable numeros1 = 10
variable numeros2 = 5
variable numeros3 = 8
variable numeros4 = 3

variable max = maximo(numeros1, numeros2, numeros3, numeros4)
variable min = minimo(numeros1, numeros2, numeros3, numeros4)

mostrar "Mayor: " + max
mostrar "Menor: " + min

variable total = suma(10, 20, 30, 40, 50)
mostrar "Suma total: " + total

variable prom = promedio(8, 9, 7, 10)
mostrar "Promedio: " + prom`,
      explanation:
        "Las funciones de agregación son:\n\n• `maximo(n1, n2, ...)` retorna el número más grande\n• `minimo(n1, n2, ...)` retorna el número más pequeño\n• `suma(n1, n2, ...)` retorna la suma de todos\n• `promedio(n1, n2, ...)` retorna el promedio aritmético\n\nEstas funciones aceptan múltiples argumentos separados por comas. Son muy útiles para:\n\n• Encontrar la calificación más alta/baja\n• Calcular totales de ventas o gastos\n• Obtener promedios de notas o temperaturas\n• Análisis estadístico básico\n\nPodemos pasarles variables o valores literales, y combinarlas con otras operaciones para crear cálculos más complejos. Son especialmente útiles cuando trabajas con múltiples valores y necesitas información agregada sobre ellos.",
      challenge:
        "🧩 Desafío rápido: Tienes 5 calificaciones (85, 92, 78, 95, 88). Calcula y muestra: la nota más alta, la más baja, la suma total y el promedio. Luego determina si el promedio es >= 80 (aprobado con honores).",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas que usen funciones matemáticas para resolver problemas reales. Combina diferentes funciones matemáticas con todo lo que has aprendido (variables, condicionales, bucles, funciones) para crear calculadoras científicas, simuladores, juegos, o herramientas de análisis de datos.",
      code: `// Calculadora de distancia
variable x1 = 0
variable y1 = 0
variable x2 = 3
variable y2 = 4

variable dx = valorAbsoluto(x2 - x1)
variable dy = valorAbsoluto(y2 - y1)
variable distancia = raiz(potencia(dx, 2) + potencia(dy, 2))

mostrar "Distancia: " + distancia`,
      explanation:
        "En esta práctica libre, combina funciones matemáticas para resolver problemas del mundo real. En el ejemplo, calculamos la distancia entre dos puntos usando el teorema de Pitágoras: combinamos `valorAbsoluto()`, `potencia()` y `raiz()` para obtener el resultado. Intenta crear:\n\n• Calculadoras científicas con múltiples operaciones\n• Juegos con números aleatorios\n• Sistemas de calificaciones con promedios\n• Simuladores físicos con trigonometría\n• Herramientas de análisis estadístico\n\nLas funciones matemáticas son herramientas poderosas que, combinadas con lógica de programación, te permiten resolver problemas complejos de forma elegante.",
      challenge:
        "🧩 Desafío rápido: Crea un juego de adivinanza: genera un número aleatorio entre 1 y 100. Pide al usuario un número. Calcula la diferencia absoluta entre ambos y muestra qué tan cerca estuvo (0-10: muy cerca, 11-30: cerca, 31+: lejos).",
      summary:
        "🧠 Recuerda:\n\n• `raiz(n)` calcula la raíz cuadrada.\n• `potencia(base, exponente)` eleva un número a una potencia.\n• `seno()`, `coseno()`, `tangente()` para trigonometría.\n• `redondear()`, `techo()`, `piso()` para convertir a enteros.\n• `valorAbsoluto()` elimina el signo negativo.\n• `aleatorio()` genera números al azar.\n• `maximo()`, `minimo()`, `suma()`, `promedio()` para agregaciones.\n• ¡Combina estas funciones para cálculos poderosos!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🔢", text: "Lección 8" }}
      title="Funciones Matemáticas en"
      titleGradient=" Hispano Lang"
      description="Aprende a usar funciones matemáticas integradas para cálculos avanzados"
      steps={steps}
      prevLessonUrl="/lecciones/funciones"
      prevLessonTitle="Funciones"
      nextLessonUrl="/lecciones/listas"
      nextLessonTitle="Listas"
    />
  );
}
