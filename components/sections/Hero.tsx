export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Aprende a Programar
            <br />
            <span className="text-blue-600">Sin Complicaciones</span>
          </h1>
        </div>

        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          <b>Hispano Lang</b> es un lenguaje de programación en español, pensado
          para que cualquiera pueda aprender a programar desde cero.
        </p>

        <div className="mb-12">
          <button className="bg-blue-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg">
            Empezar Gratis
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            ¿Qué es programar?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Programar es como darle instrucciones a una computadora para que
            haga lo que tú quieras. Es como escribir una receta, pero para que
            la computadora la siga.
          </p>
        </div>
      </div>
    </section>
  );
}
