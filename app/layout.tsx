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
    "HispanoLang es un lenguaje de programación moderno diseñado para estudiantes de habla hispana. Sintaxis clara, potente y fácil de aprender. Aprende programación en tu idioma.",
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
      "HispanoLang es un lenguaje de programación moderno diseñado para estudiantes de habla hispana. Sintaxis clara, potente y fácil de aprender.",
    siteName: "HispanoLang",
    images: [
      {
        url: "https://hispanolang.com/hl-og.png",
        width: 1200,
        height: 630,
        alt: "HispanoLang - Programa en Español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HispanoLang",
    description:
      "Lenguaje de programación moderno diseñado para estudiantes de habla hispana. Sintaxis clara y fácil de aprender.",
    images: ["https://hispanolang.com/hl-og.png"],
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
    icon: "/hl-og.png",
    shortcut: "/hl-og.png",
    apple: "/hl-og.png",
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#a855f7" />
        <link rel="canonical" href="https://hispanolang.com" />

        {/* Open Graph adicionales */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:secure_url"
          content="https://hispanolang.com/hl-og.png"
        />

        {/* Twitter adicionales */}
        <meta
          name="twitter:image:src"
          content="https://hispanolang.com/hl-og.png"
        />
        <meta
          name="twitter:image:alt"
          content="HispanoLang - Programa en Español"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
