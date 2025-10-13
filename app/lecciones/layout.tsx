import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lecciones",
  description:
    "Lecciones interactivas de HispanoLang paso a paso. Desde conceptos básicos hasta avanzados. Aprende programación en español de forma práctica y divertida.",
  keywords: [
    "lecciones programación español",
    "tutorial HispanoLang",
    "curso programación español",
    "aprender a programar español",
    "ejercicios programación",
  ],
  openGraph: {
    title: "Lecciones Interactivas de HispanoLang",
    description:
      "Aprende a programar en español con lecciones interactivas paso a paso. Desde básico hasta avanzado.",
    url: "https://hispanolang.com/lecciones",
    images: ["https://hispanolang.com/hl-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lecciones Interactivas de HispanoLang",
    description:
      "Tutoriales paso a paso para aprender programación en español.",
    images: ["https://hispanolang.com/hl-og.png"],
  },
  alternates: {
    canonical: "https://hispanolang.com/lecciones",
  },
};

export default function LeccionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
