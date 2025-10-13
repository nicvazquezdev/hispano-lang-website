import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hispanolang.com"),
  title: "HispanoLang",
  description:
    "HispanoLang es un lenguaje de programación moderno diseñado para desarrolladores de habla hispana. Sintaxis clara, potente y fácil de aprender. Aprende programación en tu idioma.",
  keywords: [
    "HispanoLang",
    "lenguaje de programación en español",
    "programación en español",
    "aprender programación",
    "programar en español",
    "tutorial programación español",
    "código en español",
    "desarrollo software español",
    "programming language Spanish",
    "lenguaje español",
    "sintaxis español",
    "programación hispana",
  ],
  authors: [{ name: "Nicolas Vazquez" }],
  creator: "Nicolas Vazquez",
  publisher: "Nicolas Vazquez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://hispanolang.com",
    title: "HispanoLang",
    description:
      "HispanoLang es un lenguaje de programación moderno diseñado para desarrolladores de habla hispana. Sintaxis clara, potente y fácil de aprender.",
    siteName: "HispanoLang",
    images: [
      {
        url: "/hl-icon-logo.png",
        width: 512,
        height: 512,
        alt: "HispanoLang - Programa en Español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HispanoLang",
    description:
      "Lenguaje de programación moderno diseñado para desarrolladores de habla hispana. Sintaxis clara y fácil de aprender.",
    images: ["/hl-icon-logo.png"],
    creator: "@nicvazquezdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/hl-icon-logo.png",
    shortcut: "/hl-icon-logo.png",
    apple: "/hl-icon-logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://hispanolang.com",
    languages: {
      es: "https://hispanolang.com",
      "es-ES": "https://hispanolang.com",
      "es-MX": "https://hispanolang.com",
      "es-AR": "https://hispanolang.com",
    },
  },
  verification: {
    google: "google-site-verification-code", // El usuario deberá agregar su código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
