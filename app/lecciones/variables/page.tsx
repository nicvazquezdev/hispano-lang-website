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
        "Las variables son uno de los conceptos más importantes en programación. Son como cajas donde guardamos información que queremos usar más adelante. En HispanoLang, usamos la palabra `variable` para crear una nueva caja con un nombre y un valor. Ese valor puede ser texto, números, o incluso resultados de operaciones.",
      code: `variable mi_nombre = "Ana"
mostrar mi_nombre`,
      explanation:
        "Aquí creamos una variable llamada `mi_nombre` y le asignamos el valor 'Ana'. El texto va entre comillas dobles para indicar que es una cadena de caracteres (string). Luego usamos `mostrar` para imprimir el valor en pantalla. Esto significa que el programa tomará el contenido de la caja llamada `mi_nombre` y lo mostrará. Las variables te permiten reutilizar valores sin tener que escribirlos varias veces, y también modificarlos cuando sea necesario.",
      challenge:
        "🧩 Desafío rápido: Crea una variable llamada `mi_edad` con tu edad y muéstrala en pantalla. Observa cómo HispanoLang te permite combinar texto y números fácilmente.",
    },
    {
      title: "Diferentes tipos de variables",
      content:
        "En programación, no toda la información es igual. A veces queremos guardar palabras, otras veces números o respuestas de tipo 'sí' o 'no'. A eso se le llaman tipos de datos. En HispanoLang tenemos tres básicos: texto, números y valores verdadero/falso (también llamados booleanos).",
      code: `variable nombre = "Juan"
variable edad = 25
variable es_estudiante = verdadero

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad
mostrar "Es estudiante: " + es_estudiante`,
      explanation:
        "Creamos tres variables: una con texto (`nombre`), otra con un número (`edad`) y una booleana (`es_estudiante`). Los textos van entre comillas dobles, los números no. Los valores `verdadero` y `falso` representan respuestas lógicas. También usamos el operador `+` para unir texto con valores, lo que se conoce como concatenación. Este tipo de operaciones son muy comunes al crear mensajes dinámicos, por ejemplo al mostrar información personalizada para cada usuario.",
      challenge:
        "🧩 Desafío rápido: Crea variables para tu color favorito, tu número de la suerte y si te gusta programar (verdadero/falso). Luego muestra todo en una frase usando `mostrar` y el operador `+`.",
    },
    {
      title: "Cambiar el valor de una variable",
      content:
        "Una variable no es algo fijo. Podemos cambiar su contenido en cualquier momento usando el operador de asignación `=`. Esto nos permite actualizar información, como un contador o un puntaje en un juego.",
      code: `variable contador = 0
mostrar "Contador inicial: " + contador

contador = 5
mostrar "Contador después: " + contador

contador = contador + 3
mostrar "Contador final: " + contador`,
      explanation:
        "Primero creamos una variable `contador` y le damos el valor 0. Luego cambiamos su valor a 5, y después sumamos 3 más. Cada vez que usamos `=` estamos reasignando el contenido de la caja. En la línea `contador = contador + 3`, HispanoLang toma el valor actual del contador (5), le suma 3, y guarda el nuevo resultado (8). Este concepto es esencial: las variables pueden cambiar mientras el programa se ejecuta, permitiéndonos llevar el control de estados, cálculos o repeticiones.",
      challenge:
        "🧩 Desafío rápido: Crea una variable `puntos` que empiece en 10, luego cámbiala a 25, y finalmente súmale 5 más. Muestra el resultado en cada paso.",
    },
    {
      title: "Variables con operaciones matemáticas",
      content:
        "Las variables también pueden participar en operaciones matemáticas. Podemos hacer sumas, restas, multiplicaciones y divisiones con ellas, igual que en una calculadora, pero guardando los resultados para usarlos después.",
      code: `variable precio = 100
variable descuento = 20
variable precio_final = precio - descuento

mostrar "Precio original: " + precio
mostrar "Descuento: " + descuento
mostrar "Precio final: " + precio_final`,
      explanation:
        "En este ejemplo usamos dos variables (`precio` y `descuento`) y calculamos una nueva (`precio_final`). Usamos el operador `-` para restar y almacenamos el resultado en otra variable. Los operadores básicos en HispanoLang son:\n\n• `+` para sumar o concatenar texto\n• `-` para restar\n• `*` para multiplicar\n• `/` para dividir\n\nEstas operaciones permiten que los programas realicen cálculos automáticos y trabajen con resultados dinámicos. Por ejemplo, podrías calcular precios con impuestos, notas promedio, o distancias sin hacerlo manualmente.",
      challenge:
        "🧩 Desafío rápido: Crea dos variables `base` y `altura`, calcula el área de un rectángulo (base × altura) y muestra el resultado con `mostrar`.",
    },
    {
      title: "¡Práctica libre!",
      content:
        "Ahora es tu turno. Crea tus propias variables y experimenta con diferentes tipos de datos, nombres y valores. No hay una sola respuesta correcta: lo importante es practicar y entender cómo se comportan las variables.",
      code: `variable mi_variable = "¡Hola mundo!"
mostrar mi_variable`,
      explanation:
        "En esta práctica libre puedes escribir tu propio código y ver cómo responde el intérprete. Intenta combinar texto con operaciones, cambiar valores, o crear mensajes personalizados. Recuerda que la práctica es la mejor forma de aprender: cuanto más escribas código, más natural te resultará entender cómo funcionan las variables y su relación con los datos.",
      challenge:
        "🧩 Desafío rápido: Crea una variable `pais` y muestra un mensaje que diga 'Vivo en [tu país]'. Luego, agrega otra variable `ciudad` y combina ambas en un solo mensaje.",
      summary:
        "🧠 Recuerda:\n\n• Usa `variable` para crear una nueva caja.\n• Puedes cambiar su contenido en cualquier momento.\n• Las variables pueden guardar texto, números o valores verdadero/falso.\n• Usa `mostrar` para ver el contenido de las variables en pantalla.\n• Y lo más importante: ¡experimenta y diviértete aprendiendo!",
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

                <div className="mt-6">
                  <Card
                    variant="glass"
                    className="bg-white/80 backdrop-blur-sm"
                  >
                    {/* Mini Challenge */}
                    {steps[currentStep].challenge && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          {steps[currentStep].challenge}
                        </h4>
                      </div>
                    )}
                  </Card>
                </div>
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
