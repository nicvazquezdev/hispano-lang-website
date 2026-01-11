import { LessonContent } from "../types";

export const objetos: LessonContent = {
  badge: { emoji: "🗂️", text: "Lección 12" },
  title: "Objetos en",
  titleGradient: " HispanoLang",
  description: "Organiza datos con propiedades",
  prev: { url: "/lecciones/listas", title: "Listas" },
  next: { url: "/lecciones/manejo-errores", title: "Manejo de Errores" },
  steps: [
    {
      title: "¿Qué son los objetos?",
      content: "Los objetos agrupan datos relacionados usando nombres descriptivos.",
      code: `variable persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

mostrar persona.nombre
mostrar persona.edad`,
      explanation: "Usamos clave: valor en lugar de índices numéricos.",
      challenge: "Crea un objeto 'libro' con título, autor y año. Muestra cada propiedad.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Modificar Propiedades",
      content: "Podemos cambiar o agregar propiedades dinámicamente.",
      code: `variable estudiante = {
    nombre: "Ana",
    edad: 20
}

estudiante.edad = 21
estudiante.promedio = 9.5

mostrar estudiante.edad
mostrar estudiante.promedio`,
      explanation: "Asignamos nuevos valores con objeto.propiedad = valor.",
      challenge: "Crea un objeto 'coche'. Agrega propiedades año, color y precio después.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Objetos con Listas",
      content: "Las propiedades pueden ser listas u otros tipos.",
      code: `variable producto = {
    nombre: "Laptop",
    precio: 999.99,
    categorias: ["electrónica", "computadoras"]
}

mostrar producto.categorias[0]`,
      explanation: "Accedemos a elementos de la lista dentro del objeto.",
      challenge: "Objeto 'estudiante' con nombre, edad, materias (lista), es_becado (booleano).",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Objetos Anidados",
      content: "Un objeto puede contener otros objetos.",
      code: `variable empresa = {
    nombre: "TechCorp",
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid"
    }
}

mostrar empresa.direccion.ciudad`,
      explanation: "Usamos múltiples puntos para acceder: objeto.subObjeto.propiedad.",
      challenge: "Objeto 'persona' con nombre, edad, y 'contacto' (objeto con email y teléfono).",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Listas de Objetos",
      content: "Patrón muy común: lista de entidades similares.",
      code: `variable estudiantes = [
    {nombre: "Ana", nota: 95},
    {nombre: "Carlos", nota: 87}
]

estudiantes.recorrer(funcion(est) {
    mostrar est.nombre + ": " + est.nota
})`,
      explanation: "Combinamos índices y notación de punto.",
      challenge: "Lista de 3 productos con nombre, precio, stock. Recorre y muestra los que tienen stock > 0.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "¡Práctica libre!",
      content: "Crea estructuras de datos complejas.",
      code: `variable biblioteca = {
    nombre: "Biblioteca Central",
    libros: [
        {titulo: "Don Quijote", autor: "Cervantes"}
    ]
}

biblioteca.libros.recorrer(funcion(libro) {
    mostrar libro.titulo
})`,
      explanation: "Objetos + listas = estructuras poderosas.",
      challenge: "Objeto 'restaurante' con nombre, dirección (anidado), menú (lista de platos con precio).",
      summary: "🧠 Recuerda:\n\n• Objetos: { clave: valor }\n• Acceso: objeto.propiedad\n• Propiedades pueden ser cualquier tipo\n• Objetos anidados con múltiples puntos\n• Listas de objetos para colecciones",
      validation: { expectedOutputs: [] },
    },
  ],
};
