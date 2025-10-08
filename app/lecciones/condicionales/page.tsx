import LessonPage from "@/components/lessons/LessonPage";

export default function CondicionalesLesson() {
  const steps = [
    {
      title: "¿Qué son los condicionales?",
      content:
        "Los condicionales son estructuras que permiten a nuestros programas tomar decisiones. En la vida real tomamos decisiones constantemente: 'si hace frío, me pongo abrigo', 'si tengo hambre, como algo'. En programación, los condicionales nos permiten crear esta misma lógica: ejecutar código solo cuando se cumple cierta condición. Son fundamentales para crear programas inteligentes que se adapten a diferentes situaciones.",
      code: `variable edad = 18

si edad >= 18 {
    mostrar "Eres mayor de edad"
}

mostrar "Programa terminado"`,
      explanation:
        "La estructura básica del condicional usa la palabra `si` seguida de una condición entre paréntesis implícitos y llaves {}. Si la condición es verdadera, se ejecuta el código dentro de las llaves. Si es falsa, se salta ese bloque y el programa continúa. En este ejemplo, verificamos si la edad es mayor o igual a 18. Como es verdadero, se muestra 'Eres mayor de edad'. El mensaje 'Programa terminado' se muestra siempre, sin importar la condición. Los condicionales son la base de la lógica de programación: permiten que el programa reaccione de forma diferente según los datos.",
      challenge:
        "Crea una variable con tu edad y usa un condicional `si` para mostrar un mensaje solo si eres mayor de 21 años.",
    },
    {
      title: "Condicional Si-Sino (If-Else)",
      content:
        "Muchas veces necesitamos hacer una cosa si se cumple una condición, y otra cosa diferente si no se cumple. Para esto usamos `si-sino`. Es como tener un plan A y un plan B: 'si llueve, me quedo en casa, sino voy al parque'. Esta estructura nos permite cubrir ambos casos de forma clara y organizada.",
      code: `variable edad = 15

si edad >= 18 {
    mostrar "Eres mayor de edad"
    mostrar "Puedes votar"
} sino {
    mostrar "Eres menor de edad"
    mostrar "Aún no puedes votar"
}

mostrar "Gracias por usar el programa"`,
      explanation:
        "La estructura `si-sino` tiene dos bloques de código: uno se ejecuta si la condición es verdadera, el otro si es falsa. Es importante entender que SIEMPRE se ejecuta exactamente uno de los dos bloques, nunca ambos y nunca ninguno. En este ejemplo, como la edad es 15 (menor que 18), se ejecuta el bloque `sino`, mostrando 'Eres menor de edad' y 'Aún no puedes votar'. El último `mostrar` está fuera de la estructura condicional, por lo que siempre se ejecuta. Esta estructura es perfecta cuando necesitamos manejar dos caminos mutuamente excluyentes.",
      challenge:
        "Pide un número al usuario y usa `si-sino` para mostrar si es par o impar. Pista: usa el operador módulo (%) para verificar si el resto de dividir entre 2 es 0.",
    },
    {
      title: "Condicionales Anidados",
      content:
        "A veces necesitamos evaluar múltiples condiciones en secuencia. Podemos anidar condicionales (poner un `si` dentro de otro) para crear lógica más compleja. Es como tomar decisiones paso a paso: primero preguntamos una cosa, y según la respuesta, preguntamos otra cosa diferente.",
      code: `variable edad = 25
variable tiene_licencia = verdadero

si edad >= 18 {
    mostrar "Eres mayor de edad"
    
    si tiene_licencia {
        mostrar "Puedes conducir"
    } sino {
        mostrar "Necesitas obtener tu licencia"
    }
} sino {
    mostrar "Eres menor de edad"
    mostrar "No puedes conducir aún"
}`,
      explanation:
        "Los condicionales anidados nos permiten crear árboles de decisiones complejos. En este ejemplo, primero verificamos si la persona es mayor de edad. Solo si es verdadero, entramos al primer bloque y entonces verificamos si tiene licencia. Si es menor de edad, entramos directamente al bloque `sino` sin verificar la licencia (porque no importa si la tiene o no, igualmente no puede conducir). Es crucial mantener una buena indentación (espacios al inicio de cada línea) para que el código sea legible y entender claramente qué condiciones dependen de cuáles. Los anidamientos son muy potentes pero deben usarse con cuidado para no crear código confuso.",
      challenge:
        "Crea un programa que evalúe si un estudiante aprobó. Si la nota es >= 70, aprobó. Si aprobó Y la nota es >= 90, además muestra '¡Excelente!'. Si no aprobó, muestra 'Debes estudiar más'.",
    },
    {
      title: "Cadenas de Condiciones (Elif)",
      content:
        "Cuando necesitamos evaluar múltiples condiciones en secuencia, pero solo una debe ejecutarse, usamos cadenas de `si-sino-si`. Esto es más claro que anidar muchos condicionales. Es como tener múltiples opciones: 'si hace mucho calor → playa, sino si hace calor → parque, sino si hace frío → cine'.",
      code: `variable nota = 85

si nota >= 90 {
    mostrar "Calificación: A - Excelente"
} sino {
    si nota >= 80 {
        mostrar "Calificación: B - Muy bien"
    } sino {
        si nota >= 70 {
            mostrar "Calificación: C - Bien"
        } sino {
            mostrar "Calificación: F - Reprobado"
        }
    }
}`,
      explanation:
        "Esta estructura evalúa condiciones en orden hasta que encuentra una verdadera. En este ejemplo, con nota = 85:\n\n1. ¿nota >= 90? No, continúa\n2. ¿nota >= 80? Sí! Ejecuta este bloque y termina\n\nNo evalúa las condiciones restantes porque ya encontró una verdadera. Esto es más eficiente que evaluar todas las condiciones. Cada bloque `sino-si` solo se evalúa si todas las condiciones anteriores fueron falsas. Esta estructura es ideal para categorizar valores en rangos o evaluar múltiples casos mutuamente excluyentes. Es importante ordenar las condiciones de más restrictiva a menos restrictiva para que funcione correctamente.",
      challenge:
        "Crea un programa que categorice la temperatura: si >= 30 'Hace mucho calor', si >= 20 'Clima agradable', si >= 10 'Hace fresco', sino 'Hace frío'.",
    },
    {
      title: "Condiciones Complejas",
      content:
        "Podemos combinar múltiples condiciones usando operadores lógicos (y, o, !) para crear evaluaciones más sofisticadas. Esto nos permite verificar múltiples requisitos al mismo tiempo sin necesidad de anidar condicionales. Es como tener reglas compuestas: 'puedes entrar si tienes entrada Y eres mayor de edad'.",
      code: `variable edad = 25
variable tiene_entrada = verdadero
variable es_vip = falso

si edad >= 18 y tiene_entrada {
    mostrar "¡Bienvenido al evento!"
    
    si es_vip {
        mostrar "Acceso VIP activado"
    }
} sino {
    si edad < 18 {
        mostrar "Lo sentimos, eres menor de edad"
    } sino {
        mostrar "Necesitas comprar una entrada"
    }
}`,
      explanation:
        "Los operadores lógicos nos permiten combinar condiciones:\n\n• `y` (AND): Todas las condiciones deben ser verdaderas\n• `o` (OR): Al menos una condición debe ser verdadera\n• `!` (NOT): Invierte una condición\n\nEn este ejemplo, usamos `edad >= 18 y tiene_entrada` para verificar dos cosas simultáneamente. Ambas deben ser verdaderas para entrar al evento. Luego, dentro de ese bloque, verificamos si es VIP para darle privilegios adicionales. Estas condiciones complejas nos permiten modelar reglas del mundo real de forma precisa sin crear estructuras de código complicadas. Es importante usar paréntesis cuando combinamos muchas condiciones para hacer el código más claro.",
      challenge:
        "Simula un sistema de login: el usuario puede entrar si (el nombre es 'admin' Y la contraseña es '1234') O (es_invitado es verdadero). Muestra mensajes apropiados.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas que tomen decisiones complejas. Combina condicionales simples, anidados y con múltiples condiciones para resolver problemas del mundo real. Los condicionales son el corazón de la lógica de programación: dominándolos puedes crear programas verdaderamente inteligentes.",
      code: `variable temperatura = 25

si temperatura > 30 {
    mostrar "Hace mucho calor"
} sino {
    si temperatura > 20 {
        mostrar "Clima agradable"
    } sino {
        mostrar "Hace frío"
    }
}`,
      explanation:
        "En esta práctica libre experimenta con diferentes tipos de condicionales. Intenta crear sistemas de validación, calculadoras que manejen casos especiales, juegos con diferentes caminos, o cualquier programa que necesite tomar decisiones. La clave está en pensar claramente qué condiciones necesitas evaluar y en qué orden. Usa condicionales simples cuando solo necesites un camino opcional, `si-sino` cuando tengas dos caminos, y cadenas de condiciones cuando tengas múltiples categorías. Recuerda que la claridad es más importante que la complejidad: es mejor tener varios condicionales simples que uno muy complicado.",
      challenge:
        "Crea una calculadora de descuentos: si la compra es >= 100, descuento del 20%. Si es >= 50, descuento del 10%. Sino, sin descuento. Calcula y muestra el precio final.",
      summary:
        "🧠 Recuerda:\n\n• `si` ejecuta código solo cuando la condición es verdadera.\n• `si-sino` cubre dos caminos mutuamente excluyentes.\n• Puedes anidar condicionales para lógica compleja.\n• Las cadenas `si-sino-si` evalúan múltiples casos en orden.\n• Usa operadores lógicos (y, o, !) para combinar condiciones.\n• La indentación es crucial para la legibilidad.\n• ¡Los condicionales son el cerebro de tus programas!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🤔", text: "Lección 6" }}
      title="Condicionales en"
      titleGradient=" HispanoLang"
      description="Aprende a tomar decisiones en tus programas con estructuras condicionales"
      steps={steps}
      prevLessonUrl="/lecciones/operadores"
      prevLessonTitle="Operadores"
      nextLessonUrl="/lecciones/bucles"
      nextLessonTitle="Bucles"
    />
  );
}
