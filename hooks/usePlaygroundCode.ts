import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const DEFAULT_CODE = `// Bienvenido al Playground de HispanoLang
// Escribe tu código en español y ejecútalo aquí

variable mensaje = "¡Hola desde HispanoLang!"
mostrar mensaje`;

export function usePlaygroundCode() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

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
    toast.success("¡Enlace copiado al portapapeles!");
  };

  const handleDownloadCode = () => {
    try {
      const blob = new Blob([code], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "codigo.txt";
      a.click();
      URL.revokeObjectURL(url);
      toast.success("¡Código descargado!");
    } catch (error) {
      toast.error("Error al descargar el código");
      console.error("Error al descargar el código:", error);
    }
  };

  return {
    code,
    output,
    isRunning,
    setCode,
    runCode,
    handleSnippetSelect,
    handleShareCode,
    handleDownloadCode,
  };
}
