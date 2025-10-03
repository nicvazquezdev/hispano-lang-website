import Section from "@/components/ui/Section";

export default function Footer() {
  return (
    <Section
      background="light"
      badge={{ emoji: "💬", text: "Soporte" }}
      title="¿Tienes"
      titleGradient=" preguntas?"
      description="Estamos aquí para ayudarte a aprender. No dudes en preguntar."
    >
      <div className="text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Ayuda
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Contacto
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Comunidad
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-500">
            © 2024 Hispano Lang. Hecho con ❤️ para principiantes.
          </p>
        </div>
      </div>
    </Section>
  );
}
