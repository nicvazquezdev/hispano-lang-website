"use client";

import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

export default function CodeEditor({
  initialCode,
  onCodeChange,
  onRun,
  onComplete,
  isCompleted,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Actualizar el código cuando cambie initialCode
  useEffect(() => {
    setCode(initialCode);
    setOutput("");
  }, [initialCode]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Ejecutando...");

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();

      if (result.success) {
        const output = result.output.join("\n");
        setOutput(output || "Código ejecutado exitosamente");
        onCodeChange(code);
        onRun(); // Llamar onRun cuando se ejecute exitosamente
        onComplete(); // Marcar como completado cuando se ejecute exitosamente
      } else {
        setOutput(result.error);
      }
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setIsRunning(false);
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange(newCode);
  };

  return (
    <div className="space-y-4">
      {/* Code Editor */}
      <Card
        variant="glass"
        className="bg-white/80 backdrop-blur-sm border-white/20 overflow-hidden"
      >
        <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <Button onClick={runCode} size="sm" disabled={isRunning}>
            {isRunning ? "⏳ Ejecutando..." : "▶ Ejecutar"}
          </Button>
        </div>

        <div className="p-4">
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-64 bg-transparent text-slate-800 font-mono text-sm resize-none outline-none placeholder-slate-400"
            placeholder="Escribe tu código aquí..."
            spellCheck={false}
          />
        </div>
      </Card>

      {/* Output */}
      <Card
        variant="glass"
        className="bg-white/80 backdrop-blur-sm border-white/20 overflow-hidden"
      >
        <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
          <span className="text-slate-700 font-semibold">Resultado</span>
        </div>

        <div className="p-4 h-32">
          <pre className="text-slate-800 font-mono text-sm whitespace-pre-wrap">
            {output || "Haz clic en 'Ejecutar' para ver el resultado"}
          </pre>
        </div>
      </Card>

      {/* Completion Status */}
      {isCompleted && (
        <Card variant="glass" className="bg-green-50 border-green-200">
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-green-800 font-semibold">
              ¡Excelente! Has completado este paso.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
