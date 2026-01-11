import { LessonContent } from "../types";

export const variables: LessonContent = {
  badge: { emoji: "📦", text: "Lección 1" },
  title: "Variables en",
  titleGradient: " HispanoLang",
  description:
    "Aprende a almacenar y manipular datos como en tus redes sociales favoritas",
  next: { url: "/lecciones/constantes", title: "Constantes" },
  steps: [
    {
      title: "¡Hola Mundo!",
      content:
        "Bienvenido a tu primera lección de programación. Vamos a crear tu primera variable y mostrarla en pantalla.\n\nUna variable es como una caja con un nombre donde guardas información.",
      code: `variable mensaje = "Hola Mundo"
mostrar mensaje`,
      explanation:
        "Aquí pasan varias cosas importantes:\n\n1. `variable mensaje` - Creamos una caja llamada 'mensaje'\n2. `= \"Hola Mundo\"` - Guardamos el texto 'Hola Mundo' en esa caja. El texto SIEMPRE va entre comillas (\" o ')\n3. `mostrar mensaje` - Le pedimos al programa que muestre en pantalla lo que hay dentro de la caja 'mensaje'\n\nRecuerda: el texto va entre comillas, pero el nombre de la variable NO lleva comillas.",
      challenge:
        "Ahora te toca a ti: crea una variable llamada `saludo` que guarde el texto 'Hola Mundo', y luego muéstrala en pantalla con `mostrar saludo`.",
      validation: {
        requiredCode: ["/saludo/", "/mostrar/"],
        expectedOutputs: ["/hola mundo/i"],
      },
    },
    {
      title: "Tu Perfil de Usuario",
      content:
        "Imagina que estás creando tu perfil en Instagram. Necesitas guardar tu nombre de usuario. Las variables son perfectas para esto.",
      code: `variable nombreUsuario = "maria_gomez"
mostrar nombreUsuario`,
      explanation:
        "Creamos una variable llamada `nombreUsuario` que guarda el texto 'maria_gomez'. El texto va entre comillas porque es una cadena de caracteres (también llamado 'string'). Luego usamos `mostrar` para ver el contenido en pantalla.",
      challenge:
        "Crea una variable `miUsuario` con tu nombre de usuario favorito (entre comillas) y muéstrala con `mostrar miUsuario`. Luego crea una variable `miBio` con una frase sobre ti (entre comillas) y también muéstrala con `mostrar miBio`.",
      validation: {
        requiredCode: [
          "/miUsuario/",
          "/miBio/",
          "/mostrar.*miUsuario/",
          "/mostrar.*miBio/",
        ],
      },
    },
    {
      title: "Tu Primera Publicación",
      content:
        "Cuando publicas en Instagram, hay información que se guarda: el título de tu post, cuántos likes tiene, si tiene comentarios. Cada dato es una variable diferente y cada tipo de dato se escribe distinto.",
      code: `variable tituloPost = "Mi primera foto"
variable likes = 0
variable tieneComentarios = falso

mostrar "Post: " + tituloPost
mostrar "Likes: " + likes
mostrar "Tiene comentarios: " + tieneComentarios`,
      explanation:
        'Aquí vemos 3 tipos de datos diferentes:\n\n1. **Texto (string)**: `"Mi primera foto"` - Siempre entre comillas\n2. **Número**: `0` - Sin comillas, solo el número\n3. **Booleano**: `falso` o `verdadero` - Sin comillas, palabras especiales\n\nEl símbolo `+` une (concatena) texto con otras cosas para mostrarlas juntas.',
      challenge:
        "Crea tres variables: `titulo` con el nombre de tu post (entre comillas), `likes` con el número 5 (sin comillas), y `publicado` con el valor verdadero (sin comillas). Muestra las tres variables en pantalla.",
      validation: {
        requiredCode: [
          "/titulo/",
          "/likes.*5/",
          "/publicado.*verdadero/",
          "/mostrar.*titulo/",
          "/mostrar.*likes/",
          "/mostrar.*publicado/",
        ],
        expectedOutputs: ["/5/", "/verdadero/"],
      },
    },
    {
      title: "Likes en Tiempo Real",
      content:
        "¡Alguien le dio like a tu post! El contador de likes tiene que aumentar. Podemos cambiar el valor de una variable en cualquier momento simplemente asignándole un nuevo valor.",
      code: `variable likes = 127

mostrar "Likes iniciales: " + likes

likes = 128

mostrar "Después de 1 like: " + likes

likes = likes + 10

mostrar "Después de 10 likes más: " + likes`,
      explanation:
        "Para cambiar el valor de una variable:\n\n1. NO escribas la palabra `variable` de nuevo\n2. Solo escribe el nombre de la variable y el nuevo valor: `likes = 128`\n3. Puedes usar el valor actual en el cálculo: `likes = likes + 10` significa 'toma el valor que tiene likes (128) y súmale 10, guardando el resultado (138) de vuelta en likes'\n\nCada vez que haces `mostrar`, ves el valor actual en ese momento.",
      challenge:
        "Crea una variable `seguidores` que empiece en 100 y muéstrala. Luego cambia su valor para sumarle 25, y muéstrala de nuevo para ver el nuevo valor.",
      validation: {
        requiredCode: [
          "/seguidores.*100/",
          "/seguidores.*seguidores.*25/",
          "/mostrar.*seguidores/",
        ],
        expectedOutputs: ["/100/", "/125/"],
      },
    },
    {
      title: "Atajos: Operadores Compuestos",
      content:
        "Escribir `likes = likes + 5` funciona, pero hay un atajo más corto. En vez de escribir la variable dos veces, podemos usar operadores compuestos como `+=`, `-=`, `*=` y `/=`.",
      code: `variable puntos = 100
mostrar "Puntos iniciales: " + puntos

puntos += 50
mostrar "Después de ganar puntos: " + puntos

puntos -= 20
mostrar "Después de perder puntos: " + puntos

puntos *= 2
mostrar "Después de duplicar: " + puntos

puntos /= 4
mostrar "Después de dividir: " + puntos`,
      explanation:
        "Los operadores compuestos son atajos:\n\n• `puntos += 50` es lo mismo que `puntos = puntos + 50`\n• `puntos -= 20` es lo mismo que `puntos = puntos - 20`\n• `puntos *= 2` es lo mismo que `puntos = puntos * 2`\n• `puntos /= 4` es lo mismo que `puntos = puntos / 4`\n\nEstos atajos hacen tu código más corto y más fácil de leer. Son especialmente útiles para contadores y acumuladores.",
      challenge:
        "Crea una variable `monedas` que empiece en 50. Usa `+=` para sumarle 30 monedas. Luego usa `-=` para restarle 15 monedas. Muestra el resultado final.",
      validation: {
        requiredCode: [
          "/monedas.*50/",
          "/monedas\\s*\\+=\\s*30/",
          "/monedas\\s*-=\\s*15/",
          "/mostrar.*monedas/",
        ],
        expectedOutputs: ["/65/"],
      },
    },
    {
      title: "Calculando Engagement",
      content:
        "El engagement de un post es la suma de todas las interacciones: likes + comentarios + guardados. Podemos usar variables para hacer estos cálculos.",
      code: `variable likes = 250
variable comentarios = 45
variable guardados = 30

variable totalInteracciones = likes + comentarios + guardados

mostrar "Likes: " + likes
mostrar "Comentarios: " + comentarios
mostrar "Guardados: " + guardados
mostrar "Total de interacciones: " + totalInteracciones`,
      explanation:
        "Podemos hacer operaciones matemáticas con números guardados en variables:\n\n• `+` suma\n• `-` resta\n• `*` multiplica\n• `/` divide\n\nEn el ejemplo, `likes + comentarios + guardados` suma los tres números (250 + 45 + 30 = 325) y el resultado se guarda en la variable `totalInteracciones`.",
      challenge:
        "Crea tres variables: `likes` con 150, `comentarios` con 30, y `compartidos` con 20. Luego crea una variable `totalEngagement` que sume las tres y muestra el resultado con `mostrar totalEngagement`.",
      validation: {
        requiredCode: [
          "/likes.*150/",
          "/comentarios.*30/",
          "/compartidos.*20/",
          "/totalEngagement/",
          "/mostrar.*totalEngagement/",
        ],
        expectedOutputs: ["/200/"],
      },
    },
    {
      title: "Tu Dashboard Completo",
      content:
        "Ahora que sabes crear variables, cambiarlas y hacer cálculos, crea tu propio dashboard de red social completo combinando todo lo que aprendiste.",
      code: `variable usuario = "mi_cuenta"
variable seguidores = 1520
variable siguiendo = 340
variable posts = 87

mostrar "Usuario: " + usuario
mostrar "Seguidores: " + seguidores
mostrar "Siguiendo: " + siguiendo
mostrar "Posts: " + posts

variable ratio = seguidores - siguiendo
mostrar "Diferencia seguidores/siguiendo: " + ratio`,
      explanation:
        "Este ejemplo combina todo:\n\n• Variables de texto (entre comillas): `usuario`\n• Variables numéricas (sin comillas): `seguidores`, `siguiendo`, `posts`\n• Operaciones matemáticas: `seguidores - siguiendo`\n• Mostrar múltiples variables con texto descriptivo\n\n¡Puedes crear tantas variables como necesites y combinarlas de cualquier forma!",
      challenge:
        "Crea tu perfil completo con cuatro variables: `usuario` (tu nombre), `seguidores` (un número), `siguiendo` (otro número), y `posts` (cantidad de posts). Luego crea una variable `promedioLikesPorPost` que calcule un promedio dividiendo un número total de likes entre tus posts (usa el operador `/`). Muestra todas tus variables en pantalla.",
      summary:
        '🎉 ¡Felicitaciones! Ahora sabes:\n\n• Crear variables: `variable nombre = valor`\n• Texto entre comillas: `"hola"`\n• Números sin comillas: `42`\n• Booleanos: `verdadero` o `falso`\n• Cambiar valores: `nombre = nuevoValor`\n• Operaciones: `+`, `-`, `*`, `/`\n• Atajos: `+=`, `-=`, `*=`, `/=`\n• Mostrar: `mostrar variable`\n\n💡 ¡Siguiente: constantes!',
      validation: {
        requiredCode: [
          "/usuario/",
          "/seguidores/",
          "/siguiendo/",
          "/posts/",
          "/promedioLikesPorPost/",
          "/mostrar/",
        ],
      },
    },
  ],
};
