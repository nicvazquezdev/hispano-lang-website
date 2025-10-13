import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrada y Salida en HispanoLang",
  description:
    "Aprende a interactuar con el usuario en HispanoLang. Entrada de datos, salida de información y comunicación con el programa.",
  keywords: [
    "entrada salida español",
    "interacción usuario",
    "input output español",
    "HispanoLang entrada salida",
  ],
  alternates: {
    canonical: "https://hispanolang.com/lecciones/entrada-salida",
  },
};

export default function EntradaSalidaLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
