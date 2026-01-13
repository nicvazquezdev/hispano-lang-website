import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "➡️", text: "Lección 12" },
  title: "Funciones Flecha en",
  titleGradient: " HispanoLang",
  description: "Aprende a escribir funciones cortas como mensajes abreviados",
  prev: { url: "/lecciones/funciones", title: "Funciones" },
  next: { url: "/lecciones/listas", title: "Listas" },
  steps: [
    {
      title: "Mensajes Abreviados: tmb, xq, q",
      content:
        "Cuando chateás por WhatsApp, usas abreviaturas:\n• 'tmb' = 'también'\n• 'xq' = 'porque'\n• 'q' = 'qué'\n\nMismo mensaje, menos caracteres. Las funciones flecha son lo mismo: funciones abreviadas.",
      code: `funcion doble(x) {
    retornar x * 2
}

variable doble = x => x * 2

mostrar doble(5)
mostrar doble(10)`,
      explanation:
        "**Función normal** (mensaje completo):\n• 3 líneas: funcion, retornar, cierre\n• Sintaxis formal\n\n**Función flecha** (mensaje abreviado):\n• 1 línea: `variable nombre = parametro => resultado`\n• La flecha `=>` significa 'devuelve' o 'resulta en'\n• El retorno es automático (no escribes 'retornar')\n\nAmbas hacen EXACTAMENTE lo mismo. Es solo sintaxis más corta.",
      challenge:
        "Crea una función flecha llamada `triple` que multiplique un número por 3.\n• Usa la sintaxis: `variable triple = x => x * 3`\n• Pruébala con 4 y con 7\n• Debe mostrar 12 y 21",
      validation: {
        requiredCode: [
          "/variable\\s+triple\\s*=.*=>/",
          "/\\*\\s*3|3\\s*\\*/",
          "/triple\\s*\\(/",
        ],
        expectedOutputs: ["/12/", "/21/"],
      },
    },
    {
      title: "Un Parámetro: Súper Corto",
      content:
        "Como escribir 'ok' en vez de 'está bien', cuando tu función tiene UN solo parámetro, es súper corta: no necesita paréntesis.",
      code: `variable cuadrado = x => x * x
mostrar cuadrado(5)
mostrar cuadrado(8)

variable mitad = n => n / 2
mostrar mitad(20)
mostrar mitad(50)

variable esMayorDeEdad = edad => edad >= 18
mostrar esMayorDeEdad(15)
mostrar esMayorDeEdad(21)`,
      explanation:
        "**Con UN parámetro:**\n• Sin paréntesis: `x => x * 2`\n• La x es el parámetro\n• Lo que está después de => es el resultado\n• Retorno automático\n\nEs la forma MÁS corta posible de escribir una función.",
      challenge:
        "Crea dos funciones flecha:\n1. `porcentaje` que calcule el 10% de un número (número * 0.1)\n2. `esPositivo` que verifique si un número es mayor que 0\n• Prueba porcentaje con 200\n• Prueba esPositivo con -5 y con 10",
      validation: {
        requiredCode: [
          "/variable\\s+porcentaje\\s*=.*=>/",
          "/variable\\s+esPositivo\\s*=.*=>/",
          "/0\\.1|\\/ *10/",
          "/> *0|>= *1/",
        ],
        expectedOutputs: ["/20/", "/falso/", "/verdadero/"],
      },
    },
    {
      title: "Múltiples Parámetros: Dos o Más",
      content:
        "Como escribir 'nos vemos' en vez de 'nos vemos luego', cuando tienes DOS o más parámetros, necesitas paréntesis.",
      code: `variable suma = (a, b) => a + b
mostrar suma(5, 3)
mostrar suma(10, 20)

variable restar = (x, y) => x - y
mostrar restar(15, 7)

variable calcularArea = (base, altura) => base * altura
mostrar calcularArea(5, 10)

variable nombreCompleto = (nombre, apellido) => nombre + " " + apellido
mostrar nombreCompleto("Ana", "García")`,
      explanation:
        "**Con DOS+ parámetros:**\n• Paréntesis obligatorios: `(a, b) => a + b`\n• Parámetros separados por comas\n• La flecha => separa parámetros del resultado\n• Retorno automático\n\n💡 Regla: 1 parámetro = sin paréntesis. 2+ = con paréntesis.",
      challenge:
        "Crea tres funciones flecha:\n1. `multiplicar` que multiplique dos números\n2. `dividir` que divida dos números\n3. `concatenar` que una dos textos con un espacio\n• Prueba multiplicar(6, 7)\n• Prueba dividir(20, 4)\n• Prueba concatenar('Hola', 'Mundo')",
      validation: {
        requiredCode: [
          "/variable\\s+multiplicar.*\\(.*,.*\\).*=>/",
          "/variable\\s+dividir.*\\(.*,.*\\).*=>/",
          "/variable\\s+concatenar.*\\(.*,.*\\).*=>/",
          "/\\*/",
          "/\\//",
        ],
        expectedOutputs: ["/42/", "/5/", "/Hola Mundo/"],
      },
    },
    {
      title: "Sin Parámetros: Mensaje Fijo",
      content:
        "Como responder siempre 'ok' sin importar qué te pregunten, las funciones sin parámetros usan paréntesis vacíos.",
      code: `variable saludar = () => "Hola!"
mostrar saludar()
mostrar saludar()

variable obtenerPI = () => 3.14159
mostrar obtenerPI()

variable mensajeBienvenida = () => "Bienvenido al sistema"
mostrar mensajeBienvenida()

variable numeroAleatorio = () => 42
mostrar numeroAleatorio()`,
      explanation:
        "**Sin parámetros:**\n• Paréntesis vacíos: `() => resultado`\n• Siempre retorna lo mismo\n• No recibe información externa\n\nÚtil para valores constantes o mensajes fijos que quieres reutilizar.",
      challenge:
        "Crea dos funciones flecha sin parámetros:\n1. `obtenerVersion` que retorne '1.0.0'\n2. `mensajeError` que retorne 'Error: Datos inválidos'\n• Llama ambas funciones y muestra sus resultados",
      validation: {
        requiredCode: [
          "/variable\\s+obtenerVersion.*\\(\\).*=>/",
          "/variable\\s+mensajeError.*\\(\\).*=>/",
          "/1\\.0\\.0/",
          "/Error/i",
        ],
        expectedOutputs: ["/1\\.0\\.0/", "/Error/i"],
      },
    },
    {
      title: "Mensaje Largo: Usar Llaves",
      content:
        "A veces necesitas escribir un mensaje largo con varias oraciones. Para funciones con múltiples líneas, usas llaves { } y 'retornar'.",
      code: `variable calcularDescuento = (precio, porcentaje) => {
    variable descuento = precio * porcentaje / 100
    variable precioFinal = precio - descuento
    retornar precioFinal
}

mostrar calcularDescuento(1000, 20)

variable saludarPersona = nombre => {
    variable saludo = "Hola " + nombre
    variable mensaje = saludo + ", bienvenido!"
    retornar mensaje
}

mostrar saludarPersona("Carlos")`,
      explanation:
        "**Con múltiples líneas:**\n• Llaves { } obligatorias\n• DEBES escribir 'retornar' explícitamente\n• Puedes tener variables intermedias\n• Sintaxis: `parametro => { codigo; retornar valor }`\n\n**Una línea vs Múltiples:**\n• Una línea: `x => x * 2` (retorno automático)\n• Múltiples: `x => { ... retornar ... }` (retorno explícito)",
      challenge:
        "Crea función flecha `calcularIVA` que:\n• Reciba un precio\n• Calcule el IVA (precio * 0.21)\n• Calcule el total (precio + IVA)\n• Retorne el total\n• Usa llaves { } y variables intermedias\n• Prueba con 100 (debe dar 121)",
      validation: {
        requiredCode: [
          "/variable\\s+calcularIVA.*=>/",
          "/\\{/",
          "/retornar/",
          "/0\\.21|21/",
        ],
        expectedOutputs: ["/121/"],
      },
    },
    {
      title: "Con Condicionales: Respuestas según Contexto",
      content:
        "Como cuando respondes diferente según quién te escriba, las funciones flecha pueden tener condicionales para decidir qué retornar.",
      code: `variable calificar = nota => {
    si nota >= 90 {
        retornar "Excelente"
    } sino si nota >= 70 {
        retornar "Aprobado"
    } sino {
        retornar "Reprobado"
    }
}

mostrar calificar(95)
mostrar calificar(75)
mostrar calificar(50)

variable tipoCliente = compras => {
    si compras >= 10 {
        retornar "VIP"
    } sino si compras >= 5 {
        retornar "Premium"
    } sino {
        retornar "Regular"
    }
}

mostrar tipoCliente(12)
mostrar tipoCliente(7)
mostrar tipoCliente(2)`,
      explanation:
        "**Funciones flecha con condicionales:**\n• Necesitas llaves { }\n• Cada rama puede retornar valores diferentes\n• 'retornar' es obligatorio en cada rama\n• Útil para clasificaciones, validaciones\n\nComo responder 'Sí', 'No', o 'Tal vez' según la pregunta.",
      challenge:
        "Crea función flecha `categoriaEdad` que:\n• Reciba edad\n• Si edad < 13: retornar 'Niño'\n• Si edad < 18: retornar 'Adolescente'\n• Si edad < 65: retornar 'Adulto'\n• Sino: retornar 'Adulto Mayor'\n• Prueba con 10, 15, 30, y 70",
      validation: {
        requiredCode: [
          "/variable\\s+categoriaEdad.*=>/",
          "/< *13/",
          "/< *18/",
          "/< *65/",
          "/retornar/",
        ],
        expectedOutputs: ["/Niño/i", "/Adolescente/i", "/Adulto/", "/Mayor/i"],
      },
    },
    {
      title: "Pasar Funciones: Reenviar Mensajes",
      content:
        "Como cuando le reenvías un mensaje abreviado a otra persona, puedes pasar funciones flecha como argumentos a otras funciones.",
      code: `funcion aplicar(fn, valor) {
    variable resultado = fn(valor)
    retornar resultado
}

variable doble = aplicar(x => x * 2, 5)
mostrar doble

variable cuadrado = aplicar(x => x * x, 5)
mostrar cuadrado

variable mayusculas = aplicar(t => t.mayusculas(), "hola")
mostrar mayusculas

funcion procesar(numero, transformar) {
    variable resultado = transformar(numero)
    mostrar "Resultado: " + resultado
}

procesar(10, n => n + 5)
procesar(10, n => n * 3)`,
      explanation:
        "**Pasar funciones como argumentos:**\n• Escribes la función flecha directamente: `aplicar(x => x * 2, 5)`\n• La función receptora ejecuta esa función\n• Útil para transformaciones y callbacks\n\nComo decirle a alguien: 'Cuando te llegue un número, multiplicalo por 2'",
      challenge:
        "Crea función `transformarDosVeces` que:\n• Reciba una función y un valor\n• Aplique la función al valor\n• Aplique la función de nuevo al resultado\n• Retorne el resultado final\n• Prueba con `x => x + 3` y valor inicial 5\n• Debe dar: 5 + 3 = 8, luego 8 + 3 = 11",
      validation: {
        requiredCode: [
          "/funcion\\s+transformarDosVeces/",
          "/fn\\(|transformar\\(/",
          "/retornar/",
          "/=> *.*\\+ *3|=> *3 *\\+/",
        ],
        expectedOutputs: ["/11/"],
      },
    },
    {
      title: "Calculadora Express: Todo en Una Línea",
      content:
        "Las funciones flecha brillan en calculadoras y conversiones simples: todo en una línea clara y legible.",
      code: `variable celsiusAFahrenheit = c => (c * 9 / 5) + 32
variable fahrenheitACelsius = f => (f - 32) * 5 / 9

mostrar "20°C = " + celsiusAFahrenheit(20) + "°F"
mostrar "68°F = " + fahrenheitACelsius(68) + "°C"

variable kmAMillas = km => km * 0.621371
variable millasAKm = mi => mi / 0.621371

mostrar "100km = " + kmAMillas(100) + " millas"

variable calcularPropina = (total, porcentaje) => total * (porcentaje / 100)

mostrar "Propina 15%: $" + calcularPropina(500, 15)
mostrar "Propina 20%: $" + calcularPropina(500, 20)

variable descuento = (precio, desc) => precio * (1 - desc / 100)

mostrar "Con 30% desc: $" + descuento(1000, 30)`,
      explanation:
        "**Funciones flecha para conversiones:**\n✅ Fórmulas visibles en una línea\n✅ Fácil de entender qué hace\n✅ Rápidas de escribir\n✅ Reutilizables\n\nPerfectas para:\n• Conversiones de unidades\n• Cálculos matemáticos simples\n• Transformaciones de datos\n• Validaciones rápidas",
      challenge:
        "Crea un sistema de conversiones:\n• `metrosAPies` = metros * 3.28084\n• `piesAMetros` = pies / 3.28084\n• `calcularIMC` = (peso, altura) => peso / (altura * altura)\n• Convierte 10 metros a pies\n• Convierte 33 pies a metros\n• Calcula IMC de peso 70kg y altura 1.75m",
      validation: {
        requiredCode: [
          "/variable\\s+metrosAPies.*=>/",
          "/variable\\s+piesAMetros.*=>/",
          "/variable\\s+calcularIMC.*=>/",
          "/3\\.28084/",
          "/\\*.*\\*/",
        ],
        expectedOutputs: ["/32\\.8/", "/10/", "/22\\./"],
      },
    },
    {
      title: "Sistema Completo: Tienda Online",
      content:
        "Ahora combina todo: crea un sistema que use funciones normales y flecha juntas, como una conversación que mezcla mensajes formales y casuales.",
      code: `variable calcularSubtotal = (precio, cantidad) => precio * cantidad
variable aplicarDescuento = (monto, porcentaje) => monto * (1 - porcentaje / 100)
variable aplicarIVA = monto => monto * 1.21

funcion procesarCompra(producto, precio, cantidad, descuento) {
    mostrar "=== COMPRA ==="
    mostrar "Producto: " + producto
    mostrar "Precio: $" + precio + " x " + cantidad
    
    variable subtotal = calcularSubtotal(precio, cantidad)
    mostrar "Subtotal: $" + subtotal
    
    variable conDescuento = aplicarDescuento(subtotal, descuento)
    mostrar "Descuento " + descuento + "%: $" + (subtotal - conDescuento)
    
    variable total = aplicarIVA(conDescuento)
    mostrar "IVA 21%: $" + (total - conDescuento)
    mostrar ""
    mostrar "TOTAL: $" + total
    
    retornar total
}

procesarCompra("Teclado", 500, 2, 15)`,
      explanation:
        "**Sistema híbrido:**\n\n✅ **Funciones flecha** para cálculos simples:\n• calcularSubtotal, aplicarDescuento, aplicarIVA\n• Una línea cada una\n• Fáciles de entender y reutilizar\n\n✅ **Función normal** para el proceso completo:\n• procesarCompra coordina todo\n• Muestra mensajes\n• Usa las funciones flecha\n\nComo en WhatsApp: respuestas rápidas ('ok', 'dale') + mensajes largos cuando es necesario.",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas las funciones flecha:\n\n**Sintaxis:**\n• Un parámetro: `x => x * 2` (sin paréntesis)\n• Múltiples: `(a, b) => a + b` (con paréntesis)\n• Sin parámetros: `() => valor` (paréntesis vacíos)\n• Una línea: retorno automático\n• Múltiples líneas: `{ ... retornar ... }`\n\n**Cuándo usar:**\n✅ Cálculos simples y conversiones\n✅ Transformaciones de datos\n✅ Validaciones rápidas\n✅ Como argumentos a otras funciones\n\n**Normal vs Flecha:**\n💡 Función simple (1-2 líneas) → Flecha\n💡 Proceso complejo (5+ líneas) → Normal\n💡 Ambas son válidas, usa la que prefieras\n\n¡Siguiente: aprende sobre listas y arrays!",
      challenge:
        "Crea tu propio sistema de pedidos:\n• Flecha `calcularEnvio`: si monto >= 1000 retornar 0, sino 150\n• Flecha `puntosFidelidad`: monto / 10 (por cada $10, 1 punto)\n• Normal `procesarPedido(producto, precio, cantidad)` que:\n  - Calcule subtotal\n  - Calcule envío con calcularEnvio\n  - Calcule puntos con puntosFidelidad\n  - Muestre todo detallado\n  - Retorne el total final\n• Procesa pedido de 'Mouse' a $300 x 4 unidades",
      validation: {
        requiredCode: [
          "/variable\\s+calcularEnvio.*=>/",
          "/variable\\s+puntosFidelidad.*=>/",
          "/funcion\\s+procesarPedido/",
          "/1000/",
          "/150/",
          "/10/",
          "/300.*4|4.*300/",
          "/retornar/",
        ],
        expectedOutputs: ["/1200/", "/150/", "/120/", "/1350/"],
      },
    },
  ],
};
