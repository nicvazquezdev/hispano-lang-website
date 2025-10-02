export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              Hispano <span className="text-blue-600">Lang</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#caracteristicas"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              ¿Por qué?
            </a>
            <a
              href="#descargar"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold"
            >
              Empezar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
