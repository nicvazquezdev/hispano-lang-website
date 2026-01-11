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
  metodosStrings: {
    title: "🔤 Métodos de Strings",
    description:
      "Los métodos de strings son funciones especiales que permiten manipular y transformar texto de forma sencilla. Cada cadena de texto tiene acceso a estos métodos usando la notación de punto.",
    subsections: [
      {
        title: "Longitud y Acceso a Caracteres",
        description:
          "Obtén la cantidad de caracteres de un string y accede a caracteres individuales por su posición.",
        code: `variable texto = "HispanoLang"

// Longitud del texto
mostrar texto.longitud()  // 11

// Acceder a un carácter por índice (empieza en 0)
mostrar texto.caracter(0)   // "H"
mostrar texto.caracter(7)   // "L"
mostrar texto.caracter(10)  // "g"`,
        notes: [
          ".longitud() retorna la cantidad de caracteres del string",
          ".caracter(indice) retorna el carácter en la posición indicada",
          "Los índices empiezan en 0, no en 1",
          "El último carácter está en el índice longitud() - 1",
        ],
      },
      {
        title: "Mayúsculas y Minúsculas",
        description:
          "Convierte texto entre mayúsculas y minúsculas para normalizar o formatear.",
        code: `variable texto = "HispanoLang"

mostrar texto.mayusculas()  // "HISPANOLANG"
mostrar texto.minusculas()  // "hispanolang"

// Uso práctico: comparación insensible a mayúsculas
variable respuesta = "SI"
si respuesta.minusculas() == "si" {
    mostrar "Respuesta afirmativa"
}

variable email = "Usuario@Email.COM"
mostrar email.minusculas()  // "usuario@email.com"`,
        notes: [
          ".mayusculas() convierte todo el texto a mayúsculas",
          ".minusculas() convierte todo el texto a minúsculas",
          "Útil para normalizar antes de comparar textos",
          "El texto original no se modifica, se retorna uno nuevo",
        ],
      },
      {
        title: "Búsqueda en Strings",
        description:
          "Verifica si un texto contiene, empieza o termina con cierta subcadena.",
        code: `variable texto = "HispanoLang es genial"

// Verificar si contiene
mostrar texto.incluye("Lang")       // verdadero
mostrar texto.contiene("Python")    // falso

// Verificar inicio y final
mostrar texto.empiezaCon("Hispano")  // verdadero
mostrar texto.empiezaCon("Lang")     // falso
mostrar texto.terminaCon("genial")   // verdadero
mostrar texto.terminaCon("Hispano")  // falso

// Validación de email
variable email = "usuario@correo.com"
si email.incluye("@") y email.terminaCon(".com") {
    mostrar "Email válido"
}`,
        notes: [
          ".incluye(texto) y .contiene(texto) son equivalentes",
          ".empiezaCon(texto) verifica si comienza con el texto dado",
          ".terminaCon(texto) verifica si termina con el texto dado",
          "Todas retornan verdadero o falso",
          "La búsqueda es sensible a mayúsculas/minúsculas",
        ],
      },
      {
        title: "Dividir y Extraer",
        description:
          "Divide un string en partes o extrae porciones específicas del texto.",
        code: `// Dividir por un separador
variable csv = "uno,dos,tres"
variable partes = csv.dividir(",")
mostrar partes  // ["uno", "dos", "tres"]

variable oracion = "Hola mundo feliz"
variable palabras = oracion.dividir(" ")
mostrar palabras  // ["Hola", "mundo", "feliz"]

// Extraer subcadenas
variable texto = "HispanoLang"
mostrar texto.subcadena(0, 7)   // "Hispano"
mostrar texto.subcadena(7)      // "Lang"
mostrar texto.subcadena(0, 4)   // "Hisp"`,
        notes: [
          ".dividir(separador) separa el texto y retorna una lista",
          ".subcadena(inicio, fin) extrae desde inicio hasta fin (sin incluir fin)",
          ".subcadena(inicio) extrae desde inicio hasta el final",
          "Los índices empiezan en 0",
        ],
      },
      {
        title: "Reemplazar Texto",
        description:
          "Reemplaza todas las ocurrencias de un texto por otro.",
        code: `variable frase = "Hola mundo, mundo feliz"

// Reemplazar todas las ocurrencias
mostrar frase.reemplazar("mundo", "universo")
// "Hola universo, universo feliz"

// Ejemplo práctico: limpiar datos
variable telefono = "123-456-7890"
mostrar telefono.reemplazar("-", "")
// "1234567890"

// Censurar palabras
variable texto = "Esta palabra mala es mala"
mostrar texto.reemplazar("mala", "****")
// "Esta palabra **** es ****"`,
        notes: [
          ".reemplazar(buscar, reemplazo) cambia todas las ocurrencias",
          "El texto original no se modifica, se retorna uno nuevo",
          "Si no encuentra el texto a buscar, retorna el original",
          "La búsqueda es sensible a mayúsculas/minúsculas",
        ],
      },
      {
        title: "Recortar e Invertir",
        description:
          "Elimina espacios en blanco y voltea el texto.",
        code: `// Recortar espacios
variable texto = "   Hola mundo   "
mostrar "'" + texto + "'"           // "'   Hola mundo   '"
mostrar "'" + texto.recortar() + "'"  // "'Hola mundo'"

// Invertir texto
variable palabra = "Hola"
mostrar palabra.invertir()  // "aloH"

// Verificar palíndromo
variable palindromo = "reconocer"
si palindromo == palindromo.invertir() {
    mostrar "Es un palíndromo"
}`,
        notes: [
          ".recortar() elimina espacios al inicio y al final",
          ".invertir() voltea el texto de atrás hacia adelante",
          "Útil para limpiar entrada del usuario",
          "invertir() es útil para verificar palíndromos",
        ],
      },
      {
        title: "Encadenamiento de Métodos",
        description:
          "Los métodos se pueden encadenar para realizar múltiples operaciones.",
        code: `variable email = "  Usuario@Email.COM  "

// Encadenar múltiples métodos
variable limpio = email.recortar().minusculas()
mostrar limpio  // "usuario@email.com"

// Procesar y validar
variable entrada = "   HispanoLang   "
variable procesado = entrada.recortar().mayusculas()
mostrar procesado  // "HISPANOLANG"

// Obtener nombre de usuario de email
variable correo = "juan.perez@empresa.com"
variable usuario = correo.dividir("@")[0]
mostrar usuario  // "juan.perez"`,
        notes: [
          "Cada método retorna un nuevo string, permitiendo encadenar",
          "Se ejecutan de izquierda a derecha",
          "El encadenamiento hace el código más limpio y legible",
          "Combina con otros métodos como dividir() para procesar datos",
        ],
      },
    ],
  },
  entradaSalida: {
    title: "💬 Entrada y Salida",
    description:
      "HispanoLang proporciona comandos simples para mostrar información al usuario (salida) y obtener información del usuario (entrada).",
    subsections: [
      {
        title: "Comando mostrar",
        description:
          "El comando 'mostrar' imprime valores en la consola. Puedes mostrar variables, resultados de expresiones, o texto literal.",
        syntax: "mostrar valor",
        code: `mostrar "Hola mundo"
mostrar variable
mostrar "El resultado es: " + resultado

// Múltiples mostrar
mostrar "Nombre: " + nombre
mostrar "Edad: " + edad`,
        notes: [
          "Puedes mostrar cualquier tipo de dato: números, texto, booleanos, listas, objetos",
          "Usa el operador + para concatenar texto con valores",
          "Cada 'mostrar' imprime en una nueva línea",
        ],
      },
      {
        title: "Comando leer",
        description:
          "El comando 'leer' obtiene entrada del usuario. Puedes agregar un mensaje opcional para indicar qué se espera del usuario.",
        syntax: 'leer nombreVariable ["mensaje opcional"]',
        code: `// Entrada básica
leer nombre
mostrar "Hola " + nombre

// Entrada con mensaje
leer edad "¿Cuál es tu edad?"
mostrar "Tienes " + edad + " años"`,
        notes: [
          "El programa se pausa hasta que el usuario ingrese datos",
          "El mensaje es opcional pero recomendado para claridad",
          "El valor ingresado se guarda en la variable especificada",
          "Siempre proporciona mensajes claros al usuario",
        ],
      },
    ],
  },
  operadores: {
    title: "➕ Operadores",
    description:
      "Los operadores son símbolos que permiten realizar operaciones sobre valores. HispanoLang incluye operadores aritméticos, de comparación, lógicos y de asignación.",
    subsections: [
      {
        title: "Operadores Aritméticos",
        description: "Realizan operaciones matemáticas básicas sobre números.",
        code: `variable a = 10
variable b = 5

variable suma = a + b        // 15
variable resta = a - b       // 5
variable producto = a * b    // 50
variable division = a / b    // 2
variable modulo = a % b      // 0 (resto de la división)`,
        notes: [
          "+ (suma): Suma dos números o concatena strings",
          "- (resta): Resta el segundo número del primero",
          "* (multiplicación): Multiplica dos números",
          "/ (división): Divide el primer número entre el segundo",
          "% (módulo): Retorna el resto de la división",
        ],
      },
      {
        title: "Operadores de Comparación",
        description:
          "Comparan dos valores y retornan un booleano (verdadero o falso).",
        code: `variable a = 10
variable b = 5

variable mayor = a > b       // verdadero
variable menor = a < b       // falso
variable mayorIgual = a >= b // verdadero
variable menorIgual = a <= b // falso
variable igual = a == b      // falso
variable diferente = a != b  // verdadero`,
        notes: [
          "> (mayor que): Verdadero si el primero es mayor",
          "< (menor que): Verdadero si el primero es menor",
          ">= (mayor o igual): Verdadero si es mayor o igual",
          "<= (menor o igual): Verdadero si es menor o igual",
          "== (igualdad): Verdadero si son iguales (comparación, no asignación)",
          "!= (diferente): Verdadero si son diferentes",
        ],
      },
      {
        title: "Operadores Lógicos",
        description:
          "Combinan expresiones booleanas para crear condiciones más complejas.",
        code: `variable a = verdadero
variable b = falso

variable and = a y b      // falso (AND)
variable or = a o b       // verdadero (OR)
variable not = !a         // falso (NOT)

// Ejemplo práctico
variable edad = 20
variable tienePermiso = verdadero
variable puedeEntrar = edad >= 18 y tienePermiso  // verdadero`,
        notes: [
          "y (AND): Verdadero solo si ambos operandos son verdaderos",
          "o (OR): Verdadero si al menos uno es verdadero",
          "! (NOT): Invierte el valor booleano",
          "Se evalúan de izquierda a derecha",
          "Usa paréntesis para controlar el orden de evaluación",
        ],
      },
      {
        title: "Operadores de Asignación",
        description:
          "Atajos para modificar variables realizando una operación y asignando el resultado.",
        code: `variable x = 10

x += 5   // Equivale a: x = x + 5  → 15
x -= 3   // Equivale a: x = x - 3  → 12
x *= 2   // Equivale a: x = x * 2  → 24
x /= 4   // Equivale a: x = x / 4  → 6
x %= 3   // Equivale a: x = x % 3  → 0`,
        notes: [
          "+= (sumar y asignar): x += 5 es lo mismo que x = x + 5",
          "-= (restar y asignar): x -= 3 es lo mismo que x = x - 3",
          "*= (multiplicar y asignar): x *= 2 es lo mismo que x = x * 2",
          "/= (dividir y asignar): x /= 4 es lo mismo que x = x / 4",
          "%= (módulo y asignar): x %= 3 es lo mismo que x = x % 3",
        ],
      },
      {
        title: "Operadores de Incremento/Decremento",
        description: "Atajos para incrementar o decrementar una variable en 1.",
        code: `variable contador = 5

contador++   // Post-incremento → 6
++contador   // Pre-incremento → 7
contador--   // Post-decremento → 6
--contador   // Pre-decremento → 5`,
        notes: [
          "++ (incremento): Suma 1 a la variable",
          "-- (decremento): Resta 1 a la variable",
          "Prefijo (++x): Incrementa y luego retorna el valor",
          "Sufijo (x++): Retorna el valor y luego incrementa",
        ],
      },
    ],
  },
  condicionales: {
    title: "🤔 Condicionales",
    description:
      "Las estructuras condicionales permiten ejecutar código solo cuando se cumplen ciertas condiciones. Son fundamentales para la toma de decisiones en programas.",
    subsections: [
      {
        title: "Estructura si",
        description:
          "Ejecuta un bloque de código solo si la condición es verdadera.",
        syntax: "si condicion { /* código */ }",
        code: `variable edad = 18

si edad >= 18 {
    mostrar "Eres mayor de edad"
}

// Con múltiples líneas
si edad >= 18 {
    mostrar "Eres mayor de edad"
    mostrar "Puedes votar"
}`,
        notes: [
          "La condición debe ser una expresión que evalúe a verdadero o falso",
          "Las llaves {} son obligatorias, incluso para una sola línea",
          "Si la condición es falsa, el bloque se salta",
        ],
      },
      {
        title: "Estructura si-sino",
        description:
          "Proporciona un camino alternativo cuando la condición es falsa.",
        syntax: "si condicion { /* código */ } sino { /* código */ }",
        code: `variable edad = 15

si edad >= 18 {
    mostrar "Eres mayor de edad"
    mostrar "Puedes votar"
} sino {
    mostrar "Eres menor de edad"
    mostrar "Aún no puedes votar"
}`,
        notes: [
          "Exactamente uno de los dos bloques se ejecuta",
          "El bloque 'sino' se ejecuta solo si la condición es falsa",
          "Es útil para manejar dos caminos mutuamente excluyentes",
        ],
      },
      {
        title: "Condicionales Anidados",
        description:
          "Puedes anidar estructuras condicionales para crear lógica más compleja.",
        code: `variable edad = 25
variable tieneLicencia = verdadero

si edad >= 18 {
    mostrar "Eres mayor de edad"
    
    si tieneLicencia {
        mostrar "Puedes conducir"
    } sino {
        mostrar "Necesitas obtener licencia"
    }
} sino {
    mostrar "Eres menor de edad"
    mostrar "No puedes conducir"
}`,
        notes: [
          "Puedes anidar 'si' dentro de otros 'si'",
          "Mantén una buena indentación para legibilidad",
          "No anides demasiado, considera refactorizar si tienes más de 3 niveles",
        ],
      },
    ],
  },
  bucles: {
    title: "🔄 Bucles",
    description:
      "Los bucles permiten repetir bloques de código múltiples veces. HispanoLang soporta bucles 'mientras' y 'para'.",
    subsections: [
      {
        title: "Bucle mientras",
        description: "Repite el código mientras la condición sea verdadera.",
        syntax: "mientras condicion { /* código */ }",
        code: `variable i = 0

mientras i < 5 {
    mostrar i
    i = i + 1
}

// Resultado: muestra 0, 1, 2, 3, 4`,
        notes: [
          "La condición se evalúa antes de cada iteración",
          "Si la condición es falsa desde el inicio, el bucle no se ejecuta nunca",
          "Asegúrate de que la condición pueda volverse falsa para evitar bucles infinitos",
          "Útil cuando no sabes cuántas iteraciones necesitas",
        ],
      },
      {
        title: "Bucle para",
        description:
          "Bucle con inicialización, condición e incremento en una sola línea. Ideal cuando conoces el número de iteraciones.",
        syntax: "para (inicialización; condición; incremento) { /* código */ }",
        code: `para (variable i = 0; i < 5; i = i + 1) {
    mostrar i
}

// Con pasos diferentes
para (variable i = 0; i < 10; i = i + 2) {
    mostrar i  // Muestra 0, 2, 4, 6, 8
}`,
        notes: [
          "Tres partes separadas por punto y coma: inicialización; condición; incremento",
          "La inicialización se ejecuta una sola vez al inicio",
          "La condición se evalúa antes de cada iteración",
          "El incremento se ejecuta al final de cada iteración",
          "Más compacto que 'mientras' para bucles con contador",
        ],
      },
      {
        title: "Control de Flujo: romper y continuar",
        description: "Palabras clave para controlar la ejecución de bucles.",
        code: `// romper: termina el bucle
para (variable i = 1; i <= 10; i = i + 1) {
    si i == 5 {
        romper
    }
    mostrar i  // Muestra 1, 2, 3, 4
}

// continuar: salta a la siguiente iteración
para (variable i = 1; i <= 5; i = i + 1) {
    si i == 3 {
        continuar
    }
    mostrar i  // Muestra 1, 2, 4, 5 (salta el 3)
}`,
        notes: [
          "romper: Termina el bucle inmediatamente",
          "continuar: Salta el resto de la iteración actual y va a la siguiente",
          "Útil para búsquedas (romper al encontrar) o filtrado (continuar si no cumple condición)",
          "Usa con moderación para mantener el código legible",
        ],
      },
    ],
  },
  funciones: {
    title: "⚡ Funciones",
    description:
      "Las funciones permiten encapsular código reutilizable. Puedes definir funciones con o sin parámetros, y pueden retornar valores.",
    subsections: [
      {
        title: "Declaración de Funciones",
        description:
          "Define una función usando la palabra clave 'funcion' seguida del nombre, parámetros entre paréntesis, y el código entre llaves.",
        syntax: "funcion nombreFuncion(parametros) { /* código */ }",
        code: `// Función sin parámetros
funcion saludar() {
    mostrar "Hola mundo"
}

saludar()  // Llamar la función

// Función con parámetros
funcion saludarPersona(nombre) {
    mostrar "Hola " + nombre
}

saludarPersona("Ana")
saludarPersona("Carlos")`,
        notes: [
          "El nombre de la función sigue las mismas reglas que las variables",
          "Los parámetros se separan con comas si hay múltiples",
          "Para llamar la función, usa su nombre seguido de paréntesis ()",
          "Si la función tiene parámetros, pasa los valores entre los paréntesis",
        ],
      },
      {
        title: "Retorno de Valores",
        description:
          "Las funciones pueden retornar valores usando la palabra 'retornar'. Esto permite usar el resultado de la función en expresiones.",
        syntax: "retornar valor",
        code: `funcion sumar(a, b) {
    retornar a + b
}

variable resultado = sumar(5, 3)
mostrar resultado  // 8

// Usar directamente
mostrar sumar(10, 20)  // 30

// En expresiones
variable total = sumar(5, 3) + sumar(2, 4)  // 14`,
        notes: [
          "'retornar' devuelve un valor y termina la función inmediatamente",
          "El código después de 'retornar' no se ejecuta",
          "Las funciones sin 'retornar' retornan 'indefinido' implícitamente",
          "Puedes retornar cualquier tipo de dato",
        ],
      },
      {
        title: "Funciones Anónimas",
        description: "Funciones sin nombre que se pueden asignar a variables.",
        code: `variable saludar = funcion(nombre) {
    retornar "Hola " + nombre
}

mostrar saludar("Mundo")  // "Hola Mundo"

// Como callback
variable numeros = [1, 2, 3]
numeros.recorrer(funcion(elemento) {
    mostrar elemento
})`,
        notes: [
          "Se crean usando 'funcion' sin nombre",
          "Se guardan en variables o se pasan como argumentos",
          "Útiles para callbacks y funciones de orden superior",
          "Funcionan igual que funciones normales",
        ],
      },
    ],
  },
  listas: {
    title: "📋 Listas (Arrays)",
    description:
      "Las listas permiten almacenar colecciones ordenadas de elementos. Soportan múltiples métodos para manipular y acceder a los datos.",
    subsections: [
      {
        title: "Creación y Acceso",
        description:
          "Las listas se crean con corchetes [] y se accede a elementos por índice (base 0).",
        syntax: "variable lista = [elemento1, elemento2, ...]",
        code: `// Creación
variable numeros = [1, 2, 3, 4, 5]
variable frutas = ["manzana", "banana", "naranja"]
variable mixto = [1, "hola", verdadero, 3.14]

// Acceso por índice (empieza en 0)
mostrar numeros[0]  // 1
mostrar frutas[1]   // "banana"

// Modificar elementos
numeros[1] = 25
mostrar numeros[1]  // 25`,
        notes: [
          "Los índices empiezan en 0, no en 1",
          "Puedes mezclar diferentes tipos de datos",
          "Usa lista[indice] para acceder o modificar",
          "Acceder a un índice fuera de rango causa error",
        ],
      },
      {
        title: "Métodos de Listas",
        description:
          "Las listas tienen métodos incorporados para operaciones comunes.",
        code: `variable frutas = ["manzana", "banana"]

// Información
mostrar frutas.longitud()  // 2
mostrar frutas.primero()   // "manzana"
mostrar frutas.ultimo()    // "banana"

// Agregar elementos
frutas.agregar("naranja")        // ["manzana", "banana", "naranja"]
frutas.agregar("uva", "pera")    // Agregar múltiples

// Remover elemento
variable eliminado = frutas.remover()  // Remueve y retorna el último

// Verificar
variable tiene = frutas.contiene("banana")  // verdadero`,
        notes: [
          ".longitud(): Retorna la cantidad de elementos",
          ".primero(): Retorna el primer elemento",
          ".ultimo(): Retorna el último elemento",
          ".agregar(elemento): Agrega al final de la lista",
          ".remover(): Elimina y retorna el último elemento",
          ".contiene(elemento): Verifica si el elemento existe",
        ],
      },
      {
        title: "Recorrer Listas",
        description:
          "El método .recorrer() ejecuta una función para cada elemento de la lista.",
        syntax: "lista.recorrer(funcion(elemento, indice) { /* código */ })",
        code: `variable frutas = ["manzana", "banana", "naranja"]

// Recorrer simple
frutas.recorrer(funcion(elemento) {
    mostrar "Fruta: " + elemento
})

// Recorrer con índice
frutas.recorrer(funcion(elemento, indice) {
    mostrar "Posición " + indice + ": " + elemento
})`,
        notes: [
          "La función se ejecuta una vez por cada elemento",
          "Primer parámetro: el elemento actual",
          "Segundo parámetro (opcional): el índice del elemento",
          "Útil para procesar todos los elementos de forma consistente",
        ],
      },
    ],
  },
  objetos: {
    title: "🗂️ Objetos",
    description:
      "Los objetos permiten almacenar datos estructurados usando pares clave-valor. Son ideales para representar entidades con múltiples propiedades.",
    subsections: [
      {
        title: "Creación de Objetos",
        description:
          "Los objetos se crean con llaves {} y contienen pares clave:valor separados por comas.",
        syntax: "variable objeto = { clave1: valor1, clave2: valor2 }",
        code: `variable persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

// Objeto vacío
variable vacio = {}`,
        notes: [
          "Usa llaves {} para crear objetos",
          "Cada propiedad tiene una clave y un valor separados por :",
          "Las propiedades se separan con comas",
          "Las claves no necesitan comillas (a menos que tengan espacios)",
          "Los valores pueden ser de cualquier tipo",
        ],
      },
      {
        title: "Acceso a Propiedades",
        description:
          "Usa la notación de punto para acceder o modificar propiedades de un objeto.",
        syntax: "objeto.propiedad",
        code: `variable persona = {
    nombre: "Juan",
    edad: 30
}

// Leer propiedades
mostrar persona.nombre  // "Juan"
mostrar persona.edad    // 30

// Modificar propiedades
persona.edad = 31

// Agregar nuevas propiedades
persona.ciudad = "Madrid"
persona.telefono = "123456789"`,
        notes: [
          "Usa objeto.propiedad para acceder",
          "Puedes modificar propiedades existentes",
          "Puedes agregar nuevas propiedades en cualquier momento",
          "Acceder a una propiedad que no existe retorna indefinido",
        ],
      },
      {
        title: "Objetos Anidados",
        description:
          "Los objetos pueden contener otros objetos como propiedades, creando estructuras jerárquicas.",
        code: `variable empresa = {
    nombre: "TechCorp",
    empleados: 150,
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
}

// Acceso multinivel
mostrar empresa.nombre                    // "TechCorp"
mostrar empresa.direccion.ciudad          // "Madrid"
mostrar empresa.direccion.codigoPostal    // "28001"`,
        notes: [
          "Usa múltiples puntos para acceder a objetos anidados",
          "Puedes tener tantos niveles como necesites",
          "Útil para organizar datos complejos jerárquicamente",
        ],
      },
    ],
  },
  funcionesMatematicas: {
    title: "🧮 Funciones Matemáticas",
    description:
      "HispanoLang incluye funciones matemáticas integradas para cálculos comunes: raíces, potencias, trigonometría, redondeo, y más.",
    subsections: [
      {
        title: "Funciones Básicas",
        description:
          "Funciones matemáticas fundamentales para cálculos comunes.",
        code: `// Raíz cuadrada
variable r = raiz(16)  // 4

// Potencia
variable p = potencia(2, 3)  // 8 (2³)

// Valor absoluto
variable abs = valorAbsoluto(-5)  // 5

// Logaritmo natural
variable log = logaritmo(10)  // 2.302...`,
        notes: [
          "raiz(n): Raíz cuadrada de n",
          "potencia(base, exponente): base elevado a exponente",
          "valorAbsoluto(n): Valor absoluto (sin signo)",
          "logaritmo(n): Logaritmo natural de n",
        ],
      },
      {
        title: "Funciones Trigonométricas",
        description: "Funciones para cálculos trigonométricos.",
        code: `variable s = seno(0)       // 0
variable c = coseno(0)     // 1
variable t = tangente(0)   // 0`,
        notes: [
          "seno(angulo): Calcula el seno",
          "coseno(angulo): Calcula el coseno",
          "tangente(angulo): Calcula la tangente",
          "Los ángulos se miden en grados",
        ],
      },
      {
        title: "Funciones de Redondeo",
        description:
          "Convierten números decimales a enteros de diferentes formas.",
        code: `variable n = 3.7

variable r = redondear(n)  // 4 (redondea al más cercano)
variable t = techo(n)      // 4 (siempre hacia arriba)
variable p = piso(n)       // 3 (siempre hacia abajo)

// Otros ejemplos
mostrar redondear(3.2)  // 3
mostrar techo(3.2)      // 4
mostrar piso(3.8)       // 3`,
        notes: [
          "redondear(n): Redondea al entero más cercano",
          "techo(n): Redondea hacia arriba (ceiling)",
          "piso(n): Redondea hacia abajo (floor)",
        ],
      },
      {
        title: "Números Aleatorios",
        description: "Genera números aleatorios en diferentes rangos.",
        syntax: "aleatorio([min], [max])",
        code: `// Entre 0 y 1
variable r1 = aleatorio()  // 0.0 a 1.0

// Entre 0 y max
variable r2 = aleatorio(10)  // 0.0 a 10.0

// Entre min y max
variable r3 = aleatorio(5, 15)  // 5.0 a 15.0

// Número entero aleatorio (1-6, como un dado)
variable dado = piso(aleatorio(1, 7))`,
        notes: [
          "aleatorio(): Retorna número entre 0.0 y 1.0",
          "aleatorio(max): Retorna número entre 0.0 y max",
          "aleatorio(min, max): Retorna número entre min y max",
          "Retorna números decimales, usa piso() o redondear() para enteros",
        ],
      },
      {
        title: "Funciones de Agregación",
        description: "Funciones que operan sobre múltiples números.",
        code: `// Máximo y mínimo
variable max = maximo(10, 5, 8, 3)     // 10
variable min = minimo(10, 5, 8, 3)     // 3

// Suma y promedio
variable total = suma(1, 2, 3, 4, 5)        // 15
variable prom = promedio(10, 20, 30)        // 20`,
        notes: [
          "maximo(...): Retorna el número más grande",
          "minimo(...): Retorna el número más pequeño",
          "suma(...): Retorna la suma de todos los números",
          "promedio(...): Retorna el promedio aritmético",
          "Todas aceptan múltiples argumentos",
        ],
      },
    ],
  },
  manejoErrores: {
    title: "🛡️ Manejo de Errores",
    description:
      "La estructura intentar-capturar permite manejar errores de forma controlada sin que el programa se detenga abruptamente.",
    subsections: [
      {
        title: "Estructura intentar-capturar",
        description:
          "Ejecuta código que puede fallar y captura el error si ocurre.",
        syntax:
          "intentar { /* código */ } capturar (error) { /* manejar error */ }",
        code: `intentar {
    variable x = 10 / 0
    mostrar "Esto no se ejecuta"
} capturar (error) {
    mostrar "Error: " + error
}

mostrar "El programa continúa"`,
        notes: [
          "El bloque 'intentar' contiene código que podría generar error",
          "Si ocurre un error, se ejecuta el bloque 'capturar'",
          "El parámetro 'error' contiene información del error",
          "Si no hay error, el bloque 'capturar' se salta",
          "El programa continúa después del bloque intentar-capturar",
        ],
      },
      {
        title: "Errores Comunes",
        description:
          "Ejemplos de situaciones que generan errores y cómo manejarlos.",
        code: `// División entre cero
intentar {
    variable resultado = 10 / 0
} capturar (error) {
    mostrar "No se puede dividir entre cero"
}

// Acceso a índice inválido
variable lista = [1, 2, 3]
intentar {
    mostrar lista[10]
} capturar (error) {
    mostrar "Índice fuera de rango"
}`,
        notes: [
          "División entre cero genera error",
          "Acceder a índices fuera de rango en listas",
          "Acceder a propiedades de valores nulos o indefinidos",
          "Llamar funciones con parámetros incorrectos",
          "Usa intentar-capturar para operaciones que pueden fallar",
        ],
      },
    ],
  },
  constantes: {
    title: "🔒 Constantes",
    description:
      "Las constantes son valores que no pueden cambiar después de ser asignados. Son ideales para configuración, valores matemáticos y datos que deben permanecer inmutables.",
    subsections: [
      {
        title: "Declaración de Constantes",
        description:
          "Usa la palabra clave 'constante' seguida del nombre (por convención en MAYÚSCULAS) y el valor.",
        syntax: "constante NOMBRE = valor",
        code: `constante PI = 3.14159
constante GRAVEDAD = 9.8
constante NOMBRE_APP = "MiAplicación"
constante MAX_INTENTOS = 3

mostrar "El valor de PI es: " + PI
mostrar "Gravedad: " + GRAVEDAD`,
        notes: [
          "Por convención, los nombres van en MAYÚSCULAS_CON_GUIONES",
          "Deben inicializarse al momento de declararse",
          "No se pueden reasignar después de la declaración",
          "Intentar modificar una constante causa error",
        ],
      },
      {
        title: "Diferencia con Variables",
        description:
          "Las constantes protegen valores críticos de cambios accidentales.",
        code: `// Variable: puede cambiar
variable contador = 0
contador = 1      // OK
contador = 2      // OK

// Constante: no puede cambiar
constante MAXIMO = 100
mostrar MAXIMO    // 100
// MAXIMO = 200   // Error: No se puede reasignar

// Operadores compuestos tampoco funcionan
// MAXIMO += 50   // Error
// MAXIMO++       // Error`,
        notes: [
          "Las variables pueden reasignarse, las constantes no",
          "No funcionan con operadores +=, -=, *=, /=",
          "No funcionan con incremento/decremento (++, --)",
          "Usa constantes para valores de configuración",
        ],
      },
    ],
  },
  templateStrings: {
    title: "📝 Template Strings",
    description:
      "Los template strings permiten interpolación de variables y expresiones dentro de cadenas de texto usando backticks (`) y la sintaxis \${expresion}.",
    subsections: [
      {
        title: "Sintaxis Básica",
        description:
          "Usa backticks (`) en lugar de comillas y \${} para insertar valores.",
        syntax: "`Texto con \${variable} interpolada`",
        code: `variable nombre = "María"
variable edad = 25

// Concatenación tradicional (más verbosa)
mostrar "Hola, me llamo " + nombre + " y tengo " + edad + " años"

// Template strings (más limpio)
mostrar \`Hola, me llamo \${nombre} y tengo \${edad} años\``,
        notes: [
          "Usa backticks (`) en lugar de comillas",
          "Las expresiones dentro de \${} se evalúan automáticamente",
          "Más legible que concatenación con +",
          "Puede contener cualquier expresión válida",
        ],
      },
      {
        title: "Expresiones en Templates",
        description:
          "Puedes incluir cálculos, llamadas a métodos y cualquier expresión dentro de \${}.",
        code: `variable precio = 100
variable descuento = 20

mostrar \`Precio original: \${precio}\`
mostrar \`Precio final: \${precio - descuento}\`
mostrar \`El doble sería: \${precio * 2}\`

variable items = [1, 2, 3]
mostrar \`El arreglo tiene \${items.longitud} elementos\`

variable texto = "hispanoLang"
mostrar \`En mayúsculas: \${texto.mayusculas()}\``,
        notes: [
          "Operaciones matemáticas: \${precio * 2}",
          "Propiedades: \${items.longitud}",
          "Métodos: \${texto.mayusculas()}",
          "Expresiones condicionales también funcionan",
        ],
      },
    ],
  },
  elegirCaso: {
    title: "🎯 Elegir/Caso (Switch)",
    description:
      "La estructura elegir/caso permite evaluar una expresión contra múltiples valores posibles. Es más limpia que múltiples si/sino encadenados.",
    subsections: [
      {
        title: "Sintaxis Básica",
        description:
          "Evalúa una expresión y ejecuta el bloque del caso que coincida.",
        syntax: "elegir (expresion) { caso valor: ... pordefecto: ... }",
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
        notes: [
          "elegir (expresion) { ... } - Inicia el bloque switch",
          "caso valor: - Define un caso a evaluar",
          "pordefecto: - Caso por defecto (opcional)",
          "Se ejecuta el primer caso que coincida",
        ],
      },
      {
        title: "Uso con Strings",
        description: "Los casos pueden ser números, strings o cualquier valor.",
        code: `variable fruta = "manzana"

elegir (fruta) {
    caso "manzana":
        mostrar "Es roja o verde"
    caso "banana":
        mostrar "Es amarilla"
    caso "naranja":
        mostrar "Es naranja"
    pordefecto:
        mostrar "Fruta desconocida"
}`,
        notes: [
          "Los casos pueden ser strings, números o booleanos",
          "El pordefecto es opcional pero recomendado",
          "Útil para menús y opciones múltiples",
          "Más limpio que muchos si-sino encadenados",
        ],
      },
    ],
  },
  buclesAvanzados: {
    title: "🔁 Bucles Avanzados",
    description:
      "HispanoLang incluye estructuras de bucle adicionales: hacer/mientras (ejecuta al menos una vez) y para cada (itera sobre elementos).",
    subsections: [
      {
        title: "Bucle hacer/mientras",
        description:
          "Ejecuta el bloque al menos una vez, luego repite mientras la condición sea verdadera.",
        syntax: "hacer { ... } mientras (condicion)",
        code: `variable contador = 1

hacer {
    mostrar contador
    contador = contador + 1
} mientras (contador <= 5)

// Diferencia con mientras:
variable x = 10
mientras (x < 5) {
    mostrar x  // Nunca se ejecuta (condición falsa desde inicio)
}

variable y = 10
hacer {
    mostrar y  // Se ejecuta una vez, aunque y >= 5
} mientras (y < 5)`,
        notes: [
          "El bloque se ejecuta ANTES de evaluar la condición",
          "Garantiza al menos una ejecución",
          "La condición se evalúa al FINAL de cada iteración",
          "Útil cuando necesitas ejecutar el código al menos una vez",
        ],
      },
      {
        title: "Bucle para cada",
        description: "Itera sobre cada elemento de un arreglo de forma simple.",
        syntax: "para cada variable en arreglo { ... }",
        code: `variable frutas = ["manzana", "banana", "naranja"]

para cada fruta en frutas {
    mostrar fruta
}

// Sumar todos los números
variable numeros = [1, 2, 3, 4, 5]
variable suma = 0

para cada num en numeros {
    suma = suma + num
}
mostrar suma  // 15

// Con objetos
variable personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 }
]

para cada persona en personas {
    mostrar \`\${persona.nombre} tiene \${persona.edad} años\`
}`,
        notes: [
          "No necesitas manejar índices manualmente",
          "Más limpio que un bucle para tradicional",
          "La variable del elemento es local al bucle",
          "Funciona con cualquier tipo de arreglo",
        ],
      },
    ],
  },
  conversionTipos: {
    title: "🔄 Conversión de Tipos",
    description:
      "Funciones integradas para convertir valores entre diferentes tipos de datos: entero(), decimal(), texto(), booleano() y tipo().",
    subsections: [
      {
        title: "Funciones de Conversión",
        description: "Convierte valores a tipos específicos.",
        code: `// entero(valor) - Convierte a número entero
mostrar entero("42")        // 42
mostrar entero("3.7")       // 3 (trunca decimales)
mostrar entero(3.9)         // 3
mostrar entero(verdadero)   // 1
mostrar entero(falso)       // 0

// decimal(valor) - Convierte a número decimal
mostrar decimal("3.14")     // 3.14
mostrar decimal("42")       // 42.0
mostrar decimal(verdadero)  // 1.0

// texto(valor) - Convierte a cadena de texto
mostrar texto(123)          // "123"
mostrar texto(3.14)         // "3.14"
mostrar texto(verdadero)    // "verdadero"
mostrar texto([1, 2, 3])    // "[1, 2, 3]"`,
        notes: [
          "entero(valor): Convierte a número entero (trunca decimales)",
          "decimal(valor): Convierte a número decimal",
          "texto(valor): Convierte cualquier valor a string",
          "Los booleanos se convierten a 1/0 o 1.0/0.0",
        ],
      },
      {
        title: "Funciones booleano() y tipo()",
        description: "Convierte a booleano o retorna el tipo del valor.",
        code: `// booleano(valor) - Convierte a booleano
mostrar booleano(1)         // verdadero
mostrar booleano(0)         // falso
mostrar booleano(100)       // verdadero
mostrar booleano("hola")    // verdadero
mostrar booleano("")        // falso
mostrar booleano(nulo)      // falso

// tipo(valor) - Retorna el tipo como string
mostrar tipo(42)            // "numero"
mostrar tipo("hola")        // "texto"
mostrar tipo(verdadero)     // "booleano"
mostrar tipo([1, 2])        // "arreglo"
mostrar tipo({a: 1})        // "objeto"
mostrar tipo(nulo)          // "nulo"

// Con clases
clase Persona { constructor() {} }
variable p = nuevo Persona()
mostrar tipo(p)             // "Persona"`,
        notes: [
          "booleano(): 0, '', nulo, indefinido → falso, todo lo demás → verdadero",
          "tipo(): Retorna el nombre del tipo como texto",
          "Para instancias de clases, tipo() retorna el nombre de la clase",
        ],
      },
    ],
  },
  metodosNumericos: {
    title: "🔢 Métodos Numéricos",
    description:
      "Los números tienen métodos que se pueden llamar directamente para verificar propiedades o convertir a texto.",
    subsections: [
      {
        title: "Métodos de Verificación",
        description: "Verifica propiedades de números.",
        code: `variable n = 42

mostrar n.esPar()        // verdadero
mostrar n.esImpar()      // falso
mostrar n.esPositivo()   // verdadero
mostrar n.esNegativo()   // falso

// Con literales (requieren paréntesis)
mostrar (7).esImpar()       // verdadero
mostrar (8).esPar()         // verdadero
mostrar (-5).esNegativo()   // verdadero
mostrar (0).esPositivo()    // falso (cero no es positivo)
mostrar (0).esNegativo()    // falso (cero no es negativo)`,
        notes: [
          ".esPar(): Verdadero si es divisible por 2",
          ".esImpar(): Verdadero si no es divisible por 2",
          ".esPositivo(): Verdadero si es mayor que 0",
          ".esNegativo(): Verdadero si es menor que 0",
          "El cero no es positivo ni negativo",
        ],
      },
      {
        title: "Conversión a Texto",
        description: "Convierte números a su representación en texto.",
        code: `variable precio = 99.99
mostrar precio.aTexto()     // "99.99"

// Con literales
mostrar (42).aTexto()       // "42"
mostrar (3.14).aTexto()     // "3.14"

// Uso práctico
variable puntos = 1500
variable mensaje = "Has ganado " + puntos.aTexto() + " puntos"
mostrar mensaje`,
        notes: [
          ".aTexto(): Convierte el número a cadena de texto",
          "Útil para formateo y concatenación",
          "Con literales numéricos usar paréntesis: (número).método()",
        ],
      },
    ],
  },
  clases: {
    title: "🏗️ Clases",
    description:
      "Las clases son plantillas para crear objetos con propiedades y métodos. Permiten programación orientada a objetos en HispanoLang.",
    subsections: [
      {
        title: "Definición de Clases",
        description:
          "Define clases usando la palabra 'clase' con un constructor y métodos.",
        syntax: "clase NombreClase { constructor(params) { } metodo() { } }",
        code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar \`Hola, soy \${este.nombre}\`
    }

    cumplirAnios() {
        este.edad = este.edad + 1
        mostrar \`\${este.nombre} ahora tiene \${este.edad} años\`
    }
}`,
        notes: [
          "clase NombreClase { ... } - Define una clase",
          "constructor(params) - Inicializa la instancia",
          "este.propiedad - Accede a propiedades de la instancia",
          "Los métodos se definen sin la palabra 'funcion'",
        ],
      },
      {
        title: "Instanciación con nuevo",
        description: "Crea instancias de clases usando la palabra 'nuevo'.",
        code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar \`Hola, soy \${este.nombre}\`
    }
}

variable persona = nuevo Persona("Juan", 25)

mostrar persona.nombre      // "Juan"
mostrar persona.edad        // 25
mostrar persona.saludar()   // "Hola, soy Juan"

// Múltiples instancias
variable persona2 = nuevo Persona("Ana", 30)
mostrar persona2.nombre     // "Ana"`,
        notes: [
          "nuevo Clase(args) - Crea una nueva instancia",
          "Cada instancia tiene sus propias propiedades",
          "Los métodos se comparten entre instancias",
          "tipo(instancia) retorna el nombre de la clase",
        ],
      },
    ],
  },
  herencia: {
    title: "🌳 Herencia",
    description:
      "La herencia permite crear clases basadas en otras clases existentes. La clase hija hereda propiedades y métodos de la clase padre.",
    subsections: [
      {
        title: "Extender Clases",
        description:
          "Usa 'extiende' para heredar de otra clase y 'super' para llamar al constructor padre.",
        syntax: "clase Hija extiende Padre { constructor() { super() } }",
        code: `clase Animal {
    constructor(nombre) {
        este.nombre = nombre
    }

    hablar() {
        retornar \`\${este.nombre} hace un sonido\`
    }
}

clase Perro extiende Animal {
    constructor(nombre, raza) {
        super(nombre)    // Llama al constructor de Animal
        este.raza = raza
    }

    hablar() {
        retornar \`\${este.nombre} dice: ¡Guau!\`
    }

    describir() {
        retornar \`\${este.nombre} es un \${este.raza}\`
    }
}

variable perro = nuevo Perro("Max", "Labrador")
mostrar perro.hablar()      // "Max dice: ¡Guau!"
mostrar perro.describir()   // "Max es un Labrador"`,
        notes: [
          "clase Hija extiende Padre - Define herencia",
          "super(args) - Llama al constructor del padre",
          "La clase hija hereda todas las propiedades y métodos",
          "Puedes sobrescribir métodos del padre",
        ],
      },
      {
        title: "Polimorfismo",
        description:
          "Diferentes clases pueden tener el mismo método pero comportarse diferente.",
        code: `clase Figura {
    constructor(nombre) {
        este.nombre = nombre
    }

    calcularArea() {
        retornar 0
    }
}

clase Rectangulo extiende Figura {
    constructor(ancho, alto) {
        super("Rectángulo")
        este.ancho = ancho
        este.alto = alto
    }

    calcularArea() {
        retornar este.ancho * este.alto
    }
}

clase Circulo extiende Figura {
    constructor(radio) {
        super("Círculo")
        este.radio = radio
    }

    calcularArea() {
        retornar 3.14159 * este.radio * este.radio
    }
}

variable figuras = [
    nuevo Rectangulo(10, 5),
    nuevo Circulo(7)
]

para cada figura en figuras {
    mostrar \`\${figura.nombre}: \${figura.calcularArea()}\`
}`,
        notes: [
          "Cada clase implementa el método a su manera",
          "El mismo método funciona diferente según la clase",
          "Permite código más flexible y reutilizable",
          "tipo(instancia) retorna la clase específica",
        ],
      },
    ],
  },
};
