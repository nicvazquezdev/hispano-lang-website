import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operadores en HispanoLang",
  description:
    "Aprende a usar operadores matemáticos y de comparación en HispanoLang. Operaciones básicas y avanzadas en español.",
  keywords: [
    "operadores programación español",
    "matemáticas código",
    "comparaciones HispanoLang",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/operadores",
  },
};

export default function OperadoresLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
