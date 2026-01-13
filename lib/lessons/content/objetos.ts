import { LessonContent } from "../types";

export const objetos: LessonContent = {
  badge: { emoji: "🗂️", text: "Lección 17" },
  title: "Objetos en",
  titleGradient: " HispanoLang",
  description: "Aprende a crear perfiles y datos estructurados",
  prev: { url: "/lecciones/listas", title: "Listas" },
  next: { url: "/lecciones/bucles-avanzados", title: "Bucles Avanzados" },
  steps: [
    {
      title: "Tu Primer Perfil Digital",
      content:
        "Tu perfil de Instagram tiene campos: nombre, usuario, bio, seguidores... No es una lista aleatoria, cada dato tiene un NOMBRE específico.\n\nLos objetos agrupan datos relacionados usando nombres (claves) que los identifican.",
      code: `variable perfil = {
    nombre: "Ana García",
    usuario: "@ana",
    seguidores: 1500,
    verificado: verdadero
}

mostrar "Nombre: " + perfil.nombre
mostrar "Usuario: " + perfil.usuario
mostrar "Seguidores: " + texto(perfil.seguidores)
mostrar "Verificado: " + texto(perfil.verificado)`,
      explanation:
        "**Crear objetos:**\n• Usa llaves: `{}`\n• Pares clave:valor separados por comas\n• Sintaxis: `{ clave1: valor1, clave2: valor2 }`\n\n**Acceder con punto:**\n• `perfil.nombre` → 'Ana García'\n• `perfil.seguidores` → 1500\n\n**Como tu perfil:**\n```\nNombre: Ana García\nUsuario: @ana\nSeguidores: 1500\nVerificado: ✓\n```\n\nCada campo tiene nombre claro, no posición numérica.",
      challenge:
        "Crea tu perfil de producto:\n• Variable producto = objeto con: nombre, precio, stock\n• Ejemplo: nombre: 'Mouse', precio: 150, stock: 25\n• Muestra el nombre del producto\n• Muestra el precio",
      validation: {
        requiredCode: [
          "/variable\\s+producto\\s*=\\s*\\{/",
          "/nombre\\s*:/",
          "/precio\\s*:/",
          "/\\.nombre/",
          "/\\.precio/",
        ],
        expectedOutputs: ["/Mouse|mouse|Teclado|teclado/", "/150|200|300/"],
      },
    },
    {
      title: "Objetos vs Listas: La Diferencia Clave",
      content:
        "¿Cuándo usar lista y cuándo objeto? Lista = colección ordenada con índices numéricos. Objeto = datos con nombres descriptivos.",
      code: `mostrar "=== LISTA (ÍNDICES NUMÉRICOS) ==="
variable seguidores = ["@pedro", "@luis", "@maria"]
mostrar "Primero: " + seguidores[0]
mostrar "Segundo: " + seguidores[1]

mostrar ""
mostrar "=== OBJETO (NOMBRES DESCRIPTIVOS) ==="
variable perfil = {
    nombre: "Ana",
    usuario: "@ana",
    seguidores: 1500
}

mostrar "Nombre: " + perfil.nombre
mostrar "Usuario: " + perfil.usuario
mostrar "Seguidores: " + texto(perfil.seguidores)`,
      explanation:
        "**USA LISTA cuando:**\n✅ Colección de elementos similares\n✅ El orden importa\n✅ Acceso por posición\n✅ Ejemplos: seguidores, posts, comentarios\n\n**USA OBJETO cuando:**\n✅ Datos con nombres específicos\n✅ Representar una entidad\n✅ Acceso por nombre de propiedad\n✅ Ejemplos: perfil, producto, configuración\n\n**Comparación:**\n```\nLista: ['@ana', '@pedro', '@luis']\nAcceso: lista[0], lista[1]\n\nObjeto: { nombre: 'Ana', usuario: '@ana' }\nAcceso: objeto.nombre, objeto.usuario\n```",
      challenge:
        "Crea ambos:\n• Lista 'colores' con 3 colores: ['rojo', 'azul', 'verde']\n• Objeto 'coche' con marca, modelo, año\n• Muestra el primer color (lista[0])\n• Muestra la marca del coche (objeto.marca)",
      validation: {
        requiredCode: [
          "/variable\\s+colores\\s*=\\s*\\[/",
          "/variable\\s+coche\\s*=\\s*\\{/",
          "/colores\\[0\\]/",
          "/\\.marca/",
        ],
        expectedOutputs: ["/rojo|azul|verde/", "/Toyota|Ford|Honda|marca/i"],
      },
    },
    {
      title: "Modificar tu Perfil: Actualizar Datos",
      content:
        "Como cuando editas tu bio o cambias tu foto. Puedes modificar propiedades existentes o agregar nuevas.",
      code: `variable perfil = {
    nombre: "Carlos",
    usuario: "@carlos",
    seguidores: 500
}

mostrar "Original: " + texto(perfil.seguidores)

perfil.seguidores = 600
mostrar "Después: " + texto(perfil.seguidores)

perfil.bio = "Fotógrafo"
perfil.verificado = verdadero

mostrar "Bio: " + perfil.bio
mostrar "Verificado: " + texto(perfil.verificado)`,
      explanation:
        "**Modificar existente:**\n• `objeto.propiedad = nuevoValor`\n• `perfil.seguidores = 600`\n\n**Agregar nueva:**\n• `objeto.nuevaProp = valor`\n• `perfil.bio = 'Fotógrafo'`\n\n**Dinámico:**\n• Los objetos pueden crecer\n• Agrega propiedades cuando quieras\n\n**Como editar perfil:**\n```\nOriginal: { nombre: 'Carlos', seguidores: 500 }\nAgregar bio: { nombre: 'Carlos', seguidores: 500, bio: 'Fotógrafo' }\n```",
      challenge:
        "Crea objeto producto:\n• nombre: 'Teclado', precio: 300, stock: 10\n• Cambia el stock a 15\n• Agrega propiedad 'categoria' con valor 'perifericos'\n• Muestra el stock y la categoría",
      validation: {
        requiredCode: [
          "/variable\\s+producto\\s*=\\s*\\{/",
          "/\\.stock\\s*=\\s*15/",
          "/\\.categoria\\s*=/",
        ],
        expectedOutputs: ["/15/", "/perifericos|Perifericos/i"],
      },
    },
    {
      title: "Objetos con Listas: Propiedades Complejas",
      content:
        "Tu perfil tiene una lista de posts, una lista de fotos... Los objetos pueden tener listas como propiedades.",
      code: `variable perfil = {
    nombre: "María",
    usuario: "@maria",
    posts: ["Foto1", "Foto2", "Foto3"],
    seguidores: 2500
}

mostrar "Usuario: " + perfil.usuario
mostrar "Posts: " + texto(perfil.posts)
mostrar "Primer post: " + perfil.posts[0]
mostrar "Total posts: " + texto(perfil.posts.longitud())

perfil.posts.agregar("Foto4")
mostrar "Después de agregar: " + texto(perfil.posts)`,
      explanation:
        "**Objeto con lista:**\n• Propiedad puede ser lista\n• `perfil.posts` es una lista completa\n• Acceso combinado: `perfil.posts[0]`\n• Métodos de lista: `perfil.posts.agregar()`\n\n**Sintaxis:**\n```\nvariable perfil = {\n    nombre: 'Ana',\n    posts: ['Foto1', 'Foto2']\n}\n```\n\n**Acceso:**\n• `perfil.posts` → lista completa\n• `perfil.posts[0]` → primer elemento\n• `perfil.posts.longitud()` → cuántos posts",
      challenge:
        "Crea objeto estudiante:\n• nombre: 'Pedro'\n• materias: ['Matemáticas', 'Física', 'Química']\n• Muestra la segunda materia (índice 1)\n• Agrega 'Historia' a las materias\n• Muestra cuántas materias tiene ahora",
      validation: {
        requiredCode: [
          "/variable\\s+estudiante\\s*=\\s*\\{/",
          "/materias\\s*:\\s*\\[/",
          "/\\.materias\\[1\\]/",
          "/\\.materias\\.agregar/",
          "/\\.materias\\.longitud/",
        ],
        expectedOutputs: ["/Física|fisica/i", "/4/"],
      },
    },
    {
      title: "Objetos Anidados: Perfil con Dirección",
      content:
        "Tu perfil tiene una sección 'Dirección' con calle, ciudad, país... Un objeto puede contener otros objetos.",
      code: `variable perfil = {
    nombre: "Luis",
    usuario: "@luis",
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid",
        pais: "España"
    }
}

mostrar "Nombre: " + perfil.nombre
mostrar "Ciudad: " + perfil.direccion.ciudad
mostrar "País: " + perfil.direccion.pais

perfil.direccion.codigoPostal = "28001"
mostrar "CP: " + perfil.direccion.codigoPostal`,
      explanation:
        "**Objetos anidados:**\n• Objeto dentro de objeto\n• Acceso multinivel: `objeto.sub.propiedad`\n• `perfil.direccion.ciudad` → 'Madrid'\n\n**Sintaxis:**\n```\nvariable perfil = {\n    nombre: 'Ana',\n    direccion: {\n        ciudad: 'Madrid',\n        pais: 'España'\n    }\n}\n```\n\n**Como secciones en perfil:**\n• Perfil principal: nombre, usuario\n• Dirección: calle, ciudad, país\n• Contacto: email, teléfono",
      challenge:
        "Crea objeto producto con especificaciones anidadas:\n• nombre: 'Laptop'\n• precio: 50000\n• specs: objeto con { procesador: 'Intel i7', ram: '16GB' }\n• Muestra el procesador (producto.specs.procesador)\n• Muestra la RAM",
      validation: {
        requiredCode: [
          "/variable\\s+producto\\s*=\\s*\\{/",
          "/specs\\s*:\\s*\\{/",
          "/procesador\\s*:/",
          "/ram\\s*:/",
          "/\\.specs\\.procesador/",
        ],
        expectedOutputs: ["/Intel|i7/i", "/16GB|16/"],
      },
    },
    {
      title: "Lista de Objetos: Red Social Completa",
      content:
        "El patrón más poderoso: una lista de objetos. Como tu feed de Instagram: cada post es un objeto.",
      code: `variable usuarios = [
    {
        nombre: "Ana",
        usuario: "@ana",
        seguidores: 2500
    },
    {
        nombre: "Pedro",
        usuario: "@pedro",
        seguidores: 800
    },
    {
        nombre: "Luis",
        usuario: "@luis",
        seguidores: 3200
    }
]

mostrar "=== TODOS LOS USUARIOS ==="
usuarios.recorrer(funcion(user, i) {
    mostrar (i + 1).aTexto() + ". " + user.nombre + " (" + user.usuario + ")"
    mostrar "   Seguidores: " + texto(user.seguidores)
})

mostrar ""
mostrar "Primero: " + usuarios[0].nombre
mostrar "Segundo: " + usuarios[1].nombre`,
      explanation:
        "**Lista de objetos:**\n• Cada elemento es objeto completo\n• Sintaxis: `[ {obj1}, {obj2} ]`\n• Acceso: `lista[0].propiedad`\n\n**Recorrer:**\n```\nusuarios.recorrer(funcion(user) {\n    mostrar user.nombre\n})\n```\n\n**Como tu feed:**\n• Cada post es objeto\n• Feed es lista de posts\n• Recorres mostrando cada uno\n\n**Patrón fundamental:**\nEste patrón está en TODA aplicación web",
      challenge:
        "Crea lista de productos:\n• 3 productos, cada uno con: nombre, precio\n• Ejemplos: Mouse $150, Teclado $300, Monitor $2000\n• Usa .recorrer() para mostrar cada producto\n• Formato: 'Producto: nombre - Precio: $precio'",
      validation: {
        requiredCode: [
          "/\\[\\s*\\{/",
          "/nombre\\s*:/",
          "/precio\\s*:/",
          "/\\.recorrer\\s*\\(/",
        ],
        expectedOutputs: ["/Mouse|Teclado|Monitor/", "/150|300|2000/"],
      },
    },
    {
      title: "Filtrar Objetos: Encontrar Usuarios",
      content:
        "Como buscar usuarios verificados o con más de 1000 seguidores. Usa .filtrar() con objetos.",
      code: `variable usuarios = [
    { nombre: "Ana", seguidores: 2500, verificado: verdadero },
    { nombre: "Pedro", seguidores: 800, verificado: falso },
    { nombre: "Luis", seguidores: 3200, verificado: verdadero }
]

mostrar "=== VERIFICADOS ==="
variable verificados = usuarios.filtrar(funcion(u) {
    retornar u.verificado
})

verificados.recorrer(funcion(u) {
    mostrar u.nombre + ": " + texto(u.seguidores) + " seguidores"
})

mostrar ""
mostrar "=== INFLUENCERS (>1000) ==="
variable influencers = usuarios.filtrar(funcion(u) {
    retornar u.seguidores > 1000
})

mostrar "Total influencers: " + texto(influencers.longitud())`,
      explanation:
        "**Filtrar objetos:**\n• `.filtrar()` funciona igual\n• Condición sobre propiedades\n• Retorna nueva lista de objetos\n\n**Patrón:**\n```\nvariable filtrados = lista.filtrar(funcion(obj) {\n    retornar obj.propiedad > 100\n})\n```\n\n**Casos de uso:**\n✅ Usuarios verificados\n✅ Productos en stock\n✅ Posts populares\n✅ Tareas pendientes",
      challenge:
        "Lista de productos:\n• Producto 1: nombre 'Mouse', precio 150\n• Producto 2: nombre 'Teclado', precio 300\n• Producto 3: nombre 'Monitor', precio 2000\n• Filtra productos con precio menor a 500\n• Muestra cuántos productos baratos hay\n• Debe ser 2",
      validation: {
        requiredCode: [
          "/\\.filtrar\\s*\\(/",
          "/retornar/",
          "/\\.precio/",
          "/< *500|<= *499/",
          "/\\.longitud\\s*\\(/",
        ],
        expectedOutputs: ["/2/"],
      },
    },
    {
      title: "Mapear Objetos: Extraer Propiedades",
      content:
        "¿Solo quieres los nombres de todos los usuarios? Usa .mapear() para extraer una propiedad específica.",
      code: `variable usuarios = [
    { nombre: "Ana", usuario: "@ana", seguidores: 2500 },
    { nombre: "Pedro", usuario: "@pedro", seguidores: 800 },
    { nombre: "Luis", usuario: "@luis", seguidores: 3200 }
]

mostrar "=== SOLO NOMBRES ==="
variable nombres = usuarios.mapear(funcion(u) {
    retornar u.nombre
})
mostrar nombres.unir(", ")

mostrar ""
mostrar "=== SOLO USUARIOS ==="
variable usernames = usuarios.mapear(funcion(u) {
    retornar u.usuario
})
mostrar usernames.unir(", ")

mostrar ""
mostrar "=== TRANSFORMAR ==="
variable conDescuento = usuarios.mapear(funcion(u) {
    retornar {
        nombre: u.nombre,
        seguidoresOriginales: u.seguidores,
        meta: u.seguidores * 2
    }
})

conDescuento.recorrer(funcion(u) {
    mostrar u.nombre + ": " + texto(u.seguidoresOriginales) + " → meta: " + texto(u.meta)
})`,
      explanation:
        "**Mapear objetos:**\n\n**Extraer propiedad:**\n```\nvariable nombres = usuarios.mapear(funcion(u) {\n    retornar u.nombre\n})\n→ ['Ana', 'Pedro', 'Luis']\n```\n\n**Transformar objetos:**\n```\nvariable nuevos = usuarios.mapear(funcion(u) {\n    retornar { nombre: u.nombre, doble: u.valor * 2 }\n})\n```\n\n**Casos de uso:**\n✅ Extraer emails\n✅ Lista de nombres\n✅ Aplicar descuentos\n✅ Calcular derivados",
      challenge:
        "Lista de productos con nombre y precio:\n• Mouse: 150, Teclado: 300, Monitor: 2000\n• Usa .mapear() para extraer solo los precios\n• Guarda en variable 'precios'\n• Usa .reducir() para sumar todos los precios\n• Muestra el total (debe ser 2450)",
      validation: {
        requiredCode: [
          "/\\.mapear\\s*\\(/",
          "/retornar.*\\.precio/",
          "/\\.reducir\\s*\\(/",
        ],
        expectedOutputs: ["/2450/"],
      },
    },
    {
      title: "Funciones con Objetos: Pasar Perfiles",
      content:
        "Como compartir un perfil completo. Los objetos se pasan como argumentos a funciones.",
      code: `funcion mostrarPerfil(usuario) {
    mostrar "=== PERFIL ==="
    mostrar "Nombre: " + usuario.nombre
    mostrar "Usuario: " + usuario.usuario
    mostrar "Seguidores: " + texto(usuario.seguidores)
}

variable ana = {
    nombre: "Ana García",
    usuario: "@ana",
    seguidores: 2500
}

mostrarPerfil(ana)

mostrar ""
funcion agregarSeguidores(usuario, cantidad) {
    usuario.seguidores = usuario.seguidores + cantidad
    mostrar usuario.nombre + " ahora: " + texto(usuario.seguidores)
}

agregarSeguidores(ana, 100)
agregarSeguidores(ana, 50)

mostrar ""
funcion crearPerfil(nombre, usuario) {
    retornar {
        nombre: nombre,
        usuario: usuario,
        seguidores: 0,
        verificado: falso
    }
}

variable nuevo = crearPerfil("Pedro", "@pedro")
mostrarPerfil(nuevo)`,
      explanation:
        "**Pasar objetos:**\n```\nfuncion mostrarPerfil(usuario) {\n    mostrar usuario.nombre\n}\n```\n\n**Modificar objeto:**\n• Los objetos se pasan por referencia\n• Cambios afectan el original\n\n**Retornar objeto:**\n```\nfuncion crear(...) {\n    retornar { nombre: ..., edad: ... }\n}\n```\n\n**Ventajas:**\n✅ Pasar muchos datos como uno\n✅ Más limpio que 10 parámetros\n✅ Fácil de extender",
      challenge:
        "Crea función aplicarDescuento:\n• Recibe objeto producto (con nombre, precio)\n• Recibe porcentaje de descuento\n• Muestra 'Producto: [nombre] - Precio original: $[precio]'\n• Calcula precio con descuento\n• Muestra 'Precio con descuento: $[nuevo]'\n• Prueba con producto Mouse $150 y descuento 20%\n• Debe mostrar $120",
      validation: {
        requiredCode: [
          "/funcion\\s+aplicarDescuento/",
          "/\\.nombre/",
          "/\\.precio/",
          "/20|0\\.2|0\\.8/",
        ],
        expectedOutputs: ["/150/", "/120/"],
      },
    },
    {
      title: "Sistema Completo: Inventario de Productos",
      content:
        "Combina todo: lista de objetos, filtrar, mapear, reducir. Un sistema de inventario real.",
      code: `variable productos = [
    { nombre: "Mouse", precio: 150, stock: 25, categoria: "perifericos" },
    { nombre: "Teclado", precio: 300, stock: 15, categoria: "perifericos" },
    { nombre: "Monitor", precio: 2000, stock: 0, categoria: "pantallas" },
    { nombre: "WebCam", precio: 500, stock: 12, categoria: "perifericos" }
]

mostrar "=== INVENTARIO COMPLETO ==="
productos.recorrer(funcion(p, i) {
    mostrar (i + 1).aTexto() + ". " + p.nombre + ": $" + texto(p.precio) + " (Stock: " + texto(p.stock) + ")"
})

mostrar ""
mostrar "=== DISPONIBLES ==="
variable disponibles = productos.filtrar(funcion(p) {
    retornar p.stock > 0
})
mostrar "Productos en stock: " + texto(disponibles.longitud())

mostrar ""
mostrar "=== SIN STOCK ==="
variable sinStock = productos.filtrar(funcion(p) {
    retornar p.stock == 0
})

sinStock.recorrer(funcion(p) {
    mostrar "⚠️ " + p.nombre + " - AGOTADO"
})

mostrar ""
mostrar "=== VALOR TOTAL ==="
variable valorTotal = productos.reducir(funcion(acc, p) {
    retornar acc + (p.precio * p.stock)
}, 0)
mostrar "Valor inventario: $" + texto(valorTotal)

mostrar ""
mostrar "=== PERIFÉRICOS ==="
variable perifericos = productos.filtrar(funcion(p) {
    retornar p.categoria == "perifericos"
})
mostrar "Total periféricos: " + texto(perifericos.longitud())`,
      explanation:
        "**Sistema completo usa:**\n\n✅ Lista de objetos\n✅ .recorrer() para mostrar\n✅ .filtrar() para seleccionar\n✅ .reducir() para totales\n✅ .longitud() para contar\n\n**Patrones aplicados:**\n• Inventario de productos\n• Filtrar por stock\n• Filtrar por categoría\n• Calcular valor total\n• Alertas de stock\n\nEste patrón está en Amazon, Mercado Libre, etc.",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas los objetos:\n\n**Crear:**\n• `{ clave: valor, clave2: valor2 }`\n• Datos con nombres descriptivos\n\n**Acceder:**\n• `objeto.propiedad` - Leer\n• `objeto.prop = valor` - Modificar\n• `objeto.nueva = valor` - Agregar\n\n**Objetos vs Listas:**\n💡 Objeto: datos con nombres (perfil, producto)\n💡 Lista: colección ordenada (seguidores, posts)\n💡 Lista de objetos: múltiples entidades (usuarios)\n\n**Combinaciones:**\n✅ Objeto con lista: perfil.posts\n✅ Objeto anidado: perfil.direccion.ciudad\n✅ Lista de objetos: usuarios[0].nombre\n\n**Métodos de lista:**\n• .filtrar() - Seleccionar objetos\n• .mapear() - Extraer o transformar\n• .reducir() - Calcular totales\n• .recorrer() - Procesar cada uno\n\n**Funciones:**\n✅ Pasar objetos completos\n✅ Retornar objetos nuevos\n✅ Modificar propiedades\n\n**Casos de uso:**\n🎯 Perfil de usuario\n🎯 Producto en tienda\n🎯 Post en red social\n🎯 Contacto en agenda\n\n¡Los objetos son fundamentales en toda app!",
      challenge:
        "Sistema de usuarios completo:\n• Lista con 3 usuarios: cada uno con nombre, edad, rol ('admin' o 'usuario')\n• Filtra solo los admins\n• Muestra cuántos admins hay\n• Mapea para extraer solo los nombres de admins\n• Muestra los nombres unidos con comas",
      validation: {
        requiredCode: [
          "/\\[\\s*\\{/",
          "/nombre\\s*:/",
          "/edad\\s*:/",
          "/rol\\s*:/",
          "/\\.filtrar\\s*\\(/",
          "/\\.mapear\\s*\\(/",
          "/\\.unir\\s*\\(/",
        ],
        expectedOutputs: ["/admin/i"],
      },
    },
  ],
};
