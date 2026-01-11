import { LessonContent } from "../types";

export const listas: LessonContent = {
  badge: { emoji: "📋", text: "Lección 18" },
  title: "Listas en",
  titleGradient: " HispanoLang",
  description: "Trabaja con colecciones de datos",
  prev: { url: "/lecciones/metodos-numericos", title: "Métodos Numéricos" },
  next: { url: "/lecciones/objetos", title: "Objetos" },
  steps: [
    {
      title: "¿Qué son las listas?",
      content: "Las listas almacenan múltiples valores en una sola variable.",
      code: `variable numeros = [1, 2, 3, 4, 5]
variable frutas = ["manzana", "banana", "naranja"]

mostrar numeros
mostrar frutas
mostrar "Longitud: " + frutas.longitud`,
      explanation: "Se crean con corchetes [] y elementos separados por comas. .longitud indica cuántos elementos hay.",
      challenge: "Crea una lista con tus 3 colores favoritos y muestra cuántos elementos tiene.",
      validation: {
        requiredCode: ["/\\[.*,.*,.*\\]/", ".longitud"],
      },
    },
    {
      title: "Acceder y modificar",
      content: "Los índices empiezan desde 0. Usa primero() y ultimo() para acceso rápido.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

mostrar "Primera: " + frutas[0]
mostrar "Primera: " + frutas.primero()
mostrar "Última: " + frutas.ultimo()

frutas[1] = "pera"
mostrar "Modificada: " + frutas`,
      explanation: "Usamos [índice] para acceder o modificar. primero() y ultimo() son atajos útiles.",
      challenge: "Crea una lista de 4 números. Muestra el primero y el último. Cambia el segundo a 100.",
      validation: {
        requiredCode: ["/\\[\\s*0\\s*\\]/", ".ultimo()", "/=\\s*100/"],
      },
    },
    {
      title: "Agregar, remover e insertar",
      content: "Modifica listas con agregar(), remover() e insertar().",
      code: `variable frutas = ["manzana"]

frutas.agregar("banana")
frutas.agregar("naranja")
mostrar frutas  // ["manzana", "banana", "naranja"]

frutas.insertar(1, "pera")
mostrar frutas  // ["manzana", "pera", "banana", "naranja"]

variable eliminada = frutas.remover()
mostrar "Eliminada: " + eliminada  // "naranja"
mostrar frutas`,
      explanation: "agregar() añade al final, insertar(índice, valor) en posición específica, remover() quita el último.",
      challenge: "Lista vacía. Agrega 3 elementos. Inserta uno en posición 1. Remueve el último.",
      validation: {
        requiredCode: [".agregar(", ".insertar(", ".remover()"],
      },
    },
    {
      title: "Filtrar y buscar",
      content: "Selecciona elementos con filtrar() y encuentra índices con buscar().",
      code: `variable numeros = [1, 2, 3, 4, 5, 6]

variable pares = numeros.filtrar(funcion(n) {
    retornar n % 2 == 0
})
mostrar pares  // [2, 4, 6]

variable mayores = numeros.filtrar(funcion(n) {
    retornar n > 3
})
mostrar mayores  // [4, 5, 6]

mostrar numeros.buscar(4)   // 3 (índice)
mostrar numeros.buscar(10)  // -1 (no existe)`,
      explanation: "filtrar() crea una nueva lista con elementos que cumplen la condición. buscar() retorna el índice.",
      challenge: "Crea una lista de números del 1 al 10. Filtra solo los impares y muéstralos.",
      validation: {
        requiredCode: [".filtrar(", "funcion"],
      },
    },
    {
      title: "Mapear y reducir",
      content: "Transforma con mapear() y acumula con reducir().",
      code: `variable numeros = [1, 2, 3, 4]

variable dobles = numeros.mapear(funcion(n) {
    retornar n * 2
})
mostrar dobles  // [2, 4, 6, 8]

variable suma = numeros.reducir(funcion(acum, n) {
    retornar acum + n
}, 0)
mostrar "Suma: " + suma  // 10

variable producto = numeros.reducir(funcion(acum, n) {
    retornar acum * n
}, 1)
mostrar "Producto: " + producto  // 24`,
      explanation: "mapear() aplica una función a cada elemento. reducir() acumula todos en un valor.",
      challenge: "Lista de precios [100, 200, 300]. Aplica 10% de descuento con mapear() y suma el total con reducir().",
      validation: {
        requiredCode: [".mapear(", ".reducir("],
      },
    },
    {
      title: "Verificar elementos",
      content: "Usa algunos() y todos() para verificar condiciones en la lista.",
      code: `variable numeros = [2, 4, 6, 8]

variable todosPares = numeros.todos(funcion(n) {
    retornar n % 2 == 0
})
mostrar "Todos pares: " + todosPares  // verdadero

variable hayMayorA5 = numeros.algunos(funcion(n) {
    retornar n > 5
})
mostrar "Alguno > 5: " + hayMayorA5  // verdadero

variable hayNegativo = numeros.algunos(funcion(n) {
    retornar n < 0
})
mostrar "Alguno negativo: " + hayNegativo  // falso`,
      explanation: "todos() verifica si TODOS cumplen. algunos() verifica si AL MENOS UNO cumple.",
      challenge: "Lista de edades [18, 25, 30, 15]. Verifica si todos son mayores de edad (>=18) y si alguno es menor.",
      validation: {
        requiredCode: [".todos(", ".algunos("],
      },
    },
    {
      title: "Ordenar, invertir y más",
      content: "Manipula el orden con ordenar(), invertir(), unir() y cortar().",
      code: `variable numeros = [3, 1, 4, 1, 5, 9, 2]
numeros.ordenar()
mostrar numeros  // [1, 1, 2, 3, 4, 5, 9]

numeros.invertir()
mostrar numeros  // [9, 5, 4, 3, 2, 1, 1]

variable palabras = ["Hola", "mundo"]
mostrar palabras.unir(" ")   // "Hola mundo"
mostrar palabras.unir("-")   // "Hola-mundo"

variable letras = ["a", "b", "c", "d", "e"]
mostrar letras.cortar(1, 4)  // ["b", "c", "d"]
mostrar letras.cortar(2)     // ["c", "d", "e"]`,
      explanation: "ordenar() e invertir() modifican la lista. unir() crea un string. cortar() extrae una porción.",
      challenge: "Lista de 5 números desordenados. Ordénalos, muestra los 3 primeros con cortar() y únelos con comas.",
      validation: {
        requiredCode: [".ordenar()", ".cortar(", ".unir("],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina todos los métodos de listas para resolver problemas complejos.",
      code: `variable estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Carlos", nota: 92 },
    { nombre: "María", nota: 78 },
    { nombre: "Luis", nota: 95 }
]

// Filtrar aprobados (nota >= 80)
variable aprobados = estudiantes.filtrar(funcion(e) {
    retornar e.nota >= 80
})

// Obtener solo nombres
variable nombres = aprobados.mapear(funcion(e) {
    retornar e.nombre
})
mostrar "Aprobados: " + nombres.unir(", ")

// Promedio de notas
variable sumaNotas = estudiantes.reducir(funcion(acum, e) {
    retornar acum + e.nota
}, 0)
mostrar "Promedio: " + sumaNotas / estudiantes.longitud`,
      explanation: "Los métodos se encadenan para procesamiento de datos poderoso.",
      challenge: "Lista de 5 números. Filtra los pares, multiplícalos por 2 y calcula su suma.",
      summary: "🧠 Métodos de Listas:\n\n• .longitud, .primero(), .ultimo()\n• .agregar(), .remover(), .insertar()\n• .filtrar() - seleccionar elementos\n• .mapear() - transformar elementos\n• .reducir() - acumular en un valor\n• .algunos() / .todos() - verificar\n• .buscar() - encontrar índice\n• .ordenar() / .invertir()\n• .unir() - a texto\n• .cortar() - extraer porción",
      validation: {
        requiredCode: [".filtrar(", ".mapear(", ".reducir("],
      },
    },
  ],
};
