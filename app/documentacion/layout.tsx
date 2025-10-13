import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentación",
  description:
    "Documentación completa de HispanoLang. Guías, referencia de sintaxis, ejemplos de código y tutoriales para aprender a programar en español.",
  keywords: [
    "documentación HispanoLang",
    "guía programación español",
    "referencia sintaxis español",
    "manual HispanoLang",
    "tutoriales español",
  ],
  openGraph: {
    title: "Documentación HispanoLang - Guía Completa",
    description:
      "Documentación completa de HispanoLang. Aprende sintaxis, comandos y características del lenguaje.",
    url: "https://hispanolang.com/documentacion",
    images: ["/hl-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentación HispanoLang",
    description: "Guía completa para aprender HispanoLang desde cero.",
    images: ["/hl-og.png"],
  },
  alternates: {
    canonical: "https://hispanolang.com/documentacion",
  },
};

export default function DocumentacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
