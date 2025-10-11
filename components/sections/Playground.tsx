"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Playground() {
  const [code, setCode] = useState(`// Mi primer hola mundo
variable lenguaje = "HispanoLang"
mostrar "Hola " + lenguaje + "! 👋"`);

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const playgroundRef = useRef<HTMLDivElement>(null);

  const handleExampleClick = (exampleCode: string) => {
    setCode(exampleCode);
    setOutput("");
    // Scroll hacia el inicio de la sección solo en mobile
    if (window.innerWidth < 1024 && playgroundRef.current) {
      const elementPosition = playgroundRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 100px más arriba

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
        // Si la ejecución fue exitosa, mostrar el output
        const output = result.output.join("\n");
        setOutput(output || "Código ejecutado exitosamente");
      } else {
        // Si hubo un error, mostrar el mensaje de error
        setOutput(`Error: ${result.error}`);
      }
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Section
      background="light"
      badge={{ emoji: "⚡", text: "Prueba en Vivo" }}
      title="Playground de"
      titleGradient=" HispanoLang"
      description="Escribe código en español y ejecútalo aquí mismo"
    >
      <div
        ref={playgroundRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
      >
        {/* Editor */}
        <Card
          variant="glass"
          className="bg-white/80 backdrop-blur-sm border-white/20 overflow-hidden"
        >
          <div className="bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <Button onClick={runCode} size="sm" disabled={isRunning}>
              {isRunning ? "⏳ Ejecutando..." : "▶ Ejecutar"}
            </Button>
          </div>

          <div className="p-3 sm:p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-60 sm:h-80 bg-transparent text-slate-800 font-mono text-xs sm:text-sm resize-none outline-none placeholder-slate-400"
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
          <div className="bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200">
            <span className="text-slate-700 font-semibold text-sm sm:text-base">
              Resultado
            </span>
          </div>

          <div className="p-3 sm:p-4 h-60 sm:h-80">
            <pre className="text-slate-800 font-mono text-xs sm:text-sm whitespace-pre-wrap">
              {output || "Haz clic en 'Ejecutar' para ver el resultado"}
            </pre>
          </div>
        </Card>
      </div>

      {/* Ejemplos */}
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
          Ejemplos para probar
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center p-4 sm:p-6"
            onClick={() =>
              handleExampleClick(`// Información personal
variable nombre = "Ana García"
variable edad = 25
variable ciudad = "Madrid"
variable profesion = "Desarrolladora"

mostrar "=== Mi Tarjeta Personal ==="
mostrar "Nombre: " + nombre
mostrar "Edad: " + edad + " años"
mostrar "Ciudad: " + ciudad
mostrar "Profesión: " + profesion

// Calcular año de nacimiento
variable anioActual = 2025
variable anioNacimiento = anioActual - edad
mostrar "Año de nacimiento: " + anioNacimiento`)
            }
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👤</div>
            <div className="font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Perfil Personal
            </div>
            <div className="text-slate-600 text-xs sm:text-sm">
              Variables y cálculos
            </div>
          </Card>

          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center p-4 sm:p-6"
            onClick={() =>
              handleExampleClick(`// Calculadora con múltiples operaciones
variable a = 15
variable b = 5

mostrar "Número 1: " + a
mostrar "Número 2: " + b
mostrar "Suma: " + (a + b)
mostrar "Resta: " + (a - b)
mostrar "Multiplicación: " + (a * b)
mostrar "División: " + (a / b)`)
            }
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🧮</div>
            <div className="font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Calculadora
            </div>
            <div className="text-slate-600 text-xs sm:text-sm">
              Operaciones matemáticas
            </div>
          </Card>

          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center p-4 sm:p-6"
            onClick={() =>
              handleExampleClick(`// Condicionales: mayor de edad
variable nombre = "Carlos"
variable edad = 20

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad

si edad >= 18 {
    mostrar nombre + " es mayor de edad"
    mostrar "Puede votar"
} sino {
    mostrar nombre + " es menor de edad"
    mostrar "No puede votar todavía"
}`)
            }
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🤔</div>
            <div className="font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">
              Condicionales
            </div>
            <div className="text-slate-600 text-xs sm:text-sm">
              Toma decisiones
            </div>
          </Card>
        </div>

        {/* CTA to full playground */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link href="/playground">
            <Button size="lg">Ir al Playground Completo</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
