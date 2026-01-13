import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "🔄", text: "Lección 14" },
  title: "Conversión de Tipos en",
  titleGradient: " HispanoLang",
  description: "Aprende a transformar datos como en formularios web",
  prev: {
    url: "/lecciones/funciones-matematicas",
    title: "Funciones Matemáticas",
  },
  next: { url: "/lecciones/listas", title: "Listas" },
  steps: [
    {
      title: "El Problema de los Formularios",
      content:
        "Imagina un formulario de registro en una página web. Tienes un campo 'Edad' y escribes '25'.\n\nPara la computadora, eso es TEXTO: las letras '2' y '5', no el número veinticinco. Si intentas hacer '25' + 5, obtienes '255' (concatenación), no 30 (suma).\n\n¡Necesitas convertir!",
      code: `variable edadTexto = "25"
mostrar "Tipo: " + tipo(edadTexto)
mostrar "Valor: " + edadTexto

variable edadNumero = entero(edadTexto)
mostrar "Tipo convertido: " + tipo(edadNumero)
mostrar "Valor: " + texto(edadNumero)

mostrar "En 5 años tendrás: " + texto(edadNumero + 5)`,
      explanation:
        "**El problema:**\n• Los formularios web siempre retornan TEXTO\n• Aunque escribas '25', es texto '25'\n• Para cálculos necesitas convertir a número\n\n**La solución:**\n• `entero()` convierte texto a número entero\n• Ahora puedes hacer operaciones matemáticas\n• `tipo()` te muestra qué tipo de dato tienes\n\n**Sin conversión:**\n'25' + 5 = '255' ❌ (concatenación)\n\n**Con conversión:**\n25 + 5 = 30 ✅ (suma)",
      challenge:
        "Tienes un campo de edad con el texto '30':\n• Conviértelo a número usando entero()\n• Súmale 10 años\n• Muestra el resultado (debe ser 40)",
      validation: {
        requiredCode: ["/entero\\s*\\(/", "/30/", "/10/"],
        expectedOutputs: ["/40/"],
      },
    },
    {
      title: "Texto a Número Entero: entero()",
      content:
        "Campo 'Edad', campo 'Cantidad', campo 'Año'... todos retornan texto. Usa entero() para convertirlos a números y poder hacer cálculos.",
      code: `variable edadTexto = "25"
variable edad = entero(edadTexto)
mostrar "Edad: " + texto(edad)

variable cantidadTexto = "10"
variable cantidad = entero(cantidadTexto)
variable total = cantidad * 150
mostrar "Total: $" + texto(total)

mostrar "entero('3.7') = " + texto(entero("3.7"))
mostrar "entero('3.9') = " + texto(entero("3.9"))

mostrar "entero(verdadero) = " + texto(entero(verdadero))
mostrar "entero(falso) = " + texto(entero(falso))`,
      explanation:
        "**entero(texto):**\n• Convierte texto a número entero\n• entero('25') → 25\n• entero('42') → 42\n\n**Casos especiales:**\n• entero('3.7') → 3 (trunca, NO redondea)\n• entero('3.9') → 3 (siempre hacia abajo)\n• entero(verdadero) → 1\n• entero(falso) → 0\n\n**Cuándo usar:**\n✅ Campo edad en formulario\n✅ Campo cantidad en carrito\n✅ Campo año en fechas\n✅ Números sin decimales\n\n**Importante:** Trunca decimales, no redondea",
      challenge:
        "Tienes un campo precio con texto '15.8':\n• Conviértelo a entero (recuerda que trunca)\n• Muestra el resultado (debe ser 15, no 16)",
      validation: {
        requiredCode: ["/entero\\s*\\(/", "/15\\.8|15.8/"],
        expectedOutputs: ["/15/"],
      },
    },
    {
      title: "Texto a Número Decimal: decimal()",
      content:
        "Para precios, medidas, porcentajes... necesitas precisión decimal. No puedes truncar $99.99 a $99. Usa decimal().",
      code: `variable precioTexto = "99.99"
variable precio = decimal(precioTexto)
mostrar "Precio: $" + texto(precio)

variable alturaTexto = "1.75"
variable altura = decimal(alturaTexto)
variable peso = 70
variable imc = peso / (altura * altura)
mostrar "IMC: " + texto(imc)

mostrar "decimal('3.14') = " + texto(decimal("3.14"))
mostrar "decimal('42') = " + texto(decimal("42"))
mostrar "decimal(verdadero) = " + texto(decimal(verdadero))`,
      explanation:
        "**decimal(texto):**\n• Convierte texto a número con decimales\n• decimal('99.99') → 99.99\n• decimal('3.14') → 3.14\n\n**Diferencia con entero():**\n• entero('99.99') → 99 (pierde decimales) ❌\n• decimal('99.99') → 99.99 (mantiene precisión) ✅\n\n**Casos especiales:**\n• decimal('42') → 42.0 (agrega .0)\n• decimal(verdadero) → 1.0\n• decimal(falso) → 0.0\n\n**Cuándo usar:**\n✅ Campo precio (dinero)\n✅ Campo altura/peso (medidas)\n✅ Campo porcentaje\n✅ Cualquier valor con decimales importantes",
      challenge:
        "Tienes un campo con el lado de un cuadrado: '2.5'\n• Conviértelo a decimal\n• Calcula el área (lado × lado)\n• Muestra el resultado (debe ser 6.25)",
      validation: {
        requiredCode: [
          "/decimal\\s*\\(/",
          "/2\\.5|2.5/",
          "/\\*.*\\*|\\*\\*|potencia/",
        ],
        expectedOutputs: ["/6\\.25|6.25/"],
      },
    },
    {
      title: "Número a Texto: texto()",
      content:
        "Hiciste cálculos y obtuviste números. Ahora necesitas mostrarlos en pantalla o concatenarlos con mensajes. Usa texto().",
      code: `variable edad = 25
variable mensaje = "Tienes " + texto(edad) + " años"
mostrar mensaje

variable precio = 99.99
mostrar "Precio: $" + texto(precio)

variable cantidad = 10
variable precioUnitario = 150
variable total = cantidad * precioUnitario
mostrar "Total: $" + texto(total)

variable resultado = 42
mostrar "La respuesta es " + texto(resultado)`,
      explanation:
        "**texto(numero):**\n• Convierte número a texto\n• texto(25) → '25'\n• texto(99.99) → '99.99'\n\n**¿Por qué convertir a texto?**\n• Para concatenar con otros textos\n• Para mostrar en pantalla\n• Para formatear mensajes\n• Para crear etiquetas dinámicas\n\n**Ejemplo común:**\n```\nvariable puntos = 100\nmostrar 'Tienes ' + texto(puntos) + ' puntos'\n```\n\n**Sin texto():**\n'Tienes ' + 100 + ' puntos' → puede dar error\n\n**Con texto():**\n'Tienes ' + texto(100) + ' puntos' → ✅",
      challenge:
        "Convierte el número 42 a texto y concatena con ' es la respuesta'.\n• Usa texto() para convertir\n• Concatena con +\n• Muestra el resultado completo",
      validation: {
        requiredCode: ["/texto\\s*\\(/", "/42/"],
        expectedOutputs: ["/42 es la respuesta|42es la respuesta/"],
      },
    },
    {
      title: "Conversión a Booleano: booleano()",
      content:
        "Checkboxes, switches, validaciones... a veces necesitas convertir valores a verdadero/falso. Usa booleano().",
      code: `mostrar "booleano(1) = " + texto(booleano(1))
mostrar "booleano(0) = " + texto(booleano(0))
mostrar "booleano(100) = " + texto(booleano(100))
mostrar "booleano(-5) = " + texto(booleano(-5))

mostrar "booleano('hola') = " + texto(booleano("hola"))
mostrar "booleano('') = " + texto(booleano(""))

variable acepta = "si"
variable aceptaBooleano = booleano(acepta)
si aceptaBooleano {
    mostrar "Términos aceptados"
}

variable cantidad = 0
si !booleano(cantidad) {
    mostrar "Carrito vacío"
}`,
      explanation:
        "**booleano(valor):**\n• Convierte a verdadero o falso\n\n**Valores FALSOS (falsy):**\n• booleano(0) → falso\n• booleano('') → falso (texto vacío)\n• booleano(falso) → falso\n\n**Valores VERDADEROS (truthy):**\n• booleano(1) → verdadero\n• booleano(100) → verdadero (cualquier != 0)\n• booleano(-5) → verdadero (incluso negativos)\n• booleano('hola') → verdadero (cualquier texto no vacío)\n\n**Casos de uso:**\n✅ Checkbox: 'true'/'false' → booleano\n✅ Validar si hay contenido\n✅ Validar si hay cantidad\n\n💡 Regla: 0 y '' son falso, todo lo demás es verdadero",
      challenge:
        "Crea validaciones:\n• Variable cantidad = 0\n• Usa booleano(cantidad) para verificar si hay items\n• Si NO hay (usa !), muestra 'Sin items'\n• Si hay, muestra 'Hay items'",
      validation: {
        requiredCode: ["/booleano\\s*\\(/", "/cantidad.*0|0.*cantidad/", "/!/"],
        expectedOutputs: ["/Sin items|sin items/i"],
      },
    },
    {
      title: "Verificar Tipo: tipo()",
      content:
        "¿Qué tipo de dato tengo? ¿Es texto o número? ¿Ya lo convertí? Usa tipo() para verificar y tomar decisiones inteligentes.",
      code: `variable edad = 25
mostrar "tipo(25) = " + tipo(edad)

variable nombre = "Ana"
mostrar "tipo('Ana') = " + tipo(nombre)

variable activo = verdadero
mostrar "tipo(verdadero) = " + tipo(activo)

variable edadTexto = "30"
mostrar "Antes: " + tipo(edadTexto)
variable edadNumero = entero(edadTexto)
mostrar "Después: " + tipo(edadNumero)

variable valor = "123"
si tipo(valor) == "texto" {
    mostrar "Es texto, convirtiendo..."
    valor = entero(valor)
    mostrar "Ahora es: " + tipo(valor)
}`,
      explanation:
        "**tipo(valor):**\n• Retorna el tipo como texto\n• tipo(25) → 'numero'\n• tipo('hola') → 'texto'\n• tipo(verdadero) → 'booleano'\n\n**Casos de uso:**\n✅ Debugging: saber qué tienes\n✅ Validaciones: verificar tipo correcto\n✅ Conversión inteligente: convertir solo si es necesario\n\n**Patrón común:**\n```\nsi tipo(valor) == 'texto' {\n    valor = entero(valor)\n}\n```\n\n**Útil cuando:**\n• No sabes qué tipo recibirás\n• Quieres validar antes de convertir\n• Estás debuggeando código",
      challenge:
        "Crea dos variables:\n• Variable numero = 42\n• Variable texto = 'Hola'\n• Usa tipo() para verificar el tipo de cada una\n• Muestra ambos tipos",
      validation: {
        requiredCode: [
          "/tipo\\s*\\(/",
          "/tipo\\s*\\(/",
          "/variable\\s+numero/",
          "/variable\\s+texto/",
        ],
        expectedOutputs: ["/numero/", "/texto/"],
      },
    },
    {
      title: "Formulario Real: Registro de Usuario",
      content:
        "Ahora simula un formulario completo: recibe datos como texto, convierte a los tipos correctos, valida, y procesa.",
      code: `mostrar "=== REGISTRO DE USUARIO ==="

variable nombreTexto = "Ana García"
variable edadTexto = "25"
variable alturaTexto = "1.65"

mostrar "Datos recibidos (todo texto):"
mostrar "Nombre: " + nombreTexto
mostrar "Edad: " + edadTexto + " (" + tipo(edadTexto) + ")"
mostrar "Altura: " + alturaTexto + " (" + tipo(alturaTexto) + ")"

mostrar ""
mostrar "Convirtiendo..."

variable nombre = nombreTexto
variable edad = entero(edadTexto)
variable altura = decimal(alturaTexto)

mostrar ""
mostrar "Datos procesados:"
mostrar "Nombre: " + nombre + " (" + tipo(nombre) + ")"
mostrar "Edad: " + texto(edad) + " (" + tipo(edad) + ")"
mostrar "Altura: " + texto(altura) + "m (" + tipo(altura) + ")"

mostrar ""
mostrar "Validaciones:"

si edad >= 18 {
    mostrar "✓ Mayor de edad"
} sino {
    mostrar "✗ Menor de edad"
}

si altura >= 1.0 y altura <= 2.5 {
    mostrar "✓ Altura válida"
} sino {
    mostrar "✗ Altura inválida"
}

mostrar ""
mostrar "Registro completado"`,
      explanation:
        "**Flujo completo de formulario:**\n\n1️⃣ **RECIBIR:** Todo como texto\n• Campos de formulario → texto\n\n2️⃣ **CONVERTIR:** Según necesites\n• Edad → entero()\n• Altura → decimal()\n\n3️⃣ **VALIDAR:** Con tipos correctos\n• Comparaciones numéricas\n• Cálculos matemáticos\n\n4️⃣ **PROCESAR:** Usar los datos\n• Guardar en base de datos\n• Hacer cálculos\n• Mostrar confirmación\n\nEste patrón se repite en TODA aplicación web.",
      challenge:
        "Simula un formulario de compra:\n• Variable precioTexto = '1000'\n• Variable cantidadTexto = '3'\n• Convierte precio a decimal y cantidad a entero\n• Calcula total (precio × cantidad)\n• Muestra 'Total: $' + total\n• Debe mostrar 3000",
      validation: {
        requiredCode: [
          "/decimal\\s*\\(/",
          "/entero\\s*\\(/",
          "/1000/",
          "/3/",
          "/\\*/",
        ],
        expectedOutputs: ["/3000/"],
      },
    },
    {
      title: "Validación Segura: Proteger tu Código",
      content:
        "Los usuarios cometen errores: dejan campos vacíos, escriben letras en campo numérico... Valida ANTES de convertir para evitar errores.",
      code: `funcion convertirEdadSegura(textoEdad) {
    mostrar "Intentando: '" + textoEdad + "'"
    
    si textoEdad == "" {
        mostrar "✗ Campo vacío"
        retornar 0
    }
    
    variable edad = entero(textoEdad)
    
    si edad < 0 o edad > 150 {
        mostrar "✗ Edad inválida"
        retornar 0
    }
    
    mostrar "✓ Edad válida: " + texto(edad)
    retornar edad
}

variable edad1 = convertirEdadSegura("25")
variable edad2 = convertirEdadSegura("")
variable edad3 = convertirEdadSegura("200")

mostrar ""
mostrar "Resultados:"
mostrar "edad1: " + texto(edad1)
mostrar "edad2: " + texto(edad2)
mostrar "edad3: " + texto(edad3)`,
      explanation:
        "**Patrón de validación segura:**\n\n1️⃣ **Validar contenido:**\n• Verificar que no esté vacío\n• Verificar formato esperado\n\n2️⃣ **Convertir:**\n• Usar entero() o decimal()\n\n3️⃣ **Validar resultado:**\n• Verificar rangos válidos\n• Edad: 0-150\n• Precio: > 0\n• Porcentaje: 0-100\n\n4️⃣ **Retornar:**\n• Valor válido\n• O valor por defecto (0, '', etc.)\n\n💡 SIEMPRE valida datos del usuario\n💡 No confíes en que ingresarán datos correctos",
      challenge:
        "Crea función validarPrecio(textoPrec io) que:\n• Si texto vacío, retorne 0\n• Convierta a decimal\n• Si precio < 0, retorne 0\n• Si precio válido, retorne precio\n• Prueba con '99.99' (debe dar 99.99)\n• Prueba con '' (debe dar 0)",
      validation: {
        requiredCode: [
          "/funcion\\s+validarPrecio/",
          "/decimal\\s*\\(/",
          "/retornar/",
          "/<\\s*0|<=\\s*0/",
        ],
        expectedOutputs: ["/99\\.99|99.99/", "/0/"],
      },
    },
    {
      title: "Sistema Completo: Calculadora de Propinas",
      content:
        "Combina todo lo aprendido: recibe datos como texto, convierte, valida, calcula, y presenta resultados formateados.",
      code: `mostrar "=== CALCULADORA DE PROPINAS ==="

variable cuentaTexto = "156.50"
variable propinaPorcentaje = "15"

mostrar "Datos recibidos:"
mostrar "Cuenta: " + cuentaTexto + " (" + tipo(cuentaTexto) + ")"
mostrar "Propina: " + propinaPorcentaje + "% (" + tipo(propinaPorcentaje) + ")"

mostrar ""
mostrar "Convirtiendo..."

variable cuenta = decimal(cuentaTexto)
variable porcentaje = entero(propinaPorcentaje)

mostrar "Cuenta: " + texto(cuenta) + " (" + tipo(cuenta) + ")"
mostrar "Propina: " + texto(porcentaje) + "% (" + tipo(porcentaje) + ")"

mostrar ""
mostrar "Calculando..."

variable propina = cuenta * (porcentaje / 100)
variable total = cuenta + propina

mostrar ""
mostrar "=== RESULTADO ==="
mostrar "Cuenta: $" + texto(cuenta)
mostrar "Propina " + texto(porcentaje) + "%: $" + texto(propina)
mostrar "Total a pagar: $" + texto(total)`,
      explanation:
        "**Sistema completo que usa:**\n\n✅ **Recibir datos:**\n• Todo como texto (simulando formulario)\n\n✅ **tipo() para verificar:**\n• Mostrar qué tipo de dato es\n\n✅ **Convertir apropiadamente:**\n• decimal() para dinero (precisión)\n• entero() para porcentaje (sin decimales)\n\n✅ **Hacer cálculos:**\n• Con los tipos correctos\n• Operaciones matemáticas\n\n✅ **Presentar resultados:**\n• texto() para formatear\n• Concatenar mensajes claros\n\nEste flujo es el PATRÓN ESTÁNDAR en aplicaciones web.",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas la conversión de tipos:\n\n**Funciones esenciales:**\n• **entero(texto)** → Número sin decimales\n• **decimal(texto)** → Número con decimales\n• **texto(numero)** → Convertir a texto\n• **booleano(valor)** → verdadero/falso\n• **tipo(valor)** → Verificar tipo\n\n**Cuándo usar cada una:**\n✅ entero() - Edad, cantidad, año\n✅ decimal() - Precio, medida, porcentaje\n✅ texto() - Mostrar, concatenar\n✅ booleano() - Checkbox, validar si/no\n✅ tipo() - Debugging, validar\n\n**Flujo típico:**\n1️⃣ Recibir datos (texto)\n2️⃣ Convertir al tipo correcto\n3️⃣ Validar rangos\n4️⃣ Hacer cálculos\n5️⃣ Convertir a texto para mostrar\n\n**Buenas prácticas:**\n💡 Valida antes de convertir\n💡 Maneja casos de error\n💡 Usa el tipo apropiado (entero vs decimal)\n💡 Verifica con tipo() cuando tengas dudas\n\n¡Siguiente: aprende sobre listas y arrays!",
      challenge:
        "Crea un sistema de descuentos completo:\n• Variable precioTexto = '1000'\n• Variable descuentoTexto = '20'\n• Convierte precio a decimal\n• Convierte descuento a entero\n• Calcula descuentoMonto = precio * descuento / 100\n• Calcula precioFinal = precio - descuentoMonto\n• Muestra: 'Precio: $1000'\n• Muestra: 'Descuento 20%: $200'\n• Muestra: 'Total: $800'",
      validation: {
        requiredCode: [
          "/decimal\\s*\\(/",
          "/entero\\s*\\(/",
          "/1000/",
          "/20/",
          "/100/",
          "/\\*/",
          "/-/",
        ],
        expectedOutputs: ["/1000/", "/200/", "/800/"],
      },
    },
  ],
};
