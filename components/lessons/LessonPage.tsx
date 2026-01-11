"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FormattedText from "@/components/ui/FormattedText";
import CodeEditor from "@/components/lessons/CodeEditor";
import LessonProgress from "@/components/lessons/LessonProgress";
import LessonsSidebar from "@/components/lessons/LessonsSidebar";
import CodeBlock from "@/components/ui/CodeBlock";
import { useSpeech } from "@/hooks/useSpeech";
import { LessonStep, LessonNav } from "@/lib/lessons/types";

interface LessonPageProps {
  badge: { emoji: string; text: string };
  title: string;
  titleGradient: string;
  description: string;
  steps: LessonStep[];
  next?: LessonNav;
  prev?: LessonNav;
}

export default function LessonPage({
  badge,
  title,
  titleGradient,
  description,
  steps,
  next,
  prev,
}: LessonPageProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { speak, stop, pause, resume, isSpeaking, isPaused, isSupported } =
    useSpeech();

  const handlePlayAudio = () => {
    if (isSpeaking && !isPaused) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      const textToRead = `${currentStepData.title}. ${currentStepData.content}. ${currentStepData.explanation}`;
      speak(textToRead);
    }
  };

  const handleStopAudio = () => {
    stop();
  };

  // Detener audio al cambiar de paso
  useEffect(() => {
    stop();
  }, [currentStep, stop]);

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

  const progress =
    currentStep === 0 ? 1 : ((currentStep + 1) / steps.length) * 100;

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />

      {/* Sidebar */}
      <LessonsSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="relative z-10 pt-20">
        <Section
          background="light"
          badge={badge}
          title={title}
          titleGradient={titleGradient}
          description={description}
        >
          <div className="max-w-6xl mx-auto">
            {/* Progress Bar */}
            <LessonProgress
              currentStep={currentStep + 1}
              totalSteps={steps.length}
              progress={progress}
            />

            {/* BLOQUE 1: APRENDER */}
            <div className="mb-12 mt-10">
              {/* Título con botón de audio */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-100">
                  {currentStepData.title}
                </h3>
                {isSupported && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePlayAudio}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 rounded-lg text-slate-300 hover:text-slate-100 text-sm transition-colors"
                      title={
                        isSpeaking && !isPaused
                          ? "Pausar"
                          : isPaused
                            ? "Continuar"
                            : "Escuchar lección"
                      }
                    >
                      {isSpeaking && !isPaused ? (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                      <span className="hidden sm:inline">
                        {isSpeaking && !isPaused
                          ? "Pausar"
                          : isPaused
                            ? "Continuar"
                            : "Escuchar"}
                      </span>
                    </button>
                    {isSpeaking && (
                      <button
                        onClick={handleStopAudio}
                        className="flex items-center gap-2 px-3 py-2 bg-red-900/30 hover:bg-red-800/40 border border-red-700/50 rounded-lg text-red-400 hover:text-red-300 text-sm transition-colors"
                        title="Detener"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 6h12v12H6z" />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Contenido teórico */}
              <FormattedText
                text={currentStepData.content}
                className="text-slate-300 text-lg mb-8 leading-relaxed"
              />

              {/* Explicación */}
              <FormattedText
                text={currentStepData.explanation}
                className="text-slate-300 text-lg mb-8 leading-relaxed"
              />

              {/* Ejemplo de código */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-200 mb-3">Ejemplo</h4>
                <CodeBlock code={currentStepData.code} />
              </div>

              {/* Summary (solo en último paso) */}
              {currentStepData.summary && (
                <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">
                    {currentStepData.summary.split("\n")[0]}
                  </h4>
                  <div className="text-green-400 text-sm">
                    {currentStepData.summary
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
            </div>

            {/* BLOQUE 2: PRACTICAR */}
            {currentStepData.challenge && (
              <Card
                variant="glass"
                className="bg-slate-800/80 backdrop-blur-sm mb-8"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-2 text-sm text-purple-400 mb-4">
                    <span>🧩</span>
                    <span className="uppercase tracking-wide font-medium">
                      Practicar
                    </span>
                  </div>

                  {/* Desafío */}
                  <div className="bg-purple-900/20 border border-purple-600/40 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-purple-300 mb-2">
                      Desafío
                    </h4>
                    <p className="text-slate-300">
                      {currentStepData.challenge}
                    </p>
                  </div>

                  {/* Editor + Consola */}
                  <CodeEditor
                    key={currentStep}
                    initialCode=""
                    onCodeChange={() => {}}
                    onRun={() => {}}
                    onComplete={() => handleStepComplete(currentStep)}
                    validation={currentStepData.validation}
                  />
                </div>
              </Card>
            )}

            {/* Step Navigation */}
            <div className="flex justify-between items-center mt-8 mb-8">
              {currentStep > 0 ? (
                <Button variant="outline" onClick={prevStep}>
                  ← Anterior
                </Button>
              ) : prev ? (
                <Button
                  variant="outline"
                  onClick={() => router.push(prev.url)}
                >
                  ← {prev.title}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  ← Anterior
                </Button>
              )}
              <span className="text-slate-400 text-sm">
                Paso {currentStep + 1} de {steps.length}
              </span>
              {currentStep < steps.length - 1 ? (
                <Button variant="primary" onClick={nextStep}>
                  Siguiente →
                </Button>
              ) : next ? (
                <Button
                  variant="primary"
                  onClick={() => router.push(next.url)}
                >
                  {next.title} →
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => router.push("/lecciones")}
                >
                  Finalizar ✓
                </Button>
              )}
            </div>
          </div>
        </Section>
      </main>

      <Footer />

      {/* Botón flotante para abrir sidebar */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-3 py-2 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 rounded-lg text-slate-400 hover:text-slate-200 text-sm transition-colors backdrop-blur-sm"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span>Lecciones</span>
      </button>
    </div>
  );
}
