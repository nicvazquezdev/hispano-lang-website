"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CodeEditor from "@/components/lessons/CodeEditor";
import LessonProgress from "@/components/lessons/LessonProgress";

export default function VariablesLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: "¿Qué son las variables?",
      content:
        "Las variables son como cajas donde guardamos información. En Hispano Lang, usamos la palabra `variable` para crear una nueva caja.",
      code: `variable mi_nombre = "Ana"
mostrar mi_nombre`,
      explanation:
        "Aquí creamos una variable llamada `mi_nombre` y le asignamos el valor 'Ana'. Luego la mostramos en pantalla.",
      challenge:
        "🧩 Desafío rápido: Crea una variable llamada `mi_edad` con tu edad y muéstrala en pantalla.",
    },
    {
      title: "Diferentes tipos de variables",
      content:
        "Podemos guardar diferentes tipos de información: texto, números, y valores verdadero/falso.",
      code: `variable nombre = "Juan"
variable edad = 25
variable es_estudiante = verdadero

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad
mostrar "Es estudiante: " + es_estudiante`,
      explanation:
        "Creamos tres variables de diferentes tipos y las mostramos. Observa cómo concatenamos texto con variables usando el operador +",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu color favorito, tu número de la suerte y si te gusta programar (verdadero/falso).",
    },
    {
      title: "Cambiar el valor de una variable",
      content:
        "Podemos cambiar el valor de una variable en cualquier momento usando el operador de asignación =",
      code: `variable contador = 0
mostrar "Contador inicial: " + contador

contador = 5
mostrar "Contador después: " + contador

contador = contador + 3
mostrar "Contador final: " + contador`,
      explanation:
        "Primero asignamos 0, luego cambiamos a 5, y finalmente sumamos 3 más. Las variables pueden cambiar su valor durante la ejecución del programa.",
      challenge:
        "🧩 Desafío rápido: Crea una variable `puntos` que empiece en 10, luego cámbiala a 25, y finalmente súmale 5 más.",
    },
    {
      title: "Variables con operaciones matemáticas",
      content:
        "Podemos usar variables en operaciones matemáticas y guardar el resultado en otra variable.",
      code: `variable precio = 100
variable descuento = 20
variable precio_final = precio - descuento

mostrar "Precio original: " + precio
mostrar "Descuento: " + descuento
mostrar "Precio final: " + precio_final`,
      explanation:
        "Calculamos el precio final restando el descuento del precio original. Las variables nos permiten hacer cálculos dinámicos.",
      challenge:
        "🧩 Desafío rápido: Calcula el área de un rectángulo (base × altura) y muestra el resultado.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno. Crea tus propias variables y experimenta con diferentes valores.",
      code: `// ¡Escribe tu código aquí!
variable mi_variable = "¡Hola mundo!"
mostrar mi_variable`,
      explanation:
        "Experimenta creando variables con diferentes nombres y valores. ¡No hay límites para tu creatividad!",
      challenge:
        "🧩 Desafío rápido: Crea una variable `pais` y muestra un mensaje que diga 'Vivo en [tu país]'.",
      summary:
        "🧠 Recuerda:\n\n• Usa `variable` para crear una nueva caja.\n• Puedes cambiar su contenido en cualquier momento.\n• Las variables pueden guardar texto, números o valores verdadero/falso.",
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
  const progress = ((currentStep + 1) / steps.length) * 100;

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
          badge={{ emoji: "📦", text: "Lección 1" }}
          title=" "
          titleGradient="Variables"
          description="Aprende a almacenar y manipular datos paso a paso"
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
              <Card variant="glass" className="bg-white/80 backdrop-blur-sm">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {steps[currentStep].title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {steps[currentStep].content}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-slate-700 mb-2">
                      💡 Explicación:
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {steps[currentStep].explanation}
                    </p>
                  </div>

                  {/* Mini Challenge */}
                  {steps[currentStep].challenge && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {steps[currentStep].challenge}
                      </h4>
                    </div>
                  )}

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

              {/* Code Editor */}
              <CodeEditor
                key={currentStep} // Forzar re-render cuando cambie el paso
                initialCode={steps[currentStep].code}
                onCodeChange={() => {}}
                onRun={() => {}}
                onComplete={() => handleStepComplete(currentStep)}
                isCompleted={completedSteps.includes(currentStep)}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
