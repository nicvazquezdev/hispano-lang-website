export default function Playground() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Prueba Hispano Lang
          </h2>
          <p className="text-lg text-gray-600">
            Escribe tu primer código en español y ve cómo funciona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor de código */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Editor de Código</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400 mb-2">
                // Mi primer programa en Hispano Lang
              </div>
              <div className="text-blue-400">escribir</div>
              <div className="text-white ml-4">"¡Hola mundo!"</div>
              <div className="text-gray-400 mt-4">// Crear una variable</div>
              <div className="text-green-400">variable</div>
              <div className="text-yellow-400">mi_nombre</div>
              <div className="text-white">=</div>
              <div className="text-white">"Ana"</div>
              <div className="text-gray-400 mt-4">// Mostrar el nombre</div>
              <div className="text-blue-400">escribir</div>
              <div className="text-white ml-4">"Mi nombre es: "</div>
              <div className="text-white">+</div>
              <div className="text-yellow-400">mi_nombre</div>
            </div>
          </div>

          {/* Resultado */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800 font-semibold">Resultado</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                Ejecutar
              </button>
            </div>

            <div className="bg-white border rounded-lg p-4 min-h-[200px]">
              <div className="text-gray-600 text-sm mb-2">
                Salida del programa:
              </div>
              <div className="font-mono text-gray-800">
                <div className="text-green-600">¡Hola mundo!</div>
                <div className="text-green-600">Mi nombre es: Ana</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              ¿Quieres probar más ejemplos?
            </h3>
            <p className="text-gray-600 mb-6">
              Tenemos ejemplos para que puedas experimentar con diferentes tipos
              de programas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Calculadora Simple
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Lista de Compras
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Juego de Adivinanza
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
