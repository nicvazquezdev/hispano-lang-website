import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manejo de Errores en HispanoLang",
  description:
    "Aprende a manejar errores y excepciones en HispanoLang. Crea programas robustos y seguros con try-catch.",
  keywords: [
    "manejo errores español",
    "excepciones programación",
    "try catch español",
    "HispanoLang errores",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/manejo-errores",
  },
};

export default function ManejoErroresLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
