"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CodeEditor from "@/components/lessons/CodeEditor";
import LessonProgress from "@/components/lessons/LessonProgress";

export default function TiposDatosLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: "¿Qué son los tipos de datos?",
      content:
        "En programación, no toda la información es igual. Los tipos de datos nos ayudan a entender qué clase de información estamos manejando y qué operaciones podemos hacer con ella. Es como tener diferentes tipos de cajas: algunas para números, otras para texto, y otras para respuestas de sí o no.",
      code: `variable numero = 42
variable texto = "Hola mundo"
variable es_verdadero = verdadero

mostrar "Número: " + numero
mostrar "Texto: " + texto
mostrar "Booleano: " + es_verdadero`,
      explanation:
        "Aquí vemos los tres tipos básicos de datos en HispanoLang: números (sin comillas), texto (entre comillas dobles), y valores booleanos (verdadero/falso). Cada tipo se comporta de manera diferente. Los números permiten operaciones matemáticas, el texto se puede concatenar con el operador +, y los booleanos representan estados lógicos. Es importante entender estos tipos porque el intérprete los trata de manera distinta y nos permite hacer diferentes operaciones con cada uno.",
      challenge:
        "🧩 Desafío rápido: Crea tres variables con tu edad (número), tu nombre (texto) y si tienes mascota (verdadero/falso). Luego muéstralas todas en pantalla.",
    },
    {
      title: "Números: Enteros y Decimales",
      content:
        "Los números son fundamentales en programación. En HispanoLang podemos usar números enteros (como 5, 100, -3) y números decimales (como 3.14, 2.5, -0.5). Los números nos permiten hacer cálculos, contar elementos, y representar medidas o cantidades.",
      code: `variable entero = 25
variable decimal = 3.14159
variable negativo = -10

variable suma = entero + decimal
variable multiplicacion = entero * 2

mostrar "Entero: " + entero
mostrar "Decimal: " + decimal
mostrar "Negativo: " + negativo
mostrar "Suma: " + suma
mostrar "Multiplicación: " + multiplicacion`,
      explanation:
        "Los números en HispanoLang pueden ser positivos o negativos, enteros o decimales. Podemos hacer todas las operaciones matemáticas básicas: suma (+), resta (-), multiplicación (*) y división (/). Cuando trabajamos con números, no necesitamos comillas. El intérprete entiende automáticamente que es un valor numérico y nos permite realizar cálculos. Esto es muy útil para crear calculadoras, procesar datos, o hacer cualquier tipo de operación matemática en nuestros programas.",
      challenge:
        "🧩 Desafío rápido: Crea variables para el precio de un producto (25.99), el descuento (5.50) y calcula el precio final. Muestra todos los valores.",
    },
    {
      title: "Cadenas de Texto (Strings)",
      content:
        "Las cadenas de texto, también llamadas strings, son secuencias de caracteres que representan palabras, frases o cualquier información textual. En HispanoLang, todo el texto debe ir entre comillas dobles para que el intérprete sepa que es una cadena de caracteres y no una variable o número.",
      code: `variable saludo = "¡Hola!"
variable nombre = "María"
variable apellido = "García"

variable nombre_completo = nombre + " " + apellido
variable mensaje = saludo + " " + nombre

mostrar nombre_completo
mostrar mensaje
mostrar "Mi nombre tiene " + nombre.longitud() + " letras"`,
      explanation:
        "Las cadenas de texto van siempre entre comillas dobles. Podemos concatenar (unir) cadenas usando el operador +. También podemos usar métodos como .longitud() para obtener información sobre la cadena. Las cadenas son muy útiles para crear mensajes personalizados, procesar información del usuario, o mostrar resultados de manera legible. Es importante recordar que cuando concatenamos texto con números, HispanoLang convierte automáticamente los números a texto para poder unirlos.",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu ciudad y país, únelas en una frase como 'Vivo en [ciudad], [país]' y muestra la longitud total del mensaje.",
    },
    {
      title: "Valores Booleanos",
      content:
        "Los valores booleanos representan estados lógicos: verdadero o falso. Son fundamentales para tomar decisiones en programación, como '¿es mayor de edad?', '¿tiene permiso?', o '¿está activo?'. Solo pueden tener dos valores: verdadero o falso.",
      code: `variable es_mayor = verdadero
variable tiene_licencia = falso
variable es_estudiante = verdadero

mostrar "Es mayor de edad: " + es_mayor
mostrar "Tiene licencia: " + tiene_licencia
mostrar "Es estudiante: " + es_estudiante

variable puede_conducir = es_mayor y tiene_licencia
mostrar "Puede conducir: " + puede_conducir`,
      explanation:
        "Los valores booleanos (verdadero/falso) son la base de la lógica en programación. Nos permiten representar estados y condiciones. Podemos usar operadores lógicos como 'y' (AND) y 'o' (OR) para combinar condiciones. Por ejemplo, 'puede conducir' es verdadero solo si 'es mayor' Y 'tiene licencia' son ambos verdaderos. Los booleanos son esenciales para crear programas que tomen decisiones inteligentes basadas en diferentes condiciones.",
      challenge:
        "🧩 Desafío rápido: Crea variables para si tienes hambre, si tienes dinero, y si el restaurante está abierto. Luego determina si puedes comer (hambriento Y con dinero Y restaurante abierto).",
    },
    {
      title: "Valores Especiales: Nulo e Indefinido",
      content:
        "A veces necesitamos representar la ausencia de valor o un estado desconocido. HispanoLang tiene dos valores especiales para esto: nulo (representa la ausencia intencional de valor) e indefinido (representa que algo no ha sido definido o no existe).",
      code: `variable valor_nulo = nulo
variable valor_indefinido = indefinido
variable nombre = "Juan"

mostrar "Valor nulo: " + valor_nulo
mostrar "Valor indefinido: " + valor_indefinido
mostrar "Nombre: " + nombre

// Simulando un valor que podría no existir
variable telefono = nulo
mostrar "Teléfono: " + telefono`,
      explanation:
        "Los valores nulo e indefinido son útiles para manejar casos donde no tenemos información o cuando algo no ha sido inicializado. 'Nulo' se usa cuando intencionalmente no hay valor (como un teléfono opcional), mientras que 'indefinido' indica que algo no ha sido definido. Estos valores son importantes para crear programas robustos que manejen situaciones donde los datos podrían no estar disponibles. Nos ayudan a evitar errores y a crear lógica condicional más sofisticada.",
      challenge:
        "🧩 Desafío rápido: Crea una variable para un email opcional (inicialmente nulo) y otra para una dirección que no se ha definido (indefinido). Muestra ambos valores y explica la diferencia.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno de experimentar con todos los tipos de datos que has aprendido. Combina números, texto, booleanos y valores especiales para crear programas más complejos e interesantes.",
      code: `variable mi_edad = 25
variable mi_nombre = "Ana"
variable es_programador = verdadero

mostrar "Hola, soy " + mi_nombre
mostrar "Tengo " + mi_edad + " años"
mostrar "¿Soy programador? " + es_programador`,
      explanation:
        "En esta práctica libre puedes combinar todos los tipos de datos que has aprendido. Intenta crear programas que usen números para cálculos, texto para mensajes personalizados, booleanos para lógica, y valores especiales para manejar casos excepcionales. La clave está en entender cuándo usar cada tipo y cómo combinarlos efectivamente. Recuerda que la práctica constante es la mejor forma de dominar estos conceptos fundamentales.",
      challenge:
        "🧩 Desafío rápido: Crea un perfil personal con tu nombre, edad, ciudad, si tienes trabajo, y un hobby. Luego crea un mensaje completo que combine toda esta información.",
      summary:
        "🧠 Recuerda:\n\n• Los números permiten operaciones matemáticas y no van entre comillas.\n• El texto va entre comillas dobles y se puede concatenar con +.\n• Los booleanos (verdadero/falso) representan estados lógicos.\n• Nulo e indefinido manejan la ausencia de valores.\n• Cada tipo de dato tiene sus propias operaciones y comportamientos.\n• ¡Experimenta combinando diferentes tipos para crear programas más ricos!",
    },
  ];

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calcular progreso: paso actual / total de pasos
  const progress =
    currentStep === 0 ? 1 : ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Section
          background="light"
          badge={{ emoji: "🔢", text: "Lección 2" }}
          title="Tipos de Datos en"
          titleGradient=" Hispano Lang"
          description="Aprende sobre números, texto, booleanos y valores especiales"
        >
          <div className="">
            {/* Progress Bar */}
            <LessonProgress
              currentStep={currentStep + 1}
              totalSteps={steps.length}
              progress={progress}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Lesson Content */}
              <div>
                <Card variant="glass" className="bg-white/80 backdrop-blur-sm">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {steps[currentStep].title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {steps[currentStep].content}
                    </p>

                    <div className="mb-10">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        💡 Explicación:
                      </h4>
                      <p className="text-slate-600">
                        {steps[currentStep].explanation}
                      </p>
                    </div>

                    {/* Summary for last step */}
                    {steps[currentStep].summary && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-green-800 mb-2">
                          {steps[currentStep].summary.split("\n")[0]}
                        </h4>
                        <div className="text-green-700 text-sm">
                          {steps[currentStep].summary
                            .split("\n")
                            .slice(1)
                            .map((line, index) => (
                              <p key={index} className="mb-1">
                                {line}
                              </p>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Mini Challenge */}
                    {steps[currentStep].challenge && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-10">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          {steps[currentStep].challenge}
                        </h4>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between">
                      {currentStep > 0 && (
                        <Button variant="outline" onClick={prevStep}>
                          ← Anterior
                        </Button>
                      )}

                      {currentStep === 0 && <div></div>}

                      {currentStep < steps.length - 1 && (
                        <Button variant="primary" onClick={nextStep}>
                          Siguiente →
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Code Editor */}
              <CodeEditor
                key={currentStep} // Forzar re-render cuando cambie el paso
                initialCode={steps[currentStep].code}
                onCodeChange={() => {}}
                onRun={() => {}}
                onComplete={() => handleStepComplete(currentStep)}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
