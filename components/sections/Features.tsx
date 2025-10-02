export default function Features() {
  const features = [
    {
      icon: "📝",
      title: "Todo en Español",
      description:
        "Escribe código usando palabras que ya conoces. No necesitas aprender inglés para programar.",
    },
    {
      icon: "🎯",
      title: "Para Principiantes",
      description:
        "Diseñado especialmente para personas que nunca han programado antes.",
    },
    {
      icon: "💡",
      title: "Fácil de Entender",
      description:
        "El código se lee como si fuera una conversación normal en español.",
    },
    {
      icon: "🚀",
      title: "Rápido de Aprender",
      description:
        "En pocas horas puedes crear tus primeros programas y ver resultados inmediatos.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué es diferente?
          </h2>
          <p className="text-lg text-gray-600">
            Otros lenguajes son complicados. Este está hecho para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
