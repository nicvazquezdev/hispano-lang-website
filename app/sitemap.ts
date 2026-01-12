import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hispanolang.com";

  // Lecciones disponibles
  const lecciones = [
    "variables",
    "comentarios",
    "tipos-datos",
    "metodos-strings",
    "operadores",
    "condicionales",
    "bucles",
    "control-flujo-bucles",
    "funciones",
    "funciones-matematicas",
    "listas",
    "objetos",
    "manejo-errores",
    "ejemplos-avanzados",
  ];

  // Secciones de documentación
  const docSecciones = [
    "variables",
    "comentarios",
    "tiposDatos",
    "operadores",
    "condicionales",
    "bucles",
    "funciones",
    "listas",
    "objetos",
    "funcionesMatematicas",
    "manejoErrores",
  ];

  return [
    // Página principal
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Playground
    {
      url: `${baseUrl}/playground`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Lecciones (índice)
    {
      url: `${baseUrl}/lecciones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Documentación (índice)
    {
      url: `${baseUrl}/documentacion`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Páginas de lecciones individuales
    ...lecciones.map((leccion) => ({
      url: `${baseUrl}/lecciones/${leccion}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // Secciones de documentación
    ...docSecciones.map((seccion) => ({
      url: `${baseUrl}/documentacion?seccion=${seccion}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
