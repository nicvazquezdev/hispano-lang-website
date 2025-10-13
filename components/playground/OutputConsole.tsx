"use client";

import { useState, useEffect, useRef } from "react";
import { FiTrash2 } from "react-icons/fi";

interface OutputConsoleProps {
  output: string;
  isRunning: boolean;
}

export default function OutputConsole({
  output,
  isRunning,
}: OutputConsoleProps) {
  const [history, setHistory] = useState<
    Array<{ timestamp: Date; output: string }>
  >([]);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (output && !isRunning) {
      setHistory((prev) => [...prev, { timestamp: new Date(), output }]);
    }
  }, [output, isRunning]);

  useEffect(() => {
    // Auto-scroll to bottom when history changes
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [history]);

  const handleClearHistory = () => {
    setHistory([]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-2.5 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <span className="text-slate-900 font-semibold text-sm">Consola</span>
          <span className="text-xs text-slate-400">
            {history.length} ejecucion{history.length !== 1 ? "es" : ""}
          </span>
        </div>
        <button
          onClick={handleClearHistory}
          className="flex items-center space-x-1 px-2 py-1 text-xs text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
          title="Limpiar historial"
        >
          <FiTrash2 className="w-3 h-3" />
          <span>Limpiar</span>
        </button>
      </div>

      {/* Console output */}
      <div
        ref={consoleRef}
        className="flex-1 p-3 overflow-y-auto bg-white/90 font-mono text-xs"
      >
        {history.length === 0 && !output ? (
          <div className="text-slate-500 text-sm">
            Ejecuta tu código para ver el resultado...
          </div>
        ) : (
          <>
            {history.map((entry, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <div className="text-slate-400 text-[10px] mb-1">
                  {formatTime(entry.timestamp)}
                </div>
                <pre className="text-slate-800 whitespace-pre-wrap break-words">
                  {entry.output}
                </pre>
                {index < history.length - 1 && (
                  <div className="border-b border-slate-200 my-2"></div>
                )}
              </div>
            ))}
            {isRunning && (
              <div className="text-purple-600 animate-pulse">
                Ejecutando código...
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 text-xs text-slate-500">
        Salida del programa
      </div>
    </div>
  );
}
