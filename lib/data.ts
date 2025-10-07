export const docsData = {
  variables: {
    title: "📦 Variables",
    description:
      "Las variables son contenedores que almacenan datos. Usa la palabra clave 'variable' para crear una.",
    subsections: [
      {
        title: "Declaración de Variables",
        description:
          "En HispanoLang, usamos la palabra clave 'variable' para declarar una nueva variable.",
        syntax: "variable nombreVariable = valor",
        code: `variable nombre = "Juan"
variable edad = 25
variable activo = verdadero
variable salario = 50000.50
variable valorNulo = nulo
variable valorIndefinido = indefinido`,
        notes: [
          "El nombre de la variable puede contener letras, números y guiones bajos",
          "Debe comenzar con una letra o guion bajo",
          "Los nombres son sensibles a mayúsculas/minúsculas",
          "Puedes reasignar valores en cualquier momento",
        ],
      },
      {
        title: "Reasignación",
        description:
          "Puedes cambiar el valor de una variable usando el operador de asignación =",
        code: `variable contador = 0
contador = 5
contador = contador + 1`,
      },
    ],
  },
};
