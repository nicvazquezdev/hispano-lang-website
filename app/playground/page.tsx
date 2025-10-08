"use client";

import { useState, useEffect } from "react";
import {
  FiShare2,
  FiDownload,
  FiCode,
  FiMenu,
  FiCommand,
  FiBookOpen,
  FiLayers,
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnhancedCodeEditor from "@/components/playground/EnhancedCodeEditor";
import OutputConsole from "@/components/playground/OutputConsole";
import CodeSnippets from "@/components/playground/CodeSnippets";

const DEFAULT_CODE = `// Bienvenido al Playground de HispanoLang
// Escribe tu código en español y ejecútalo aquí

variable mensaje = "¡Hola desde HispanoLang!"
mostrar mensaje

// Prueba estos ejemplos o carga uno de la biblioteca →`;

export default function PlaygroundPage() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showSnippets, setShowSnippets] = useState(true);
  const [isSnippetsCollapsed, setIsSnippetsCollapsed] = useState(false);

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
        setOutput(output || "✓ Código ejecutado exitosamente");
      } else {
        setOutput(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setOutput(
        `❌ Error: ${
          error instanceof Error ? error.message : "Error desconocido"
        }`,
      );
    } finally {
      setIsRunning(false);
    }
  };

  const handleSnippetSelect = (snippetCode: string) => {
    setCode(snippetCode);
    setOutput("");
  };

  const handleShareCode = () => {
    const encoded = btoa(encodeURIComponent(code));
    const url = `${window.location.origin}/playground?code=${encoded}`;
    navigator.clipboard.writeText(url);
    alert("¡Enlace copiado al portapapeles!");
  };

  const handleDownloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codigo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Load code from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("code");
    if (encoded) {
      try {
        const decoded = decodeURIComponent(atob(encoded));
        setCode(decoded);
      } catch (e) {
        console.error("Error decoding shared code:", e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6 pt-20 sm:pt-24">
        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div></div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleShareCode}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200 rounded-lg transition-colors"
              >
                <FiShare2 className="w-3.5 h-3.5" />
                <span>Compartir</span>
              </button>
              <button
                onClick={handleDownloadCode}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200 rounded-lg transition-colors"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>Descargar</span>
              </button>
              <button
                onClick={() => setShowSnippets(!showSnippets)}
                className="lg:hidden flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {showSnippets ? (
                  <FiCode className="w-3.5 h-3.5" />
                ) : (
                  <FiMenu className="w-3.5 h-3.5" />
                )}
                <span>{showSnippets ? "Editor" : "Ejemplos"}</span>
              </button>
            </div>
          </div>

          {/* Mobile action buttons */}
          <div className="flex sm:hidden space-x-2">
            <button
              onClick={handleShareCode}
              className="flex items-center justify-center w-9 h-9 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <FiShare2 className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={handleDownloadCode}
              className="flex items-center justify-center w-9 h-9 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <FiDownload className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Main layout */}
        <div className="flex mb-6">
          {/* Left sidebar - Code snippets */}
          {!isSnippetsCollapsed && (
            <div
              className={`${
                showSnippets ? "block" : "hidden lg:block"
              } w-full lg:w-80 flex-shrink-0`}
            >
              <div className="h-[calc(100vh-280px)] min-h-[500px]">
                <CodeSnippets
                  onSnippetSelect={handleSnippetSelect}
                  onCollapse={() => setIsSnippetsCollapsed(true)}
                />
              </div>
            </div>
          )}

          {/* Expand button when collapsed */}
          {isSnippetsCollapsed && (
            <button
              onClick={() => setIsSnippetsCollapsed(false)}
              className="hidden lg:flex items-center justify-center w-10 h-20 bg-white border border-slate-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all shadow-sm mr-4"
              title="Mostrar ejemplos"
            >
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Main area - Editor and console */}
          <div
            className={`flex-1 space-y-4 ${
              !showSnippets ? "block" : "hidden lg:block"
            }`}
          >
            {/* Editor and output in two columns on desktop */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {/* Code editor */}
              <div className="h-[calc(100vh-280px)] min-h-[500px]">
                <EnhancedCodeEditor
                  code={code}
                  onChange={setCode}
                  onRun={runCode}
                  isRunning={isRunning}
                />
              </div>

              {/* Output console */}
              <div className="h-[calc(100vh-280px)] min-h-[500px]">
                <OutputConsole output={output} isRunning={isRunning} />
              </div>
            </div>

            {/* Tips and shortcuts */}
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <FiCommand className="w-4 h-4 text-purple-600" />
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Atajos
                    </h4>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center space-x-1">
                      <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                        Cmd
                      </kbd>
                      <span>+</span>
                      <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                        Enter
                      </kbd>
                      <span className="text-slate-400">Ejecutar</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                        Tab
                      </kbd>
                      <span className="text-slate-400">Indentar</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <FiLayers className="w-4 h-4 text-purple-600" />
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Funciones
                    </h4>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>Compartir código vía URL</li>
                    <li>Descargar como archivo .txt</li>
                    <li>Historial de ejecuciones</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <FiBookOpen className="w-4 h-4 text-purple-600" />
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Recursos
                    </h4>
                  </div>
                  <ul className="text-xs space-y-1.5">
                    <li>
                      <a
                        href="/documentacion"
                        className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                      >
                        <span>Documentación</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/lecciones"
                        className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                      >
                        <span>Lecciones</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
