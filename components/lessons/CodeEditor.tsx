"use client";

import { useState, useEffect } from "react";
import EnhancedCodeEditor from "@/components/playground/EnhancedCodeEditor";
import OutputConsole from "@/components/playground/OutputConsole";

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  onComplete: () => void;
}

export default function CodeEditor({
  initialCode,
  onCodeChange,
  onRun,
  onComplete,
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
      {/* Code editor */}
      <div className="h-[500px]">
        <EnhancedCodeEditor
          code={code}
          onChange={handleCodeChange}
          onRun={runCode}
          isRunning={isRunning}
        />
      </div>

      {/* Output console */}
      <div className="h-[300px]">
        <OutputConsole output={output} isRunning={isRunning} />
      </div>
    </div>
  );
}
