import LessonPage from "@/components/lessons/LessonPage";

export default function VariablesLesson() {
  const steps = [
    {
      title: "¿Qué son las variables?",
      content:
        "Las variables son uno de los conceptos más importantes en programación. Son como cajas donde guardamos información que queremos usar más adelante. En HispanoLang, usamos la palabra `variable` para crear una nueva caja con un nombre y un valor. Ese valor puede ser texto, números, o incluso resultados de operaciones.",
      code: `variable mi_nombre = "Ana"
mostrar mi_nombre`,
      explanation:
        "Aquí creamos una variable llamada `mi_nombre` y le asignamos el valor 'Ana'. El texto va entre comillas dobles para indicar que es una cadena de caracteres (string). Luego usamos `mostrar` para imprimir el valor en pantalla. Esto significa que el programa tomará el contenido de la caja llamada `mi_nombre` y lo mostrará. Las variables te permiten reutilizar valores sin tener que escribirlos varias veces, y también modificarlos cuando sea necesario.",
      challenge:
        "🧩 Desafío rápido: Crea una variable llamada `mi_edad` con tu edad y muéstrala en pantalla. Observa cómo HispanoLang te permite combinar texto y números fácilmente.",
    },
    {
      title: "Diferentes tipos de variables",
      content:
        "En programación, no toda la información es igual. A veces queremos guardar palabras, otras veces números o respuestas de tipo 'sí' o 'no'. A eso se le llaman tipos de datos. En HispanoLang tenemos tres básicos: texto, números y valores verdadero/falso (también llamados booleanos).",
      code: `variable nombre = "Juan"
variable edad = 25
variable es_estudiante = verdadero

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad
mostrar "Es estudiante: " + es_estudiante`,
      explanation:
        "Creamos tres variables: una con texto (`nombre`), otra con un número (`edad`) y una booleana (`es_estudiante`). Los textos van entre comillas dobles, los números no. Los valores `verdadero` y `falso` representan respuestas lógicas. También usamos el operador `+` para unir texto con valores, lo que se conoce como concatenación. Este tipo de operaciones son muy comunes al crear mensajes dinámicos, por ejemplo al mostrar información personalizada para cada usuario.",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu color favorito, tu número de la suerte y si te gusta programar (verdadero/falso). Luego muestra todo en una frase usando `mostrar` y el operador `+`.",
    },
    {
      title: "Cambiar el valor de una variable",
      content:
        "Una variable no es algo fijo. Podemos cambiar su contenido en cualquier momento usando el operador de asignación `=`. Esto nos permite actualizar información, como un contador o un puntaje en un juego.",
      code: `variable contador = 0
mostrar "Contador inicial: " + contador

contador = 5
mostrar "Contador después: " + contador

contador = contador + 3
mostrar "Contador final: " + contador`,
      explanation:
        "Primero creamos una variable `contador` y le damos el valor 0. Luego cambiamos su valor a 5, y después sumamos 3 más. Cada vez que usamos `=` estamos reasignando el contenido de la caja. En la línea `contador = contador + 3`, HispanoLang toma el valor actual del contador (5), le suma 3, y guarda el nuevo resultado (8). Este concepto es esencial: las variables pueden cambiar mientras el programa se ejecuta, permitiéndonos llevar el control de estados, cálculos o repeticiones.",
      challenge:
        "🧩 Desafío rápido: Crea una variable `puntos` que empiece en 10, luego cámbiala a 25, y finalmente súmale 5 más. Muestra el resultado en cada paso.",
    },
    {
      title: "Variables con operaciones matemáticas",
      content:
        "Las variables también pueden participar en operaciones matemáticas. Podemos hacer sumas, restas, multiplicaciones y divisiones con ellas, igual que en una calculadora, pero guardando los resultados para usarlos después.",
      code: `variable precio = 100
variable descuento = 20
variable precio_final = precio - descuento

mostrar "Precio original: " + precio
mostrar "Descuento: " + descuento
mostrar "Precio final: " + precio_final`,
      explanation:
        "En este ejemplo usamos dos variables (`precio` y `descuento`) y calculamos una nueva (`precio_final`). Usamos el operador `-` para restar y almacenamos el resultado en otra variable. Los operadores básicos en HispanoLang son:\n\n• `+` para sumar o concatenar texto\n• `-` para restar\n• `*` para multiplicar\n• `/` para dividir\n\nEstas operaciones permiten que los programas realicen cálculos automáticos y trabajen con resultados dinámicos. Por ejemplo, podrías calcular precios con impuestos, notas promedio, o distancias sin hacerlo manualmente.",
      challenge:
        "🧩 Desafío rápido: Crea dos variables `base` y `altura`, calcula el área de un rectángulo (base × altura) y muestra el resultado con `mostrar`.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno. Crea tus propias variables y experimenta con diferentes tipos de datos, nombres y valores. No hay una sola respuesta correcta: lo importante es practicar y entender cómo se comportan las variables.",
      code: `variable mi_variable = "¡Hola mundo!"
mostrar mi_variable`,
      explanation:
        "En esta práctica libre puedes escribir tu propio código y ver cómo responde el intérprete. Intenta combinar texto con operaciones, cambiar valores, o crear mensajes personalizados. Recuerda que la práctica es la mejor forma de aprender: cuanto más escribas código, más natural te resultará entender cómo funcionan las variables y su relación con los datos.",
      challenge:
        "🧩 Desafío rápido: Crea una variable `pais` y muestra un mensaje que diga 'Vivo en [tu país]'. Luego, agrega otra variable `ciudad` y combina ambas en un solo mensaje.",
      summary:
        "🧠 Recuerda:\n\n• Usa `variable` para crear una nueva caja.\n• Puedes cambiar su contenido en cualquier momento.\n• Las variables pueden guardar texto, números o valores verdadero/falso.\n• Usa `mostrar` para ver el contenido de las variables en pantalla.\n• Y lo más importante: ¡experimenta y diviértete aprendiendo!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "📦", text: "Lección 1" }}
      title="Variables en"
      titleGradient=" Hispano Lang"
      description="Aprende a almacenar y manipular datos paso a paso"
      steps={steps}
      nextLessonUrl="/lecciones/tipos-datos"
      nextLessonTitle="Tipos de Datos"
    />
  );
}
