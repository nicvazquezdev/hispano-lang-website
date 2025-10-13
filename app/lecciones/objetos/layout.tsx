import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objetos en HispanoLang",
  description:
    "Aprende a usar objetos en HispanoLang. Organiza datos con propiedades y crea estructuras complejas. Lección interactiva nivel intermedio.",
  keywords: [
    "objetos programación español",
    "estructuras datos español",
    "propiedades objetos",
    "HispanoLang objetos",
  ],
  openGraph: {
    title: "Objetos en HispanoLang - Lección Interactiva",
    description:
      "Aprende a organizar datos con propiedades usando objetos en HispanoLang.",
    url: "https://hispanolang.com/lecciones/objetos",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/objetos",
  },
};

export default function ObjetosLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
