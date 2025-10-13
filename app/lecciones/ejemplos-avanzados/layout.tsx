import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ejemplos Avanzados en HispanoLang",
  description:
    "Proyectos y ejemplos avanzados integrando todos los conceptos de HispanoLang. Aprende con casos reales y prácticos.",
  keywords: [
    "proyectos HispanoLang",
    "ejemplos avanzados español",
    "programación práctica",
    "casos reales código",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/ejemplos-avanzados",
  },
};

export default function EjemplosAvanzadosLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
