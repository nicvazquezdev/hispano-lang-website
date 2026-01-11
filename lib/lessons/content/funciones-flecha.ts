import { LessonContent } from "../types";

export const funcionesFlecha: LessonContent = {
  badge: { emoji: "➡️", text: "Lección 14" },
  title: "Funciones Flecha en",
  titleGradient: " HispanoLang",
  description: "Aprende la sintaxis concisa para funciones anónimas",
  prev: { url: "/lecciones/funciones", title: "Funciones" },
  next: { url: "/lecciones/funciones-matematicas", title: "Funciones Matemáticas" },
  steps: [
    {
      title: "¿Qué son las Funciones Flecha?",
      content: "Las funciones flecha son una forma concisa de escribir funciones usando =>.",
      code: `variable doble = x => x * 2

mostrar doble(5)
mostrar doble(10)`,
      explanation: "La flecha => separa el parámetro del cuerpo. El retorno es automático para expresiones simples.",
      challenge: "Crea una función flecha `triple` que multiplique por 3. Pruébala con 4 y 7.",
      validation: {
        requiredCode: ["/=>.*\\*\\s*3|3\\s*\\*/"],
        expectedOutputs: ["12", "21"],
      },
    },
    {
      title: "Múltiples Parámetros",
      content: "Con múltiples parámetros, usa paréntesis.",
      code: `variable suma = (a, b) => a + b
variable multiplicar = (x, y) => x * y

mostrar suma(5, 3)
mostrar multiplicar(4, 6)`,
      explanation: "Los paréntesis son obligatorios cuando hay más de un parámetro.",
      challenge: "Crea `restar` que reste dos números y `dividir` que divida. Muestra 10-3 y 20/4.",
      validation: {
        requiredCode: ["/=>.*-/", "/=>.*/"],
        expectedOutputs: ["7", "5"],
      },
    },
    {
      title: "Sin Parámetros",
      content: "Sin parámetros, usa paréntesis vacíos.",
      code: `variable saludar = () => "Hola mundo"
variable obtenerFecha = () => "2024"

mostrar saludar()
mostrar obtenerFecha()`,
      explanation: "Los paréntesis vacíos () indican que la función no recibe parámetros.",
      challenge: "Crea `obtenerPI` que retorne 3.14159. Muestra el resultado.",
      validation: {
        requiredCode: ["/\\(\\)\\s*=>/"],
        expectedOutputs: ["3.14159"],
      },
    },
    {
      title: "Cuerpo con Bloque",
      content: "Para lógica compleja, usa llaves {} y `retornar`.",
      code: `variable calcularDescuento = (precio, porcentaje) => {
    variable descuento = precio * porcentaje / 100
    variable final = precio - descuento
    retornar final
}

mostrar calcularDescuento(100, 20)`,
      explanation: "Con llaves {} necesitas usar `retornar` explícitamente.",
      challenge: "Crea `calcularImpuesto` que reciba precio e IVA (16%), retorne el total. Prueba con 100.",
      validation: {
        requiredCode: ["/=>\\s*\\{/", "/retornar/"],
        expectedOutputs: ["116"],
      },
    },
    {
      title: "Con Métodos de Listas",
      content: "Las funciones flecha brillan con métodos como mapear y filtrar.",
      code: `variable numeros = [1, 2, 3, 4, 5]

variable dobles = numeros.mapear(x => x * 2)
mostrar dobles

variable pares = numeros.filtrar(x => x % 2 == 0)
mostrar pares`,
      explanation: "La sintaxis concisa hace el código más legible con métodos funcionales.",
      challenge: "Crea una lista [10, 20, 30, 40]. Usa mapear para dividir cada número entre 10.",
      validation: {
        requiredCode: ["/\\.mapear\\s*\\(/", "/=>/"],
        expectedOutputs: ["1", "2", "3", "4"],
      },
    },
    {
      title: "¡Práctica libre!",
      content: "Combina funciones flecha con métodos de listas.",
      code: `variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

variable resultado = numeros
    .filtrar(x => x % 2 == 0)
    .mapear(x => x * x)

mostrar resultado`,
      explanation: "Puedes encadenar métodos para operaciones complejas de forma elegante.",
      challenge: "Lista [5, 10, 15, 20, 25]. Filtra mayores que 10, luego mapea dividiendo entre 5.",
      summary: "Recuerda:\n\n=> crea funciones flecha concisas\nUn parámetro: x => x * 2\nMúltiples: (a, b) => a + b\nSin params: () => valor\nCon bloque: x => { retornar x }\nIdeales para mapear, filtrar, reducir",
      validation: {
        requiredCode: ["/\\.filtrar\\s*\\(/", "/\\.mapear\\s*\\(/", "/=>/"],
        expectedOutputs: ["3", "4", "5"],
      },
    },
  ],
};
