import Button from "@/components/ui/Button";
import InfoBlock from "@/components/ui/InfoBlock";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section
      background="light"
      badge={{ emoji: "🚀", text: "Empezar Ahora" }}
      title="¿Listo para"
      titleGradient=" empezar?"
      description="Es gratis, es fácil, y está listo para usar. No necesitas saber nada de programación."
    >
      <div className="text-center">
        <div className="mb-12">
          <Button size="lg" className="rounded-full shadow-lg">
            Descargar Gratis
          </Button>
        </div>

        <InfoBlock
          emoji="🤔"
          title="¿Qué necesitas?"
          description="Solo una computadora y ganas de aprender. Nosotros te enseñamos todo lo demás."
          className=""
        />
      </div>
    </Section>
  );
}
