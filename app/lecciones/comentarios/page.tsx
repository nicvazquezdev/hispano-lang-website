import LessonPage from "@/components/lessons/LessonPage";

export default function ComentariosLesson() {
  const steps = [
    {
      title: "¿Qué son los comentarios?",
      content:
        "Los comentarios son líneas de texto que el programa ignora completamente. Sirven para escribir notas o explicaciones en tu código. Son como escribir en los márgenes de un libro: solo tú y otras personas pueden leerlos, pero el programa no los ejecuta.",
      code: `// Este es un comentario
variable x = 10
mostrar x`,
      explanation:
        "Los comentarios empiezan con dos barras `//`. Todo lo que escribas después de `//` en esa línea es ignorado por el programa. En este ejemplo, solo se ejecutan las líneas 2 y 3. La primera línea es solo una nota para ti. Los comentarios son útiles para recordar qué hace tu código o para explicarlo a otras personas.",
      challenge:
        "Crea una variable con tu nombre y muéstrala. Agrega un comentario antes explicando qué hace tu código.",
    },
    {
      title: "Comentarios en Diferentes Lugares",
      content:
        "Los comentarios pueden ir en su propia línea o al final de una línea de código. Esto te da flexibilidad para escribir notas donde sean más útiles.",
      code: `// Comentario en su propia línea
variable edad = 25

variable nombre = "Ana"  // Comentario al final de la línea

// Puedes escribir varias líneas de comentarios
// una debajo de la otra
variable ciudad = "Madrid"

mostrar nombre`,
      explanation:
        "Hay dos formas de escribir comentarios:\n\n• **En su propia línea**: Para explicaciones más largas\n• **Al final de una línea**: Para notas breves sobre esa línea específica\n\nAmbas formas son útiles. Usa comentarios en su propia línea cuando necesites explicar algo en detalle, y comentarios al final de la línea para notas rápidas sobre qué representa una variable.",
      challenge:
        "Crea tres variables (tu nombre, edad y ciudad). Agrega un comentario en su propia línea al inicio y un comentario al final de cada variable explicando qué representa.",
    },
    {
      title: "Comentarios para Desactivar Código",
      content:
        "Los comentarios también sirven para desactivar líneas de código sin borrarlas. Simplemente agrega `//` al inicio de la línea y esa línea dejará de ejecutarse. Esto es útil cuando quieres probar tu código sin ciertas partes.",
      code: `variable numero = 10

mostrar "El número es: " + numero

// mostrar "Esta línea no se ejecuta"

variable doble = numero * 2
mostrar "El doble es: " + doble`,
      explanation:
        "Cuando pones `//` antes de una línea de código, esa línea se convierte en comentario y no se ejecuta. En este ejemplo, la línea `mostrar 'Esta línea no se ejecuta'` no se ejecuta porque está comentada. Esto es muy útil cuando estás probando tu código: puedes desactivar partes temporalmente sin borrarlas. Si luego quieres activarlas, solo quitas el `//`.",
      challenge:
        "Escribe un programa que muestre 4 mensajes diferentes. Comenta 2 de esos mensajes y ejecuta el código. Observa que solo se muestran los mensajes no comentados.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de usar comentarios en tu código. Los comentarios te ayudan a organizar tus ideas y a recordar qué hace cada parte de tu programa. Acostúmbrate a usarlos desde el principio.",
      code: `// Mi primer programa con comentarios

variable mi_nombre = "Pedro"  // Cambia esto por tu nombre
variable mi_edad = 20  // Cambia esto por tu edad

mostrar "Hola, soy " + mi_nombre
mostrar "Tengo " + mi_edad + " años"`,
      explanation:
        "En esta práctica libre, usa comentarios para hacer tu código más claro. Escribe notas que te ayuden a entender qué hace cada parte. No te preocupes por escribir comentarios perfectos: lo importante es practicar. Con el tiempo aprenderás qué comentarios son más útiles y cuáles son innecesarios.",
      challenge:
        "Crea un programa que calcule la suma de dos números. Agrega comentarios explicando qué hace el programa y qué representa cada variable.",
      summary:
        "🧠 Recuerda:\n\n• Los comentarios empiezan con `//`.\n• El programa ignora completamente los comentarios.\n• Usa comentarios para explicar tu código.\n• Puedes poner comentarios en su propia línea o al final de una línea.\n• Puedes comentar código para desactivarlo sin borrarlo.\n• ¡Los comentarios te ayudan a entender tu propio código!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "💭", text: "Lección 2" }}
      title="Comentarios en"
      titleGradient=" HispanoLang"
      description="Aprende a documentar tu código con comentarios útiles"
      steps={steps}
      prevLessonUrl="/lecciones/variables"
      prevLessonTitle="Variables"
      nextLessonUrl="/lecciones/tipos-datos"
      nextLessonTitle="Tipos de Datos"
    />
  );
}
