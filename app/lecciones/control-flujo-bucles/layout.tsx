import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control de Flujo en Bucles en HispanoLang",
  description:
    "Aprende a controlar el flujo de bucles con break y continue en HispanoLang. Técnicas avanzadas de iteración.",
  keywords: [
    "control flujo español",
    "break continue español",
    "bucles avanzados HispanoLang",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/control-flujo-bucles",
  },
};

export default function ControlFlujoBuclesLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
