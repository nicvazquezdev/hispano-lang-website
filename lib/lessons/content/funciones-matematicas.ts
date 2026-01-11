import { LessonContent } from "../types";

export const funcionesMatematicas: LessonContent = {
  badge: { emoji: "🧮", text: "Lección 10" },
  title: "Funciones Matemáticas en",
  titleGradient: " HispanoLang",
  description: "Cálculos avanzados con funciones integradas",
  prev: { url: "/lecciones/funciones", title: "Funciones" },
  next: { url: "/lecciones/listas", title: "Listas" },
  steps: [
    {
      title: "Funciones Matemáticas Integradas",
      content: "HispanoLang incluye funciones matemáticas predefinidas.",
      code: `mostrar "Raíz de 16: " + raiz(16)
mostrar "2^3: " + potencia(2, 3)`,
      explanation: "raiz() calcula raíz cuadrada, potencia(base, exp) eleva a una potencia.",
      challenge: "Calcula la raíz de 144 y 2 elevado a la 5.",
      validation: { expectedOutputs: ["12", "32"] },
    },
    {
      title: "Funciones Trigonométricas",
      content: "Seno, coseno y tangente para cálculos geométricos.",
      code: `mostrar "Seno de 0: " + seno(0)
mostrar "Coseno de 0: " + coseno(0)`,
      explanation: "Útiles para animaciones, física y geometría.",
      challenge: "Calcula seno, coseno y tangente de 45.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Funciones de Redondeo",
      content: "redondear(), techo() y piso() para convertir decimales.",
      code: `variable decimal = 3.7

mostrar "Redondeado: " + redondear(decimal)
mostrar "Techo: " + techo(decimal)
mostrar "Piso: " + piso(decimal)`,
      explanation: "redondear: más cercano. techo: siempre arriba. piso: siempre abajo.",
      challenge: "Calcula cuántos paquetes de 6 necesitas para 20 unidades (usa división y techo).",
      validation: { expectedOutputs: ["4"] },
    },
    {
      title: "Valor Absoluto",
      content: "valorAbsoluto() convierte negativos en positivos.",
      code: `mostrar valorAbsoluto(-5)
mostrar valorAbsoluto(10 - 25)`,
      explanation: "Útil para calcular distancias o diferencias sin signo.",
      challenge: "Crea dos números y calcula su diferencia absoluta.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Números Aleatorios",
      content: "aleatorio() genera números al azar.",
      code: `mostrar "0 a 1: " + aleatorio()
mostrar "0 a 10: " + aleatorio(10)
mostrar "5 a 15: " + aleatorio(5, 15)

variable dado = piso(aleatorio(1, 7))
mostrar "Dado: " + dado`,
      explanation: "Para enteros, combina con piso().",
      challenge: "Simula dos dados (1-6) y suma sus valores.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina funciones matemáticas en programas útiles.",
      code: `variable distancia = raiz(potencia(3, 2) + potencia(4, 2))
mostrar "Distancia: " + distancia`,
      explanation: "Teorema de Pitágoras usando raiz() y potencia().",
      challenge: "Juego de adivinanza: genera número aleatorio 1-100, calcula diferencia absoluta con tu intento.",
      summary: "🧠 Recuerda:\n\n• raiz(), potencia() para cálculos\n• seno(), coseno(), tangente() para trigonometría\n• redondear(), techo(), piso() para enteros\n• aleatorio() para números al azar",
      validation: { expectedOutputs: [] },
    },
  ],
};
