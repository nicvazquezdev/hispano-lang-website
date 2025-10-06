interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export default function LessonProgress({
  currentStep,
  totalSteps,
  progress,
}: LessonProgressProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Progreso de la Lección
        </h3>
        <span className="text-slate-600 font-medium">
          {currentStep} de {totalSteps} pasos
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              index < currentStep
                ? "bg-green-500 text-white"
                : index === currentStep - 1
                ? "bg-blue-500 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {index < currentStep ? "✓" : index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
