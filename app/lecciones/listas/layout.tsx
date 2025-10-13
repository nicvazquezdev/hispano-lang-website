import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listas en HispanoLang",
  description:
    "Aprende a trabajar con listas y arreglos en HispanoLang. Almacena colecciones de datos y manipúlalas eficientemente. Lección interactiva.",
  keywords: [
    "listas programación español",
    "arreglos arrays español",
    "colecciones datos",
    "HispanoLang listas",
  ],
  openGraph: {
    title: "Listas en HispanoLang - Lección Interactiva",
    description:
      "Aprende a trabajar con colecciones de datos usando listas en HispanoLang.",
    url: "https://hispanolang.com/lecciones/listas",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/listas",
  },
};

export default function ListasLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
