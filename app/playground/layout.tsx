import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Editor de código interactivo para programar en HispanoLang. Escribe y ejecuta código en español directamente en tu navegador sin necesidad de instalación.",
  keywords: [
    "playground español",
    "editor código español",
    "probar HispanoLang",
    "IDE online español",
    "ejecutar código español",
  ],
  openGraph: {
    title: "Playground HispanoLang - Editor de Código en Español",
    description:
      "Editor de código interactivo para programar en HispanoLang. Prueba código en español en tiempo real.",
    url: "https://hispanolang.com/playground",
    images: ["https://hispanolang.com/hl-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground HispanoLang - Editor de Código en Español",
    description: "Escribe y ejecuta código en español en tiempo real.",
    images: ["https://hispanolang.com/hl-og.png"],
  },
  alternates: {
    canonical: "https://hispanolang.com/playground",
  },
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
