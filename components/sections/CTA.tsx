import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Es gratis, es fácil, y está listo para usar. No necesitas saber nada
          de programación.
        </p>

        <div className="mb-12">
          <Button size="lg" className="rounded-full shadow-lg">
            Descargar Gratis
          </Button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            ¿Qué necesitas?
          </h3>
          <p className="text-gray-600 text-lg">
            Solo una computadora y ganas de aprender. Nosotros te enseñamos todo
            lo demás.
          </p>
        </div>
      </div>
    </section>
  );
}
