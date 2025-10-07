import LessonPage from "@/components/lessons/LessonPage";

export default function EntradaSalidaLesson() {
  const steps = [
    {
      title: "¿Qué es la entrada y salida?",
      content:
        "La entrada y salida (I/O por sus siglas en inglés) son la forma en que nuestros programas se comunican con el mundo exterior. La entrada es información que el usuario nos da (como escribir su nombre), y la salida es información que el programa muestra (como un mensaje de bienvenida). Esta interacción es lo que hace que los programas sean útiles e interactivos.",
      code: `mostrar "¡Hola! Bienvenido a HispanoLang"
mostrar "Este es un mensaje de salida"
mostrar "Los programas pueden mostrar texto en pantalla"`,
      explanation:
        "El comando `mostrar` es nuestra forma básica de salida. Nos permite imprimir mensajes, resultados de cálculos, o valores de variables en la pantalla. Todo lo que ponemos después de `mostrar` se mostrará al usuario. Podemos mostrar texto (entre comillas), números, variables, o combinar múltiples valores usando el operador +. La salida es esencial porque sin ella, no podríamos ver qué hace nuestro programa.",
      challenge:
        "🧩 Desafío rápido: Usa `mostrar` para crear tres mensajes: uno de bienvenida, uno que diga tu lenguaje de programación favorito, y uno de despedida.",
    },
    {
      title: "Mostrando Variables",
      content:
        "Además de mostrar texto fijo, podemos mostrar el contenido de variables. Esto es muy útil para ver qué información está almacenada en nuestro programa y para crear mensajes dinámicos que cambien según los datos.",
      code: `variable nombre = "María"
variable edad = 28
variable ciudad = "Barcelona"

mostrar nombre
mostrar edad
mostrar "Hola, soy " + nombre
mostrar "Tengo " + edad + " años"
mostrar "Vivo en " + ciudad`,
      explanation:
        "Podemos mostrar variables de dos formas: directamente (solo la variable) o combinándolas con texto usando el operador +. Cuando combinamos texto con variables, HispanoLang convierte automáticamente los números a texto para poder unirlos. Esta concatenación nos permite crear mensajes personalizados y dinámicos. Es la base para crear interfaces de usuario que se adapten a diferentes datos y situaciones.",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu comida favorita, tu color favorito y tu año de nacimiento. Luego crea un mensaje completo que combine las tres usando `mostrar`.",
    },
    {
      title: "Entrada Básica: Comando leer",
      content:
        "El comando `leer` nos permite obtener información del usuario. Cuando usamos `leer` seguido de un nombre de variable, el programa se detiene y espera a que el usuario escriba algo. Lo que el usuario escriba se guardará en esa variable y podremos usarlo en nuestro programa.",
      code: `leer nombre
mostrar "¡Hola " + nombre + "!"

leer edad
mostrar "Tienes " + edad + " años"`,
      explanation:
        "El comando `leer` es fundamental para crear programas interactivos. Cuando el programa llega a una línea con `leer`, se pausa y espera que el usuario escriba algo y presione Enter. Lo que el usuario escriba se guarda automáticamente en la variable que especificamos. Esto nos permite crear programas que se adapten a cada usuario, recopilando información como nombres, edades, preferencias, o cualquier otro dato que necesitemos. Es importante entender que `leer` siempre espera input del usuario antes de continuar.",
      challenge:
        "🧩 Desafío rápido: Usa `leer` para pedir el nombre del usuario y su comida favorita. Luego muestra un mensaje personalizado como 'Hola [nombre], a ti también te gusta [comida]'.",
    },
    {
      title: "Entrada con Mensaje",
      content:
        "Podemos hacer que `leer` sea más claro agregando un mensaje que le indique al usuario qué debe escribir. Esto se hace poniendo el mensaje entre comillas después del nombre de la variable. Así el usuario sabe exactamente qué información se espera de él.",
      code: `leer nombre "¿Cuál es tu nombre?"
mostrar "Hola " + nombre

leer edad "¿Cuántos años tienes?"
mostrar "Tienes " + edad + " años"

leer ciudad "¿De dónde eres?"
mostrar "Qué bonito es " + ciudad`,
      explanation:
        "Agregar mensajes descriptivos a `leer` mejora enormemente la experiencia del usuario. En lugar de que el programa simplemente se detenga sin explicación, el usuario ve un mensaje claro que le indica qué debe ingresar. Esto hace que nuestros programas sean más profesionales y fáciles de usar. La sintaxis es: `leer variable 'mensaje'`. El mensaje debe ir entre comillas y aparecerá antes de que el usuario escriba. Esta práctica es fundamental en programación: siempre debemos comunicar claramente qué esperamos del usuario.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que pida el nombre del usuario, su edad, y su ciudad natal (cada uno con un mensaje claro). Luego muestra toda la información en un mensaje completo.",
    },
    {
      title: "Combinando Entrada y Salida",
      content:
        "La verdadera potencia surge cuando combinamos entrada y salida para crear programas interactivos. Podemos pedir información al usuario, procesarla (hacer cálculos, combinarla con otras variables), y mostrar resultados personalizados.",
      code: `leer nombre "¿Cómo te llamas?"
leer edad "¿Cuántos años tienes?"

variable edad_en_10_anos = edad + 10

mostrar "Hola " + nombre + ", ¡es un placer conocerte!"
mostrar "Actualmente tienes " + edad + " años"
mostrar "En 10 años tendrás " + edad_en_10_anos + " años"`,
      explanation:
        "Este ejemplo muestra el ciclo completo de interacción: pedimos información (entrada), la procesamos (cálculos), y mostramos resultados (salida). Primero usamos `leer` para obtener el nombre y edad del usuario. Luego hacemos un cálculo simple (sumar 10 años) y finalmente usamos `mostrar` varias veces para presentar la información de forma clara y ordenada. Este patrón (entrada → procesamiento → salida) es la base de casi todos los programas. Nos permite crear aplicaciones que resuelvan problemas reales y se adapten a las necesidades específicas de cada usuario.",
      challenge:
        "🧩 Desafío rápido: Pide al usuario dos números, súmalos, réstalos y multiplícalos. Muestra los tres resultados con mensajes descriptivos.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas completamente interactivos. Combina `leer` y `mostrar` para crear diálogos, hacer preguntas, realizar cálculos con datos del usuario, y presentar resultados de forma clara.",
      code: `leer nombre "¿Cómo te llamas?"
mostrar "¡Hola " + nombre + "!"

leer edad "¿Cuántos años tienes?"
mostrar "Tienes " + edad + " años"`,
      explanation:
        "En esta práctica libre puedes experimentar creando programas que interactúen con el usuario de formas creativas. Intenta crear conversaciones, cuestionarios, calculadoras interactivas, o cualquier programa que necesite información del usuario. La clave está en pensar en qué información necesitas, cómo pedirla de forma clara, y cómo presentar los resultados de manera útil. Recuerda que un buen programa siempre comunica claramente qué espera del usuario y muestra resultados comprensibles.",
      challenge:
        "🧩 Desafío rápido: Crea un programa que pida el nombre, edad y hobby del usuario. Luego calcula en qué año nació (aproximadamente) y muestra un perfil completo con toda la información.",
      summary:
        "🧠 Recuerda:\n\n• Usa `mostrar` para presentar información al usuario.\n• Usa `leer` para obtener información del usuario.\n• Agrega mensajes descriptivos a `leer` para claridad.\n• Combina entrada y salida para crear programas interactivos.\n• El patrón entrada → procesamiento → salida es fundamental.\n• ¡La comunicación clara con el usuario es esencial!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "💬", text: "Lección 3" }}
      title="Entrada y Salida en"
      titleGradient=" Hispano Lang"
      description="Aprende a interactuar con el usuario mediante entrada y salida"
      steps={steps}
      prevLessonUrl="/lecciones/tipos-datos"
      prevLessonTitle="Tipos de Datos"
      nextLessonUrl="/lecciones/operadores"
      nextLessonTitle="Operadores"
    />
  );
}
