import LessonPage from "@/components/lessons/LessonPage";

export default function EjemplosAvanzadosLesson() {
  const steps = [
    {
      title: "Integrando Conceptos",
      content:
        "Has aprendido todos los fundamentos de HispanoLang: variables, tipos de datos, operadores, condicionales, bucles, funciones, listas y objetos. Ahora es momento de combinarlos todos para crear programas completos y útiles. Los ejemplos avanzados te mostrarán cómo todos estos conceptos trabajan juntos para resolver problemas reales.",
      code: `// Programa simple que combina varios conceptos
variable nombre = "Ana"
variable edad = 25

funcion esAdulto(edad) {
    retornar edad >= 18
}

si esAdulto(edad) {
    mostrar nombre + " es adulto"
} sino {
    mostrar nombre + " es menor de edad"
}`,
      explanation:
        "Este ejemplo combina:\n\n• Variables para almacenar datos\n• Funciones para encapsular lógica reutilizable\n• Condicionales para tomar decisiones\n• Operadores de comparación para evaluar condiciones\n\nLa función `esAdulto` recibe una edad y retorna verdadero o falso. Luego usamos ese resultado en un condicional para mostrar el mensaje apropiado. Así es como se construyen programas reales: combinando pequeñas piezas simples para crear soluciones complejas. Cada concepto que has aprendido es un bloque de construcción, y ahora aprenderás a combinarlos efectivamente.",
      challenge:
        "Crea una función `esPar(numero)` que retorne verdadero si es par. Luego usa un bucle para mostrar los números pares del 1 al 20 usando tu función.",
    },
    {
      title: "Calculadora Simple",
      content:
        "Una calculadora es un excelente ejemplo para combinar funciones, parámetros, condicionales y operadores. Recibe dos números y una operación, y retorna el resultado según la operación solicitada. Este patrón de 'función que decide qué hacer' es muy común en programación.",
      code: `funcion calculadora(a, b, operacion) {
    si operacion == "suma" {
        retornar a + b
    } sino {
        si operacion == "resta" {
            retornar a - b
        } sino {
            si operacion == "multiplicacion" {
                retornar a * b
            } sino {
                si operacion == "division" {
                    retornar a / b
                }
            }
        }
    }
}

variable resultado = calculadora(10, 5, "suma")
mostrar "Resultado: " + resultado

mostrar calculadora(20, 4, "multiplicacion")`,
      explanation:
        "Esta calculadora combina varios conceptos:\n\n• **Función con múltiples parámetros**: a, b (números) y operacion (texto)\n• **Condicionales anidados**: Evalúa qué operación hacer\n• **Operadores aritméticos**: +, -, *, / según la operación\n• **Retorno de valores**: Devuelve el resultado del cálculo\n\nLa función usa una cadena de `si-sino` para determinar qué operación realizar. Compara el parámetro `operacion` con cada opción y ejecuta la operación correspondiente. El resultado se retorna y puede usarse directamente en `mostrar` o guardarse en una variable. Este patrón es útil para crear menús de opciones, procesadores de comandos, o cualquier sistema que deba comportarse diferente según parámetros.",
      challenge:
        "Extiende la calculadora agregando la operación 'modulo' que retorne a % b. Prueba todas las operaciones con diferentes números.",
    },
    {
      title: "Procesamiento de Listas",
      content:
        "Un patrón muy común es recorrer una lista y clasificar sus elementos en diferentes categorías. Este ejemplo separa números pares e impares usando el método `.recorrer()` combinado con condicionales. Es un patrón fundamental en procesamiento de datos.",
      code: `variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
variable pares = []
variable impares = []

numeros.recorrer(funcion(elemento) {
    si elemento % 2 == 0 {
        pares.agregar(elemento)
    } sino {
        impares.agregar(elemento)
    }
})

mostrar "Números pares: " + pares
mostrar "Números impares: " + impares`,
      explanation:
        "Este ejemplo combina:\n\n• **Listas**: Almacenar colecciones de números\n• **Método `.recorrer()`**: Procesar cada elemento\n• **Funciones anónimas**: La función que se ejecuta por cada elemento\n• **Operador módulo (%)**: Detectar pares (elemento % 2 == 0)\n• **Condicionales**: Decidir a qué lista agregar\n• **Método `.agregar()`**: Construir las listas resultantes\n\nEste patrón de 'filtrar y clasificar' es extremadamente común en programación real: separar datos válidos de inválidos, categorizar productos, agrupar usuarios por edad, etc. Comenzamos con listas vacías y las vamos llenando según criterios específicos mientras recorremos la lista original.",
      challenge:
        "Crea una lista de números del 1 al 20. Sepáralos en tres listas: múltiplos de 3, múltiplos de 5, y otros. Muestra las tres listas resultantes.",
    },
    {
      title: "Sistema de Estudiantes",
      content:
        "Las listas de objetos son perfectas para representar colecciones de entidades como estudiantes, productos, o usuarios. Este ejemplo muestra cómo trabajar con una lista de estudiantes, accediendo a sus propiedades y filtrando por criterios específicos. Es un patrón fundamental en aplicaciones del mundo real.",
      code: `variable estudiantes = [
    {nombre: "Ana", edad: 20, calificacion: 95},
    {nombre: "Carlos", edad: 22, calificacion: 87},
    {nombre: "María", edad: 19, calificacion: 92}
]

mostrar "Estudiantes con excelente calificación:"

estudiantes.recorrer(funcion(elemento) {
    si elemento.calificacion >= 90 {
        mostrar elemento.nombre + " - " + elemento.calificacion + " puntos"
    }
})`,
      explanation:
        "Este sistema combina:\n\n• **Listas de objetos**: Cada estudiante es un objeto con propiedades\n• **Recorrido de listas**: Procesar cada estudiante\n• **Acceso a propiedades**: `elemento.nombre`, `elemento.calificacion`\n• **Filtrado condicional**: Solo mostrar estudiantes con calificación >= 90\n• **Concatenación**: Crear mensajes formateados\n\nEste es un patrón muy común en aplicaciones reales: tienes una colección de entidades (usuarios, productos, mensajes) y necesitas filtrar, buscar, o procesar elementos que cumplan ciertas condiciones. Las listas de objetos son la estructura de datos fundamental en casi todas las aplicaciones modernas.",
      challenge:
        "Extiende el sistema: agrega más estudiantes y calcula el promedio de calificaciones de todos. Luego muestra qué estudiantes están por encima del promedio.",
    },
    {
      title: "Sistema de Inventario Completo",
      content:
        "Creemos un sistema más complejo que gestione un inventario de productos. Combinaremos funciones para agregar productos, buscar por nombre, calcular valor total, y mostrar reportes. Este ejemplo integra casi todo lo que has aprendido en un programa útil y realista.",
      code: `variable inventario = []

funcion agregarProducto(nombre, precio, cantidad) {
    variable producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    }
    inventario.agregar(producto)
    mostrar "Producto agregado: " + nombre
}

funcion calcularValorTotal() {
    variable total = 0
    inventario.recorrer(funcion(producto) {
        total = total + (producto.precio * producto.cantidad)
    })
    retornar total
}

// Agregar productos
agregarProducto("Laptop", 1000, 5)
agregarProducto("Mouse", 25, 20)
agregarProducto("Teclado", 75, 10)

// Calcular valor
variable valor = calcularValorTotal()
mostrar "Valor total del inventario: " + valor`,
      explanation:
        "Este sistema completo integra:\n\n• **Lista global de objetos**: El inventario\n• **Función para agregar**: Crea objetos y los agrega a la lista\n• **Objetos con múltiples propiedades**: nombre, precio, cantidad\n• **Función de cálculo**: Recorre la lista y acumula valores\n• **Operaciones matemáticas**: Multiplicación y suma\n• **Variables de acumulación**: Para sumar valores totales\n\nEste es el tipo de código que escribirías en aplicaciones reales. Cada función tiene una responsabilidad clara: `agregarProducto` agrega, `calcularValorTotal` calcula. Las funciones usan la lista global `inventario` como almacenamiento compartido. Este patrón demuestra cómo todos los conceptos que aprendiste se combinan para crear sistemas útiles.",
      challenge:
        "Agrega una función `buscarProducto(nombre)` que busque un producto en el inventario y muestre su información (precio, cantidad, valor total de ese producto).",
    },
    {
      title: "¡Proyecto Final!",
      content:
        "Has llegado al final del curso de HispanoLang. Ahora es tu momento de crear un proyecto que integre todo lo aprendido. Piensa en un problema que quieras resolver o un programa que quieras crear, y construyelo usando todas las herramientas que has dominado. ¡El límite es tu creatividad!",
      code: `// ¡Crea tu propio proyecto aquí!
// Ideas:
// - Sistema de tareas con prioridades
// - Juego de adivinanzas
// - Gestor de gastos personales
// - Agenda de contactos
// - Calculadora científica

variable mensaje = "¡Felicidades por completar el curso!"
mostrar mensaje`,
      explanation:
        "Has aprendido todo lo necesario para crear programas completos en HispanoLang. Ahora puedes:\n\n• Almacenar y manipular datos con variables\n• Trabajar con diferentes tipos de datos\n• Crear funciones reutilizables\n• Tomar decisiones con condicionales\n• Automatizar tareas con bucles\n• Organizar datos con listas y objetos\n• Manejar errores apropiadamente\n\nLo más importante no es memorizar toda la sintaxis, sino entender cómo combinar estos conceptos para resolver problemas. La programación es como resolver rompecabezas: cada pieza (concepto) se conecta con otras para crear la imagen completa (programa). Sigue practicando, experimentando, y construyendo proyectos. ¡Cada programa que escribas te hará mejor programador!",
      challenge:
        "🧩 Proyecto Final: Crea un programa completo que combine al menos 5 conceptos diferentes que has aprendido. Puede ser un juego, una herramienta útil, un simulador, o lo que imagines. ¡Demuestra todo lo que has aprendido!",
      summary:
        "🧠 Has Completado el Curso de HispanoLang:\n\n• Variables y tipos de datos para almacenar información.\n• Operadores para procesar y comparar datos.\n• Condicionales para tomar decisiones inteligentes.\n• Bucles para automatizar tareas repetitivas.\n• Funciones para crear código modular y reutilizable.\n• Listas y objetos para organizar datos complejos.\n• Manejo de errores para programas robustos.\n• ¡Ahora eres capaz de crear programas completos en español!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🎓", text: "Lección 14" }}
      title="Ejemplos Avanzados en"
      titleGradient=" Hispano Lang"
      description="Integra todos los conceptos aprendidos en proyectos completos"
      steps={steps}
      prevLessonUrl="/lecciones/manejo-errores"
      prevLessonTitle="Manejo de Errores"
    />
  );
}
