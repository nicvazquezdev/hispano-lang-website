import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipos de Datos en HispanoLang",
  description:
    "Aprende sobre tipos de datos en HispanoLang: números, texto, booleanos y más. Lección interactiva para principiantes.",
  keywords: [
    "tipos datos español",
    "números texto booleanos",
    "HispanoLang tipos datos",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/tipos-datos",
  },
};

export default function TiposDatosLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
