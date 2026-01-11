'use client';

import { useState, useEffect } from 'react';
import EnhancedCodeEditor from '@/components/playground/EnhancedCodeEditor';
import OutputConsole from '@/components/playground/OutputConsole';
import {
  SimpleValidation,
  ValidationResult,
  validateExercise,
} from '@/lib/validation';

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  onComplete: () => void;
  validation?: SimpleValidation;
}

export default function CodeEditor({
  initialCode,
  onCodeChange,
  onRun,
  onComplete,
  validation,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    setCode(initialCode);
    setOutput('');
    setValidationResult(null);
    setShowValidation(false);
  }, [initialCode]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Ejecutando...');
    setValidationResult(null);
    setShowValidation(false);

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error('Error al procesar la respuesta del servidor');
      }

      if (result.success) {
        const outputText = result.output.join('\n');
        setOutput(outputText || 'Código ejecutado exitosamente');
        onCodeChange(code);
        onRun();

        // Ejecutar validación
        const validationRes = validateExercise(validation, {
          code,
          output: result.output,
          success: true,
        });
        setValidationResult(validationRes);
        setShowValidation(true);

        if (validationRes.isValid) {
          onComplete();
        }
      } else {
        setOutput(result.error);
        const validationRes = validateExercise(validation, {
          code,
          output: [],
          success: false,
        });
        setValidationResult(validationRes);
        setShowValidation(true);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      setOutput(errorMessage);
      const validationRes = validateExercise(validation, {
        code,
        output: [],
        success: false,
      });
      setValidationResult(validationRes);
      setShowValidation(true);
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
      {/* Editor + Console side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code editor */}
        <div className="h-[350px]">
          <EnhancedCodeEditor
            code={code}
            onChange={handleCodeChange}
            onRun={runCode}
            isRunning={isRunning}
          />
        </div>

        {/* Output console */}
        <div className="h-[350px]">
          <OutputConsole output={output} isRunning={isRunning} />
        </div>
      </div>

      {/* Validation feedback */}
      {showValidation && validationResult && (
        <div className={`p-4 rounded-lg border ${
          validationResult.isValid
            ? 'bg-green-900/30 border-green-700/50'
            : 'bg-red-900/30 border-red-700/50'
        }`}>
          <div className={`flex items-center gap-2 ${validationResult.failed.length > 0 ? 'mb-2' : ''}`}>
            <span className="text-lg">{validationResult.isValid ? '✅' : '❌'}</span>
            <span className={`font-medium ${validationResult.isValid ? 'text-green-300' : 'text-red-300'}`}>
              {validationResult.isValid ? '¡Correcto!' : 'Intenta de nuevo'}
            </span>
          </div>
          {validationResult.failed.length > 0 && (
            <ul className="text-sm text-red-400 space-y-1">
              {validationResult.failed.map((msg, i) => (
                <li key={i}>• {msg}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
