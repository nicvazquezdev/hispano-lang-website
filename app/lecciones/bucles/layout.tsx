import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bucles en HispanoLang",
  description:
    "Aprende a usar bucles en HispanoLang. Repite acciones automáticamente con for, while y más. Lección interactiva con ejemplos prácticos.",
  keywords: [
    "bucles programación español",
    "loops español",
    "while for español",
    "repetir código",
    "HispanoLang bucles",
  ],
  openGraph: {
    title: "Bucles en HispanoLang - Lección Interactiva",
    description:
      "Aprende a repetir acciones automáticamente con bucles en HispanoLang.",
    url: "https://hispanolang.com/lecciones/bucles",
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones/bucles",
  },
};

export default function BuclesLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
