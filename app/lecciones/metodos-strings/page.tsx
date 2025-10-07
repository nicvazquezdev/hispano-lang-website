import LessonPage from "@/components/lessons/LessonPage";

export default function MetodosStringsLesson() {
  const steps = [
    {
      title: "¿Qué son los métodos de strings?",
      content:
        "Los métodos de strings son funciones especiales que nos permiten manipular y transformar texto. Todo texto (string) en HispanoLang tiene métodos incorporados que podemos usar para obtener información sobre el texto o modificarlo de diferentes formas. Es como tener herramientas especializadas para trabajar con palabras y frases.",
      code: `variable saludo = "Hola Mundo"

mostrar saludo
mostrar "Tipo de dato: texto"
mostrar "Tiene métodos especiales"`,
      explanation:
        "En HispanoLang, cada cadena de texto (string) tiene métodos incorporados que podemos llamar usando la notación de punto. Los métodos son como funciones que pertenecen al texto y nos permiten hacer operaciones comunes sin tener que escribir código complejo. Por ejemplo, en lugar de crear una función manual para contar caracteres, simplemente usamos el método `.longitud()`. Estos métodos hacen que trabajar con texto sea mucho más fácil y el código más expresivo. Son especialmente útiles para validar entrada de usuarios, formatear mensajes, o procesar datos textuales.",
      challenge:
        "🧩 Desafío rápido: Crea una variable con tu frase favorita y muéstrala. Luego exploraremos los métodos disponibles en los siguientes pasos.",
    },
    {
      title: "Método longitud()",
      content:
        "El método `.longitud()` nos dice cuántos caracteres tiene un string, incluyendo espacios y signos de puntuación. Es muy útil para validaciones (como verificar que una contraseña tenga al menos 8 caracteres), contar palabras, o simplemente obtener información sobre el texto que estamos procesando.",
      code: `variable texto1 = "Hola"
variable texto2 = "Hola mundo"
variable texto3 = "HispanoLang es genial"

mostrar "'" + texto1 + "' tiene " + texto1.longitud() + " caracteres"
mostrar "'" + texto2 + "' tiene " + texto2.longitud() + " caracteres"
mostrar "'" + texto3 + "' tiene " + texto3.longitud() + " caracteres"

variable nombre = "Ana"
si nombre.longitud() < 3 {
    mostrar "Nombre muy corto"
} sino {
    mostrar "Nombre válido"
}`,
      explanation:
        "El método `.longitud()` cuenta todos los caracteres del string, incluyendo letras, números, espacios, y símbolos de puntuación. 'Hola' tiene 4 caracteres, 'Hola mundo' tiene 10 (incluyendo el espacio). Este método es fundamental para:\n\n• Validar longitud de contraseñas o campos de formulario\n• Limitar la cantidad de caracteres en un mensaje\n• Verificar que el usuario ingresó información\n• Calcular cuánto espacio ocupará el texto\n\nEs importante notar que los espacios cuentan como caracteres. El método siempre retorna un número, que podemos usar en comparaciones, cálculos, o mostrar directamente.",
      challenge:
        "🧩 Desafío rápido: Pide al usuario su nombre completo. Verifica que tenga al menos 5 caracteres. Si es muy corto, muestra un mensaje de error; si no, muestra cuántos caracteres tiene.",
    },
    {
      title: "Método mayusculas()",
      content:
        "El método `.mayusculas()` convierte todo el texto a letras mayúsculas. Es útil para formatear títulos, normalizar datos para comparaciones (evitar problemas con mayúsculas/minúsculas), o crear texto que destaque visualmente. Este método no modifica el string original, sino que retorna uno nuevo transformado.",
      code: `variable texto = "hola mundo"
variable textoMayusculas = texto.mayusculas()

mostrar "Original: " + texto
mostrar "Mayúsculas: " + textoMayusculas

variable nombre = "ana garcía"
mostrar "Nombre en mayúsculas: " + nombre.mayusculas()

variable titulo = "bienvenido a hispanolang"
mostrar titulo.mayusculas()`,
      explanation:
        "El método `.mayusculas()` retorna una nueva cadena con todas las letras convertidas a mayúsculas. El string original no cambia (los strings son inmutables). En el ejemplo, `texto` sigue siendo 'hola mundo' después de llamar al método, pero `textoMayusculas` contiene 'HOLA MUNDO'. Esto es útil para:\n\n• Formatear títulos o encabezados\n• Normalizar texto antes de comparar (para que 'ANA' y 'ana' se consideren iguales)\n• Crear énfasis visual en mensajes importantes\n• Procesar entrada de usuario de forma consistente\n\nPodemos usar el resultado directamente en un `mostrar` o guardarlo en una variable para usarlo después.",
      challenge:
        "🧩 Desafío rápido: Crea tres variables con nombres de ciudades en minúsculas. Muestra cada una convertida a mayúsculas, formateando el mensaje como 'CIUDAD: [nombre en mayúsculas]'.",
    },
    {
      title: "Método minusculas()",
      content:
        "El método `.minusculas()` convierte todo el texto a letras minúsculas. Al igual que `.mayusculas()`, es muy útil para normalizar datos y asegurar consistencia en comparaciones. Es especialmente común en validaciones donde no queremos que las mayúsculas/minúsculas afecten el resultado.",
      code: `variable texto = "HOLA MUNDO"
variable textoMinusculas = texto.minusculas()

mostrar "Original: " + texto
mostrar "Minúsculas: " + textoMinusculas

variable email = "USUARIO@EMAIL.COM"
mostrar "Email normalizado: " + email.minusculas()

// Comparación case-insensitive
variable respuesta = "SI"
si respuesta.minusculas() == "si" {
    mostrar "Respuesta afirmativa"
}`,
      explanation:
        "El método `.minusculas()` funciona igual que `.mayusculas()` pero en dirección opuesta: convierte todas las letras a minúsculas. El string original permanece sin cambios. Este método es especialmente útil para:\n\n• Normalizar emails (usuario@email.com)\n• Comparaciones case-insensitive (ignorar mayúsculas/minúsculas)\n• Crear URLs amigables (mi-pagina-web)\n• Procesar comandos de usuario\n\nEn el ejemplo del final, normalizamos la respuesta a minúsculas antes de compararla, así 'SI', 'Si', 'sI' y 'si' son todas válidas. Este patrón es muy común en programación real: normalizar antes de comparar evita bugs relacionados con diferencias de capitalización.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que pida al usuario un comando ('AYUDA', 'SALIR', 'CONTINUAR'). Normaliza el comando a minúsculas y usa condicionales para responder apropiadamente a cada comando.",
    },
    {
      title: "Combinando Métodos de Strings",
      content:
        "Podemos combinar múltiples métodos de strings para crear transformaciones más complejas. También podemos usar métodos junto con otras operaciones como concatenación, comparación, o almacenamiento en variables. Esta flexibilidad nos permite procesar texto de formas sofisticadas con código simple y expresivo.",
      code: `variable mensaje = "   HispanoLang es GENIAL   "

// Métodos encadenados (uno tras otro)
variable procesado = mensaje.minusculas()

mostrar "Original: '" + mensaje + "'"
mostrar "Procesado: '" + procesado + "'"
mostrar "Longitud original: " + mensaje.longitud()
mostrar "Longitud procesado: " + procesado.longitud()

// Validación de entrada
variable password = "MiPassword123"
si password.longitud() >= 8 {
    mostrar "Contraseña válida"
    mostrar "En mayúsculas: " + password.mayusculas()
}`,
      explanation:
        "Podemos combinar métodos de strings de múltiples formas:\n\n• **Guardar en variables**: Para usar el resultado después\n• **Usar en expresiones**: Directamente en concatenaciones o comparaciones\n• **Combinar con condicionales**: Para validaciones\n• **Encadenar métodos**: Aunque en este ejemplo usamos uno a la vez\n\nLos métodos de strings son no-destructivos: el string original nunca cambia. Cada método retorna un nuevo string transformado. Esto hace que sea seguro experimentar con transformaciones sin preocuparte por perder los datos originales. En aplicaciones reales, estos métodos son fundamentales para limpiar y normalizar entrada de usuarios, formatear salida, y procesar datos textuales de forma robusta.",
      challenge:
        "🧩 Desafío rápido: Pide al usuario su nombre y apellido. Convierte el nombre a mayúsculas y el apellido a minúsculas. Muestra ambos y la longitud total de caracteres (nombre + apellido).",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas que procesen y manipulen texto de formas creativas. Los métodos de strings son herramientas fundamentales para trabajar con datos textuales. Combínalos con todo lo que has aprendido para crear validadores, formateadores, procesadores de texto, y más.",
      code: `variable texto = "HispanoLang"

mostrar "Original: " + texto
mostrar "Mayúsculas: " + texto.mayusculas()
mostrar "Minúsculas: " + texto.minusculas()
mostrar "Longitud: " + texto.longitud()

variable esLargo = texto.longitud() > 10
mostrar "¿Es largo?: " + esLargo`,
      explanation:
        "En esta práctica libre, experimenta con diferentes métodos de strings. Intenta crear validadores de formularios, normalizadores de datos, formateadores de texto, o cualquier programa que procese información textual. Combina métodos con condicionales para crear validaciones, con bucles para procesar múltiples textos, y con funciones para encapsular operaciones de procesamiento. Los métodos de strings son la base para crear interfaces de usuario robustas que manejen entrada de usuarios de forma segura y consistente. Piensa en casos de uso reales: validar emails, normalizar nombres, verificar longitudes, o formatear mensajes.",
      challenge:
        "🧩 Desafío rápido: Crea un validador de usuario: pide nombre de usuario y contraseña. El usuario debe tener al menos 4 caracteres, la contraseña al menos 8. Convierte el usuario a minúsculas antes de validar. Muestra si la validación pasó o falló.",
      summary:
        "🧠 Recuerda:\n\n• `.longitud()` retorna cuántos caracteres tiene el string.\n• `.mayusculas()` convierte todo a MAYÚSCULAS.\n• `.minusculas()` convierte todo a minúsculas.\n• Los métodos no modifican el string original, retornan uno nuevo.\n• Combina métodos con condicionales para validaciones.\n• Normaliza texto antes de comparar para evitar bugs.\n• ¡Los métodos de strings son esenciales para procesar texto!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🔤", text: "Lección 3" }}
      title="Métodos de Strings en"
      titleGradient=" Hispano Lang"
      description="Aprende a manipular y transformar texto con métodos de strings"
      steps={steps}
      prevLessonUrl="/lecciones/tipos-datos"
      prevLessonTitle="Tipos de Datos"
      nextLessonUrl="/lecciones/operadores"
      nextLessonTitle="Operadores"
    />
  );
}
