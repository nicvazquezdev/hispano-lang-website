import LessonPage from "@/components/lessons/LessonPage";

export default function BuclesLesson() {
  const steps = [
    {
      title: "¿Qué son los bucles?",
      content:
        "Los bucles (o ciclos) son estructuras que nos permiten repetir código múltiples veces sin tener que escribirlo una y otra vez. Imagina que necesitas mostrar los números del 1 al 100: sin bucles tendrías que escribir 100 líneas de código. Con bucles, solo necesitas unas pocas líneas. Los bucles son fundamentales para automatizar tareas repetitivas y procesar grandes cantidades de datos.",
      code: `variable i = 1

mientras i <= 5 {
    mostrar "Número: " + i
    i = i + 1
}

mostrar "Bucle terminado"`,
      explanation:
        "El bucle `mientras` (while en inglés) repite un bloque de código mientras una condición sea verdadera. En este ejemplo:\n\n1. Comenzamos con i = 1\n2. Verificamos: ¿i <= 5? Sí → ejecutamos el bloque\n3. Mostramos el número e incrementamos i a 2\n4. Volvemos al paso 2 y repetimos\n5. Cuando i llega a 6, la condición es falsa y salimos del bucle\n\nEs crucial incrementar la variable (i = i + 1) o el bucle se repetiría infinitamente. El mensaje 'Bucle terminado' se muestra solo una vez, después de que el bucle termina. Los bucles son la base de la automatización en programación.",
      challenge:
        "🧩 Desafío rápido: Usa un bucle `mientras` para mostrar los números del 10 al 1 en cuenta regresiva. No olvides decrementar la variable en cada iteración.",
    },
    {
      title: "Bucle Mientras (While)",
      content:
        "El bucle `mientras` es perfecto cuando no sabemos exactamente cuántas veces se repetirá el código, solo sabemos la condición que debe cumplirse. Es como decir 'mientras tengas hambre, sigue comiendo'. El bucle continúa hasta que la condición se vuelva falsa.",
      code: `variable contador = 0
variable suma = 0

mientras contador < 5 {
    contador = contador + 1
    suma = suma + contador
    mostrar "Iteración " + contador + ", suma parcial: " + suma
}

mostrar "Suma total: " + suma`,
      explanation:
        "Este ejemplo muestra un patrón común: usar un bucle para acumular valores. Comenzamos con un contador en 0 y una suma en 0. En cada iteración:\n\n1. Incrementamos el contador\n2. Sumamos el contador a la suma total\n3. Mostramos el progreso\n\nCuando el contador llega a 5, la condición `contador < 5` se vuelve falsa y salimos del bucle. La suma final es 1+2+3+4+5 = 15. Los bucles `mientras` son ideales para procesar datos hasta que se cumpla una condición específica, como leer archivos hasta el final, o validar entrada hasta que sea correcta.",
      challenge:
        "🧩 Desafío rápido: Crea un bucle que calcule el factorial de 5 (5! = 5 × 4 × 3 × 2 × 1). Usa una variable para acumular el producto y otra como contador.",
    },
    {
      title: "Bucle Para (For)",
      content:
        "El bucle `para` es ideal cuando sabemos exactamente cuántas veces queremos repetir algo. Combina en una sola línea la inicialización, la condición y el incremento. Es más compacto y claro para iteraciones con contador. Es como decir 'para cada número del 1 al 10, haz esto'.",
      code: `para (variable i = 1; i <= 5; i = i + 1) {
    mostrar "Iteración número: " + i
}

mostrar "---"

para (variable j = 0; j < 3; j = j + 1) {
    mostrar "Valor de j: " + j
}`,
      explanation:
        "La estructura del bucle `para` tiene tres partes separadas por punto y coma:\n\n1. **Inicialización** (variable i = 1): Se ejecuta una sola vez al inicio\n2. **Condición** (i <= 5): Se verifica antes de cada iteración\n3. **Incremento** (i = i + 1): Se ejecuta al final de cada iteración\n\nEsto hace que el bucle `para` sea muy compacto: todo el control del bucle está en una sola línea. Es especialmente útil cuando trabajamos con rangos numéricos conocidos. El primer bucle se ejecuta 5 veces (i: 1,2,3,4,5) y el segundo 3 veces (j: 0,1,2). Nota que podemos usar diferentes nombres de variable en diferentes bucles.",
      challenge:
        "🧩 Desafío rápido: Usa un bucle `para` para crear una tabla de multiplicar del 7. Muestra '7 x 1 = 7', '7 x 2 = 14', etc., hasta 7 x 10.",
    },
    {
      title: "Control de Bucles: Continuar y Romper",
      content:
        "A veces necesitamos más control sobre nuestros bucles. `continuar` salta a la siguiente iteración sin ejecutar el resto del código, y `romper` termina el bucle inmediatamente. Son como atajos que nos permiten manejar casos especiales sin complicar la lógica.",
      code: `// Ejemplo con continuar
para (variable i = 1; i <= 10; i = i + 1) {
    si i == 5 {
        continuar
    }
    mostrar i
}

mostrar "---"

// Ejemplo con romper
variable contador = 0
mientras contador < 10 {
    contador = contador + 1
    si contador == 3 {
        romper
    }
    mostrar "Contador: " + contador
}`,
      explanation:
        "`continuar` y `romper` nos dan control fino sobre la ejecución del bucle:\n\n• **continuar**: Salta el resto de la iteración actual y va directo a la siguiente. En el primer ejemplo, cuando i es 5, se salta el `mostrar`, por eso se muestran 1,2,3,4,6,7,8,9,10 (falta el 5).\n\n• **romper**: Termina el bucle completamente, sin importar la condición. En el segundo ejemplo, aunque la condición dice `< 10`, cuando el contador llega a 3, el bucle se rompe y termina.\n\nEstas palabras clave son útiles para manejar casos especiales (continuar) o para salir temprano cuando encontramos lo que buscamos (romper). Sin embargo, deben usarse con cuidado para no hacer el código confuso.",
      challenge:
        "🧩 Desafío rápido: Usa un bucle del 1 al 20. Salta (continuar) los múltiplos de 3, y detente (romper) cuando llegues a 15. Muestra solo los números que cumplen las condiciones.",
    },
    {
      title: "Bucles Anidados",
      content:
        "Podemos poner bucles dentro de otros bucles para crear patrones más complejos. Es como tener un bucle que se repite, y dentro de cada repetición, otro bucle que también se repite. Esto es útil para trabajar con tablas, matrices, o crear patrones bidimensionales.",
      code: `para (variable i = 1; i <= 3; i = i + 1) {
    mostrar "--- Fila " + i + " ---"
    
    para (variable j = 1; j <= 4; j = j + 1) {
        mostrar "  i=" + i + ", j=" + j
    }
}`,
      explanation:
        "En un bucle anidado, el bucle interno se ejecuta completamente por cada iteración del bucle externo. En este ejemplo:\n\n1. i = 1, entramos al primer bucle\n2. El bucle de j se ejecuta 4 veces (j: 1,2,3,4)\n3. Volvemos al bucle de i, ahora i = 2\n4. El bucle de j se ejecuta otras 4 veces\n5. Y así sucesivamente...\n\nTotal de iteraciones: 3 × 4 = 12. Los bucles anidados son poderosos pero pueden ser costosos en términos de rendimiento: si tienes un bucle de 100 iteraciones dentro de otro de 100, ¡tendrás 10,000 iteraciones en total! Úsalos cuando realmente necesites procesar datos bidimensionales o crear patrones complejos.",
      challenge:
        "🧩 Desafío rápido: Usa bucles anidados para crear una tabla de multiplicar del 1 al 5. El bucle externo para las filas (1-5) y el interno para las columnas (1-5). Muestra cada multiplicación.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas que automaticen tareas con bucles. Los bucles son una de las herramientas más poderosas en programación: te permiten procesar listas, crear patrones, validar datos, y mucho más. Experimenta con diferentes tipos de bucles y combinaciones.",
      code: `// Suma de números del 1 al 10
variable suma = 0

para (variable i = 1; i <= 10; i = i + 1) {
    suma = suma + i
}

mostrar "La suma de 1 a 10 es: " + suma`,
      explanation:
        "En esta práctica libre experimenta con diferentes aplicaciones de bucles. Intenta crear contadores, acumuladores, validadores, generadores de patrones, o cualquier tarea repetitiva. La clave está en identificar qué debe repetirse y cuándo debe detenerse. Usa `mientras` cuando la condición sea más importante que el número de iteraciones, y `para` cuando sepas exactamente cuántas veces repetir. No olvides que los bucles infinitos (que nunca terminan) bloquearán tu programa, así que siempre asegúrate de que la condición pueda volverse falsa o de tener un `romper` como salida de emergencia.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que encuentre todos los números pares entre 1 y 50 y los sume. Muestra tanto los números pares encontrados como la suma total al final.",
      summary:
        "🧠 Recuerda:\n\n• Los bucles `mientras` repiten código mientras una condición sea verdadera.\n• Los bucles `para` son ideales cuando conoces el número de iteraciones.\n• `continuar` salta a la siguiente iteración.\n• `romper` termina el bucle inmediatamente.\n• Los bucles anidados multiplican las iteraciones.\n• Siempre asegúrate de que tus bucles puedan terminar.\n• ¡Los bucles son fundamentales para automatizar tareas!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🔄", text: "Lección 6" }}
      title="Bucles en"
      titleGradient=" Hispano Lang"
      description="Aprende a automatizar tareas repetitivas con bucles mientras y para"
      steps={steps}
      prevLessonUrl="/lecciones/condicionales"
      prevLessonTitle="Condicionales"
      nextLessonUrl="/lecciones/control-flujo-bucles"
      nextLessonTitle="Control de Flujo en Bucles"
    />
  );
}
