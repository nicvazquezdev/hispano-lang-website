import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Métodos de Strings en HispanoLang",
  description:
    "Aprende a manipular y transformar texto con métodos de strings en HispanoLang. Operaciones comunes con cadenas de texto.",
  keywords: [
    "métodos strings español",
    "manipular texto",
    "cadenas texto HispanoLang",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/metodos-strings",
  },
};

export default function MetodosStringsLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
