"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Playground de Hispano Lang
          </h2>
          <p className="text-lg text-gray-600">
            Escribe código en español y ejecútalo aquí mismo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-sm">editor.hispano</span>
                <Button onClick={runCode} size="sm">
                  ▶ Ejecutar
                </Button>
              </div>
            </div>

            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-80 bg-transparent text-white font-mono text-sm resize-none outline-none"
                placeholder="Escribe tu código aquí..."
                spellCheck={false}
              />
            </div>
          </div>

          {/* Output */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="bg-gray-200 px-4 py-3">
              <span className="text-gray-700 font-semibold">Resultado</span>
            </div>

            <div className="p-4 h-80">
              <pre className="text-gray-800 font-mono text-sm whitespace-pre-wrap">
                {output || "Haz clic en 'Ejecutar' para ver el resultado"}
              </pre>
            </div>
          </div>
        </div>

        {/* Ejemplos */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Ejemplos para probar
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              variant="outlined"
              padding="sm"
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() =>
                setCode(`escribir "¡Hola mundo!"
escribir "Bienvenido a Hispano Lang"`)
              }
            >
              <div className="text-2xl mb-2">👋</div>
              <div className="font-semibold text-gray-800">Hola Mundo</div>
              <div className="text-gray-600 text-sm">Tu primer programa</div>
            </Card>

            <Card
              variant="outlined"
              padding="sm"
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() =>
                setCode(`variable numero1 = 10
variable numero2 = 5
variable resultado = numero1 + numero2
escribir "El resultado es: " + resultado`)
              }
            >
              <div className="text-2xl mb-2">🧮</div>
              <div className="font-semibold text-gray-800">Calculadora</div>
              <div className="text-gray-600 text-sm">Suma dos números</div>
            </Card>

            <Card
              variant="outlined"
              padding="sm"
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() =>
                setCode(`variable nombre = "María"
variable edad = 25
escribir "Hola, me llamo " + nombre
escribir "Tengo " + edad + " años"`)
              }
            >
              <div className="text-2xl mb-2">👤</div>
              <div className="font-semibold text-gray-800">Variables</div>
              <div className="text-gray-600 text-sm">Almacena información</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
