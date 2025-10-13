import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funciones en HispanoLang",
  description:
    "Aprende a crear funciones reutilizables en HispanoLang. Parámetros, retorno de valores y funciones anónimas. Lección interactiva para nivel intermedio.",
  keywords: [
    "funciones programación español",
    "crear funciones",
    "tutorial funciones",
    "HispanoLang funciones",
    "funciones anónimas",
  ],
  openGraph: {
    title: "Funciones en HispanoLang - Lección Interactiva",
    description:
      "Aprende a crear código reutilizable con funciones en HispanoLang.",
    url: "https://hispanolang.com/lecciones/funciones",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/funciones",
  },
};

export default function FuncionesLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
