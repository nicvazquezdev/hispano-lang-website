import LessonPage from "@/components/lessons/LessonPage";

export default function ObjetosLesson() {
  const steps = [
    {
      title: "¿Qué son los objetos?",
      content:
        "Los objetos son estructuras que nos permiten agrupar datos relacionados usando nombres descriptivos (propiedades). A diferencia de las listas que usan índices numéricos, los objetos usan claves con nombres. Es como una ficha con campos: en lugar de 'posición 0, 1, 2', tenemos 'nombre, edad, ciudad'. Los objetos son perfectos para representar entidades del mundo real con múltiples características.",
      code: `variable persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

mostrar persona.nombre
mostrar persona.edad
mostrar persona.ciudad`,
      explanation:
        "Los objetos se crean usando llaves {} y definiendo pares clave:valor separados por comas. Cada propiedad tiene un nombre (clave) y un valor. Para acceder a las propiedades usamos la notación de punto: `objeto.propiedad`. Esto es mucho más legible que usar índices: en lugar de recordar que el nombre está en la posición 0, simplemente accedemos a `persona.nombre`. Los objetos son fundamentales para organizar datos complejos de forma estructurada y significativa. Son la base para modelar entidades como usuarios, productos, configuraciones, o cualquier cosa que tenga múltiples atributos relacionados.",
      challenge:
        "🧩 Desafío rápido: Crea un objeto `libro` con propiedades para título, autor y año de publicación. Luego muestra cada propiedad con un mensaje descriptivo.",
    },
    {
      title: "Acceder y Modificar Propiedades",
      content:
        "Las propiedades de un objeto pueden leerse y modificarse en cualquier momento usando la notación de punto. Podemos cambiar valores existentes o agregar nuevas propiedades dinámicamente. Esta flexibilidad hace que los objetos sean muy poderosos para modelar datos que evolucionan durante la ejecución del programa.",
      code: `variable estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Informática"
}

mostrar "Nombre: " + estudiante.nombre
mostrar "Edad: " + estudiante.edad

// Modificar propiedad existente
estudiante.edad = 21
mostrar "Nueva edad: " + estudiante.edad

// Agregar nueva propiedad
estudiante.promedio = 9.5
mostrar "Promedio: " + estudiante.promedio`,
      explanation:
        "Podemos modificar propiedades existentes usando asignación: `objeto.propiedad = nuevoValor`. También podemos agregar nuevas propiedades que no existían cuando creamos el objeto: simplemente asignamos un valor a una propiedad nueva y HispanoLang la crea automáticamente. Esto hace que los objetos sean muy flexibles y dinámicos. En el ejemplo, agregamos la propiedad `promedio` que no existía originalmente. Esta capacidad es útil para extender objetos según las necesidades del programa, como agregar campos opcionales o calcular valores derivados que queremos almacenar junto con los datos originales.",
      challenge:
        "🧩 Desafío rápido: Crea un objeto `coche` con marca y modelo. Luego agrega las propiedades año, color y precio. Muestra todas las propiedades al final.",
    },
    {
      title: "Objetos con Diferentes Tipos de Valores",
      content:
        "Las propiedades de un objeto pueden almacenar cualquier tipo de dato: números, texto, booleanos, listas, e incluso otros objetos. Esta versatilidad nos permite crear estructuras de datos ricas y complejas que modelen fielmente situaciones del mundo real con toda su complejidad.",
      code: `variable producto = {
    nombre: "Laptop",
    precio: 999.99,
    en_stock: verdadero,
    categorias: ["electrónica", "computadoras"],
    cantidad: 5
}

mostrar "Producto: " + producto.nombre
mostrar "Precio: " + producto.precio
mostrar "¿En stock?: " + producto.en_stock
mostrar "Categorías: " + producto.categorias
mostrar "Primera categoría: " + producto.categorias[0]
mostrar "Cantidad disponible: " + producto.cantidad`,
      explanation:
        "En este ejemplo, el objeto `producto` combina diferentes tipos de datos:\n\n• Texto (nombre)\n• Número decimal (precio)\n• Booleano (en_stock)\n• Lista (categorias)\n• Número entero (cantidad)\n\nPodemos mezclar cualquier tipo de dato en las propiedades de un objeto. Cuando una propiedad es una lista, podemos acceder a sus elementos usando índices después del nombre de la propiedad: `producto.categorias[0]`. Esta capacidad de combinar tipos hace que los objetos sean extremadamente versátiles para modelar entidades complejas con múltiples características de diferentes naturalezas.",
      challenge:
        "🧩 Desafío rápido: Crea un objeto `estudiante` con nombre (texto), edad (número), materias (lista de 3 materias), y es_becado (booleano). Muestra toda la información de forma organizada.",
    },
    {
      title: "Objetos Anidados",
      content:
        "Los objetos pueden contener otros objetos como propiedades. Esto nos permite crear estructuras jerárquicas complejas que representen relaciones y agrupaciones de datos. Es como tener fichas dentro de fichas: cada nivel agrupa información relacionada de forma organizada.",
      code: `variable empresa = {
    nombre: "TechCorp",
    empleados: 150,
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid",
        codigo_postal: "28001"
    }
}

mostrar "Empresa: " + empresa.nombre
mostrar "Empleados: " + empresa.empleados
mostrar "Calle: " + empresa.direccion.calle
mostrar "Ciudad: " + empresa.direccion.ciudad
mostrar "CP: " + empresa.direccion.codigo_postal`,
      explanation:
        "Los objetos anidados se acceden usando múltiples puntos: `objeto.subObjeto.propiedad`. En este ejemplo, `direccion` es un objeto completo dentro del objeto `empresa`. Para acceder a la ciudad, usamos `empresa.direccion.ciudad` - primero accedemos a `direccion` y luego a su propiedad `ciudad`. Esta estructura nos permite organizar datos relacionados de forma lógica: toda la información de dirección está agrupada en su propio objeto. Podemos tener múltiples niveles de anidamiento, creando estructuras tan complejas como necesitemos para modelar nuestros datos.",
      challenge:
        "🧩 Desafío rápido: Crea un objeto `persona` con nombre, edad y un objeto anidado `contacto` que tenga email y teléfono. Muestra toda la información accediendo a cada propiedad.",
    },
    {
      title: "Objetos en Listas y Listas en Objetos",
      content:
        "Podemos combinar objetos y listas de formas poderosas: crear listas de objetos o tener listas como propiedades de objetos. Estas combinaciones nos permiten modelar estructuras de datos complejas como bases de datos, sistemas de gestión, o cualquier aplicación que maneje múltiples entidades con características variadas.",
      code: `variable estudiantes = [
    {nombre: "Ana", edad: 20, nota: 95},
    {nombre: "Carlos", edad: 22, nota: 87},
    {nombre: "María", edad: 19, nota: 92}
]

mostrar "Primera estudiante: " + estudiantes[0].nombre
mostrar "Nota de Carlos: " + estudiantes[1].nota

estudiantes.recorrer(funcion(estudiante, indice) {
    mostrar estudiante.nombre + " tiene " + estudiante.nota + " puntos"
})`,
      explanation:
        "Una lista de objetos es extremadamente útil para representar colecciones de entidades similares: estudiantes, productos, usuarios, etc. Cada elemento de la lista es un objeto completo con sus propiedades. Para acceder a propiedades específicas, combinamos índices y notación de punto: `estudiantes[0].nombre` primero accede al estudiante en la posición 0, luego a su propiedad nombre. Podemos recorrer la lista de objetos con `.recorrer()` y procesar cada objeto individualmente. Esta combinación de listas y objetos es fundamental en programación real: casi todas las aplicaciones trabajan con listas de objetos (usuarios, productos, mensajes, etc.).",
      challenge:
        "🧩 Desafío rápido: Crea una lista de 3 productos, cada uno con nombre, precio y stock. Recorre la lista y muestra qué productos tienen stock > 0. Calcula el valor total del inventario.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear estructuras de datos complejas usando objetos. Los objetos son la forma principal de organizar datos en programación moderna. Combina objetos, listas, y todo lo que has aprendido para crear sistemas de información robustos y bien organizados.",
      code: `variable biblioteca = {
    nombre: "Biblioteca Central",
    libros: [
        {titulo: "Don Quijote", autor: "Cervantes"},
        {titulo: "Cien años", autor: "García Márquez"}
    ]
}

mostrar "Biblioteca: " + biblioteca.nombre
mostrar "Libros disponibles: " + biblioteca.libros.longitud()

biblioteca.libros.recorrer(funcion(libro) {
    mostrar libro.titulo + " - " + libro.autor
})`,
      explanation:
        "En esta práctica libre, combina todo lo que has aprendido sobre objetos y listas. Crea estructuras de datos que representen sistemas del mundo real: bibliotecas, tiendas, escuelas, redes sociales, etc. Usa objetos para entidades con múltiples características, listas para colecciones, objetos anidados para relaciones jerárquicas, y funciones para procesar estos datos. La clave está en pensar claramente cómo organizar tu información: qué debe ser un objeto, qué debe ser una lista, y cómo relacionarlos. Los buenos diseños de datos hacen que el código sea más claro, mantenible y fácil de extender.",
      challenge:
        "🧩 Desafío rápido: Crea un objeto `restaurante` con nombre, dirección (objeto anidado con calle y ciudad), y menú (lista de objetos con nombre de plato y precio). Muestra el menú completo con precios.",
      summary:
        "🧠 Recuerda:\n\n• Los objetos usan claves con nombres en lugar de índices numéricos.\n• Accede a propiedades con la notación de punto: `objeto.propiedad`.\n• Puedes modificar y agregar propiedades dinámicamente.\n• Las propiedades pueden ser de cualquier tipo: números, texto, listas, objetos.\n• Los objetos anidados crean estructuras jerárquicas.\n• Las listas de objetos son perfectas para colecciones de entidades.\n• ¡Los objetos son fundamentales para organizar datos complejos!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🗂️", text: "Lección 10" }}
      title="Objetos en"
      titleGradient=" Hispano Lang"
      description="Aprende a organizar datos complejos con objetos"
      steps={steps}
      prevLessonUrl="/lecciones/listas"
      prevLessonTitle="Listas"
      nextLessonUrl="/lecciones/manejo-errores"
      nextLessonTitle="Manejo de Errores"
    />
  );
}
