import LessonPage from "@/components/lessons/LessonPage";

export default function ControlFlujoBuclesLesson() {
  const steps = [
    {
      title: "¿Qué es el control de flujo en bucles?",
      content:
        "El control de flujo nos permite modificar el comportamiento normal de los bucles. En lugar de simplemente repetir código hasta que la condición sea falsa, podemos saltar iteraciones específicas o terminar el bucle antes de tiempo. Son como atajos o interrupciones que nos dan más control sobre cómo se ejecutan nuestros bucles, permitiéndonos manejar casos especiales de forma elegante.",
      code: `// Bucle normal
variable i = 1
mientras i <= 5 {
    mostrar "Número: " + i
    i = i + 1
}

mostrar "Bucle completado normalmente"`,
      explanation:
        "Este es un bucle normal que se ejecuta de principio a fin. Muestra los números del 1 al 5 y termina cuando i llega a 6. En este caso, el bucle completa todas sus iteraciones según la condición. Sin embargo, a veces necesitamos:\n\n• Terminar el bucle antes si encontramos lo que buscamos\n• Saltar ciertas iteraciones que no necesitamos procesar\n• Manejar casos especiales sin complicar la lógica\n\nPara estos casos, HispanoLang nos proporciona dos palabras clave especiales: `romper` y `continuar`. Estas herramientas hacen nuestros bucles más flexibles y eficientes.",
      challenge:
        "Crea un bucle `mientras` que cuente del 1 al 10 y muestre cada número. Observa cómo funciona normalmente antes de aprender a modificar su flujo.",
    },
    {
      title: "Romper: Salir del Bucle",
      content:
        "La palabra clave `romper` termina el bucle inmediatamente, sin importar si la condición aún es verdadera. Es como una salida de emergencia: cuando encuentras lo que buscas o se cumple cierta condición, puedes detener el bucle sin esperar a que termine naturalmente. Esto ahorra tiempo y hace el código más eficiente.",
      code: `variable contador = 0

mientras contador < 10 {
    mostrar contador
    contador = contador + 1
    
    si contador == 3 {
        romper
    }
}

mostrar "Bucle terminado con romper"
mostrar "Contador final: " + contador`,
      explanation:
        "La palabra `romper` termina el bucle inmediatamente. En este ejemplo:\n\n1. contador = 0, mostramos 0, incrementamos a 1\n2. contador = 1, mostramos 1, incrementamos a 2\n3. contador = 2, mostramos 2, incrementamos a 3\n4. contador = 3, la condición del `si` es verdadera, ejecutamos `romper`\n5. El bucle termina inmediatamente\n\nObserva que aunque la condición del `mientras` dice `< 10`, el bucle termina cuando contador = 3. El código después de `romper` dentro del bucle no se ejecuta. `romper` es útil para:\n\n• Búsquedas: Terminar cuando encuentras el elemento\n• Validaciones: Salir si detectas un problema\n• Optimización: No procesar más de lo necesario",
      challenge:
        "Crea un bucle que busque el número 7 en una secuencia del 1 al 20. Usa `romper` para terminar el bucle cuando lo encuentres y muestra un mensaje de éxito.",
    },
    {
      title: "Continuar: Saltar a la Siguiente Iteración",
      content:
        "La palabra clave `continuar` salta el resto de la iteración actual y va directamente a la siguiente. Es como decir 'skip this one': no queremos terminar el bucle completamente, solo queremos saltarnos ciertos elementos que no necesitamos procesar. Esto es útil para filtrar o ignorar casos específicos.",
      code: `variable i = 0

mientras i < 5 {
    i = i + 1
    
    si i == 3 {
        continuar
    }
    
    mostrar i
}

mostrar "Bucle terminado"`,
      explanation:
        "La palabra `continuar` salta al inicio de la siguiente iteración. En este ejemplo:\n\n1. i = 1, no es 3, mostramos 1\n2. i = 2, no es 3, mostramos 2\n3. i = 3, es 3, ejecutamos `continuar` y saltamos el `mostrar`\n4. i = 4, no es 3, mostramos 4\n5. i = 5, no es 3, mostramos 5\n\nResultado: se muestran 1, 2, 4, 5 (falta el 3). El código después de `continuar` en esa iteración no se ejecuta, pero el bucle continúa con la siguiente iteración. `continuar` es útil para:\n\n• Filtrar elementos que no cumplen condiciones\n• Saltar casos especiales\n• Procesar solo elementos que nos interesan\n• Evitar código anidado complejo",
      challenge:
        "Usa un bucle del 1 al 10. Usa `continuar` para saltar los números pares (usa el operador % para detectarlos). Muestra solo los números impares.",
    },
    {
      title: "Romper vs Continuar: Diferencias Clave",
      content:
        "Es importante entender la diferencia entre `romper` y `continuar`. `romper` termina el bucle completamente y continúa con el código después del bucle. `continuar` solo salta la iteración actual y continúa con la siguiente iteración del bucle. Ambos son útiles en diferentes situaciones.",
      code: `// Ejemplo con romper
mostrar "Bucle con ROMPER:"
para (variable i = 1; i <= 5; i = i + 1) {
    si i == 3 {
        romper
    }
    mostrar i
}

mostrar "---"

// Ejemplo con continuar
mostrar "Bucle con CONTINUAR:"
para (variable j = 1; j <= 5; j = j + 1) {
    si j == 3 {
        continuar
    }
    mostrar j
}`,
      explanation:
        "Comparemos los resultados:\n\n**Con `romper`**: Muestra 1, 2 y termina (cuando i=3, sale del bucle)\n**Con `continuar`**: Muestra 1, 2, 4, 5 (cuando j=3, salta esa iteración pero continúa)\n\nCuándo usar cada uno:\n\n• **romper**: Cuando encontraste lo que buscabas o se cumplió una condición para terminar\n• **continuar**: Cuando quieres ignorar ciertos elementos pero seguir procesando el resto\n\nUn error común es confundirlos: si usas `romper` cuando querías `continuar`, terminarás el bucle prematuramente. Si usas `continuar` cuando querías `romper`, el bucle seguirá ejecutándose cuando no debería. Entender esta diferencia es crucial para controlar bucles efectivamente.",
      challenge:
        "Crea dos bucles del 1 al 10. En el primero, usa `romper` cuando llegues a 6. En el segundo, usa `continuar` para saltar el 6. Compara los resultados y entiende la diferencia.",
    },
    {
      title: "Casos de Uso Prácticos",
      content:
        "En programación real, `romper` y `continuar` tienen aplicaciones muy útiles. `romper` es común en búsquedas (terminar cuando encuentras), validaciones (salir si hay error), o límites (procesar máximo N elementos). `continuar` es útil para filtrar (procesar solo elementos válidos), saltar casos especiales, o evitar procesamiento innecesario.",
      code: `// Buscar en una lista
variable nombres = ["Ana", "Carlos", "María", "Juan"]
variable buscando = "María"
variable encontrado = falso

para (variable i = 0; i < nombres.longitud(); i = i + 1) {
    si nombres[i] == buscando {
        mostrar "¡Encontrado en posición " + i + "!"
        encontrado = verdadero
        romper
    }
}

si !encontrado {
    mostrar "No se encontró"
}

mostrar "---"

// Filtrar números negativos
variable numeros = [5, -2, 8, -1, 3, -7, 10]
mostrar "Números positivos:"

para (variable i = 0; i < numeros.longitud(); i = i + 1) {
    si numeros[i] < 0 {
        continuar
    }
    mostrar numeros[i]
}`,
      explanation:
        "Estos son casos de uso reales:\n\n**Búsqueda con `romper`**: Una vez que encontramos a 'María', no tiene sentido seguir buscando. Usamos `romper` para terminar el bucle inmediatamente, ahorrando iteraciones innecesarias.\n\n**Filtrado con `continuar`**: Solo queremos procesar números positivos. Cuando encontramos un número negativo, usamos `continuar` para saltarlo sin procesarlo, pero seguimos con el resto de la lista.\n\nEstos patrones son muy comunes:\n• Búsqueda en bases de datos (romper al encontrar)\n• Validación de listas (romper si hay error)\n• Filtrado de datos (continuar si no cumple criterios)\n• Procesamiento selectivo (continuar para casos especiales)",
      challenge:
        "Crea una lista de edades. Usa un bucle con `continuar` para mostrar solo las edades >= 18 (mayores de edad). Luego crea otro bucle que busque si hay alguien mayor de 65 y use `romper` al encontrarlo.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de usar control de flujo avanzado en bucles. Combina `romper` y `continuar` con todo lo que has aprendido para crear bucles eficientes e inteligentes. Estas herramientas son fundamentales para optimizar código y manejar lógica compleja de forma clara.",
      code: `// Búsqueda con validación
variable numeros = [2, 4, 6, 7, 8, 10]

mostrar "Buscando el primer número impar:"
para (variable i = 0; i < numeros.longitud(); i = i + 1) {
    si numeros[i] % 2 == 0 {
        continuar
    }
    
    mostrar "Primer impar: " + numeros[i]
    romper
}`,
      explanation:
        "En esta práctica libre, combina `romper` y `continuar` para crear bucles sofisticados. El ejemplo muestra un patrón poderoso: usar `continuar` para filtrar elementos que no nos interesan y `romper` para terminar cuando encontramos lo que buscamos. Esto es más eficiente que procesar toda la lista. Intenta crear:\n\n• Buscadores que terminen al encontrar\n• Filtros que procesen solo elementos válidos\n• Validadores que salgan al primer error\n• Procesadores que manejen casos especiales\n\nRecuerda: `romper` y `continuar` hacen tu código más eficiente, pero úsalos con claridad. El código debe seguir siendo fácil de entender. A veces un bucle simple es mejor que uno lleno de `romper` y `continuar`.",
      challenge:
        "Crea una lista de 15 números. Busca el primer número que sea múltiplo de 3 Y mayor que 10. Usa `continuar` para saltar los que no cumplen y `romper` cuando lo encuentres. Muestra cuántas iteraciones hiciste.",
      summary:
        "🧠 Recuerda:\n\n• `romper` termina el bucle completamente.\n• `continuar` salta a la siguiente iteración.\n• `romper` se usa para salir temprano cuando encontramos lo que buscamos.\n• `continuar` se usa para saltar elementos que no nos interesan.\n• Ambos hacen bucles más eficientes y expresivos.\n• Úsalos con claridad para mantener el código legible.\n• ¡El control de flujo avanzado optimiza tus programas!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🔀", text: "Lección 8" }}
      title="Control de Flujo en Bucles en"
      titleGradient=" HispanoLang"
      description="Aprende a usar romper y continuar para controlar bucles avanzadamente"
      steps={steps}
      prevLessonUrl="/lecciones/bucles"
      prevLessonTitle="Bucles"
      nextLessonUrl="/lecciones/funciones"
      nextLessonTitle="Funciones"
    />
  );
}
