import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página No Encontrada",
  description:
    "La página que buscas no existe. Explora HispanoLang, el lenguaje de programación en español.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Código de error animado */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            ¡Ups! Esta página no existe
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Parece que el intérprete no pudo encontrar esta ruta. No te
            preocupes, aquí tienes algunas sugerencias para continuar tu viaje
            con HispanoLang.
          </p>

          {/* Enlaces útiles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                Volver al inicio
              </Button>
            </Link>
            <Link href="/lecciones">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver lecciones
              </Button>
            </Link>
            <Link href="/documentacion">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ir a documentación
              </Button>
            </Link>
          </div>

          {/* Código de ejemplo motivacional */}
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
            <div className="font-mono text-left text-sm space-y-2">
              <div className="text-green-600">
                {"// No te rindas, sigue explorando"}
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400">variable</span>
                <span className="text-orange-400">exito</span>
                <span className="text-slate-200">=</span>
                <span className="text-green-400">verdadero</span>
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400">mostrar</span>
                <span className="text-green-400">
                  &quot;¡Continúa aprendiendo!&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
