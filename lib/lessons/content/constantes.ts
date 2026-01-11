import { LessonContent } from "../types";

export const constantes: LessonContent = {
  badge: { emoji: "🔒", text: "Lección 2" },
  title: "Constantes en",
  titleGradient: " HispanoLang",
  description: "Valores que no pueden cambiar",
  prev: { url: "/lecciones/variables", title: "Variables" },
  next: { url: "/lecciones/comentarios", title: "Comentarios" },
  steps: [
    {
      title: "¿Qué son las constantes?",
      content: "Las constantes son como variables, pero su valor no puede cambiar después de ser asignado. Son perfectas para valores que deben permanecer fijos durante todo el programa.",
      code: `constante PI = 3.14159
constante GRAVEDAD = 9.8

mostrar "El valor de PI es: " + PI
mostrar "La gravedad es: " + GRAVEDAD`,
      explanation: "Usamos `constante` en lugar de `variable` para declarar valores inmutables. Por convención, los nombres van en MAYÚSCULAS.",
      challenge: "Crea una constante llamada `MI_EDAD` con tu edad y muéstrala en pantalla.",
      validation: {
        requiredCode: ["constante", "mostrar"],
        expectedOutputs: ["/\\d+/"],
      },
    },
    {
      title: "¿Por qué usar constantes?",
      content: "Las constantes hacen tu código más seguro y legible. Evitan cambios accidentales en valores importantes.",
      code: `constante PRECIO_BASE = 100
constante IVA = 0.21
constante DESCUENTO_MAXIMO = 0.30

variable cantidad = 5
variable total = cantidad * PRECIO_BASE
variable totalConIva = total * (1 + IVA)

mostrar "Subtotal: " + total
mostrar "Total con IVA: " + totalConIva`,
      explanation: "Los valores de configuración como precios, tasas e impuestos son ideales para constantes.",
      challenge: "Crea constantes para PRECIO_PRODUCTO (50) y CANTIDAD_MINIMA (3). Calcula el total mínimo de compra.",
      validation: {
        requiredCode: ["constante", "PRECIO", "CANTIDAD"],
        expectedOutputs: ["150"],
      },
    },
    {
      title: "Constantes vs Variables",
      content: "Las variables pueden cambiar, las constantes no. Intentar reasignar una constante causa un error.",
      code: `variable contador = 0
contador = 1      // Esto funciona
contador = 2      // Esto también funciona
mostrar contador  // 2

constante MAXIMO = 100
mostrar MAXIMO    // 100
// MAXIMO = 200   // Error: No se puede reasignar una constante`,
      explanation: "Si descomentas la línea `MAXIMO = 200`, obtendrás un error. Las constantes protegen valores críticos.",
      challenge: "Crea una variable `puntos` que empiece en 0 y súmale 10. Crea una constante `PUNTOS_MAXIMOS` en 100.",
      validation: {
        requiredCode: ["variable", "constante", "PUNTOS_MAXIMOS", "/puntos.*\\+/"],
      },
    },
    {
      title: "Constantes en cálculos",
      content: "Las constantes son muy útiles para fórmulas matemáticas y científicas.",
      code: `constante PI = 3.14159

variable radio = 5
variable area = PI * radio * radio
variable perimetro = 2 * PI * radio

mostrar "Radio: " + radio
mostrar "Área del círculo: " + area
mostrar "Perímetro: " + perimetro`,
      explanation: "PI es un valor que nunca cambia, por eso es perfecto como constante.",
      challenge: "Usa la constante PI para calcular el área de un círculo con radio 7.",
      validation: {
        requiredCode: ["constante PI", "radio", "/PI\\s*\\*/"],
        expectedOutputs: ["/153\\.9|154/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina constantes y variables para crear programas más robustos.",
      code: `constante NOMBRE_APP = "MiCalculadora"
constante VERSION = "1.0"
constante MONEDA = "$"

variable precio = 99.99
variable cantidad = 3

mostrar NOMBRE_APP + " v" + VERSION
mostrar "Precio unitario: " + MONEDA + precio
mostrar "Total: " + MONEDA + (precio * cantidad)`,
      explanation: "Las constantes de configuración hacen tu código más mantenible y fácil de actualizar.",
      challenge: "Crea un programa de tienda con constantes para NOMBRE_TIENDA, MONEDA e IVA. Calcula el precio con impuesto.",
      summary: "🧠 Recuerda:\n\n• Usa `constante` para valores que no cambian\n• Por convención, nombres en MAYÚSCULAS\n• No se pueden reasignar después de declarar\n• Ideales para configuración, tasas y valores fijos\n• Hacen el código más seguro y legible",
      validation: {
        requiredCode: ["constante", "NOMBRE", "IVA"],
      },
    },
  ],
};
