import { LessonContent } from "../types";

export const elegirCaso: LessonContent = {
  badge: { emoji: "🎯", text: "Lección 9" },
  title: "Elegir/Caso en",
  titleGradient: " HispanoLang",
  description: "Aprende a elegir entre múltiples opciones como un menú escolar",
  prev: { url: "/lecciones/condicionales", title: "Condicionales" },
  next: { url: "/lecciones/bucles", title: "Bucles" },
  steps: [
    {
      title: "El Menú de la Cafetería",
      content:
        "En la cafetería escolar eliges tu almuerzo por número: 1=Milanesa, 2=Pizza, 3=Ensalada.\n\nEn vez de preguntar '¿es 1? ¿es 2? ¿es 3?' con muchos si-sino, usas 'elegir/caso': dices el número y obtienes el plato.",
      code: `variable opcionMenu = 2

elegir (opcionMenu) {
    caso 1:
        mostrar "Milanesa con puré"
    caso 2:
        mostrar "Pizza de muzzarella"
    caso 3:
        mostrar "Ensalada César"
    pordefecto:
        mostrar "Opción no disponible"
}`,
      explanation:
        "**elegir/caso** funciona así:\n\n1. Evalúa la variable entre paréntesis (opcionMenu = 2)\n2. Compara con cada 'caso'\n3. Cuando encuentra coincidencia (caso 2), ejecuta ese bloque\n4. Se salta el resto\n5. 'pordefecto' se ejecuta si ningún caso coincide\n\nEs como decir tu número en la cafetería y recibir el plato correspondiente.",
      challenge:
        "Crea un sistema de horario escolar:\n• Variable `dia` con un número (1-7)\n• Usa elegir/caso para mostrar qué día es:\n  1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado, 7=Domingo\n• Incluye 'pordefecto' para números inválidos",
      validation: {
        requiredCode: [
          "/dia\\s*=/",
          "/elegir/",
          "/caso 1/",
          "/caso 2/",
          "/caso 3/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "Más Limpio que Si-Sino Si",
      content:
        "Comparemos hacer lo mismo con 'si-sino si' vs 'elegir/caso'. Verás que elegir es mucho más limpio cuando comparas contra valores exactos.",
      code: `variable dia = 3

si dia == 1 {
    mostrar "Lunes"
} sino si dia == 2 {
    mostrar "Martes"
} sino si dia == 3 {
    mostrar "Miércoles"
} sino {
    mostrar "Otro día"
}

elegir (dia) {
    caso 1:
        mostrar "Lunes"
    caso 2:
        mostrar "Martes"
    caso 3:
        mostrar "Miércoles"
    pordefecto:
        mostrar "Otro día"
}`,
      explanation:
        "Ambos hacen lo mismo, pero:\n\n**Con si-sino si:**\n• Repites 'dia ==' muchas veces\n• Más largo y repetitivo\n• Más difícil de leer con muchas opciones\n\n**Con elegir/caso:**\n• Mencionas 'dia' una sola vez\n• Más corto y claro\n• Fácil agregar más casos\n\n💡 Cuando comparas una variable contra muchos valores exactos, elegir es mejor.",
      challenge:
        "Convierte este código de si-sino si a elegir/caso:\n• Variable `mes` = 12\n• Si es 1, 2, 3: 'Verano'\n• Si es 6, 7, 8: 'Invierno'\n• Si es 12: 'Vacaciones'\n• Pordefecto: 'Mes regular'",
      validation: {
        requiredCode: [
          "/mes\\s*=/",
          "/elegir/",
          "/caso 1|caso 2|caso 3/",
          "/caso 12/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "Eligiendo con Texto: Calificaciones",
      content:
        "Los casos no solo funcionan con números. También puedes usar texto, como letras de calificación (A, B, C, D, F).",
      code: `variable calificacion = "B"

elegir (calificacion) {
    caso "A":
        mostrar "Excelente - 90 a 100 puntos"
    caso "B":
        mostrar "Muy Bueno - 80 a 89 puntos"
    caso "C":
        mostrar "Bueno - 70 a 79 puntos"
    caso "D":
        mostrar "Suficiente - 60 a 69 puntos"
    caso "F":
        mostrar "Reprobado"
    pordefecto:
        mostrar "Calificación inválida"
}`,
      explanation:
        'Con strings (texto):\n\n• Los valores van entre comillas: caso "A"\n• La comparación distingue mayúsculas: "A" ≠ "a"\n• Cada caso puede tener múltiples líneas\n• Útil para menús, comandos, opciones de texto\n\nFunciona igual que con números, solo cambia el tipo de valor.',
      challenge:
        "Sistema de materias optativas:\n• Variable `materia` con texto\n• Casos: 'Arte', 'Música', 'Deportes', 'Teatro'\n• Cada caso muestra el horario de esa materia\n• Pordefecto: 'Materia no disponible'",
      validation: {
        requiredCode: [
          "/materia\\s*=/",
          "/elegir/",
          "/caso.*[\"']Arte[\"']/",
          "/caso.*[\"']Música[\"']/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "Menú Interactivo de Opciones",
      content:
        "elegir/caso es perfecto para crear menús, como el sistema de una biblioteca escolar donde eliges qué hacer.",
      code: `variable opcion = 2

mostrar "=== BIBLIOTECA ESCOLAR ==="
mostrar "1. Buscar libro"
mostrar "2. Prestar libro"
mostrar "3. Devolver libro"
mostrar "4. Ver historial"

elegir (opcion) {
    caso 1:
        mostrar "Iniciando búsqueda..."
        mostrar "Escribe el título del libro"
    caso 2:
        mostrar "Sistema de préstamo"
        mostrar "Escanea tu carnet estudiantil"
    caso 3:
        mostrar "Devolución de libros"
        mostrar "Coloca el libro en el scanner"
    caso 4:
        mostrar "Mostrando tu historial de préstamos"
    pordefecto:
        mostrar "Opción no válida"
        mostrar "Por favor elige 1, 2, 3 o 4"
}`,
      explanation:
        "Menús con elegir/caso:\n\n• Cada caso = una opción del menú\n• Puedes tener múltiples líneas por caso\n• pordefecto maneja errores de entrada\n• Fácil de expandir: agregar opción = agregar caso\n• Estructura clara y organizada\n\nEste patrón se usa en ATMs, quioscos, apps, sistemas escolares.",
      challenge:
        "Crea un menú de exámenes:\n• Opción 1: 'Crear examen nuevo'\n• Opción 2: 'Ver exámenes pendientes'\n• Opción 3: 'Calificar exámenes'\n• Opción 4: 'Ver estadísticas'\n• Pordefecto: mensaje de error\nCada opción debe mostrar al menos 2 líneas.",
      validation: {
        requiredCode: [
          "/opcion\\s*=/",
          "/elegir/",
          "/caso 1/",
          "/caso 2/",
          "/caso 3/",
          "/caso 4/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "¿Cuándo Usar Elegir vs Si-Sino Si?",
      content:
        "No siempre elegir/caso es la mejor opción. Veamos cuándo usar cada estructura.",
      code: `variable nota = 85

si nota >= 90 {
    mostrar "A"
} sino si nota >= 80 {
    mostrar "B"
} sino si nota >= 70 {
    mostrar "C"
}

variable letra = "B"

elegir (letra) {
    caso "A":
        mostrar "Excelente"
    caso "B":
        mostrar "Muy bien"
    caso "C":
        mostrar "Bien"
}`,
      explanation:
        "**Usa si-sino si cuando:**\n• Usas operadores: >, <, >=, <=\n• Verificas rangos numéricos\n• Condiciones con 'y', 'o'\n• Condiciones complejas\n\n**Usa elegir/caso cuando:**\n• Comparas contra valores EXACTOS (==)\n• Tienes muchas opciones específicas\n• Valores son números o strings concretos\n• Quieres código más limpio\n\n💡 Regla simple:\n¿Solo verificas igualdad? → elegir\n¿Usas <, >, y, o? → si-sino si",
      challenge:
        "Identifica cuál usar:\n1. Crear sistema de descuentos por cantidad comprada (10+, 20+, 50+)\n2. Crear menú de idiomas ('Español', 'English', 'Français')\n\nImplementa el menú de idiomas con elegir/caso.",
      validation: {
        requiredCode: [
          "/idioma/",
          "/elegir/",
          "/caso.*[\"']Español[\"']/",
          "/caso.*[\"']English[\"']/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "Casos con Múltiples Líneas",
      content:
        "Cada caso puede tener todo el código que necesites. Es útil cuando cada opción requiere varias acciones.",
      code: `variable nivel = 2

elegir (nivel) {
    caso 1:
        mostrar "📗 NIVEL BÁSICO"
        mostrar "Duración: 60 minutos"
        mostrar "Preguntas: 20"
        mostrar "Nota mínima: 70"
    caso 2:
        mostrar "📘 NIVEL INTERMEDIO"
        mostrar "Duración: 90 minutos"
        mostrar "Preguntas: 30"
        mostrar "Nota mínima: 75"
    caso 3:
        mostrar "📙 NIVEL AVANZADO"
        mostrar "Duración: 120 minutos"
        mostrar "Preguntas: 40"
        mostrar "Nota mínima: 80"
    pordefecto:
        mostrar "Nivel inválido"
}`,
      explanation:
        "Ventajas de múltiples líneas por caso:\n\n• Cada caso puede ser complejo\n• Agrupas lógica relacionada\n• Código organizado por opción\n• Fácil de leer y mantener\n\nCada caso es como una mini-función: hace todo lo necesario para esa opción.",
      challenge:
        "Sistema de inscripción a clubes escolares:\n• Variable `club` con texto\n• 3 clubes: 'Ciencias', 'Robótica', 'Debate'\n• Cada caso muestra: nombre, horario (ej: Lunes 15:00), requisitos\n• Pordefecto: 'Club no existe'",
      validation: {
        requiredCode: [
          "/club\\s*=/",
          "/elegir/",
          "/caso.*[\"']Ciencias[\"']/",
          "/caso.*[\"']Robótica[\"']/",
          "/caso.*[\"']Debate[\"']/",
          "/pordefecto/",
        ],
      },
    },
    {
      title: "Sistema Completo de Administración",
      content:
        "Ahora crea un sistema completo que combine todo lo aprendido: un panel de administración escolar.",
      code: `variable accion = "calificaciones"

mostrar "=== PANEL DE ADMINISTRACIÓN ==="
mostrar ""

elegir (accion) {
    caso "estudiantes":
        mostrar "📚 GESTIÓN DE ESTUDIANTES"
        mostrar "Total de estudiantes: 450"
        mostrar "Nuevos este año: 85"
        mostrar "Tasa de asistencia: 92%"
    caso "calificaciones":
        mostrar "📊 SISTEMA DE CALIFICACIONES"
        mostrar "Exámenes pendientes: 12"
        mostrar "Promedio general: 78.5"
        mostrar "Estudiantes en cuadro de honor: 45"
    caso "horarios":
        mostrar "🕐 ADMINISTRACIÓN DE HORARIOS"
        mostrar "Materias activas: 24"
        mostrar "Profesores: 18"
        mostrar "Cambios pendientes: 3"
    caso "reportes":
        mostrar "📈 GENERADOR DE REPORTES"
        mostrar "Reportes disponibles: 8"
        mostrar "Último reporte: 2 días"
    pordefecto:
        mostrar "❌ Acción no reconocida"
        mostrar "Acciones válidas: estudiantes, calificaciones, horarios, reportes"
}

mostrar ""
mostrar "Fin de consulta"`,
      explanation:
        "Sistema completo incluye:\n\n• Variable para la acción seleccionada\n• Múltiples casos con información detallada\n• pordefecto con mensaje de ayuda\n• Mensajes antes y después del elegir\n• Estructura clara y profesional\n\nEste patrón se usa en sistemas reales de gestión.",
      challenge:
        "Crea tu propio sistema de gestión de tareas escolares:\n• Variable `seccion` con opciones: 'pendientes', 'entregadas', 'calificadas', 'atrasadas'\n• Cada caso muestra:\n  - Título de la sección\n  - Cantidad de tareas\n  - Última actualización o dato relevante\n• Pordefecto con mensaje de error\n• Mensajes de inicio y fin",
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas elegir/caso:\n\n**Estructura:**\n• elegir (variable) { caso valor: código }\n• Compara variable contra valores exactos\n• pordefecto para casos no cubiertos\n\n**Cuándo usar:**\n✅ Comparas contra valores específicos\n✅ Muchas opciones (4+)\n✅ Menús, selectores, comandos\n✅ Valores concretos (no rangos)\n\n**Ventajas:**\n• Más limpio que muchos si-sino si\n• Fácil de leer y mantener\n• Agregar opciones es simple\n• Código organizado\n\n💡 ¡Siguiente: aprende bucles para repetir código!",
      validation: {
        requiredCode: [
          "/seccion\\s*=/",
          "/elegir/",
          "/caso.*[\"']pendientes[\"']/",
          "/caso.*[\"']entregadas[\"']/",
          "/pordefecto/",
          "/mostrar/",
        ],
      },
    },
  ],
};
