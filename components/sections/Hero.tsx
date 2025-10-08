import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-20 min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              {/* Badge Open Source */}
              <a
                href="https://github.com/nicvazquezdev/hispano-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full mb-4 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  Open Source en GitHub
                </span>
                <svg
                  className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Programa en
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Español
                </span>
              </h1>

              <p className="text-lg md:text-xl xl:text-2xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong>HispanoLang</strong> es el primer lenguaje de
                programación diseñado específicamente para hispanohablantes.
                Sintaxis natural, aprendizaje intuitivo, resultados
                profesionales.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link href="/lecciones" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Empezar Ahora
                  </Button>
                </Link>
                <Link href="/documentacion" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Ver Documentación
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
