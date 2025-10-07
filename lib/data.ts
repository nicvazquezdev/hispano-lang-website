export const docsData = {
  variables: {
    title: "📦 Variables",
    description:
      "Las variables son contenedores que almacenan datos que puedes usar y modificar durante la ejecución de tu programa. Son fundamentales para cualquier programa ya que te permiten guardar información, realizar cálculos, y mantener el estado de tu aplicación.",
    subsections: [
      {
        title: "Declaración de Variables",
        description:
          "En HispanoLang, usamos la palabra clave 'variable' seguida del nombre que queremos darle y el valor inicial. Puedes declarar variables de cualquier tipo: números, texto, booleanos, listas, objetos, o valores especiales.",
        syntax: "variable nombreVariable = valor",
        code: `variable nombre = "Juan"
variable edad = 25
variable activo = verdadero
variable salario = 50000.50
variable valorNulo = nulo
variable valorIndefinido = indefinido`,
        notes: [
          "El nombre de la variable puede contener letras (a-z, A-Z), números (0-9) y guiones bajos (_)",
          "Debe comenzar con una letra o guion bajo, no puede empezar con un número",
          "Los nombres son sensibles a mayúsculas/minúsculas: 'edad' y 'Edad' son variables diferentes",
          "Se recomienda usar nombres descriptivos que indiquen qué almacena la variable",
          "Usa snake_case (mi_variable) o camelCase (miVariable) para nombres con múltiples palabras",
        ],
      },
      {
        title: "Reasignación de Variables",
        description:
          "Puedes cambiar el valor de una variable en cualquier momento usando el operador de asignación (=). Esto sobrescribe el valor anterior con el nuevo valor. La variable mantiene su nombre pero cambia su contenido.",
        code: `variable contador = 0
mostrar contador  // 0

contador = 5
mostrar contador  // 5

contador = contador + 1
mostrar contador  // 6`,
        notes: [
          "La reasignación usa el mismo operador = que la declaración inicial",
          "No necesitas la palabra 'variable' al reasignar, solo al declarar por primera vez",
          "Puedes usar el valor actual de la variable en la expresión de reasignación (ej: contador = contador + 1)",
          "El tipo de dato puede cambiar: una variable que era número puede convertirse en texto",
        ],
      },
      {
        title: "Alcance de Variables",
        description:
          "Las variables declaradas dentro de funciones o bloques son locales a ese contexto. Las variables declaradas fuera son globales y accesibles desde cualquier parte del programa.",
        code: `variable global = "Soy global"

funcion miFuncion() {
    variable local = "Soy local"
    mostrar global  // Funciona: acceso a variable global
    mostrar local   // Funciona: acceso a variable local
}

miFuncion()
mostrar global  // Funciona: variable global
// mostrar local  // Error: 'local' no existe aquí`,
      },
    ],
  },
  comentarios: {
    title: "💭 Comentarios",
    description:
      "Los comentarios son líneas de texto que el intérprete ignora completamente. Sirven para documentar tu código, escribir notas, o desactivar líneas temporalmente.",
    subsections: [
      {
        title: "Sintaxis de Comentarios",
        description:
          "Los comentarios en HispanoLang empiezan con dos barras diagonales (//) y continúan hasta el final de la línea.",
        syntax: "// Este es un comentario",
        code: `// Este es un comentario
variable x = 10
mostrar x  // Comentario al final de la línea`,
        notes: [
          "Los comentarios empiezan con //",
          "Todo después de // en esa línea es ignorado",
          "Puedes poner comentarios en su propia línea o al final de código",
          "Los comentarios no afectan la ejecución del programa",
        ],
      },
      {
        title: "Usos de Comentarios",
        description:
          "Los comentarios tienen múltiples propósitos: explicar código, documentar decisiones, dejar recordatorios, o desactivar código temporalmente.",
        code: `// Programa: Calculadora de descuento
// Autor: Tu nombre

variable precio = 100
// Aplicamos 20% de descuento
variable descuento = precio * 0.20
variable precioFinal = precio - descuento

// mostrar "Debug: precio = " + precio  // Código comentado
mostrar "Precio final: " + precioFinal`,
        notes: [
          "Usa comentarios para explicar el 'por qué', no solo el 'qué'",
          "Comenta código para desactivarlo sin borrarlo",
          "Documenta decisiones importantes o algoritmos complejos",
          "Evita comentarios obvios que repiten lo que el código ya dice",
        ],
      },
    ],
  },
  tiposDatos: {
    title: "🔢 Tipos de Datos",
    description:
      "HispanoLang soporta múltiples tipos de datos básicos: números, cadenas de texto, booleanos y valores especiales. Cada tipo tiene sus propias características y operaciones permitidas.",
    subsections: [
      {
        title: "Números",
        description:
          "Los números pueden ser enteros (sin decimales) o decimales (con punto flotante). También pueden ser positivos o negativos. No necesitan comillas y se pueden usar en operaciones matemáticas directamente.",
        code: `variable entero = 42
variable decimal = 3.14
variable negativo = -10
variable grande = 1000000

// Operaciones matemáticas
variable suma = entero + decimal  // 45.14
variable producto = entero * 2    // 84
variable division = entero / 2    // 21`,
        notes: [
          "Los números no llevan comillas",
          "Usa punto (.) para decimales, no coma",
          "Los números pueden ser tan grandes o pequeños como necesites",
          "Puedes mezclar enteros y decimales en operaciones",
          "Soporta notación científica para números muy grandes o pequeños",
        ],
      },
      {
        title: "Cadenas de Texto (Strings)",
        description:
          "Las cadenas de texto representan palabras, frases o cualquier secuencia de caracteres. Deben ir siempre entre comillas dobles (\") o simples ('). Puedes usar el operador + para concatenar (unir) cadenas.",
        code: `variable saludo = "Hola mundo"
variable nombre = 'Juan'
variable apellido = "García"

// Concatenación
variable nombreCompleto = nombre + " " + apellido
mostrar nombreCompleto  // "Juan García"

// Mezclar con números
variable edad = 25
variable mensaje = nombre + " tiene " + edad + " años"

// Métodos de strings
mostrar saludo.longitud()      // 10
mostrar saludo.mayusculas()   // "HOLA MUNDO"
mostrar saludo.minusculas()   // "hola mundo"`,
        notes: [
          "Las cadenas siempre van entre comillas (dobles \" o simples ')",
          "El operador + concatena (une) cadenas de texto",
          "Cuando concatenas texto con números, el número se convierte automáticamente a texto",
          "Métodos disponibles: .longitud(), .mayusculas(), .minusculas()",
          "Usa comillas dobles preferentemente para consistencia",
        ],
      },
      {
        title: "Booleanos",
        description:
          "Los valores booleanos solo pueden ser verdadero o falso. Se usan para representar estados lógicos, condiciones, o respuestas de sí/no. Son fundamentales para condicionales y lógica de programación.",
        code: `variable activo = verdadero
variable inactivo = falso

// Uso en condicionales
si activo {
    mostrar "El sistema está activo"
}

// Resultado de comparaciones
variable esMayor = 10 > 5      // verdadero
variable esIgual = 5 == 5      // verdadero
variable esDiferente = 5 != 3  // verdadero

// Operadores lógicos
variable ambos = verdadero y falso  // falso
variable alguno = verdadero o falso  // verdadero
variable negacion = !verdadero       // falso`,
        notes: [
          "Solo hay dos valores booleanos: verdadero y falso",
          "No usan comillas, son palabras clave del lenguaje",
          "Los operadores de comparación (>, <, ==, !=, >=, <=) retornan booleanos",
          "Los operadores lógicos (y, o, !) trabajan con booleanos",
          "En HispanoLang usamos 'verdadero' y 'falso' en español",
        ],
      },
      {
        title: "Valores Especiales: nulo e indefinido",
        description:
          "HispanoLang tiene dos valores especiales para representar la ausencia de valor. 'nulo' indica que intencionalmente no hay valor, mientras que 'indefinido' indica que algo no ha sido inicializado o no existe.",
        code: `variable sinValor = nulo
variable noDefinido = indefinido

// Uso común: campos opcionales
variable telefono = nulo  // No tiene teléfono

// Verificar valores especiales
si telefono == nulo {
    mostrar "No hay teléfono registrado"
}

// Diferencia entre nulo e indefinido
variable email = nulo        // Intencionalmente vacío
variable direccion           // indefinido (no asignado)`,
        notes: [
          "'nulo' se usa cuando intencionalmente no hay valor (campo opcional vacío)",
          "'indefinido' indica que algo no ha sido definido o inicializado",
          "Ambos son diferentes de 0, '' (cadena vacía), o falso",
          "Son útiles para validaciones y manejo de datos opcionales",
          "Usa 'nulo' cuando explícitamente quieres indicar ausencia de valor",
        ],
      },
    ],
  },
};
