import Link from "next/link";
import Button from "@/components/ui/Button";
import OpenSourceBadge from "@/components/ui/OpenSourceBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-20 min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              {/* Badge Open Source */}
              <OpenSourceBadge className="mb-4" />

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Programa en
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Español
                </span>
              </h1>

              <p className="text-lg xl:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <b>HispanoLang</b> fue creado para que aprender a programar sea
                tan natural como hablar en español. <br /> Un paso, una idea,
                una línea de código.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link href="/lecciones" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Empezar ahora
                  </Button>
                </Link>
                <Link href="/documentacion" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Ver documentación
                  </Button>
                </Link>
              </div>
            </div>

            {/* Código de ejemplo */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200/50 shadow-lg md:shadow-2xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="font-mono text-xs sm:text-sm space-y-2 sm:space-y-3 overflow-x-auto">
                  <div className="text-green-600">
                    {"// Saludo personalizado"}
                  </div>
                  <div className="flex gap-2">
                    <div className="text-purple-600">variable</div>
                    <div className="text-orange-600">lenguaje</div>
                    <div className="text-slate-800">=</div>
                    <div className="text-green-600">
                      &quot;HispanoLang&quot;
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="text-purple-600">mostrar</div>
                    <div className="text-green-600">&quot;¡Hola &quot;</div>
                    <div className="text-orange-600">+ lenguaje +</div>
                    <div className="text-green-600">&quot;! 👋&quot;</div>
                  </div>

                  <div className="text-green-600">
                    {"// Calculadora simple"}
                  </div>
                  <div className="flex gap-2">
                    <div className="text-purple-600">variable</div>
                    <div className="text-orange-600">a</div>
                    <div className="text-slate-800">=</div>
                    <div className="text-green-600">10</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-purple-600">variable</div>
                    <div className="text-orange-600">b</div>
                    <div className="text-slate-800">=</div>
                    <div className="text-green-600">5</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-purple-600">variable</div>
                    <div className="text-orange-600">suma</div>
                    <div className="text-slate-800">=</div>
                    <div className="text-green-600">a + b</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-purple-600">mostrar</div>
                    <div className="text-green-600">
                      &quot;La suma es: &quot;
                    </div>
                    <div className="text-orange-600">+ suma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
