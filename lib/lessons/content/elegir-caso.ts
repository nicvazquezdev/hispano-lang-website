import { LessonContent } from "../types";

export const elegirCaso: LessonContent = {
  badge: { emoji: "🎯", text: "Lección 9" },
  title: "Elegir/Caso en",
  titleGradient: " HispanoLang",
  description: "Múltiples caminos de decisión",
  prev: { url: "/lecciones/condicionales", title: "Condicionales" },
  next: { url: "/lecciones/bucles", title: "Bucles" },
  steps: [
    {
      title: "¿Qué es elegir/caso?",
      content: "La estructura elegir/caso permite evaluar una expresión contra múltiples valores posibles. Es más limpia que muchos si/sino encadenados.",
      code: `variable dia = 3

elegir (dia) {
    caso 1:
        mostrar "Lunes"
    caso 2:
        mostrar "Martes"
    caso 3:
        mostrar "Miércoles"
    caso 4:
        mostrar "Jueves"
    caso 5:
        mostrar "Viernes"
    pordefecto:
        mostrar "Fin de semana"
}`,
      explanation: "elegir evalúa el valor y ejecuta el bloque del caso que coincide. pordefecto se ejecuta si ningún caso coincide.",
      challenge: "Crea una variable `mes` con un número del 1 al 12. Muestra el nombre del mes correspondiente.",
      validation: {
        requiredCode: ["elegir", "caso", "pordefecto"],
      },
    },
    {
      title: "Elegir con strings",
      content: "También puedes usar elegir/caso con cadenas de texto.",
      code: `variable fruta = "manzana"

elegir (fruta) {
    caso "manzana":
        mostrar "Es roja o verde"
    caso "banana":
        mostrar "Es amarilla"
    caso "naranja":
        mostrar "Es naranja"
    caso "uva":
        mostrar "Es morada"
    pordefecto:
        mostrar "Fruta desconocida"
}`,
      explanation: "Los casos pueden ser números, strings o cualquier valor comparable.",
      challenge: "Crea un programa que según el tipo de animal ('perro', 'gato', 'pájaro') muestre el sonido que hace.",
      validation: {
        requiredCode: ["elegir", "caso", "/perro|gato|pajaro|pájaro/"],
      },
    },
    {
      title: "Menús con elegir/caso",
      content: "elegir/caso es perfecto para crear menús de opciones.",
      code: `variable opcion = 2

mostrar "=== MENÚ ==="
mostrar "1. Ver perfil"
mostrar "2. Configuración"
mostrar "3. Ayuda"
mostrar "4. Salir"

elegir (opcion) {
    caso 1:
        mostrar "Mostrando perfil..."
    caso 2:
        mostrar "Abriendo configuración..."
    caso 3:
        mostrar "Mostrando ayuda..."
    caso 4:
        mostrar "¡Hasta luego!"
    pordefecto:
        mostrar "Opción no válida"
}`,
      explanation: "Los menús de aplicaciones a menudo se implementan con estructuras elegir/caso.",
      challenge: "Crea un menú de calculadora con opciones: 1=Sumar, 2=Restar, 3=Multiplicar, 4=Dividir.",
      validation: {
        requiredCode: ["elegir", "caso 1", "caso 2", "caso 3", "caso 4"],
      },
    },
    {
      title: "Elegir vs Si/Sino",
      content: "elegir/caso es más limpio cuando tienes muchas opciones basadas en un solo valor.",
      code: `variable nota = 85

// Con si/sino (más largo)
si nota >= 90 {
    mostrar "Excelente"
} sino si nota >= 80 {
    mostrar "Muy bien"
} sino si nota >= 70 {
    mostrar "Bien"
} sino {
    mostrar "Necesita mejorar"
}

// Con elegir (para valores exactos)
variable calificacion = "B"
elegir (calificacion) {
    caso "A":
        mostrar "Sobresaliente"
    caso "B":
        mostrar "Notable"
    caso "C":
        mostrar "Aprobado"
    pordefecto:
        mostrar "Reprobado"
}`,
      explanation: "Usa si/sino para rangos y condiciones complejas. Usa elegir/caso para valores exactos.",
      challenge: "Crea un programa que asigne una calificación en letras (A, B, C, D, F) y muestre su descripción.",
      validation: {
        requiredCode: ["elegir", "caso", "/A|B|C|D|F/"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina elegir/caso con otras estructuras para programas más completos.",
      code: `variable comando = "ayuda"

mostrar "Procesando comando: " + comando

elegir (comando) {
    caso "inicio":
        mostrar "Iniciando aplicación..."
        mostrar "Bienvenido al sistema"
    caso "ayuda":
        mostrar "=== AYUDA ==="
        mostrar "Comandos disponibles:"
        mostrar "- inicio: Inicia la aplicación"
        mostrar "- ayuda: Muestra esta ayuda"
        mostrar "- salir: Cierra la aplicación"
    caso "salir":
        mostrar "Cerrando aplicación..."
        mostrar "¡Hasta pronto!"
    pordefecto:
        mostrar "Comando no reconocido"
        mostrar "Escribe 'ayuda' para ver opciones"
}`,
      explanation: "Cada caso puede tener múltiples líneas de código.",
      challenge: "Crea un sistema de tickets: opción 1=crear ticket, 2=ver tickets, 3=cerrar ticket.",
      summary: "🧠 Recuerda:\n\n• elegir (valor) { caso X: ... }\n• Cada caso compara con un valor exacto\n• pordefecto: se ejecuta si ningún caso coincide\n• Más limpio que muchos si/sino\n• Ideal para menús y opciones múltiples",
      validation: {
        requiredCode: ["elegir", "caso 1", "caso 2", "caso 3"],
      },
    },
  ],
};
