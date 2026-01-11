import { LessonContent } from "../types";

export const tiposDatos: LessonContent = {
  badge: { emoji: "🔢", text: "Lección 3" },
  title: "Tipos de Datos en",
  titleGradient: " HispanoLang",
  description: "Aprende sobre números, texto, booleanos y valores especiales",
  prev: { url: "/lecciones/comentarios", title: "Comentarios" },
  next: { url: "/lecciones/metodos-strings", title: "Métodos de Strings" },
  steps: [
    {
      title: "¿Qué son los tipos de datos?",
      content: "Los tipos de datos nos ayudan a entender qué clase de información manejamos: números, texto, o valores lógicos.",
      code: `variable numero = 42
variable texto = "Hola mundo"
variable es_verdadero = verdadero

mostrar "Número: " + numero
mostrar "Texto: " + texto
mostrar "Booleano: " + es_verdadero`,
      explanation: "Números sin comillas, texto entre comillas, booleanos son verdadero/falso.",
      challenge: "Crea tres variables: tu edad (número), tu nombre (texto) y si tienes mascota (booleano). Muéstralas.",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Números: Enteros y Decimales",
      content: "Podemos usar números enteros (5, 100, -3) y decimales (3.14, 2.5).",
      code: `variable entero = 25
variable decimal = 3.14159
variable negativo = -10

variable suma = entero + decimal

mostrar "Entero: " + entero
mostrar "Decimal: " + decimal
mostrar "Suma: " + suma`,
      explanation: "Los números permiten operaciones matemáticas: +, -, *, /",
      challenge: "Crea variables para precio (25.99) y descuento (5.50). Calcula y muestra el precio final.",
      validation: { expectedOutputs: ["20.49"] },
    },
    {
      title: "Cadenas de Texto (Strings)",
      content: "El texto va entre comillas dobles. Podemos concatenar con +.",
      code: `variable saludo = "¡Hola!"
variable nombre = "María"

variable mensaje = saludo + " " + nombre

mostrar mensaje
mostrar "Mi nombre tiene " + nombre.longitud() + " letras"`,
      explanation: "Usamos + para unir textos. El método .longitud() nos da la cantidad de caracteres.",
      challenge: "Crea variables para tu ciudad y país. Muestra 'Vivo en [ciudad], [país]' y la longitud del mensaje.",
      validation: { expectedOutputs: ["Vivo en"] },
    },
    {
      title: "Valores Booleanos",
      content: "Los booleanos representan verdadero o falso. Son la base de la lógica.",
      code: `variable es_mayor = verdadero
variable tiene_licencia = falso

mostrar "Es mayor: " + es_mayor
mostrar "Tiene licencia: " + tiene_licencia

variable puede_conducir = es_mayor y tiene_licencia
mostrar "Puede conducir: " + puede_conducir`,
      explanation: "Usamos 'y' (AND) y 'o' (OR) para combinar booleanos.",
      challenge: "Crea variables: hambre, dinero, restaurante_abierto. Determina si puedes comer (los tres verdaderos).",
      validation: { expectedOutputs: [] },
    },
    {
      title: "Valores Especiales: Nulo",
      content: "El valor nulo representa la ausencia intencional de valor.",
      code: `variable valor_nulo = nulo
variable nombre = "Juan"

mostrar "Valor nulo: " + valor_nulo
mostrar "Nombre: " + nombre

variable telefono = nulo
mostrar "Teléfono: " + telefono`,
      explanation: "Nulo se usa cuando intencionalmente no hay valor, como un campo opcional.",
      challenge: "Crea una variable email como nulo. Muéstrala con un mensaje explicativo.",
      validation: { expectedOutputs: ["nulo"] },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina todos los tipos de datos en un programa.",
      code: `variable mi_edad = 25
variable mi_nombre = "Ana"
variable es_programador = verdadero

mostrar "Hola, soy " + mi_nombre
mostrar "Tengo " + mi_edad + " años"
mostrar "¿Soy programador? " + es_programador`,
      explanation: "Experimenta combinando diferentes tipos de datos.",
      challenge: "Crea un perfil con nombre, edad, ciudad, si trabajas, y un hobby. Muestra todo en mensajes.",
      summary: "🧠 Recuerda:\n\n• Números: sin comillas, permiten matemáticas\n• Texto: entre comillas, se concatena con +\n• Booleanos: verdadero/falso\n• Nulo: ausencia de valor",
      validation: { expectedOutputs: [] },
    },
  ],
};
