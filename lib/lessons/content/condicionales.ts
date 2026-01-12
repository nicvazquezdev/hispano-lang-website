import { LessonContent } from "../types";

export const condicionales: LessonContent = {
  badge: { emoji: "🤔", text: "Lección 8" },
  title: "Condicionales en",
  titleGradient: " HispanoLang",
  description: "Aprende a tomar decisiones como un sistema de calificaciones",
  prev: { url: "/lecciones/operadores", title: "Operadores" },
  next: { url: "/lecciones/elegir-caso", title: "Elegir/Caso" },
  steps: [
    {
      title: "Tu Primera Decisión: Aprobado o No",
      content:
        "En la escuela, si tu nota es mayor o igual a 70, apruebas. Si es menor, repruebas. Esto es un condicional: el programa toma una decisión basada en una condición.\n\nLa estructura 'si' ejecuta código solo cuando la condición es verdadera.",
      code: `variable nota = 75

si nota >= 70 {
    mostrar "¡Aprobaste!"
}

mostrar "Fin del programa"`,
      explanation:
        "La estructura **si** funciona así:\n\n1. Evalúa la condición (nota >= 70)\n2. Si es verdadera → ejecuta el código dentro de {}\n3. Si es falsa → se salta el bloque y sigue\n\nEn este ejemplo:\n• nota = 75\n• 75 >= 70 es verdadero\n• Entonces muestra '¡Aprobaste!'\n• Luego siempre muestra 'Fin del programa'",
      challenge:
        "Crea una variable `asistencia` con un porcentaje. Si la asistencia es mayor o igual a 75, muestra 'Cumples con la asistencia mínima'.",
      validation: {
        requiredCode: [
          "/asistencia\\s*=/",
          "/si\\s+/",
          "/>=?\\s*75|>\\s*74/",
          "/mostrar/",
        ],
      },
    },
    {
      title: "Dos Caminos: Aprobado o Reprobado",
      content:
        "A veces necesitas hacer algo cuando la condición es verdadera Y algo diferente cuando es falsa.\n\nLa estructura 'si-sino' cubre ambos casos: aprobado o reprobado.",
      code: `variable nota = 65

si nota >= 70 {
    mostrar "¡Aprobaste! Felicitaciones"
} sino {
    mostrar "Reprobaste. Debes recursar"
}`,
      explanation:
        "**si-sino** tiene dos bloques:\n\n• Si la condición es verdadera → ejecuta el primer bloque\n• Si la condición es falsa → ejecuta el segundo bloque (sino)\n\nEXACTAMENTE UNO de los dos se ejecuta, nunca ambos.\n\nEn este ejemplo:\n• nota = 65\n• 65 >= 70 es falso\n• Ejecuta el bloque 'sino'\n• Muestra 'Reprobaste...'",
      challenge:
        "Crea una variable `promedio` con una nota. Usa si-sino para mostrar 'Cuadro de Honor' si es mayor o igual a 85, sino muestra 'Buen trabajo'.",
      validation: {
        requiredCode: [
          "/promedio\\s*=/",
          "/si\\s+/",
          "/>=?\\s*85|>\\s*84/",
          "/sino/",
          "/mostrar/",
        ],
        expectedOutputs: ["/Cuadro|Buen/i"],
      },
    },
    {
      title: "Múltiples Rangos: A, B, C o F",
      content:
        "El sistema de calificaciones tiene múltiples rangos: A (90+), B (80-89), C (70-79), F (<70).\n\nPara esto usamos 'si-sino si': una cadena de condiciones que se evalúan en orden.",
      code: `variable nota = 85

si nota >= 90 {
    mostrar "Calificación: A - Excelente"
} sino si nota >= 80 {
    mostrar "Calificación: B - Muy Bueno"
} sino si nota >= 70 {
    mostrar "Calificación: C - Bueno"
} sino {
    mostrar "Calificación: F - Reprobado"
}`,
      explanation:
        "**si-sino si** evalúa condiciones en orden:\n\n1. ¿nota >= 90? No (85 < 90)\n2. ¿nota >= 80? Sí (85 >= 80) ✓\n3. Ejecuta ese bloque: 'B - Muy Bueno'\n4. Se salta el resto\n\nIMPORTANTE: Se ejecuta el PRIMER bloque cuya condición sea verdadera, luego termina.\n\nEl último 'sino' es opcional (caso por defecto).",
      challenge:
        "Sistema de becas basado en promedio:\n• >= 95: 'Beca Completa'\n• >= 85: 'Beca Parcial'\n• >= 75: 'Ayuda Económica'\n• sino: 'Sin beca'\nCrea variable `promedio` y muestra el tipo de beca.",
      validation: {
        requiredCode: [
          "/promedio\\s*=/",
          "/si\\s+.*>=?\\s*95|>\\s*94/",
          "/sino\\s+si\\s+.*>=?\\s*85|>\\s*84/",
          "/sino\\s+si\\s+.*>=?\\s*75|>\\s*74/",
          "/sino/",
        ],
        expectedOutputs: ["/Beca|Ayuda|Sin/i"],
      },
    },
    {
      title: "Decisiones Dentro de Decisiones",
      content:
        "A veces una decisión lleva a otra decisión. Como: 'Si aprobaste, ENTONCES si tu nota es 90+, verificamos si mereces mención de honor'.\n\nEsto se llama condicionales anidados.",
      code: `variable nota = 92
variable asistencia = 95

si nota >= 70 {
    mostrar "¡Aprobaste!"
    
    si nota >= 90 {
        mostrar "Calificación sobresaliente"
        
        si asistencia >= 90 {
            mostrar "*** MENCIÓN DE HONOR ***"
        }
    }
} sino {
    mostrar "Reprobaste"
}`,
      explanation:
        "Condicionales anidados crean jerarquías de decisiones:\n\n1. Primero verifica: ¿aprobó? (nota >= 70)\n2. Si sí, luego verifica: ¿es sobresaliente? (nota >= 90)\n3. Si sí, luego verifica: ¿tiene buena asistencia? (>= 90)\n4. Solo si pasa las 3, obtiene mención de honor\n\nCada 'si' está dentro del anterior, creando niveles de verificación.",
      challenge:
        "Sistema de recuperación:\n• Si nota < 70 (reprobó)\n  • ENTONCES si nota >= 60: 'Puedes presentar examen de recuperación'\n  • SINO: 'Debes recursar la materia completa'\nCrea `nota` y usa condicionales anidados.",
      validation: {
        requiredCode: [
          "/nota\\s*=/",
          "/si\\s+.*<\\s*70/",
          "/si\\s+.*>=?\\s*60|>\\s*59/",
          "/sino/",
        ],
      },
    },
    {
      title: "Condiciones Múltiples con 'y' y 'o'",
      content:
        "Para aprobar una materia a veces necesitas cumplir MÚLTIPLES requisitos: nota >= 70 Y asistencia >= 75.\n\nUsamos operadores lógicos para combinar condiciones.",
      code: `variable nota = 85
variable asistencia = 80
variable entregaTrabajos = verdadero

si nota >= 70 y asistencia >= 75 {
    mostrar "Cumples los requisitos para aprobar"
}

si nota >= 90 o asistencia >= 95 {
    mostrar "Desempeño destacado en algún área"
}

si nota >= 70 y asistencia >= 75 y entregaTrabajos {
    mostrar "*** APROBADO COMPLETO ***"
}`,
      explanation:
        "Operadores lógicos en condiciones:\n\n• **y**: Ambas condiciones deben ser verdaderas\n  `nota >= 70 y asistencia >= 75`\n  → Solo si AMBAS son verdaderas\n\n• **o**: Al menos una debe ser verdadera\n  `nota >= 90 o asistencia >= 95`\n  → Si una O la otra (o ambas)\n\n• **!**: Invierte verdadero ↔ falso\n  `!reprobado` → verdadero si NO está reprobado",
      challenge:
        "Sistema completo de aprobación:\n• Variables: `notaFinal`, `asistencia`, `trabajosEntregados` (booleano)\n• Aprueba si: (notaFinal >= 70 Y asistencia >= 75) Y trabajosEntregados\n• Muestra 'APROBADO' o 'REPROBADO' según corresponda.",
      validation: {
        requiredCode: [
          "/notaFinal\\s*=/",
          "/asistencia\\s*=/",
          "/trabajosEntregados\\s*=/",
          "/\\s+y\\s+/",
          "/si\\s+/",
          "/sino/",
        ],
        expectedOutputs: ["/APROBADO|REPROBADO/"],
      },
    },
    {
      title: "Evitando Anidamiento Excesivo",
      content:
        "A veces en vez de anidar muchos 'si', es mejor usar operadores lógicos o reorganizar el código.\n\nComparemos dos formas de hacer lo mismo.",
      code: `variable nota = 88
variable asistencia = 92
variable participacion = 85

si nota >= 70 {
    si asistencia >= 75 {
        si participacion >= 80 {
            mostrar "Aprobado con todos los requisitos"
        }
    }
}

si nota >= 70 y asistencia >= 75 y participacion >= 80 {
    mostrar "Aprobado con todos los requisitos"
}`,
      explanation:
        "Ambos códigos hacen lo mismo, pero:\n\n**Versión anidada** (primera):\n• 3 niveles de indentación\n• Más difícil de leer\n• Más líneas de código\n\n**Versión con 'y'** (segunda):\n• Un solo nivel\n• Más clara y legible\n• Más compacta\n\n💡 Regla: Si todos los 'si' están verificando requisitos, usa 'y' en vez de anidar.",
      challenge:
        "Elegibilidad para cuadro de honor:\n• Requiere: promedio >= 85 Y asistencia >= 90 Y comportamiento == 'Excelente'\n• Crea las variables y usa UNA SOLA condición con 'y' (no anides)\n• Muestra 'Cuadro de Honor' o 'No elegible'.",
      validation: {
        requiredCode: [
          "/promedio\\s*=/",
          "/asistencia\\s*=/",
          "/comportamiento\\s*=/",
          "/\\s+y\\s+.*y\\s+/",
          "/si\\s+/",
        ],
      },
    },
    {
      title: "Sistema Completo de Calificaciones",
      content:
        "Ahora combina todo lo aprendido para crear un sistema completo de calificaciones con múltiples verificaciones.",
      code: `variable notaExamen = 85
variable notaTrabajos = 90
variable asistencia = 88

variable notaFinal = (notaExamen + notaTrabajos) / 2

mostrar "=== REPORTE ACADÉMICO ==="
mostrar "Nota final: " + notaFinal
mostrar "Asistencia: " + asistencia + "%"
mostrar ""

si notaFinal >= 70 y asistencia >= 75 {
    mostrar "Estado: APROBADO ✓"
    
    si notaFinal >= 90 {
        mostrar "Calificación: A - Excelente"
        
        si asistencia >= 90 {
            mostrar "*** HONOR ROLL ***"
        }
    } sino si notaFinal >= 80 {
        mostrar "Calificación: B - Muy Bueno"
    } sino {
        mostrar "Calificación: C - Bueno"
    }
} sino {
    mostrar "Estado: REPROBADO ✗"
    
    si notaFinal >= 60 {
        mostrar "Opción: Examen de recuperación"
    } sino si asistencia < 75 {
        mostrar "Motivo: Asistencia insuficiente"
    } sino {
        mostrar "Debe recursar la materia"
    }
}`,
      explanation:
        "Este sistema completo incluye:\n\n1. Cálculo de promedio\n2. Verificación de aprobación (nota Y asistencia)\n3. Asignación de letra (A, B, C)\n4. Verificación de honores (anidado)\n5. Opciones de recuperación\n6. Mensajes personalizados\n\nAsí funcionan los sistemas académicos reales.",
      challenge:
        "Crea tu propio reporte de calificaciones:\n• Variables: `notaParcial1`, `notaParcial2`, `notaFinal`, `asistencia`\n• Calcula promedio de los 3 exámenes\n• Si (promedio >= 70 Y asistencia >= 75): 'APROBADO'\n• Si aprobó Y promedio >= 85: 'Cuadro de Honor'\n• Si reprobó Y promedio >= 60: 'Recuperación disponible'\n• Sino: 'Debe recursar'\nMuestra todo el reporte.",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas los condicionales:\n\n**Estructuras:**\n• **si**: Ejecuta código solo si condición es verdadera\n• **si-sino**: Dos caminos (uno u otro)\n• **si-sino si**: Múltiples opciones (rangos)\n• **anidados**: Decisiones dentro de decisiones\n\n**Operadores:**\n• **y**: Ambas condiciones verdaderas\n• **o**: Al menos una verdadera\n• **!**: Invierte verdadero/falso\n\n**Tips:**\n✅ Usa 'y'/'o' en vez de anidar cuando sea posible\n✅ Ordena condiciones de mayor a menor en rangos\n✅ El orden importa en si-sino si\n✅ Mantén buena indentación\n\n💡 ¡Siguiente: aprende la estructura 'elegir' para múltiples opciones!",
      validation: {
        requiredCode: [
          "/notaParcial1\\s*=/",
          "/notaParcial2\\s*=/",
          "/notaFinal\\s*=/",
          "/asistencia\\s*=/",
          "/promedio/",
          "/si\\s+/",
          "/\\s+y\\s+/",
          "/sino/",
        ],
      },
    },
  ],
};
