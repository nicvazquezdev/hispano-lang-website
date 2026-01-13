import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "🔢", text: "Lección 4" },
  title: "Tipos de Datos en",
  titleGradient: " HispanoLang",
  description:
    "Aprende los tipos de datos como si estuvieras llenando un formulario",
  prev: { url: "/lecciones/comentarios", title: "Comentarios" },
  next: { url: "/lecciones/metodos-strings", title: "Métodos de Strings" },
  steps: [
    {
      title: "Tipos de Datos: Como un Formulario",
      content:
        "Cuando te registras en Netflix o Instagram, el formulario pide diferentes tipos de información:\n\n• Nombre: texto\n• Edad: número\n• Acepto términos: sí o no\n\nEn programación, estos son los tipos de datos.",
      code: `variable nombreUsuario = "maria_dev"
variable edad = 28
variable aceptoTerminos = verdadero

mostrar "Usuario: " + nombreUsuario
mostrar "Edad: " + edad
mostrar "Acepto términos: " + aceptoTerminos`,
      explanation:
        'Hay tres tipos principales:\n\n1. **Texto (string)**: entre comillas → "maria_dev"\n2. **Número**: sin comillas → 28\n3. **Booleano**: verdadero o falso → verdadero\n\nCada tipo se escribe diferente y sirve para cosas diferentes.',
      challenge:
        "Crea tres variables como si fuera un formulario de registro:\n• `nombre` con tu nombre (entre comillas)\n• `edadActual` con tu edad (sin comillas)\n• `suscritoNewsletter` con verdadero o falso\nMuestra las tres variables.",
      validation: {
        requiredCode: [
          "/nombre.*=/",
          "/edadActual.*=.*\\d/",
          "/suscritoNewsletter.*(verdadero|falso)/",
          "/mostrar/",
        ],
      },
    },
    {
      title: "Texto: Palabras y Frases",
      content:
        "El texto se usa para nombres, emails, direcciones, mensajes. Todo lo que escribirías con letras en un formulario.\n\nEl texto SIEMPRE va entre comillas.",
      code: `variable nombre = "Juan Pérez"
variable email = "juan@email.com"
variable ciudad = "Buenos Aires"

mostrar nombre
mostrar email
mostrar ciudad`,
      explanation:
        'Las comillas le dicen al programa: "esto es texto, no código".\n\nPuedes usar comillas dobles " " o simples \' \', pero generalmente se usan las dobles.\n\nRecuerda: texto = entre comillas. Siempre.',
      challenge:
        'Crea un formulario de dirección con tres variables:\n• `calle` con el nombre de una calle (entre comillas)\n• `numeroVivienda` con un número como texto "1234" (entre comillas)\n• `codigoPostal` con un código como texto "C1414" (entre comillas)\nMuestra las tres.',
      validation: {
        requiredCode: [
          "/calle.*=.*[\"']/",
          "/numeroVivienda.*=.*[\"']/",
          "/codigoPostal.*=.*[\"']/",
          "/mostrar/",
        ],
      },
    },
    {
      title: "Uniendo Texto con +",
      content:
        "Puedes unir varios pedazos de texto usando el símbolo +. Es como armar tu nombre completo juntando nombre y apellido.",
      code: `variable nombre = "María"
variable apellido = "González"

variable nombreCompleto = nombre + " " + apellido
mostrar nombreCompleto

variable calle = "Av. Corrientes"
variable numero = "1234"
variable direccion = calle + " " + numero
mostrar direccion`,
      explanation:
        'El símbolo + une (concatena) texto.\n\nMUY IMPORTANTE: no olvides los espacios. Si haces nombre + apellido obtienes "MaríaGonzález" sin espacio.\n\nPara agregar espacio: nombre + " " + apellido',
      challenge:
        'Crea variables para `nombre`, `apellido`, y `edad` (número). Luego crea una variable `presentacion` que una todo en una frase como: "Hola, soy María González y tengo 28 años". Muéstrala.',
      validation: {
        requiredCode: [
          "/nombre.*=/",
          "/apellido.*=/",
          "/edad.*=.*\\d/",
          "/presentacion.*=.*\\+.*\\+/",
          "/mostrar.*presentacion/",
        ],
      },
    },
    {
      title: "Números: Para Contar y Calcular",
      content:
        "Los números se usan para edad, precio, cantidad, teléfono. Cualquier cosa que cuentes o con la que hagas cálculos.\n\nLos números NO llevan comillas.",
      code: `variable edad = 25
variable precio = 999
variable cantidad = 3

mostrar "Edad: " + edad
mostrar "Precio: $" + precio

variable total = precio * cantidad
mostrar "Total: $" + total`,
      explanation:
        'Los números sin comillas permiten hacer matemática:\n• Sumar: +\n• Restar: -\n• Multiplicar: *\n• Dividir: /\n\nSi un número está entre comillas ("25"), se comporta como texto, no como número.',
      challenge:
        "Simula un carrito de compras:\n• `precioUnitario` = 150\n• `cantidad` = 4\n• `descuento` = 50\nCalcula el total (precio × cantidad - descuento) y muéstralo.",
      validation: {
        requiredCode: [
          "/precioUnitario.*=.*150/",
          "/cantidad.*=.*4/",
          "/descuento.*=.*50/",
          "/\\*/",
          "/mostrar/",
        ],
        expectedOutputs: ["/550/"],
      },
    },
    {
      title: "Booleanos: Verdadero o Falso",
      content:
        "Los booleanos son como los checkbox en un formulario: están marcados o no marcados.\n\nSolo tienen dos valores posibles: verdadero o falso.",
      code: `variable aceptoTerminos = verdadero
variable recibirOfertas = falso
variable esMayorDeEdad = verdadero

mostrar "Acepto términos: " + aceptoTerminos
mostrar "Recibir ofertas: " + recibirOfertas
mostrar "Es mayor de edad: " + esMayorDeEdad`,
      explanation:
        "Los booleanos NO llevan comillas.\n\nSe usan para estados de sí/no:\n• ¿Acepto los términos? → verdadero/falso\n• ¿Cuenta verificada? → verdadero/falso\n• ¿Recibir notificaciones? → verdadero/falso\n\nEn HispanoLang se escriben en español: verdadero y falso.",
      challenge:
        "Crea un formulario de preferencias con:\n• `notificacionesEmail` = verdadero\n• `notificacionesSMS` = falso\n• `perfilPublico` = verdadero\nMuestra las tres configuraciones.",
      validation: {
        requiredCode: [
          "/notificacionesEmail.*verdadero/",
          "/notificacionesSMS.*falso/",
          "/perfilPublico.*verdadero/",
          "/mostrar/",
        ],
        expectedOutputs: ["/verdadero/", "/falso/"],
      },
    },
    {
      title: "Valores Especiales: nulo",
      content:
        "A veces un campo en el formulario es opcional (como teléfono secundario). Puede estar vacío a propósito.\n\nPara eso existe `nulo`: representa un campo que intencionalmente está vacío.",
      code: `variable nombreUsuario = "juan_dev"
variable email = "juan@email.com"
variable telefonoOpcional = nulo
variable direccionSecundaria = nulo

mostrar "Usuario: " + nombreUsuario
mostrar "Email: " + email
mostrar "Teléfono opcional: " + telefonoOpcional
mostrar "Dirección secundaria: " + direccionSecundaria`,
      explanation:
        '`nulo` significa: este campo existe pero está vacío a propósito.\n\n`nulo` NO lleva comillas.\n\n`nulo` es diferente de:\n• 0 (el número cero)\n• "" (texto vacío)\n• falso (booleano)\n\nUsa `nulo` para campos opcionales que el usuario dejó en blanco.',
      challenge:
        "Crea un perfil con campos opcionales:\n• `nombre` = tu nombre (texto)\n• `apellido` = tu apellido (texto)\n• `nombreMedio` = nulo (campo opcional vacío)\n• `apodo` = nulo (campo opcional vacío)\nMuestra todo el perfil.",
      validation: {
        requiredCode: [
          "/nombre.*=.*[\"']/",
          "/apellido.*=.*[\"']/",
          "/nombreMedio.*nulo/",
          "/apodo.*nulo/",
          "/mostrar/",
        ],
        expectedOutputs: ["/nulo/"],
      },
    },
    {
      title: "Formulario Completo",
      content:
        "Ahora combina todos los tipos de datos para crear un formulario de registro completo.",
      code: `variable nombreUsuario = "ana_dev"
variable nombre = "Ana"
variable apellido = "García"
variable edad = 28
variable email = "ana@email.com"
variable saldoCuenta = 1500.75
variable cuentaPremium = verdadero
variable telefonoSecundario = nulo

mostrar "=== PERFIL DE USUARIO ==="
mostrar "Usuario: " + nombreUsuario
mostrar "Nombre completo: " + nombre + " " + apellido
mostrar "Edad: " + edad
mostrar "Email: " + email
mostrar "Saldo: $" + saldoCuenta
mostrar "Premium: " + cuentaPremium
mostrar "Teléfono secundario: " + telefonoSecundario`,
      explanation:
        "Un formulario completo usa todos los tipos:\n\n• **Texto**: nombres, emails, direcciones\n• **Número**: edad, precio, saldo\n• **Booleano**: checkbox, estados sí/no\n• **nulo**: campos opcionales vacíos\n\nRecuerda: texto entre comillas, números sin comillas, booleanos verdadero/falso, nulo para vacío.",
      challenge:
        "Crea tu propio formulario de registro completo con:\n• `usuario` (texto), `contrasena` (texto)\n• `edad` (número), `saldo` (número con decimales)\n• `verificado` (booleano), `premium` (booleano)\n• `direccionAlternativa` (nulo)\nMuestra todo con mensajes descriptivos.",
      summary:
        '🎉 ¡Felicitaciones! Ahora conoces los tipos de datos:\n\n• **Texto**: entre comillas → "hola"\n• **Número**: sin comillas → 42 o 3.14\n• **Booleano**: verdadero o falso\n• **nulo**: campo vacío a propósito\n\nRecuerda:\n• Texto = comillas. Número = sin comillas\n• Usa + para unir texto\n• Números permiten matemática\n• Booleanos para sí/no\n\n💡 ¡Siguiente: aprende métodos para manipular texto!',
      validation: {
        requiredCode: [
          "/usuario.*=.*[\"']/",
          "/contrasena.*=.*[\"']/",
          "/edad.*=.*\\d/",
          "/saldo.*=.*\\d.*\\./",
          "/verificado.*(verdadero|falso)/",
          "/premium.*(verdadero|falso)/",
          "/direccionAlternativa.*nulo/",
          "/mostrar/",
        ],
      },
    },
  ],
};
