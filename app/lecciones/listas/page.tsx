import LessonPage from "@/components/lessons/LessonPage";

export default function ListasLesson() {
  const steps = [
    {
      title: "¿Qué son las listas?",
      content:
        "Las listas (también llamadas arrays) son estructuras que nos permiten almacenar múltiples valores en una sola variable. En lugar de crear una variable por cada elemento, podemos agruparlos todos en una lista. Es como tener una caja con compartimentos numerados: cada compartimento guarda un valor y podemos acceder a él por su posición. Las listas son fundamentales para trabajar con colecciones de datos.",
      code: `variable numeros = [1, 2, 3, 4, 5]
variable frutas = ["manzana", "banana", "naranja"]
variable mixto = [1, "hola", verdadero, 3.14]

mostrar numeros
mostrar frutas
mostrar mixto`,
      explanation:
        "Las listas se crean usando corchetes [] y separando los elementos con comas. Podemos crear listas de cualquier tipo: números, texto, booleanos, o incluso mezclar diferentes tipos en la misma lista (como en `mixto`). Cada elemento en la lista tiene una posición, empezando desde 0. Las listas son dinámicas: pueden crecer o reducirse durante la ejecución del programa. Son perfectas para almacenar colecciones como nombres de estudiantes, calificaciones, productos en un carrito, o cualquier grupo de datos relacionados.",
      challenge:
        "🧩 Desafío rápido: Crea tres listas diferentes: una con tus 5 números favoritos, otra con los nombres de 3 amigos, y una mixta con tu nombre, edad y ciudad. Muéstralas todas.",
    },
    {
      title: "Acceder a Elementos de una Lista",
      content:
        "Cada elemento en una lista tiene un índice (posición) que empieza desde 0. Podemos acceder a cualquier elemento usando corchetes y el número de índice. El primer elemento está en la posición 0, el segundo en la 1, y así sucesivamente. También podemos modificar elementos accediendo a su índice y asignándole un nuevo valor.",
      code: `variable frutas = ["manzana", "banana", "naranja", "uva"]

mostrar "Primera fruta: " + frutas[0]
mostrar "Segunda fruta: " + frutas[1]
mostrar "Tercera fruta: " + frutas[2]

// Modificar un elemento
frutas[1] = "pera"
mostrar "Lista modificada: " + frutas
mostrar "Nueva segunda fruta: " + frutas[1]`,
      explanation:
        "Los índices en las listas empiezan desde 0, no desde 1. Esto puede ser confuso al principio, pero es un estándar en programación. En una lista de 4 elementos, los índices son 0, 1, 2, 3. Para acceder a un elemento usamos la sintaxis `lista[indice]`. Para modificar un elemento, usamos la misma sintaxis pero con asignación: `lista[indice] = nuevoValor`. Es importante no intentar acceder a un índice que no existe (como frutas[10] en una lista de 4 elementos), ya que causará un error. El acceso por índice es muy rápido y eficiente, lo que hace a las listas ideales para almacenar y recuperar datos.",
      challenge:
        "🧩 Desafío rápido: Crea una lista de 5 calificaciones. Muestra la primera y última nota. Luego cambia la tercera nota a 10 y muestra la lista completa.",
    },
    {
      title: "Métodos Básicos de Listas",
      content:
        "Las listas vienen con métodos útiles que nos facilitan trabajar con ellas. Podemos obtener su longitud, acceder al primer o último elemento, y más. Estos métodos nos ahorran tener que recordar índices específicos y hacen el código más legible y expresivo.",
      code: `variable numeros = [10, 20, 30, 40, 50]

mostrar "Longitud: " + numeros.longitud()
mostrar "Primer elemento: " + numeros.primero()
mostrar "Último elemento: " + numeros.ultimo()

variable frutas = ["manzana", "banana"]
mostrar "Cantidad de frutas: " + frutas.longitud()`,
      explanation:
        "Los métodos básicos de listas son:\n\n• `.longitud()` retorna cuántos elementos hay en la lista\n• `.primero()` retorna el primer elemento (equivalente a lista[0])\n• `.ultimo()` retorna el último elemento\n\nEstos métodos hacen el código más legible. En lugar de escribir `numeros[numeros.longitud() - 1]` para obtener el último elemento, simplemente usamos `numeros.ultimo()`. Los paréntesis después del nombre del método son importantes: indican que estamos llamando a un método. Estos métodos no modifican la lista original, solo retornan información sobre ella.",
      challenge:
        "🧩 Desafío rápido: Crea una lista con los días de la semana (al menos 5). Usa los métodos para mostrar cuántos días hay, el primer día y el último día de tu lista.",
    },
    {
      title: "Agregar y Remover Elementos",
      content:
        "Las listas son dinámicas: podemos agregar nuevos elementos o quitar elementos existentes. Esto es muy útil cuando trabajamos con datos que cambian durante la ejecución del programa, como una lista de tareas pendientes, un carrito de compras, o un inventario.",
      code: `variable frutas = ["manzana", "banana"]

mostrar "Lista inicial: " + frutas
mostrar "Cantidad: " + frutas.longitud()

// Agregar elementos
frutas.agregar("naranja")
mostrar "Después de agregar: " + frutas

frutas.agregar("uva", "pera")
mostrar "Agregando varias: " + frutas
mostrar "Nueva cantidad: " + frutas.longitud()

// Remover elemento
variable eliminada = frutas.remover()
mostrar "Elemento eliminado: " + eliminada
mostrar "Lista final: " + frutas`,
      explanation:
        "Los métodos para modificar listas son:\n\n• `.agregar(elemento)` añade un elemento al final de la lista\n• `.agregar(elem1, elem2, ...)` añade múltiples elementos\n• `.remover()` elimina y retorna el último elemento\n\nEstos métodos modifican la lista original. Cuando usamos `.agregar('naranja')`, la lista crece en tamaño. Cuando usamos `.remover()`, la lista se reduce y el método nos devuelve el elemento eliminado (útil si queremos hacer algo con él antes de descartarlo). Es importante entender que `.remover()` elimina solo el último elemento. Más adelante aprenderás métodos para eliminar elementos en posiciones específicas.",
      challenge:
        "🧩 Desafío rápido: Crea una lista vacía `tareas = []`. Agrega 4 tareas diferentes. Muestra cuántas tareas tienes. Luego completa (remueve) 2 tareas y muestra la lista final.",
    },
    {
      title: "Verificar Contenido de Listas",
      content:
        "A menudo necesitamos saber si una lista contiene un elemento específico. El método `.contiene()` nos permite verificar esto sin tener que recorrer manualmente toda la lista. Retorna verdadero si el elemento existe en la lista, o falso si no existe. Esto es muy útil para validaciones y búsquedas.",
      code: `variable frutas = ["manzana", "banana", "naranja", "uva"]

variable tieneBanana = frutas.contiene("banana")
mostrar "¿Tiene banana?: " + tieneBanana

variable tieneFresa = frutas.contiene("fresa")
mostrar "¿Tiene fresa?: " + tieneFresa

si frutas.contiene("manzana") {
    mostrar "¡Sí tenemos manzanas!"
} sino {
    mostrar "No hay manzanas disponibles"
}`,
      explanation:
        "El método `.contiene(elemento)` busca el elemento en toda la lista y retorna un valor booleano (verdadero/falso). Esto es muy útil para:\n\n• Validar si un usuario está en una lista de permitidos\n• Verificar si un producto está en stock\n• Comprobar si una opción es válida\n• Evitar duplicados antes de agregar elementos\n\nEl método hace la búsqueda automáticamente, sin necesidad de escribir un bucle. Simplemente le pasamos el valor que queremos buscar y nos dice si existe o no. Podemos usar el resultado directamente en condicionales, como en el ejemplo donde verificamos si hay manzanas antes de mostrar un mensaje.",
      challenge:
        "🧩 Desafío rápido: Crea una lista de 5 colores. Pide al usuario un color y usa `.contiene()` para verificar si ese color está en tu lista. Muestra un mensaje apropiado según el resultado.",
    },
    {
      title: "Recorrer Listas",
      content:
        "Recorrer una lista significa visitar cada elemento uno por uno para procesarlo. Podemos usar el método `.recorrer()` con una función que se ejecutará para cada elemento. Esto es más elegante que usar un bucle manual y hace el código más expresivo y fácil de leer.",
      code: `variable frutas = ["manzana", "banana", "naranja"]

// Recorrer lista simple
frutas.recorrer(funcion(elemento) {
    mostrar "Fruta: " + elemento
})

mostrar "---"

// Recorrer con índice
variable numeros = [10, 20, 30, 40]
numeros.recorrer(funcion(elemento, indice) {
    mostrar "Posición " + indice + ": " + elemento
})`,
      explanation:
        "El método `.recorrer()` acepta una función que se ejecutará para cada elemento de la lista. Podemos recibir uno o dos parámetros en esa función:\n\n• **Un parámetro** (elemento): Recibe el valor de cada elemento\n• **Dos parámetros** (elemento, indice): Recibe el valor y su posición\n\nEsto es muy poderoso porque nos permite procesar cada elemento sin preocuparnos por manejar el índice manualmente. La función se ejecuta automáticamente para cada elemento en orden. Podemos usar este método para sumar todos los elementos, buscar valores específicos, transformar datos, o mostrar información formateada. Es especialmente útil cuando combinamos listas con funciones para crear código modular y expresivo.",
      challenge:
        "🧩 Desafío rápido: Crea una lista de precios [10, 25, 30, 15, 40]. Usa `.recorrer()` para calcular y mostrar cada precio con IVA (precio * 1.21). Al final, muestra el total.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas que trabajen con listas de datos. Las listas son una de las estructuras de datos más importantes en programación: te permiten organizar, procesar y manipular colecciones de información de forma eficiente. Combina todo lo que has aprendido para crear programas útiles y prácticos.",
      code: `variable estudiantes = ["Ana", "Carlos", "María"]
variable notas = [85, 92, 78]

mostrar "Lista de estudiantes:"
estudiantes.recorrer(funcion(nombre, indice) {
    mostrar nombre + ": " + notas[indice] + " puntos"
})`,
      explanation:
        "En esta práctica libre, experimenta con listas de diferentes formas. Intenta crear listas que representen datos del mundo real, combina listas relacionadas (como estudiantes y sus notas), usa métodos para agregar y quitar elementos dinámicamente, y recorre listas para procesar información. Las listas son especialmente útiles cuando combinas lo que has aprendido: usa bucles para procesarlas, condicionales para filtrar elementos, funciones para encapsular operaciones, y métodos de lista para simplificar tareas comunes. Piensa en las listas como contenedores organizados que facilitan el manejo de múltiples datos relacionados.",
      challenge:
        "🧩 Desafío rápido: Crea un sistema de inventario: una lista de productos y otra de cantidades. Agrega 3 productos, muestra el inventario completo, verifica si tienes un producto específico, y calcula cuántos productos tienes en total.",
      summary:
        "🧠 Recuerda:\n\n• Las listas almacenan múltiples valores en una sola variable.\n• Los índices empiezan desde 0, no desde 1.\n• Usa `.longitud()`, `.primero()` y `.ultimo()` para acceder a información.\n• `.agregar()` añade elementos, `.remover()` quita el último.\n• `.contiene()` verifica si un elemento existe.\n• `.recorrer()` procesa cada elemento con una función.\n• ¡Las listas son esenciales para trabajar con colecciones de datos!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "📋", text: "Lección 8" }}
      title="Listas en"
      titleGradient=" Hispano Lang"
      description="Aprende a trabajar con colecciones de datos usando listas"
      steps={steps}
      prevLessonUrl="/lecciones/funciones"
      prevLessonTitle="Funciones"
      nextLessonUrl="/lecciones/objetos"
      nextLessonTitle="Objetos"
    />
  );
}
