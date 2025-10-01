export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Sintaxis Intuitiva",
      description:
        "Palabras clave en español que hacen que el código sea más legible y fácil de entender.",
    },
    {
      icon: "⚡",
      title: "Alto Rendimiento",
      description:
        "Compilado a código nativo para obtener la máxima velocidad de ejecución.",
    },
    {
      icon: "🔧",
      title: "Fácil de Aprender",
      description:
        "Diseñado para ser accesible tanto para principiantes como para desarrolladores experimentados.",
    },
    {
      icon: "🌐",
      title: "Multiplataforma",
      description:
        "Funciona en Windows, macOS y Linux con una sola instalación.",
    },
    {
      icon: "📚",
      title: "Documentación Completa",
      description:
        "Guías detalladas, tutoriales y ejemplos para acelerar tu aprendizaje.",
    },
    {
      icon: "👥",
      title: "Comunidad Activa",
      description:
        "Únete a una comunidad creciente de desarrolladores hispanohablantes.",
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué HispanoLang?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un lenguaje moderno que combina la potencia de los lenguajes más
            populares con la claridad del español.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
