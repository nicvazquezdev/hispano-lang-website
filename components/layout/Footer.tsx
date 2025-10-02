export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Tienes preguntas?
          </h3>
          <p className="text-gray-600 text-lg">
            Estamos aquí para ayudarte a aprender. No dudes en preguntar.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors text-lg"
          >
            Ayuda
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors text-lg"
          >
            Contacto
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors text-lg"
          >
            Comunidad
          </a>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <p className="text-gray-500">
            © 2024 Hispano Lang. Hecho con ❤️ para principiantes.
          </p>
        </div>
      </div>
    </footer>
  );
}
