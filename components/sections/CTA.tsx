import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Es gratis, es fácil, y está listo para usar. No necesitas saber nada
          de programación.
        </p>

        <div className="mb-12">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full shadow-lg bg-white text-blue-600 hover:bg-gray-100"
          >
            Descargar Gratis
          </Button>
        </div>

        <div className="bg-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">
            ¿Qué necesitas?
          </h3>
          <p className="text-blue-100 text-lg">
            Solo una computadora y ganas de aprender. Nosotros te enseñamos todo
            lo demás.
          </p>
        </div>
      </div>
    </section>
  );
}
