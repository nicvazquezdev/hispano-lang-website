import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Fondo animado con partículas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="text-2xl mr-2">🚀</span>
                <span className="text-white/90 font-medium">
                  Nuevo Lenguaje de Programación
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Programa en
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Español
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                <strong>Hispano Lang</strong> es el primer lenguaje de
                programación diseñado específicamente para hispanohablantes.
                Sintaxis natural, aprendizaje intuitivo, resultados
                profesionales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="">
                  Empezar Ahora
                </Button>
                <Button variant="outline" size="lg">
                  Ver Ejemplos
                </Button>
              </div>
            </div>

            {/* Código de ejemplo */}
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white/60 text-sm ml-4">
                    mi_programa.hispano
                  </span>
                </div>

                <div className="font-mono text-sm space-y-3">
                  <div className="text-green-400">
                    {"// Mi primer programa"}
                  </div>
                  <div className="text-blue-400">escribir</div>
                  <div className="text-white ml-4">{"¡Hola mundo!"}</div>
                  <div className="text-gray-400 mt-4">
                    {"// Crear una variable"}
                  </div>
                  <div className="text-purple-400">variable</div>
                  <div className="text-yellow-300">mi_nombre</div>
                  <div className="text-white">=</div>
                  <div className="text-green-300">{"Ana"}</div>
                  <div className="text-gray-400 mt-4">
                    {"// Mostrar resultado"}
                  </div>
                  <div className="text-blue-400">escribir</div>
                  <div className="text-white ml-4">{"Mi nombre es: "}</div>
                  <div className="text-white">+</div>
                  <div className="text-yellow-300">mi_nombre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
