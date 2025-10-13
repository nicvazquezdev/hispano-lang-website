import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimizaciones para SEO y rendimiento */

  // Habilitar compresión
  compress: true,

  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Headers para SEO y seguridad
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/hl-og.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Type",
            value: "image/png",
          },
        ],
      },
    ];
  },

  // Configuración de trailing slashes (mejor para SEO)
  trailingSlash: false,

  // Habilitar optimizaciones del compilador
  reactStrictMode: true,

  // Optimizar fuentes
  optimizeFonts: true,

  // Habilitar SWC minification
  swcMinify: true,

  // Generar ETags para mejor caché
  generateEtags: true,

  // Configurar páginas de error personalizadas
  poweredByHeader: false,
};

export default nextConfig;
