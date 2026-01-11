import { LessonContent } from "../types";

export const metodosStrings: LessonContent = {
  badge: { emoji: "🔤", text: "Lección 5" },
  title: "Métodos de Strings en",
  titleGradient: " HispanoLang",
  description: "Aprende a manipular y transformar texto",
  prev: { url: "/lecciones/tipos-datos", title: "Tipos de Datos" },
  next: { url: "/lecciones/template-strings", title: "Template Strings" },
  steps: [
    {
      title: "¿Qué son los métodos de strings?",
      content: "Los métodos de strings son funciones especiales para manipular texto.",
      code: `variable saludo = "Hola Mundo"
mostrar saludo
mostrar "Longitud: " + saludo.longitud`,
      explanation: "Cada string tiene métodos y propiedades como .longitud que podemos usar con la notación de punto.",
      challenge: "Crea una variable con tu frase favorita y muestra cuántos caracteres tiene.",
      validation: {
        requiredCode: [".longitud"],
      },
    },
    {
      title: "Mayúsculas y minúsculas",
      content: "Convierte texto entre mayúsculas y minúsculas con .mayusculas() y .minusculas().",
      code: `variable texto = "HispanoLang"
mostrar "Original: " + texto
mostrar "Mayúsculas: " + texto.mayusculas()
mostrar "Minúsculas: " + texto.minusculas()

variable respuesta = "SI"
si respuesta.minusculas() == "si" {
    mostrar "Respuesta afirmativa"
}`,
      explanation: "Normalizar a minúsculas antes de comparar evita problemas de mayúsculas/minúsculas.",
      challenge: "Crea una variable con una ciudad. Muéstrala en mayúsculas y en minúsculas.",
      validation: {
        requiredCode: [".mayusculas()", ".minusculas()"],
      },
    },
    {
      title: "Buscar en strings",
      content: "Verifica si un texto contiene, empieza o termina con cierta subcadena.",
      code: `variable texto = "HispanoLang es genial"

mostrar texto.incluye("Lang")        // verdadero
mostrar texto.empiezaCon("Hispano")  // verdadero
mostrar texto.terminaCon("genial")   // verdadero
mostrar texto.contiene("Python")     // falso`,
      explanation: "incluye() y contiene() hacen lo mismo. empiezaCon() y terminaCon() verifican inicio y final.",
      challenge: "Crea un validador que verifique si un email contiene '@' y termina en '.com'.",
      validation: {
        requiredCode: [".incluye(", ".terminaCon("],
      },
    },
    {
      title: "Dividir y unir",
      content: "Divide un string en partes con .dividir() y obtén caracteres específicos.",
      code: `variable texto = "uno,dos,tres"
variable partes = texto.dividir(",")
mostrar partes  // ["uno", "dos", "tres"]

variable oracion = "Hola mundo"
variable palabras = oracion.dividir(" ")
mostrar palabras  // ["Hola", "mundo"]

mostrar texto.caracter(0)  // "u"
mostrar texto.caracter(4)  // "d"`,
      explanation: "dividir() separa el texto por un delimitador. caracter() obtiene un carácter por índice.",
      challenge: "Divide la frase 'rojo,verde,azul' por comas y muestra cada color.",
      validation: {
        requiredCode: [".dividir("],
      },
    },
    {
      title: "Subcadenas y reemplazar",
      content: "Extrae porciones de texto y reemplaza contenido.",
      code: `variable texto = "HispanoLang"
mostrar texto.subcadena(0, 7)   // "Hispano"
mostrar texto.subcadena(7)      // "Lang"

variable frase = "Hola mundo, mundo feliz"
mostrar frase.reemplazar("mundo", "universo")
// "Hola universo, universo feliz"`,
      explanation: "subcadena(inicio, fin) extrae una porción. reemplazar() cambia todas las ocurrencias.",
      challenge: "Extrae 'Hispano' de 'HispanoLang' usando subcadena(). Luego reemplaza 'Lang' por 'Code'.",
      validation: {
        requiredCode: [".subcadena(", ".reemplazar("],
      },
    },
    {
      title: "Recortar e invertir",
      content: "Elimina espacios con recortar() e invierte texto con invertir().",
      code: `variable texto = "   Hola mundo   "
mostrar "'" + texto + "'"
mostrar "'" + texto.recortar() + "'"  // "Hola mundo"

variable palabra = "Hola"
mostrar palabra.invertir()  // "aloH"`,
      explanation: "recortar() quita espacios al inicio y final. invertir() voltea el texto.",
      challenge: "Crea un texto con espacios al inicio y final. Recórtalo y luego inviértelo.",
      validation: {
        requiredCode: [".recortar()", ".invertir()"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina todos los métodos de strings para resolver problemas.",
      code: `variable email = "  Usuario@Email.COM  "

// Limpiar y normalizar
variable limpio = email.recortar().minusculas()
mostrar limpio  // "usuario@email.com"

// Validar
si limpio.incluye("@") y limpio.terminaCon(".com") {
    mostrar "Email válido"
}

// Obtener usuario
variable partes = limpio.dividir("@")
mostrar "Usuario: " + partes[0]`,
      explanation: "Los métodos se pueden encadenar y combinar para procesar texto de forma poderosa.",
      challenge: "Crea un validador de contraseñas: mínimo 8 caracteres y debe contener '@' o '#'.",
      summary: "🧠 Métodos de Strings:\n\n• .longitud - cantidad de caracteres\n• .mayusculas() / .minusculas() - cambiar caso\n• .incluye() / .contiene() - buscar texto\n• .empiezaCon() / .terminaCon() - verificar extremos\n• .dividir() - separar en array\n• .subcadena() - extraer porción\n• .reemplazar() - cambiar texto\n• .recortar() - quitar espacios\n• .caracter() - obtener carácter\n• .invertir() - voltear texto",
      validation: {
        requiredCode: [".longitud", "/incluye|contiene/"],
      },
    },
  ],
};
