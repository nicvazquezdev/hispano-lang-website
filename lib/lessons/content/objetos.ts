import { LessonContent } from "../types";

export const objetos: LessonContent = {
  badge: { emoji: "🗂️", text: "Lección 19" },
  title: "Objetos en",
  titleGradient: " HispanoLang",
  description: "Organiza datos con propiedades",
  prev: { url: "/lecciones/listas", title: "Listas" },
  next: { url: "/lecciones/clases", title: "Clases" },
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
      challenge: "Crea un objeto 'libro' con título, autor y año. Muestra el título.",
      validation: {
        requiredCode: ["/libro\\s*=\\s*\\{/", "/titulo|título/", "/autor/", "/\\.titulo|\\.título/"],
      },
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
      challenge: "Crea un objeto 'producto' con nombre y precio. Agrega la propiedad 'cantidad' después.",
      validation: {
        requiredCode: ["/producto\\s*=\\s*\\{/", "/\\.cantidad\\s*=/"],
      },
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
      challenge: "Objeto 'estudiante' con nombre y materias (lista de 3 materias). Muestra la segunda materia.",
      validation: {
        requiredCode: ["/estudiante\\s*=\\s*\\{/", "/materias\\s*:\\s*\\[/", "/\\.materias\\s*\\[\\s*1\\s*\\]/"],
      },
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
      challenge: "Objeto 'persona' con nombre y 'contacto' (objeto con email y telefono). Muestra el email.",
      validation: {
        requiredCode: ["/persona\\s*=\\s*\\{/", "/contacto\\s*:\\s*\\{/", "/email/", "/\\.contacto\\.email/"],
      },
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
      challenge: "Lista de 2 productos con nombre y precio. Recorre y muestra cada producto.",
      validation: {
        requiredCode: ["/\\[\\s*\\{/", "/nombre\\s*:/", "/precio\\s*:/", "/\\.recorrer/"],
      },
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
      challenge: "Objeto 'clase' con nombre y estudiantes (lista de objetos con nombre y nota). Muestra todos los nombres.",
      summary: "🧠 Recuerda:\n\n• Objetos: { clave: valor }\n• Acceso: objeto.propiedad\n• Propiedades pueden ser cualquier tipo\n• Objetos anidados con múltiples puntos\n• Listas de objetos para colecciones",
      validation: {
        requiredCode: ["/clase\\s*=\\s*\\{/", "/estudiantes\\s*:\\s*\\[/", "/\\.recorrer/"],
      },
    },
  ],
};
