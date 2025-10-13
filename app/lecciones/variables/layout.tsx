import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Variables en HispanoLang",
  description:
    "Aprende a usar variables en HispanoLang. Almacena y manipula datos con esta lección interactiva paso a paso. Ideal para principiantes.",
  keywords: [
    "variables programación",
    "tutorial variables español",
    "aprender variables",
    "HispanoLang variables",
  ],
  openGraph: {
    title: "Variables en HispanoLang - Lección Interactiva",
    description:
      "Aprende a almacenar y manipular datos con variables en HispanoLang.",
    url: "https://hispanolang.com/lecciones/variables",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/variables",
  },
};

export default function VariablesLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
