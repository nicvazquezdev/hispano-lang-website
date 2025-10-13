import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funciones Matemáticas en HispanoLang",
  description:
    "Aprende a usar funciones matemáticas integradas en HispanoLang. Cálculos avanzados: raíz cuadrada, potencias, trigonometría y más.",
  keywords: [
    "funciones matemáticas español",
    "cálculos avanzados",
    "matemáticas HispanoLang",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/funciones-matematicas",
  },
};

export default function FuncionesMatematicasLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
