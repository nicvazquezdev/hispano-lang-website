import { LessonContent } from "../types";

export const metodosStrings: LessonContent = {
  badge: { emoji: "🔤", text: "Lección 4" },
  title: "Métodos de Strings en",
  titleGradient: " HispanoLang",
  description: "Aprende a manipular y transformar texto",
  prev: { url: "/lecciones/tipos-datos", title: "Tipos de Datos" },
  next: { url: "/lecciones/operadores", title: "Operadores" },
  steps: [
    {
      title: "¿Qué son los métodos de strings?",
      content: "Los métodos de strings son funciones especiales para manipular texto.",
      code: `variable saludo = "Hola Mundo"
mostrar saludo
mostrar "Longitud: " + saludo.longitud()`,
      explanation: "Cada string tiene métodos como .longitud() que podemos usar con la notación de punto.",
      challenge: "Crea una variable con tu frase favorita y muestra cuántos caracteres tiene.",
      validation: {
        requiredCode: [".longitud()"],
      },
    },
    {
      title: "Método longitud()",
      content: "El método .longitud() nos dice cuántos caracteres tiene un string.",
      code: `variable texto = "Hola"
mostrar "'" + texto + "' tiene " + texto.longitud() + " caracteres"

variable nombre = "Ana"
si nombre.longitud() < 3 {
    mostrar "Nombre muy corto"
} sino {
    mostrar "Nombre válido"
}`,
      explanation: "Útil para validar longitud de contraseñas o campos de formulario.",
      challenge: "Crea un nombre y verifica si tiene al menos 5 caracteres. Muestra un mensaje según el resultado.",
      validation: {
        requiredCode: [".longitud()", "/si\\s+/", "/>=?\\s*5|>\\s*4/"],
      },
    },
    {
      title: "Método mayusculas()",
      content: "Convierte todo el texto a mayúsculas.",
      code: `variable texto = "hola mundo"
mostrar "Original: " + texto
mostrar "Mayúsculas: " + texto.mayusculas()`,
      explanation: "No modifica el original, retorna un nuevo string.",
      challenge: "Crea una variable con una ciudad en minúsculas. Muéstrala en mayúsculas.",
      validation: {
        requiredCode: [".mayusculas()"],
      },
    },
    {
      title: "Método minusculas()",
      content: "Convierte todo el texto a minúsculas. Útil para normalizar datos.",
      code: `variable texto = "HOLA MUNDO"
mostrar "Original: " + texto
mostrar "Minúsculas: " + texto.minusculas()

variable respuesta = "SI"
si respuesta.minusculas() == "si" {
    mostrar "Respuesta afirmativa"
}`,
      explanation: "Normalizar a minúsculas antes de comparar evita problemas de mayúsculas/minúsculas.",
      challenge: "Crea un comando en mayúsculas. Normalízalo a minúsculas y compáralo con una palabra.",
      validation: {
        requiredCode: [".minusculas()", "=="],
      },
    },
    {
      title: "Combinando Métodos",
      content: "Podemos combinar métodos para transformaciones más complejas.",
      code: `variable mensaje = "HispanoLang"

mostrar "Original: " + mensaje
mostrar "Mayúsculas: " + mensaje.mayusculas()
mostrar "Minúsculas: " + mensaje.minusculas()
mostrar "Longitud: " + mensaje.longitud()`,
      explanation: "Combina métodos con condicionales para validaciones completas.",
      challenge: "Crea nombre y apellido. Muestra nombre en mayúsculas y apellido en minúsculas.",
      validation: {
        requiredCode: ["nombre", "apellido", ".mayusculas()", ".minusculas()"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Crea programas que procesen texto de formas creativas.",
      code: `variable texto = "HispanoLang"

mostrar "Original: " + texto
mostrar "Mayúsculas: " + texto.mayusculas()
mostrar "Minúsculas: " + texto.minusculas()
mostrar "Longitud: " + texto.longitud()`,
      explanation: "Combina métodos de strings con condicionales para validaciones.",
      challenge: "Crea un validador: usuario (mín 4 chars) y contraseña (mín 8 chars). Muestra si son válidos.",
      summary: "🧠 Recuerda:\n\n• .longitud() retorna cantidad de caracteres\n• .mayusculas() convierte a MAYÚSCULAS\n• .minusculas() convierte a minúsculas\n• Los métodos no modifican el original",
      validation: {
        requiredCode: ["usuario", "contrase", ".longitud()", "/si\\s+/"],
      },
    },
  ],
};
