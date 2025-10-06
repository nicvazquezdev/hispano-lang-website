import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

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
    <Section
      background="light"
      badge={{ emoji: "✨", text: "Características Únicas" }}
      title="¿Por qué es"
      titleGradient=" diferente?"
      description="Otros lenguajes son complicados. Este está hecho para ti."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <Card key={index} variant="interactive" className="text-center p-4 sm:p-6">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
