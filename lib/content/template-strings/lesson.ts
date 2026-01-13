import { LessonContent } from "@/lib/lessons/types";

export const lesson: LessonContent = {
  badge: { emoji: "📝", text: "Lección 6" },
  title: "Template Strings en",
  titleGradient: " HispanoLang",
  description: "Aprende a crear mensajes personalizados fácilmente",
  prev: { url: "/lecciones/metodos-strings", title: "Métodos de Strings" },
  next: { url: "/lecciones/operadores", title: "Operadores" },
  steps: [
    {
      title: "Mensajes con Espacios en Blanco",
      content:
        "Imagina que escribes un mensaje automático de WhatsApp:\n'Hola [NOMBRE], tu pedido [NUMERO] está listo'\n\nLos template strings funcionan así: tienes una plantilla con espacios que se llenan automáticamente.",
      code: `variable nombre = "María"
variable edad = 25

mostrar "Hola, me llamo " + nombre + " y tengo " + edad + " años"

mostrar \`Hola, me llamo \${nombre} y tengo \${edad} años\``,
      explanation:
        "Hay dos formas de insertar variables en texto:\n\n**Forma vieja** (concatenación con +):\n• Muchas comillas y símbolos +\n• Fácil olvidar espacios\n• Difícil de leer\n\n**Forma nueva** (template strings):\n• Usas backticks ` ` en vez de comillas\n• Variables dentro de ${}\n• Se lee como texto normal\n\nEl resultado es el mismo, pero el código es más limpio.",
      challenge:
        "Crea dos variables: `ciudad` con tu ciudad y `pais` con tu país. Usa un template string para mostrar 'Vivo en [ciudad], [pais]'. Recuerda: backticks ` y ${}.",
      validation: {
        requiredCode: ["/ciudad/", "/pais/", "/`.*\\$\\{.*\\}.*`/"],
      },
    },
    {
      title: "Comparando las Dos Formas",
      content:
        "Veamos la diferencia entre usar + (complicado) y template strings (simple). Especialmente cuando tienes muchas variables.",
      code: `variable producto = "Pizza"
variable precio = 850
variable cantidad = 2

mostrar "El producto " + producto + " cuesta $" + precio + " x " + cantidad

mostrar \`El producto \${producto} cuesta $\${precio} x \${cantidad}\``,
      explanation:
        "Con concatenación (+):\n• 'El producto ' + producto + ' cuesta $' + precio...\n• Muchas comillas, muchos +\n• Fácil equivocarse\n\nCon template strings:\n• `El producto ${producto} cuesta $${precio}...`\n• Todo junto, natural\n• Más fácil de escribir y leer\n\nNota: Para mostrar el símbolo $, simplemente escríbelo fuera de ${} o usa \\$",
      challenge:
        "Crea tres variables: `remitente` con un nombre, `asunto` con 'Reunión', y `hora` con '15:00'. Usa template string para mostrar 'Email de [remitente] - Asunto: [asunto] - Hora: [hora]'.",
      validation: {
        requiredCode: [
          "/remitente/",
          "/asunto/",
          "/hora/",
          "/`.*\\$\\{remitente\\}.*\\$\\{asunto\\}.*\\$\\{hora\\}.*`/",
        ],
      },
    },
    {
      title: "Haciendo Cálculos Dentro",
      content:
        "Dentro de ${} no solo puedes poner variables. También puedes hacer cálculos, operaciones matemáticas, ¡lo que quieras!",
      code: `variable precio = 100
variable cantidad = 3
variable descuento = 15

mostrar \`Precio: $\${precio}\`
mostrar \`Cantidad: \${cantidad}\`
mostrar \`Subtotal: $\${precio * cantidad}\`
mostrar \`Descuento: $\${descuento}\`
mostrar \`Total: $\${precio * cantidad - descuento}\``,
      explanation:
        "Puedes hacer operaciones dentro de ${}:\n\n• ${precio * cantidad} → multiplica y muestra el resultado\n• ${precio - descuento} → resta y muestra\n• ${cantidad + 1} → suma y muestra\n\nEs como una mini-calculadora dentro del texto. Lo que está dentro de ${} se calcula primero, luego se inserta en el mensaje.",
      challenge:
        "Crea variables `base` = 10 y `altura` = 5. Usa template string para mostrar 'El área del rectángulo de base [base] y altura [altura] es [resultado]'. Calcula el área (base * altura) dentro del template.",
      validation: {
        requiredCode: [
          "/base.*10/",
          "/altura.*5/",
          "/`.*\\$\\{base.*\\*.*altura\\}.*`/",
        ],
        expectedOutputs: ["/50/"],
      },
    },
    {
      title: "Usando Métodos Dentro",
      content:
        "También puedes usar métodos de strings dentro de ${}. Todo lo que aprendiste antes funciona aquí.",
      code: `variable nombre = "juan pérez"
variable email = "  MARIA@EMAIL.COM  "

mostrar \`Bienvenido \${nombre.mayusculas()}\`

mostrar \`Email: \${email.recortar().minusculas()}\`

variable mensaje = "Hola mundo"
mostrar \`El mensaje "\${mensaje}" tiene \${mensaje.longitud()} caracteres\``,
      explanation:
        "Puedes usar métodos que ya conoces:\n\n• ${nombre.mayusculas()} → convierte a mayúsculas\n• ${email.minusculas()} → convierte a minúsculas\n• ${texto.recortar()} → quita espacios\n• ${mensaje.longitud()} → cuenta caracteres\n\nIncluso puedes encadenar: ${email.recortar().minusculas()}",
      challenge:
        "Crea una variable `usuario` con '  ANA_DEV  ' (con espacios). Usa template string para mostrar 'Usuario registrado: [usuario limpio y en minúsculas]'. Usa .recortar() y .minusculas() dentro del ${}.",
      validation: {
        requiredCode: [
          "/usuario/",
          "/`.*\\$\\{.*\\.recortar\\(\\).*\\.minusculas\\(\\).*\\}.*`/",
        ],
        expectedOutputs: ["/ana_dev/"],
      },
    },
    {
      title: "Mensajes de Múltiples Líneas",
      content:
        "Los template strings pueden tener saltos de línea. Perfecto para recibos, mensajes largos, o texto formateado.",
      code: `variable cliente = "María González"
variable producto = "Zapatillas Nike"
variable cantidad = 2
variable precio = 15000
variable total = cantidad * precio

variable recibo = \`
═══════════════════════
    RECIBO DE COMPRA
═══════════════════════

Cliente: \${cliente}
Producto: \${producto}
Cantidad: \${cantidad}
Precio: $\${precio}

Total: $\${total}
═══════════════════════
\`

mostrar recibo`,
      explanation:
        "Con template strings puedes:\n\n• Hacer saltos de línea presionando Enter\n• El formato se mantiene exactamente como lo escribiste\n• Perfecto para recibos, tickets, emails\n• Puedes hacer diseños con caracteres\n\nTodo el espaciado y formato visual se preserva.",
      challenge:
        "Crea un mensaje de notificación con múltiples líneas:\n• Variable `app` = 'Instagram'\n• Variable `seguidores` = 150\n• Crea un template string que muestre:\n  '--- NOTIFICACIÓN ---'\n  'App: [app]'\n  'Nuevos seguidores: [seguidores]'\n  '--------------------'",
      validation: {
        requiredCode: [
          "/app/",
          "/seguidores/",
          "/`[\\s\\S]*\\$\\{app\\}[\\s\\S]*\\$\\{seguidores\\}[\\s\\S]*`/",
        ],
      },
    },
    {
      title: "Casos Prácticos del Mundo Real",
      content:
        "Veamos ejemplos reales de cómo se usan template strings en aplicaciones del día a día.",
      code: `variable nombreUsuario = "juan_dev"
variable notificaciones = 5
mostrar \`¡\${nombreUsuario}! Tienes \${notificaciones} notificaciones nuevas\`

variable banco = "Banco Nacional"
variable saldo = 12500
variable ultimoMovimiento = 3000
mostrar \`\${banco}: Saldo $\${saldo} | Último movimiento: -$\${ultimoMovimiento}\`

variable curso = "HispanoLang"
variable leccion = 6
variable total = 20
variable porcentaje = (leccion / total) * 100
mostrar \`\${curso} - Progreso: \${leccion}/\${total} (\${porcentaje}%)\``,
      explanation:
        "Template strings son perfectos para:\n\n• **Notificaciones**: Mensajes personalizados de apps\n• **Mensajes bancarios**: Saldo, movimientos\n• **Progreso**: Cursos, tareas, descargas\n• **Confirmaciones**: Pedidos, reservas, tickets\n\nCualquier texto que necesite datos dinámicos se escribe más fácil con template strings.",
      challenge:
        "Crea un sistema de alertas meteorológicas:\n• `ciudad` = tu ciudad\n• `temperatura` = un número\n• `condicion` = 'Soleado' o 'Lluvioso'\nMuestra: 'Clima en [ciudad]: [temperatura]°C - [condicion]'",
      validation: {
        requiredCode: [
          "/ciudad/",
          "/temperatura/",
          "/condicion/",
          "/`.*\\$\\{ciudad\\}.*\\$\\{temperatura\\}.*\\$\\{condicion\\}.*`/",
        ],
      },
    },
    {
      title: "Tu Propio Sistema de Mensajes",
      content:
        "Ahora combina todo lo aprendido para crear mensajes personalizados completos.",
      code: `variable nombreTienda = "TechStore"
variable producto = "Laptop Dell"
variable precioOriginal = 80000
variable descuento = 15000
variable precioFinal = precioOriginal - descuento
variable cliente = "Juan Pérez"

mostrar \`
╔═══════════════════════════════╗
       \${nombreTienda.mayusculas()}
╚═══════════════════════════════╝

Cliente: \${cliente}

Producto: \${producto}
Precio original: $\${precioOriginal}
Descuento: -$\${descuento}
─────────────────────────────────
PRECIO FINAL: $\${precioFinal}

¡Gracias por tu compra!
\``,
      explanation:
        "Este ejemplo combina:\n\n• Variables simples (nombres, precios)\n• Cálculos (precio final)\n• Métodos (.mayusculas())\n• Formato multilínea\n• Diseño con caracteres\n\nAsí se crean tickets, recibos, confirmaciones en aplicaciones reales.",
      challenge:
        "Crea tu propio recibo de restaurante:\n• `nombreRestaurante`, `plato`, `bebida`\n• `precioPlato` y `precioBebida` (números)\n• Calcula el total\n• Usa template string multilínea para mostrar un recibo formateado con todos los datos\n• Incluye un mensaje de despedida",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas Template Strings:\n\n• Usa backticks ` ` en vez de comillas\n• Inserta variables con ${variable}\n• Haz cálculos dentro: ${precio * cantidad}\n• Usa métodos: ${nombre.mayusculas()}\n• Crea mensajes multilínea naturalmente\n• Mucho más limpio que concatenar con +\n\n💡 Ventajas:\n✅ Más fácil de leer\n✅ Menos errores (espacios, comillas)\n✅ Más natural y moderno\n✅ Perfecto para mensajes dinámicos\n\n¡Siguiente: aprende sobre operadores!",
      validation: {
        requiredCode: [
          "/nombreRestaurante/",
          "/plato/",
          "/bebida/",
          "/precioPlato/",
          "/precioBebida/",
          "/`[\\s\\S]*\\$\\{[\\s\\S]*\\}[\\s\\S]*`/",
        ],
      },
    },
  ],
};
