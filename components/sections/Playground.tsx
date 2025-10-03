"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Playground() {
  const [code, setCode] = useState(`escribir "¡Hola mundo!"
variable mi_nombre = "Ana"
escribir "Mi nombre es: " + mi_nombre`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    // Simulación de ejecución (no funcional aún)
    setOutput("¡Hola mundo!\nMi nombre es: Ana");
  };

  return (
    <Section
      background="light"
      badge={{ emoji: "⚡", text: "Prueba en Vivo" }}
      title="Playground de"
      titleGradient=" Hispano Lang"
      description="Escribe código en español y ejecútalo aquí mismo"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor */}
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
            <div className="flex items-center space-x-3">
              <span className="text-slate-600 text-sm">editor.hispano</span>
              <Button
                onClick={runCode}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
              >
                ▶ Ejecutar
              </Button>
            </div>
          </div>

          <div className="p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-80 bg-transparent text-slate-800 font-mono text-sm resize-none outline-none placeholder-slate-400"
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

          <div className="p-4 h-80">
            <pre className="text-slate-800 font-mono text-sm whitespace-pre-wrap">
              {output || "Haz clic en 'Ejecutar' para ver el resultado"}
            </pre>
          </div>
        </Card>
      </div>

      {/* Ejemplos */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          Ejemplos para probar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center"
            onClick={() =>
              setCode(`escribir "¡Hola mundo!"
escribir "Bienvenido a Hispano Lang"`)
            }
          >
            <div className="text-3xl mb-3">👋</div>
            <div className="font-bold text-slate-800 mb-2">Hola Mundo</div>
            <div className="text-slate-600 text-sm">Tu primer programa</div>
          </Card>

          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center"
            onClick={() =>
              setCode(`variable numero1 = 10
variable numero2 = 5
variable resultado = numero1 + numero2
escribir "El resultado es: " + resultado`)
            }
          >
            <div className="text-3xl mb-3">🧮</div>
            <div className="font-bold text-slate-800 mb-2">Calculadora</div>
            <div className="text-slate-600 text-sm">Suma dos números</div>
          </Card>

          <Card
            variant="interactive"
            padding="sm"
            className="cursor-pointer text-center"
            onClick={() =>
              setCode(`variable nombre = "María"
variable edad = 25
escribir "Hola, me llamo " + nombre
escribir "Tengo " + edad + " años"`)
            }
          >
            <div className="text-3xl mb-3">👤</div>
            <div className="font-bold text-slate-800 mb-2">Variables</div>
            <div className="text-slate-600 text-sm">Almacena información</div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
