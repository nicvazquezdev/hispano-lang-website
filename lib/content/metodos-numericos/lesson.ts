import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "🔢", text: "Lección 15" },
  title: "Métodos Numéricos en",
  titleGradient: " HispanoLang",
  description: "Aprende a leer las etiquetas que tienen los números",
  prev: { url: "/lecciones/conversion-tipos", title: "Conversión de Tipos" },
  next: { url: "/lecciones/listas", title: "Listas" },
  steps: [
    {
      title: "Números con Etiquetas",
      content:
        "En el supermercado, cada producto tiene etiquetas: 'ORGÁNICO', 'SIN GLUTEN', 'VEGANO'. No necesitas analizar el producto, solo lees la etiqueta.\n\nLos números son igual: tienen métodos (como etiquetas) que te dicen sus características sin hacer cálculos.",
      code: `variable numero = 42

mostrar "¿Es par?: " + texto(numero.esPar())
mostrar "¿Es impar?: " + texto(numero.esImpar())
mostrar "¿Es positivo?: " + texto(numero.esPositivo())
mostrar "¿Es negativo?: " + texto(numero.esNegativo())
mostrar "Como texto: " + numero.aTexto()`,
      explanation:
        "**Métodos numéricos:**\n• Se llaman con punto: `numero.metodo()`\n• Son como etiquetas pre-hechas\n• No necesitas hacer cálculos manualmente\n\n**Métodos disponibles:**\n✅ `.esPar()` - ¿Es divisible por 2?\n✅ `.esImpar()` - ¿No es divisible por 2?\n✅ `.esPositivo()` - ¿Es mayor que 0?\n✅ `.esNegativo()` - ¿Es menor que 0?\n✅ `.aTexto()` - Convertir a texto\n\n**Más legible:**\n`n.esPar()` vs `n % 2 == 0` 😉",
      challenge:
        "Crea una variable con el número 7:\n• Verifica si es par con .esPar()\n• Verifica si es impar con .esImpar()\n• Muestra ambos resultados",
      validation: {
        requiredCode: ["/\\.esPar\\s*\\(/", "/\\.esImpar\\s*\\(/", "/7/"],
        expectedOutputs: ["/falso/i", "/verdadero/i"],
      },
    },
    {
      title: "Par e Impar: Días Alternos",
      content:
        "Los números pares e impares se alternan: 1-2-3-4-5-6... Útil para turnos, días alternos, asientos de cine, y patrones que se repiten cada 2.",
      code: `variable dia1 = 1
mostrar "Día " + dia1.aTexto() + " es par: " + texto(dia1.esPar())
mostrar "Día " + dia1.aTexto() + " es impar: " + texto(dia1.esImpar())

variable dia2 = 2
mostrar "Día " + dia2.aTexto() + " es par: " + texto(dia2.esPar())

variable dia3 = 3
mostrar "Día " + dia3.aTexto() + " es impar: " + texto(dia3.esImpar())

mostrar ""
mostrar "=== RIEGO DE PLANTAS ==="
variable dia = 5
si dia.esImpar() {
    mostrar "Día " + dia.aTexto() + ": Regar plantas"
} sino {
    mostrar "Día " + dia.aTexto() + ": Descanso"
}

variable asiento = 12
si asiento.esPar() {
    mostrar "Asiento " + asiento.aTexto() + ": Lado derecho"
} sino {
    mostrar "Asiento " + asiento.aTexto() + ": Lado izquierdo"
}`,
      explanation:
        "**Par e Impar:**\n• `.esPar()` → divisible por 2\n• `.esImpar()` → NO divisible por 2\n\n**Casos de uso:**\n✅ Turnos alternos (A, B, A, B...)\n✅ Días alternos (riego, medicamento)\n✅ Asientos de cine/avión\n✅ Filas pares/impares\n✅ Patrones alternantes\n\n**Dato curioso:**\n• El 0 es par (divisible por 2)\n• Números negativos: -2 es par, -3 es impar\n\n**Alternativa manual:**\n`n.esPar()` ≈ `n % 2 == 0`\n¿Cuál es más legible? 😉",
      challenge:
        "Sistema de turnos:\n• Crea variable turno = 8\n• Si el turno es par, muestra 'Turno X: Equipo A'\n• Si es impar, muestra 'Turno X: Equipo B'\n• Usa .esPar() para verificar",
      validation: {
        requiredCode: ["/\\.esPar\\s*\\(/", "/turno.*8|8.*turno/", "/Equipo/"],
        expectedOutputs: ["/Equipo A|A/"],
      },
    },
    {
      title: "Positivo y Negativo: Temperatura y Dinero",
      content:
        "Como el termómetro: números sobre cero (positivos) y bajo cero (negativos). O como el banco: saldo positivo (tienes dinero) vs saldo negativo (debes dinero).",
      code: `variable temperatura = 25
mostrar "25°C es positivo: " + texto(temperatura.esPositivo())
mostrar "25°C es negativo: " + texto(temperatura.esNegativo())

variable bajo = -10
mostrar "-10°C es positivo: " + texto(bajo.esPositivo())
mostrar "-10°C es negativo: " + texto(bajo.esNegativo())

variable cero = 0
mostrar "0 es positivo: " + texto(cero.esPositivo())
mostrar "0 es negativo: " + texto(cero.esNegativo())

mostrar ""
mostrar "=== TEMPERATURA ==="
variable temp = -5
si temp.esNegativo() {
    mostrar "¡Bajo cero! " + temp.aTexto() + "°C"
} sino si temp.esPositivo() {
    mostrar "Sobre cero: " + temp.aTexto() + "°C"
} sino {
    mostrar "Punto de congelación: 0°C"
}`,
      explanation:
        "**Positivo y Negativo:**\n• `.esPositivo()` → número > 0\n• `.esNegativo()` → número < 0\n\n⚠️ **IMPORTANTE: El cero NO es positivo NI negativo**\n• 0.esPositivo() → falso\n• 0.esNegativo() → falso\n• El cero es neutral\n\n**Casos de uso:**\n✅ Temperatura (bajo/sobre cero)\n✅ Saldo bancario (deuda/crédito)\n✅ Altitud (bajo/sobre nivel mar)\n✅ Ganancias/Pérdidas\n\n**Alternativa manual:**\n`n.esPositivo()` ≈ `n > 0`\n`n.esNegativo()` ≈ `n < 0`",
      challenge:
        "Valida saldo bancario:\n• Variable saldo = -150\n• Si es negativo, muestra 'Saldo negativo: debes dinero'\n• Si es positivo, muestra 'Saldo positivo'\n• Si es cero, muestra 'Saldo en cero'\n• Usa .esNegativo() y .esPositivo()",
      validation: {
        requiredCode: [
          "/\\.esNegativo\\s*\\(/",
          "/\\.esPositivo\\s*\\(/",
          "/saldo.*-150|-150.*saldo/",
        ],
        expectedOutputs: ["/negativo|debes/i"],
      },
    },
    {
      title: "Convertir a Texto: aTexto()",
      content:
        "Como poner la etiqueta de precio en un producto: convertir el número a texto para mostrarlo o concatenarlo con mensajes.",
      code: `variable precio = 99.99
mostrar "Precio: $" + precio.aTexto()

variable puntos = 1500
mostrar "Puntos: " + puntos.aTexto()

variable edad = 25
variable mensaje = "Tienes " + edad.aTexto() + " años"
mostrar mensaje

mostrar ""
mostrar "=== FORMATEO ==="
variable producto1 = 150
variable producto2 = 200
variable total = producto1 + producto2
mostrar "Producto 1: $" + producto1.aTexto()
mostrar "Producto 2: $" + producto2.aTexto()
mostrar "Total: $" + total.aTexto()`,
      explanation:
        "**aTexto():**\n• Convierte número a texto\n• `numero.aTexto()` ≈ `texto(numero)`\n• Ambos hacen lo mismo\n\n**Casos de uso:**\n✅ Formatear precios\n✅ Concatenar en mensajes\n✅ Crear etiquetas dinámicas\n✅ Mostrar datos numéricos\n\n**Diferencia con texto():**\n• `numero.aTexto()` - método del número\n• `texto(numero)` - función global\n• Usa el que prefieras\n\n💡 `.aTexto()` es más 'orientado a objetos'\n💡 `texto()` es más 'funcional'",
      challenge:
        "Crea un ticket de compra:\n• Variable cantidad = 3\n• Variable precioUnitario = 50\n• Calcula total = cantidad * precioUnitario\n• Muestra 'Cantidad: X'\n• Muestra 'Precio unitario: $X'\n• Muestra 'Total: $X'\n• Usa .aTexto() en todos",
      validation: {
        requiredCode: [
          "/\\.aTexto\\s*\\(/",
          "/\\.aTexto\\s*\\(/",
          "/\\.aTexto\\s*\\(/",
          "/3/",
          "/50/",
        ],
        expectedOutputs: ["/3/", "/50/", "/150/"],
      },
    },
    {
      title: "Con Literales: Usar Paréntesis",
      content:
        "Para usar métodos directamente con números literales (42, 7, 100), necesitas paréntesis. Es como decirle al lenguaje: 'esto es un número completo'.",
      code: `mostrar "Con paréntesis:"
mostrar (7).esImpar()
mostrar (8).esPar()
mostrar (-5).esNegativo()
mostrar (100).esPositivo()
mostrar (42).aTexto()

mostrar ""
mostrar "El cero es especial:"
mostrar (0).esPar()
mostrar (0).esPositivo()
mostrar (0).esNegativo()

mostrar ""
mostrar "Tabla de paridad:"
mostrar "1 es par: " + texto((1).esPar())
mostrar "2 es par: " + texto((2).esPar())
mostrar "3 es par: " + texto((3).esPar())
mostrar "4 es par: " + texto((4).esPar())
mostrar "5 es par: " + texto((5).esPar())`,
      explanation:
        "**Con literales, SIEMPRE usa paréntesis:**\n• `(42).esPar()` ✅\n• `42.esPar()` ❌ (error de sintaxis)\n\n**¿Por qué paréntesis?**\n• El lenguaje necesita saber dónde termina el número\n• Sin paréntesis, confunde el punto con decimal\n• `42.esPar` → ¿es 42.0 o es método?\n• `(42).esPar` → claramente es método ✅\n\n**Con variables NO necesitas paréntesis:**\n• `variable n = 42`\n• `n.esPar()` ✅ (sin paréntesis en n)\n\n💡 Regla: literales con paréntesis, variables sin paréntesis",
      challenge:
        "Verifica números literales:\n• Verifica si 15 es impar (usa paréntesis)\n• Verifica si 20 es par (usa paréntesis)\n• Verifica si -8 es negativo (usa paréntesis)\n• Muestra los tres resultados",
      validation: {
        requiredCode: [
          "/\\(15\\)\\.esImpar/",
          "/\\(20\\)\\.esPar/",
          "/\\(-8\\)\\.esNegativo/",
        ],
        expectedOutputs: ["/verdadero/i", "/verdadero/i", "/verdadero/i"],
      },
    },
    {
      title: "Métodos vs Operadores: ¿Cuál Usar?",
      content:
        "Tienes dos formas de hacer lo mismo: métodos (numero.metodo()) y operadores (%, >, <). Ambos funcionan, pero uno es más legible.",
      code: `variable n = 8

mostrar "=== PAR: DOS FORMAS ==="
mostrar "Con método: " + texto(n.esPar())
mostrar "Con operador: " + texto(n % 2 == 0)

variable temp = 25

mostrar ""
mostrar "=== POSITIVO: DOS FORMAS ==="
mostrar "Con método: " + texto(temp.esPositivo())
mostrar "Con comparación: " + texto(temp > 0)

mostrar ""
mostrar "=== LEGIBILIDAD ==="
variable edad = 25

si edad.esImpar() {
    mostrar "edad.esImpar() - Más legible ✓"
}

si edad % 2 != 0 {
    mostrar "edad % 2 != 0 - Más técnico"
}

mostrar ""
mostrar "Ambos funcionan, elige el que prefieras"`,
      explanation:
        "**Equivalencias:**\n• `n.esPar()` ≈ `n % 2 == 0`\n• `n.esImpar()` ≈ `n % 2 != 0`\n• `n.esPositivo()` ≈ `n > 0`\n• `n.esNegativo()` ≈ `n < 0`\n• `n.aTexto()` ≈ `texto(n)`\n\n**Ventajas de MÉTODOS:**\n✅ Más legible en español\n✅ Intención más clara\n✅ Menos propenso a errores\n✅ Mejor para principiantes\n\n**Ventajas de OPERADORES:**\n✅ Más conciso\n✅ Universal (todos los lenguajes)\n✅ Preferido por expertos\n\n💡 Para código legible: métodos\n💡 Para código compacto: operadores\n💡 Ambos son correctos",
      challenge:
        "Compara ambos enfoques:\n• Variable numero = 10\n• Verifica si es par usando .esPar()\n• Verifica si es par usando % 2 == 0\n• Muestra ambos resultados\n• Comprueba que dan lo mismo",
      validation: {
        requiredCode: ["/\\.esPar\\s*\\(/", "/%.*2.*==.*0/", "/10/"],
        expectedOutputs: ["/verdadero/i", "/verdadero/i"],
      },
    },
    {
      title: "Sistema de Turnos Completo",
      content:
        "Combina todo lo aprendido: crea un sistema que usa par/impar para turnos y formatea los resultados con .aTexto().",
      code: `mostrar "=== SISTEMA DE RIEGO DE PLANTAS ==="

variable dia1 = 1
si dia1.esImpar() {
    mostrar "Día " + dia1.aTexto() + ": Regar"
} sino {
    mostrar "Día " + dia1.aTexto() + ": Descanso"
}

variable dia2 = 2
si dia2.esImpar() {
    mostrar "Día " + dia2.aTexto() + ": Regar"
} sino {
    mostrar "Día " + dia2.aTexto() + ": Descanso"
}

variable dia3 = 3
si dia3.esImpar() {
    mostrar "Día " + dia3.aTexto() + ": Regar"
} sino {
    mostrar "Día " + dia3.aTexto() + ": Descanso"
}

variable dia4 = 4
si dia4.esImpar() {
    mostrar "Día " + dia4.aTexto() + ": Regar"
} sino {
    mostrar "Día " + dia4.aTexto() + ": Descanso"
}

mostrar ""
mostrar "Patrón: días impares se riega"`,
      explanation:
        "**Sistema completo que usa:**\n\n✅ **Verificación:**\n• `.esImpar()` para días de riego\n• `.esPar()` para días de descanso\n\n✅ **Formateo:**\n• `.aTexto()` para mostrar números\n• Crear mensajes legibles\n\n✅ **Lógica:**\n• Condicionales basados en métodos\n• Patrón alterno automático\n\n**Patrón común:**\n1. Verificar con método (.esPar, .esImpar)\n2. Tomar decisión (si/sino)\n3. Formatear salida (.aTexto)\n\nEste patrón se repite en muchas aplicaciones.",
      challenge:
        "Crea sistema de asientos de cine:\n• Variable asiento = 7\n• Si es impar: 'Asiento X: Lado izquierdo'\n• Si es par: 'Asiento X: Lado derecho'\n• Usa .esImpar() o .esPar()\n• Usa .aTexto() para formatear el número",
      validation: {
        requiredCode: [
          "/\\.esImpar\\s*\\(|.esPar\\s*\\(/",
          "/\\.aTexto\\s*\\(/",
          "/asiento.*7|7.*asiento/",
        ],
        expectedOutputs: ["/izquierdo|Izquierdo/"],
      },
    },
    {
      title: "Validación de Temperatura",
      content:
        "Usa métodos numéricos para crear un sistema de validación de temperatura que clasifica temperaturas y muestra alertas.",
      code: `mostrar "=== SISTEMA DE TEMPERATURA ==="

variable temp1 = -5
si temp1.esNegativo() {
    mostrar temp1.aTexto() + "°C: ❄️ Bajo cero - Precaución"
} sino si temp1.esPositivo() {
    mostrar temp1.aTexto() + "°C: Normal"
} sino {
    mostrar temp1.aTexto() + "°C: Punto de congelación"
}

variable temp2 = 0
si temp2.esNegativo() {
    mostrar temp2.aTexto() + "°C: ❄️ Bajo cero"
} sino si temp2.esPositivo() {
    mostrar temp2.aTexto() + "°C: Normal"
} sino {
    mostrar temp2.aTexto() + "°C: 🧊 Congelación"
}

variable temp3 = 25
si temp3.esNegativo() {
    mostrar temp3.aTexto() + "°C: Bajo cero"
} sino si temp3.esPositivo() {
    mostrar temp3.aTexto() + "°C: ☀️ Normal"
} sino {
    mostrar temp3.aTexto() + "°C: Congelación"
}

mostrar ""
mostrar "Sistema de alertas activo"`,
      explanation:
        "**Sistema de validación:**\n\n✅ **Clasificación:**\n• `.esNegativo()` para bajo cero\n• `.esPositivo()` para sobre cero\n• Cero como caso especial\n\n✅ **Mensajes claros:**\n• `.aTexto()` para formatear\n• Emojis para visualización\n• Alertas según temperatura\n\n**Patrón de validación:**\n1. Verificar condición (.esNegativo)\n2. Clasificar en categoría\n3. Mostrar mensaje apropiado\n4. Incluir valor formateado\n\n💡 Útil para: sensores, clima, alertas",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas los métodos numéricos:\n\n**Métodos disponibles:**\n• **`.esPar()`** → ¿Divisible por 2?\n• **`.esImpar()`** → ¿NO divisible por 2?\n• **`.esPositivo()`** → ¿Mayor que 0?\n• **`.esNegativo()`** → ¿Menor que 0?\n• **`.aTexto()`** → Convertir a texto\n\n**Cuándo usar cada uno:**\n✅ .esPar/.esImpar → Turnos, días alternos, asientos\n✅ .esPositivo/.esNegativo → Temperatura, saldo, coordenadas\n✅ .aTexto → Formatear, concatenar, mostrar\n\n**Casos especiales:**\n⚠️ El 0 es par\n⚠️ El 0 NO es positivo ni negativo\n⚠️ Literales necesitan paréntesis: (42).esPar()\n\n**Métodos vs Operadores:**\n💡 Métodos: más legibles\n💡 Operadores: más concisos\n💡 Ambos válidos, elige según preferencia\n\n¡Siguiente: aprende sobre listas y arrays!",
      challenge:
        "Sistema completo de análisis:\n• Variable numero = -12\n• Verifica si es par o impar\n• Verifica si es positivo o negativo\n• Muestra 'El número X es:'\n• Muestra 'Par/Impar: ...'\n• Muestra 'Signo: Positivo/Negativo/Cero'\n• Usa todos los métodos aprendidos",
      validation: {
        requiredCode: [
          "/\\.esPar\\s*\\(|.esImpar\\s*\\(/",
          "/\\.esPositivo\\s*\\(|.esNegativo\\s*\\(/",
          "/\\.aTexto\\s*\\(/",
          "/-12/",
        ],
        expectedOutputs: ["/Par|par/", "/Negativo|negativo/", "/-12|12/"],
      },
    },
  ],
};
