import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condicionales en HispanoLang",
  description:
    "Aprende a tomar decisiones en tu código con condicionales en HispanoLang. If, else, else if. Lección interactiva con ejemplos prácticos.",
  keywords: [
    "condicionales programación",
    "if else español",
    "tomar decisiones código",
    "HispanoLang condicionales",
  ],
  openGraph: {
    title: "Condicionales en HispanoLang - Lección Interactiva",
    description:
      "Aprende a tomar decisiones en tu código con estructuras condicionales.",
    url: "https://hispanolang.com/lecciones/condicionales",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/condicionales",
  },
};

export default function CondicionalesLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
