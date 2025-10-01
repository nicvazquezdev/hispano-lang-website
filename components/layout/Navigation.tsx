export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Hispano<span className="text-blue-600">Lang</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#caracteristicas"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                Características
              </a>
              <a
                href="#ejemplos"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                Ejemplos
              </a>
              <a
                href="#documentacion"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                Documentación
              </a>
              <a
                href="#comunidad"
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                Comunidad
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#descargar"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
