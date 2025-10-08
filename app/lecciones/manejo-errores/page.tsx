import LessonPage from "@/components/lessons/LessonPage";

export default function ManejoErroresLesson() {
  const steps = [
    {
      title: "¿Qué son los errores?",
      content:
        "Los errores son situaciones inesperadas que pueden ocurrir durante la ejecución de un programa. Por ejemplo, dividir entre cero, acceder a un índice que no existe en una lista, o usar una variable no definida. Sin manejo de errores, estos problemas harían que el programa se detenga abruptamente. Aprender a manejar errores nos permite crear programas más robustos y confiables.",
      code: `variable numero = 10
variable divisor = 0

mostrar "Inicio del programa"
mostrar "Número: " + numero
mostrar "Divisor: " + divisor

// Esta operación causaría un error
// variable resultado = numero / divisor

mostrar "Continuamos sin problemas"`,
      explanation:
        "En este ejemplo, mostramos un caso que podría causar error (división entre cero) pero lo dejamos comentado. Los errores detienen la ejecución normal del programa. Si intentáramos dividir entre cero sin manejar el error, el programa se detendría y no veríamos el último mensaje. Los errores más comunes son:\n\n• División entre cero\n• Acceder a índices fuera de rango en listas\n• Usar variables no definidas\n• Llamar métodos en valores nulos\n• Pasar parámetros incorrectos a funciones\n\nEs importante entender que los errores son normales en programación: lo que nos diferencia es cómo los manejamos.",
      challenge:
        "Crea un programa que intente acceder a una lista en un índice que no existe (ejemplo: lista con 3 elementos, acceder al índice 10). Observa qué pasa.",
    },
    {
      title: "Estructura Intentar-Capturar",
      content:
        "La estructura `intentar-capturar` nos permite manejar errores de forma controlada. Ponemos el código que podría fallar dentro del bloque `intentar`. Si ocurre un error, en lugar de detener el programa, se ejecuta el bloque `capturar`. Esto nos permite recuperarnos del error y continuar con la ejecución del programa.",
      code: `intentar {
    variable x = 10 / 0
    mostrar "Esto no se ejecuta"
} capturar (error) {
    mostrar "Error capturado: " + error
}

mostrar "El programa continúa normalmente"`,
      explanation:
        "La estructura tiene dos bloques:\n\n• **intentar {}**: Contiene el código que podría generar un error. Si todo va bien, se ejecuta normalmente.\n• **capturar (error) {}**: Solo se ejecuta si ocurre un error en el bloque `intentar`. Recibe el error como parámetro.\n\nEn este ejemplo, cuando intentamos dividir 10 / 0, se genera un error. En lugar de detener el programa, saltamos al bloque `capturar`, mostramos el mensaje de error, y luego continuamos con el resto del programa. El mensaje 'Esto no se ejecuta' nunca se muestra porque el error ocurre antes. Esta estructura es esencial para crear programas robustos que manejen situaciones inesperadas con gracia.",
      challenge:
        "Crea un bloque `intentar-capturar` que intente acceder al índice 100 de una lista pequeña. Captura el error y muestra un mensaje amigable.",
    },
    {
      title: "Manejo de Errores en Operaciones",
      content:
        "Los errores pueden ocurrir en muchas operaciones diferentes: matemáticas, acceso a listas, trabajo con objetos, etc. Usar `intentar-capturar` nos permite anticipar estos problemas y proporcionar feedback útil al usuario en lugar de que el programa simplemente falle sin explicación.",
      code: `variable numeros = [10, 20, 30]

intentar {
    mostrar numeros[0]
    mostrar numeros[5]
    mostrar "Esto no se verá"
} capturar (error) {
    mostrar "Error al acceder a la lista"
    mostrar "Detalles: " + error
}

mostrar "Lista tiene " + numeros.longitud() + " elementos"`,
      explanation:
        "En este ejemplo, primero accedemos al índice 0 que existe (funciona bien), pero luego intentamos acceder al índice 5 que no existe en una lista de 3 elementos. Esto genera un error y saltamos inmediatamente al bloque `capturar`. El tercer `mostrar` nunca se ejecuta porque el error ocurre antes. El bloque `capturar` nos permite:\n\n• Mostrar mensajes de error amigables al usuario\n• Registrar información sobre el error\n• Intentar una operación alternativa\n• Limpiar recursos o resetear estado\n• Continuar la ejecución del programa\n\nEsto es mucho mejor que dejar que el programa falle sin explicación.",
      challenge:
        "Crea un objeto persona con nombre y edad. Usa `intentar-capturar` para acceder a una propiedad que no existe (como persona.telefono). Muestra un mensaje apropiado si falla.",
    },
    {
      title: "Múltiples Bloques Intentar-Capturar",
      content:
        "Podemos usar múltiples bloques `intentar-capturar` en un programa para manejar diferentes tipos de errores en diferentes secciones. Cada bloque maneja sus propios errores de forma independiente, permitiéndonos crear programas que manejen elegantemente múltiples puntos de falla potencial.",
      code: `variable lista = [1, 2, 3]

// Primer bloque
intentar {
    mostrar "Elemento: " + lista[10]
} capturar (error) {
    mostrar "Error 1: Índice fuera de rango"
}

// Segundo bloque
intentar {
    variable resultado = 100 / 0
    mostrar resultado
} capturar (error) {
    mostrar "Error 2: División entre cero"
}

mostrar "Programa completado exitosamente"`,
      explanation:
        "Cada bloque `intentar-capturar` es independiente. Si el primer bloque tiene un error, se captura y el programa continúa con el siguiente bloque. Esto nos permite:\n\n• Manejar diferentes tipos de errores de forma específica\n• Aislar secciones de código riesgosas\n• Proporcionar mensajes de error específicos para cada situación\n• Continuar la ejecución incluso si múltiples operaciones fallan\n\nEs una buena práctica envolver solo el código que realmente podría fallar, no todo el programa. Así los errores son más fáciles de identificar y manejar apropiadamente. Cada bloque captura solo los errores que ocurren dentro de su bloque `intentar`.",
      challenge:
        "Crea tres bloques `intentar-capturar` separados: uno para división entre cero, uno para acceso a lista fuera de rango, y uno para acceder a una propiedad inexistente. Maneja cada error con un mensaje específico.",
    },
    {
      title: "Validación con Manejo de Errores",
      content:
        "Una aplicación práctica del manejo de errores es validar operaciones antes de ejecutarlas o capturar errores cuando la validación previa no es posible. Combinar condicionales con `intentar-capturar` nos permite crear código defensivo que maneja tanto casos esperados como inesperados.",
      code: `funcion dividirSeguro(a, b) {
    si b == 0 {
        mostrar "Error: No se puede dividir entre cero"
        retornar nulo
    }
    retornar a / b
}

variable resultado1 = dividirSeguro(10, 2)
mostrar "10 / 2 = " + resultado1

variable resultado2 = dividirSeguro(10, 0)
mostrar "Resultado: " + resultado2

// Con intentar-capturar
intentar {
    variable lista = [1, 2, 3]
    variable indice = 1
    
    si indice < lista.longitud() {
        mostrar "Elemento seguro: " + lista[indice]
    } sino {
        mostrar "Índice fuera de rango"
    }
} capturar (error) {
    mostrar "Error inesperado: " + error
}`,
      explanation:
        "Hay dos estrategias para manejar errores:\n\n**1. Validación preventiva**: Verificar condiciones antes de ejecutar código riesgoso (como verificar si el divisor es cero antes de dividir).\n\n**2. Captura reactiva**: Usar `intentar-capturar` para manejar errores que no pudimos prevenir.\n\nLa mejor práctica es combinar ambas: validar lo que puedas anticipar y usar `intentar-capturar` como red de seguridad para errores inesperados. En el ejemplo de `dividirSeguro`, validamos primero el divisor y retornamos `nulo` si es cero. En el segundo ejemplo, validamos el índice pero también envolvemos en `intentar-capturar` por si acaso. Esta defensa en profundidad crea programas más robustos.",
      challenge:
        "Crea una función `obtenerElementoSeguro(lista, indice)` que valide si el índice existe antes de acceder. Si no existe, retorna nulo. Pruébala con casos válidos e inválidos.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de crear programas robustos que manejen errores apropiadamente. El manejo de errores es lo que separa programas amateur de programas profesionales. Un buen programa anticipa problemas, los maneja con gracia, y proporciona feedback útil al usuario cuando algo sale mal.",
      code: `funcion procesarDatos(numero) {
    intentar {
        si numero < 0 {
            mostrar "Advertencia: número negativo"
        }
        
        variable resultado = raiz(numero)
        mostrar "Raíz cuadrada: " + resultado
        retornar resultado
    } capturar (error) {
        mostrar "No se pudo procesar: " + error
        retornar nulo
    }
}

procesarDatos(16)
procesarDatos(-4)`,
      explanation:
        "En esta práctica libre, combina validación, manejo de errores, y funciones para crear código robusto. Piensa en qué puede salir mal en tus programas:\n\n• ¿Qué pasa si el usuario ingresa datos inválidos?\n• ¿Qué pasa si una lista está vacía?\n• ¿Qué pasa si se divide entre cero?\n• ¿Qué pasa si accedes a una propiedad que no existe?\n\nUsa condicionales para validar lo predecible y `intentar-capturar` para lo impredecible. Siempre proporciona mensajes de error claros que ayuden a entender qué salió mal. El manejo de errores no es opcional: es una parte esencial de escribir código profesional y confiable.",
      challenge:
        "Crea una calculadora de promedio que acepte una lista de números. Valida que la lista no esté vacía antes de calcular. Usa `intentar-capturar` para manejar cualquier error inesperado. Muestra mensajes apropiados en cada caso.",
      summary:
        "🧠 Recuerda:\n\n• Los errores son situaciones inesperadas que pueden detener el programa.\n• `intentar {}` contiene código que podría fallar.\n• `capturar (error) {}` maneja el error si ocurre.\n• Combina validación preventiva con captura reactiva.\n• Proporciona mensajes de error claros y útiles.\n• El manejo de errores hace programas más robustos.\n• ¡Un buen programa anticipa problemas y los maneja con gracia!",
    },
  ];

  return (
    <LessonPage
      badge={{ emoji: "🛡️", text: "Lección 13" }}
      title="Manejo de Errores en"
      titleGradient=" HispanoLang"
      description="Aprende a crear programas robustos que manejen errores apropiadamente"
      steps={steps}
      prevLessonUrl="/lecciones/objetos"
      prevLessonTitle="Objetos"
      nextLessonUrl="/lecciones/ejemplos-avanzados"
      nextLessonTitle="Ejemplos Avanzados"
    />
  );
}
