import Card from "@/components/ui/Card";

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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-2xl mr-2">✨</span>
            <span className="text-slate-700 font-medium">
              Características Únicas
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            ¿Por qué es
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              diferente?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Otros lenguajes son complicados. Este está hecho para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="interactive" className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
