import Link from "next/link";
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
      description="Comienza tu viaje de aprendizaje con nuestras lecciones interactivas y documentación completa."
    >
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <InfoBlock
            emoji="🎓"
            title="Lecciones Interactivas"
            description="15 lecciones completas desde principiante hasta avanzado. Aprende con ejemplos prácticos y ejecutables."
            className=""
          />
          <InfoBlock
            emoji="📚"
            title="Documentación Completa"
            description="Referencia completa de sintaxis, comandos y características del lenguaje. Todo lo que necesitas en un solo lugar."
            className=""
          />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/lecciones">
            <Button size="lg" className="rounded-full shadow-lg">
              Empieza ahora
            </Button>
          </Link>
          <Link href="/documentacion">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full shadow-lg"
            >
              Ver documentación
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
