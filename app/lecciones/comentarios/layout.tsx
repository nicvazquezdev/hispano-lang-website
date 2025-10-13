import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comentarios en HispanoLang",
  description:
    "Aprende a documentar tu código con comentarios en HispanoLang. Buenas prácticas para escribir código limpio y legible.",
  keywords: [
    "comentarios código español",
    "documentar código",
    "HispanoLang comentarios",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/comentarios",
  },
};

export default function ComentariosLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
