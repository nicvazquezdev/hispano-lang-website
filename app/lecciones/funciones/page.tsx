import LessonPage from "@/components/lessons/LessonPage";

export default function FuncionesLesson() {
  const steps = [
    {
      title: "¿Qué son las funciones?",
      content:
        "Las funciones son bloques de código reutilizables que realizan una tarea específica. En lugar de escribir el mismo código una y otra vez, podemos crear una función y llamarla cuando la necesitemos. Es como crear tus propias herramientas personalizadas: defines una vez cómo funciona algo, y luego lo usas tantas veces como quieras. Las funciones son fundamentales para organizar código, evitar repetición y crear programas más mantenibles.",
      code: `funcion saludar() {
    mostrar "¡Hola mundo!"
    mostrar "Bienvenido a HispanoLang"
}

saludar()
mostrar "---"
saludar()`,
      explanation:
        "Aquí creamos nuestra primera función llamada `saludar`. La definición de la función (entre llaves) contiene el código que queremos reutilizar. Para usar la función, simplemente escribimos su nombre seguido de paréntesis: `saludar()`. Esto se llama 'llamar' o 'invocar' la función. En este ejemplo, llamamos a `saludar()` dos veces, y cada vez se ejecuta todo el código dentro de la función. Las funciones nos permiten abstraer comportamientos complejos en nombres simples y descriptivos.",
      challenge:
        "🧩 Desafío rápido: Crea una función llamada `despedirse` que muestre dos mensajes de despedida. Luego llámala 3 veces para ver cómo se reutiliza el código.",
    },
    {
      title: "Funciones con Parámetros",
      content:
        "Los parámetros son valores que le pasamos a una función para que trabaje con ellos. Es como darle ingredientes a una receta: la receta (función) siempre es la misma, pero los ingredientes (parámetros) pueden cambiar, produciendo resultados diferentes. Esto hace que las funciones sean mucho más flexibles y poderosas.",
      code: `funcion saludar(nombre) {
    mostrar "¡Hola " + nombre + "!"
}

saludar("María")
saludar("Carlos")
saludar("Ana")

funcion presentar(nombre, edad) {
    mostrar nombre + " tiene " + edad + " años"
}

presentar("Juan", 25)
presentar("Laura", 30)`,
      explanation:
        "Los parámetros se definen entre los paréntesis de la función. Cuando llamamos a la función, debemos pasar valores (argumentos) que correspondan a esos parámetros. En `saludar(nombre)`, `nombre` es el parámetro, y cuando llamamos `saludar('María')`, 'María' es el argumento que se asigna a ese parámetro. Podemos tener múltiples parámetros separados por comas, como en `presentar(nombre, edad)`. Los parámetros funcionan como variables locales: solo existen dentro de la función y toman los valores que les pasamos al llamarla.",
      challenge:
        "🧩 Desafío rápido: Crea una función `calcularAreaRectangulo(base, altura)` que muestre el área calculada. Llámala con diferentes valores de base y altura.",
    },
    {
      title: "Funciones que Retornan Valores",
      content:
        "Además de ejecutar código, las funciones pueden devolver (retornar) un valor usando la palabra `retornar`. Esto nos permite usar el resultado de la función en otras partes del programa. Es como una calculadora: le das números, hace el cálculo, y te devuelve el resultado. El valor retornado puede guardarse en una variable o usarse directamente en expresiones.",
      code: `funcion sumar(a, b) {
    retornar a + b
}

variable resultado = sumar(5, 3)
mostrar "5 + 3 = " + resultado

variable total = sumar(10, 20) + sumar(5, 15)
mostrar "Total: " + total

funcion esMayorDeEdad(edad) {
    retornar edad >= 18
}

mostrar "¿Es mayor de edad?: " + esMayorDeEdad(20)`,
      explanation:
        "La palabra clave `retornar` hace dos cosas: devuelve un valor y termina la ejecución de la función inmediatamente. Todo el código después de `retornar` no se ejecuta. En `sumar(5, 3)`, la función calcula 5 + 3 y retorna 8, que se guarda en la variable `resultado`. Podemos usar el valor retornado directamente en expresiones como `sumar(10, 20) + sumar(5, 15)`. Las funciones pueden retornar cualquier tipo de dato: números, texto, booleanos, etc. Las funciones con retorno son como transformadores de datos: reciben información, la procesan, y devuelven el resultado.",
      challenge:
        "🧩 Desafío rápido: Crea una función `multiplicar(x, y)` que retorne el producto. Usa esta función para calcular el área de 3 rectángulos diferentes y muestra la suma total de todas las áreas.",
    },
    {
      title: "Funciones sin Retorno vs con Retorno",
      content:
        "Las funciones pueden hacer dos tipos de tareas: realizar acciones (como mostrar mensajes) o calcular y retornar valores. Entender la diferencia es clave: las funciones sin retorno ejecutan efectos secundarios (mostrar, modificar variables globales), mientras que las funciones con retorno producen valores que podemos usar. Ambos tipos son útiles en diferentes situaciones.",
      code: `// Función sin retorno (solo ejecuta acciones)
funcion imprimirTabla(numero) {
    para (variable i = 1; i <= 5; i = i + 1) {
        mostrar numero + " x " + i + " = " + (numero * i)
    }
}

imprimirTabla(3)

mostrar "---"

// Función con retorno (calcula y devuelve)
funcion calcularPromedio(a, b, c) {
    variable suma = a + b + c
    retornar suma / 3
}

variable nota1 = 8
variable nota2 = 9
variable nota3 = 7
variable promedio = calcularPromedio(nota1, nota2, nota3)
mostrar "Promedio: " + promedio`,
      explanation:
        "Las funciones sin `retornar` son útiles cuando queremos ejecutar acciones como mostrar información, dibujar en pantalla, o modificar el estado del programa. La función `imprimirTabla` no devuelve nada, solo muestra la tabla de multiplicar. Por otro lado, `calcularPromedio` realiza un cálculo y retorna el resultado para que podamos usarlo. Una buena práctica es que las funciones con retorno no tengan efectos secundarios (no usen `mostrar` internamente), y las funciones sin retorno se enfoquen en acciones. Esto hace el código más predecible y fácil de probar.",
      challenge:
        "🧩 Desafío rápido: Crea una función sin retorno `mostrarEstadisticas(nombre, puntos)` que muestre el nombre y puntos formateados. Luego crea una función con retorno `calcularPuntosFinales(puntos, bonus)` que sume y retorne el total.",
    },
    {
      title: "Funciones Anónimas",
      content:
        "Las funciones anónimas son funciones sin nombre que se guardan en variables. Son útiles cuando necesitamos una función pequeña y específica que solo se usará en un lugar. Es como crear una herramienta temporal: la defines, la usas, y no necesitas darle un nombre formal porque no la reutilizarás en muchos lugares.",
      code: `// Función anónima guardada en variable
variable saludar = funcion(nombre) {
    retornar "¡Hola " + nombre + "!"
}

mostrar saludar("Ana")
mostrar saludar("Pedro")

// Función anónima para cálculos
variable calcularDescuento = funcion(precio, porcentaje) {
    retornar precio - (precio * porcentaje / 100)
}

variable precioFinal = calcularDescuento(100, 20)
mostrar "Precio con descuento: " + precioFinal

// Función que retorna función
variable crearMultiplicador = funcion(factor) {
    retornar funcion(numero) {
        retornar numero * factor
    }
}

variable duplicar = crearMultiplicador(2)
mostrar duplicar(5)`,
      explanation:
        "Las funciones anónimas se crean usando la palabra `funcion` sin nombre, y se guardan en una variable. Luego usamos la variable como si fuera el nombre de la función. En `saludar('Ana')`, estamos llamando a la función anónima guardada en la variable `saludar`. Las funciones anónimas son especialmente útiles para callbacks, funciones de orden superior (funciones que reciben o retornan otras funciones), y cuando necesitamos funciones pequeñas y específicas. En el último ejemplo, `crearMultiplicador` retorna una nueva función, creando una closure que 'recuerda' el valor de `factor`.",
      challenge:
        "🧩 Desafío rápido: Crea una función anónima `convertirCelsiusAFahrenheit` guardada en una variable, que convierta temperaturas usando la fórmula: (celsius * 9/5) + 32. Úsala para convertir varias temperaturas.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear funciones útiles y ver cómo organizan tu código. Las funciones son el corazón de la programación modular: nos permiten dividir problemas grandes en piezas pequeñas y manejables. Experimenta creando funciones para diferentes tareas, combinándolas, y reutilizándolas.",
      code: `funcion calcularIMC(peso, altura) {
    variable imc = peso / (altura * altura)
    retornar imc
}

variable miIMC = calcularIMC(70, 1.75)
mostrar "Tu IMC es: " + miIMC

funcion esIMCSaludable(imc) {
    retornar imc >= 18.5 y imc <= 24.9
}

mostrar "¿Es saludable?: " + esIMCSaludable(miIMC)`,
      explanation:
        "En esta práctica libre, combina todo lo que has aprendido sobre funciones. Crea funciones para tareas específicas, usa parámetros para hacerlas flexibles, retorna valores para usarlos en otras partes del programa, y combina funciones simples para crear lógica más compleja. Las buenas funciones tienen nombres descriptivos, hacen una sola cosa bien, y son fáciles de entender y probar. Piensa en las funciones como bloques de construcción: cada una hace algo específico, y al combinarlas puedes crear programas complejos y potentes.",
      challenge:
        "🧩 Desafío rápido: Crea un sistema de gestión de estudiantes con funciones: `calcularNotaFinal(parcial1, parcial2, final)`, `determinarEstado(nota)` que retorne 'Aprobado' o 'Reprobado', y `mostrarReporte(nombre, nota, estado)` que muestre todo.",
      summary:
        "🧠 Recuerda:\n\n• Las funciones encapsulan código reutilizable.\n• Los parámetros hacen las funciones flexibles.\n• `retornar` devuelve un valor y termina la función.\n• Las funciones sin retorno ejecutan acciones, las que retornan producen valores.\n• Las funciones anónimas se guardan en variables.\n• Divide problemas grandes en funciones pequeñas.\n• ¡Las funciones son la base de la programación modular!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "⚡", text: "Lección 7" }}
      title="Funciones en"
      titleGradient=" Hispano Lang"
      description="Aprende a crear código reutilizable con funciones"
      steps={steps}
      prevLessonUrl="/lecciones/bucles"
      prevLessonTitle="Bucles"
    />
  );
}
