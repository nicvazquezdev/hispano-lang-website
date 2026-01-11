import { LessonContent } from "../types";

export const comentarios: LessonContent = {
  badge: { emoji: "💬", text: "Lección 3" },
  title: "Comentarios en",
  titleGradient: " HispanoLang",
  description:
    "Aprende a documentar tu código como si fuera una receta de cocina",
  prev: { url: "/lecciones/constantes", title: "Constantes" },
  next: { url: "/lecciones/tipos-datos", title: "Tipos de Datos" },
  steps: [
    {
      title: "Tu Primera Nota en el Código",
      content:
        "Cuando escribís una receta, dejás notas como 'precalentar el horno' o 'batir hasta punto nieve'. En programación, estas notas se llaman comentarios.\n\nLos comentarios son líneas que el programa ignora completamente. Son solo para que vos y otros programadores entiendan el código.",
      code: `// RECETA: Panqueques
variable panquequesHechos = 0

mostrar panquequesHechos`,
      explanation:
        "Los comentarios empiezan con dos barras: //\n\nTodo lo que escribas después de // es ignorado por el programa. Es como una nota adhesiva en tu receta: está ahí para que la leas, pero no afecta la comida.",
      challenge:
        "Crea una variable llamada `tortillasHechas` con el valor 0. Antes de la variable, agrega un comentario que diga `// RECETA: Tortillas`. Luego muestra la variable.",
      validation: {
        requiredCode: [
          "/\\/\\/.*RECETA/i",
          "/tortillasHechas.*0/",
          "/mostrar/",
        ],
        expectedOutputs: ["/0/"],
      },
    },
    {
      title: "Comentarios en Diferentes Lugares",
      content:
        "En una receta, podés poner notas al inicio (ingredientes), entre pasos (tips), o al lado de cada paso (aclaraciones). Los comentarios funcionan igual.",
      code: `// RECETA: Torta de Chocolate
// Tiempo: 45 minutos

constante HARINA = 200  // gramos
constante AZUCAR = 150  // gramos

variable pasoActual = 1

// Mezclar ingredientes secos
mostrar "Paso " + pasoActual

pasoActual = pasoActual + 1  // Siguiente paso`,
      explanation:
        "Puedes poner comentarios:\n\n1. En su propia línea: `// RECETA: Torta`\n2. Al final de una línea: `constante HARINA = 200  // gramos`\n3. Varias líneas seguidas para notas más largas\n\nUsa el estilo que haga tu código más claro.",
      challenge:
        "Crea una constante `TEMPERATURA_HORNO` con valor 180. Al final de la línea, agrega un comentario que diga `// grados centígrados`. Luego crea una variable `minutosHorneado` con valor 0 y muéstrala.",
      validation: {
        requiredCode: [
          "/TEMPERATURA_HORNO.*180.*\\/\\//",
          "/minutosHorneado.*0/",
          "/mostrar/",
        ],
        expectedOutputs: ["/0/"],
      },
    },
    {
      title: "Organizando tu Receta con Comentarios",
      content:
        "Las recetas se organizan en secciones: ingredientes, preparación, cocción. Usá comentarios para organizar tu código de la misma forma.",
      code: `// ===== INGREDIENTES =====
constante HUEVOS = 3
constante LECHE = 300
constante HARINA = 200

// ===== PREPARACIÓN =====
variable mezclaLista = falso
variable pasos = 0

// Paso 1: Batir huevos
pasos = pasos + 1
mostrar "Paso " + pasos + ": Batir huevos"

// Paso 2: Agregar leche
pasos = pasos + 1
mostrar "Paso " + pasos + ": Agregar leche"`,
      explanation:
        "Los comentarios ayudan a organizar tu código en secciones claras. Es como tener títulos en tu receta: hace todo más fácil de encontrar y entender.\n\nUsa líneas de comentarios como separadores entre secciones diferentes.",
      challenge:
        "Crea un programa organizado:\n1. Sección de ingredientes con un comentario `// INGREDIENTES` y una constante `SAL` con valor 5\n2. Sección de preparación con un comentario `// PREPARACIÓN` y una variable `ingredientesAgregados` que empiece en 0, súmale 1, y muéstrala",
      validation: {
        requiredCode: [
          "/\\/\\/.*INGREDIENTES/i",
          "/SAL.*5/",
          "/\\/\\/.*PREPARACIÓN/i",
          "/ingredientesAgregados.*0/",
          "/ingredientesAgregados.*\\+.*1/",
          "/mostrar/",
        ],
        expectedOutputs: ["/1/"],
      },
    },
    {
      title: "Desactivar Pasos Temporalmente",
      content:
        "A veces querés probar tu receta sin un ingrediente (¿cómo queda sin azúcar?). En programación, podés 'comentar' líneas de código para desactivarlas sin borrarlas.",
      code: `// RECETA: Galletas
constante HARINA = 300
constante AZUCAR = 100
// constante CHOCOLATE = 50  // Probando versión sin chocolate

variable galletasHechas = 0

galletasHechas = 12
mostrar "Galletas hechas: " + galletasHechas

// mostrar "Debug: azúcar usada = " + AZUCAR  // Solo para pruebas`,
      explanation:
        "Cuando ponés // al inicio de una línea de código, esa línea se desactiva. El programa la ignora como si no existiera.\n\nEsto es útil para:\n• Probar el código sin ciertas líneas\n• Desactivar líneas de debug/prueba\n• Guardar código que tal vez uses después\n\nEs mejor que borrar porque podés reactivarlo fácilmente sacando las //",
      challenge:
        "Escribe un código con 4 líneas de `mostrar` mostrando diferentes mensajes. Comenta (desactiva) 2 de ellas. Al ejecutar, solo deben aparecer 2 mensajes.",
      validation: {
        requiredCode: [
          "/\\/\\/.*mostrar/",
          "/\\/\\/.*mostrar/",
          "/mostrar\\s+/",
          "/mostrar\\s+/",
        ],
      },
    },
    {
      title: "Comentarios Útiles vs Comentarios Obvios",
      content:
        "Como en una receta, tus comentarios deben agregar información útil. 'Agregar huevos' es obvio, pero 'batir hasta que esté esponjoso' es un buen tip.",
      code: `// RECETA: Pizza Casera

// ❌ MAL: Comentario obvio
variable masa = verdadero  // Declaramos variable masa

// ✅ BIEN: Comentario útil
variable masa = verdadero  // Dejamos reposar 30 min antes de usar

// ❌ MAL: Repite el código
temperatura = 220  // Asignamos 220 a temperatura

// ✅ BIEN: Explica el por qué
temperatura = 220  // Temperatura ideal: más alto quema, más bajo queda crudo

constante TIEMPO_HORNEADO = 15  // IMPORTANTE: No menos de 15 min
variable tiempoActual = 0

tiempoActual = tiempoActual + 5
mostrar "Tiempo de horneado: " + tiempoActual + " minutos"`,
      explanation:
        "Buenos comentarios:\n• Explican POR QUÉ hiciste algo, no QUÉ hiciste (el código ya muestra el qué)\n• Dan tips importantes o advertencias\n• Documentan decisiones o valores críticos\n\nMalos comentarios:\n• Repiten lo que el código ya dice\n• Son obvios y no agregan valor\n• Están desactualizados",
      challenge:
        "Crea un programa de receta con:\n• Una constante `TEMPERATURA` con un valor y un comentario explicando por qué esa temperatura es importante\n• Una variable `pasoActual` que empiece en 0\n• Incrementa `pasoActual` en 1 y muéstralo con un mensaje claro",
      summary:
        "🎉 ¡Felicitaciones! Ahora sabes:\n\n• Los comentarios empiezan con //\n• El programa los ignora completamente\n• Sirven para explicar tu código a otros (y a tu yo del futuro)\n• Puedes organizarlos en secciones\n• Puedes desactivar código comentándolo\n• Buenos comentarios explican el POR QUÉ, no el QUÉ\n\n💡 ¡Siguiente: aprende sobre los diferentes tipos de datos!",
      validation: {
        requiredCode: [
          "/constante.*TEMPERATURA.*\\/\\//",
          "/variable.*pasoActual.*0/",
          "/pasoActual.*\\+.*1/",
          "/mostrar/",
        ],
      },
    },
  ],
};
