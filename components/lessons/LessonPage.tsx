"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FormattedText from "@/components/ui/FormattedText";
import CodeEditor from "@/components/lessons/CodeEditor";
import LessonProgress from "@/components/lessons/LessonProgress";

interface LessonStep {
  title: string;
  content: string;
  code: string;
  explanation: string;
  challenge?: string;
  summary?: string;
}

interface LessonPageProps {
  badge: { emoji: string; text: string };
  title: string;
  titleGradient: string;
  description: string;
  steps: LessonStep[];
  nextLessonUrl?: string;
  nextLessonTitle?: string;
  prevLessonUrl?: string;
  prevLessonTitle?: string;
}

export default function LessonPage({
  badge,
  title,
  titleGradient,
  description,
  steps,
  nextLessonUrl,
  nextLessonTitle,
  prevLessonUrl,
  prevLessonTitle,
}: LessonPageProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden pt-10">
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
          badge={badge}
          title={title}
          titleGradient={titleGradient}
          description={description}
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

                    <FormattedText
                      text={steps[currentStep].content}
                      className="text-slate-600 mb-6 leading-relaxed"
                    />

                    <div className="mb-10">
                      <h4 className="font-semibold text-slate-700 mb-2">
                        💡 Explicación:
                      </h4>
                      <FormattedText
                        text={steps[currentStep].explanation}
                        className="text-slate-600"
                      />
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
                          <b>🧩 Desafío</b>: {steps[currentStep].challenge}
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

                      {currentStep === steps.length - 1 && nextLessonUrl && (
                        <Button
                          variant="primary"
                          onClick={() => router.push(nextLessonUrl)}
                        >
                          {nextLessonTitle || "Siguiente Lección"} →
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

            {/* Lesson Navigation - Always visible */}
            {(prevLessonUrl || nextLessonUrl) && (
              <div className="mt-16 pt-8 border-t border-slate-200">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                  {prevLessonUrl ? (
                    <Button
                      variant="outline"
                      onClick={() => router.push(prevLessonUrl)}
                      prev
                    >
                      {prevLessonTitle || "Anterior"}
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {nextLessonUrl ? (
                    <Button
                      variant="primary"
                      onClick={() => router.push(nextLessonUrl)}
                      next
                    >
                      {nextLessonTitle || "Siguiente"}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => router.push("/lecciones")}
                      className="flex items-center gap-2 justify-end"
                    >
                      <div className="text-xs text-white/80">
                        Completaste todas las lecciones
                      </div>
                      <div className="font-semibold">Volver al inicio ✓</div>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
