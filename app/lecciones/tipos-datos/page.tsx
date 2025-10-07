import LessonPage from "@/components/lessons/LessonPage";

export default function TiposDatosLesson() {
  const steps = [
    {
      title: "¿Qué son los tipos de datos?",
      content:
        "En programación, no toda la información es igual. Los tipos de datos nos ayudan a entender qué clase de información estamos manejando y qué operaciones podemos hacer con ella. Es como tener diferentes tipos de cajas: algunas para números, otras para texto, y otras para respuestas de sí o no.",
      code: `variable numero = 42
variable texto = "Hola mundo"
variable es_verdadero = verdadero

mostrar "Número: " + numero
mostrar "Texto: " + texto
mostrar "Booleano: " + es_verdadero`,
      explanation:
        "Aquí vemos los tres tipos básicos de datos en HispanoLang: números (sin comillas), texto (entre comillas dobles), y valores booleanos (verdadero/falso). Cada tipo se comporta de manera diferente. Los números permiten operaciones matemáticas, el texto se puede concatenar con el operador +, y los booleanos representan estados lógicos. Es importante entender estos tipos porque el intérprete los trata de manera distinta y nos permite hacer diferentes operaciones con cada uno.",
      challenge:
        "🧩 Desafío rápido: Crea tres variables con tu edad (número), tu nombre (texto) y si tienes mascota (verdadero/falso). Luego muéstralas todas en pantalla.",
    },
    {
      title: "Números: Enteros y Decimales",
      content:
        "Los números son fundamentales en programación. En HispanoLang podemos usar números enteros (como 5, 100, -3) y números decimales (como 3.14, 2.5, -0.5). Los números nos permiten hacer cálculos, contar elementos, y representar medidas o cantidades.",
      code: `variable entero = 25
variable decimal = 3.14159
variable negativo = -10

variable suma = entero + decimal
variable multiplicacion = entero * 2

mostrar "Entero: " + entero
mostrar "Decimal: " + decimal
mostrar "Negativo: " + negativo
mostrar "Suma: " + suma
mostrar "Multiplicación: " + multiplicacion`,
      explanation:
        "Los números en HispanoLang pueden ser positivos o negativos, enteros o decimales. Podemos hacer todas las operaciones matemáticas básicas: suma (+), resta (-), multiplicación (*) y división (/). Cuando trabajamos con números, no necesitamos comillas. El intérprete entiende automáticamente que es un valor numérico y nos permite realizar cálculos. Esto es muy útil para crear calculadoras, procesar datos, o hacer cualquier tipo de operación matemática en nuestros programas.",
      challenge:
        "🧩 Desafío rápido: Crea variables para el precio de un producto (25.99), el descuento (5.50) y calcula el precio final. Muestra todos los valores.",
    },
    {
      title: "Cadenas de Texto (Strings)",
      content:
        "Las cadenas de texto, también llamadas strings, son secuencias de caracteres que representan palabras, frases o cualquier información textual. En HispanoLang, todo el texto debe ir entre comillas dobles para que el intérprete sepa que es una cadena de caracteres y no una variable o número.",
      code: `variable saludo = "¡Hola!"
variable nombre = "María"
variable apellido = "García"

variable nombre_completo = nombre + " " + apellido
variable mensaje = saludo + " " + nombre

mostrar nombre_completo
mostrar mensaje
mostrar "Mi nombre tiene " + nombre.longitud() + " letras"`,
      explanation:
        "Las cadenas de texto van siempre entre comillas dobles. Podemos concatenar (unir) cadenas usando el operador +. También podemos usar métodos como .longitud() para obtener información sobre la cadena. Las cadenas son muy útiles para crear mensajes personalizados, procesar información del usuario, o mostrar resultados de manera legible. Es importante recordar que cuando concatenamos texto con números, HispanoLang convierte automáticamente los números a texto para poder unirlos.",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu ciudad y país, únelas en una frase como 'Vivo en [ciudad], [país]' y muestra la longitud total del mensaje.",
    },
    {
      title: "Valores Booleanos",
      content:
        "Los valores booleanos representan estados lógicos: verdadero o falso. Son fundamentales para tomar decisiones en programación, como '¿es mayor de edad?', '¿tiene permiso?', o '¿está activo?'. Solo pueden tener dos valores: verdadero o falso.",
      code: `variable es_mayor = verdadero
variable tiene_licencia = falso
variable es_estudiante = verdadero

mostrar "Es mayor de edad: " + es_mayor
mostrar "Tiene licencia: " + tiene_licencia
mostrar "Es estudiante: " + es_estudiante

variable puede_conducir = es_mayor y tiene_licencia
mostrar "Puede conducir: " + puede_conducir`,
      explanation:
        "Los valores booleanos (verdadero/falso) son la base de la lógica en programación. Nos permiten representar estados y condiciones. Podemos usar operadores lógicos como 'y' (AND) y 'o' (OR) para combinar condiciones. Por ejemplo, 'puede conducir' es verdadero solo si 'es mayor' Y 'tiene licencia' son ambos verdaderos. Los booleanos son esenciales para crear programas que tomen decisiones inteligentes basadas en diferentes condiciones.",
      challenge:
        "🧩 Desafío rápido: Crea variables para si tienes hambre, si tienes dinero, y si el restaurante está abierto. Luego determina si puedes comer (hambriento Y con dinero Y restaurante abierto).",
    },
    {
      title: "Valores Especiales: Nulo e Indefinido",
      content:
        "A veces necesitamos representar la ausencia de valor o un estado desconocido. HispanoLang tiene dos valores especiales para esto: nulo (representa la ausencia intencional de valor) e indefinido (representa que algo no ha sido definido o no existe).",
      code: `variable valor_nulo = nulo
variable valor_indefinido = indefinido
variable nombre = "Juan"

mostrar "Valor nulo: " + valor_nulo
mostrar "Valor indefinido: " + valor_indefinido
mostrar "Nombre: " + nombre

// Simulando un valor que podría no existir
variable telefono = nulo
mostrar "Teléfono: " + telefono`,
      explanation:
        "Los valores nulo e indefinido son útiles para manejar casos donde no tenemos información o cuando algo no ha sido inicializado. 'Nulo' se usa cuando intencionalmente no hay valor (como un teléfono opcional), mientras que 'indefinido' indica que algo no ha sido definido. Estos valores son importantes para crear programas robustos que manejen situaciones donde los datos podrían no estar disponibles. Nos ayudan a evitar errores y a crear lógica condicional más sofisticada.",
      challenge:
        "🧩 Desafío rápido: Crea una variable para un email opcional (inicialmente nulo) y otra para una dirección que no se ha definido (indefinido). Muestra ambos valores y explica la diferencia.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de experimentar con todos los tipos de datos que has aprendido. Combina números, texto, booleanos y valores especiales para crear programas más complejos e interesantes.",
      code: `variable mi_edad = 25
variable mi_nombre = "Ana"
variable es_programador = verdadero

mostrar "Hola, soy " + mi_nombre
mostrar "Tengo " + mi_edad + " años"
mostrar "¿Soy programador? " + es_programador`,
      explanation:
        "En esta práctica libre puedes combinar todos los tipos de datos que has aprendido. Intenta crear programas que usen números para cálculos, texto para mensajes personalizados, booleanos para lógica, y valores especiales para manejar casos excepcionales. La clave está en entender cuándo usar cada tipo y cómo combinarlos efectivamente. Recuerda que la práctica constante es la mejor forma de dominar estos conceptos fundamentales.",
      challenge:
        "🧩 Desafío rápido: Crea un perfil personal con tu nombre, edad, ciudad, si tienes trabajo, y un hobby. Luego crea un mensaje completo que combine toda esta información.",
      summary:
        "🧠 Recuerda:\n\n• Los números permiten operaciones matemáticas y no van entre comillas.\n• El texto va entre comillas dobles y se puede concatenar con +.\n• Los booleanos (verdadero/falso) representan estados lógicos.\n• Nulo e indefinido manejan la ausencia de valores.\n• Cada tipo de dato tiene sus propias operaciones y comportamientos.\n• ¡Experimenta combinando diferentes tipos para crear programas más ricos!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🔢", text: "Lección 2" }}
      title="Tipos de Datos en"
      titleGradient=" Hispano Lang"
      description="Aprende sobre números, texto, booleanos y valores especiales"
      steps={steps}
    />
  );
}
