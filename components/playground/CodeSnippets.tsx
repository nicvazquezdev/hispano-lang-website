"use client";

import { useState } from "react";
import {
  FiCode,
  FiPackage,
  FiCalendar,
  FiCheckCircle,
  FiRepeat,
  FiZap,
  FiCornerDownLeft,
  FiList,
  FiTarget,
  FiTrendingUp,
  FiDivide,
  FiSearch,
} from "react-icons/fi";

interface Snippet {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  code: string;
  category: string;
}

interface CodeSnippetsProps {
  onSnippetSelect: (code: string) => void;
  onCollapse?: () => void;
  showCollapseButton?: boolean;
}

const snippets: Snippet[] = [
  {
    id: "hello-world",
    title: "Hola Mundo",
    description: "Tu primer programa",
    icon: FiCode,
    code: `// Mi primer programa
variable lenguaje = "HispanoLang"
mostrar "¡Hola " + lenguaje + "!"`,
    category: "Básico",
  },
  {
    id: "variables",
    title: "Variables",
    description: "Declarar y usar variables",
    icon: FiPackage,
    code: `// Trabajando con variables
variable nombre = "Ana"
variable edad = 25
variable ciudad = "Madrid"

mostrar "Nombre: " + nombre
mostrar "Edad: " + edad
mostrar "Ciudad: " + ciudad`,
    category: "Básico",
  },
  {
    id: "calculator",
    title: "Calculadora",
    description: "Operaciones matemáticas",
    icon: FiCalendar,
    code: `// Calculadora simple
variable a = 15
variable b = 5

mostrar "Suma: " + (a + b)
mostrar "Resta: " + (a - b)
mostrar "Multiplicación: " + (a * b)
mostrar "División: " + (a / b)
mostrar "Módulo: " + (a % b)`,
    category: "Básico",
  },
  {
    id: "conditionals",
    title: "Condicionales",
    description: "Tomar decisiones",
    icon: FiCheckCircle,
    code: `// Condicionales
variable edad = 20
variable nombre = "Carlos"

si edad >= 18 {
    mostrar nombre + " es mayor de edad"
} sino {
    mostrar nombre + " es menor de edad"
}`,
    category: "Control",
  },
  {
    id: "loops",
    title: "Bucles",
    description: "Repetir acciones",
    icon: FiRepeat,
    code: `// Bucle mientras
variable contador = 1

mientras contador <= 5 {
    mostrar "Iteración: " + contador
    contador = contador + 1
}

mostrar "¡Bucle terminado!"`,
    category: "Control",
  },
  {
    id: "functions",
    title: "Funciones",
    description: "Código reutilizable",
    icon: FiZap,
    code: `// Función simple
funcion saludar(nombre) {
    mostrar "¡Hola " + nombre + "!"
}

saludar("María")
saludar("José")
saludar("Pedro")`,
    category: "Funciones",
  },
  {
    id: "function-return",
    title: "Función con Retorno",
    description: "Funciones que devuelven valores",
    icon: FiCornerDownLeft,
    code: `// Función con retorno
funcion sumar(a, b) {
    retornar a + b
}

variable resultado = sumar(10, 20)
mostrar "10 + 20 = " + resultado

variable total = sumar(5, 15)
mostrar "5 + 15 = " + total`,
    category: "Funciones",
  },
  {
    id: "lists",
    title: "Listas",
    description: "Colecciones de datos",
    icon: FiList,
    code: `// Trabajando con listas
variable frutas = ["manzana", "naranja", "plátano"]

mostrar "Primera fruta: " + frutas[0]
mostrar "Segunda fruta: " + frutas[1]
mostrar "Tercera fruta: " + frutas[2]

mostrar "Total de frutas: " + frutas.longitud()`,
    category: "Estructuras",
  },
  {
    id: "objects",
    title: "Objetos",
    description: "Estructuras de datos",
    icon: FiTarget,
    code: `// Trabajando con objetos
variable persona = {
    nombre: "Laura",
    edad: 28,
    profesion: "Ingeniera"
}

mostrar "Nombre: " + persona.nombre
mostrar "Edad: " + persona.edad
mostrar "Profesión: " + persona.profesion`,
    category: "Estructuras",
  },
  {
    id: "fibonacci",
    title: "Fibonacci",
    description: "Secuencia de Fibonacci",
    icon: FiTrendingUp,
    code: `// Secuencia de Fibonacci
funcion fibonacci(n) {
    si n <= 1 {
        retornar n
    }
    retornar fibonacci(n - 1) + fibonacci(n - 2)
}

variable i = 0
mientras i < 10 {
    mostrar "Fibonacci(" + i + ") = " + fibonacci(i)
    i = i + 1
}`,
    category: "Avanzado",
  },
  {
    id: "factorial",
    title: "Factorial",
    description: "Cálculo factorial",
    icon: FiDivide,
    code: `// Factorial recursivo
funcion factorial(n) {
    si n <= 1 {
        retornar 1
    }
    retornar n * factorial(n - 1)
}

variable num = 5
variable resultado = factorial(num)
mostrar "Factorial de " + num + " = " + resultado`,
    category: "Avanzado",
  },
  {
    id: "prime-numbers",
    title: "Números Primos",
    description: "Detectar números primos",
    icon: FiSearch,
    code: `// Verificar si un número es primo
funcion esPrimo(n) {
    si n <= 1 {
        retornar falso
    }
    variable i = 2
    mientras i * i <= n {
        si n % i == 0 {
            retornar falso
        }
        i = i + 1
    }
    retornar verdadero
}

variable num = 17
si esPrimo(num) {
    mostrar num + " es primo"
} sino {
    mostrar num + " no es primo"
}`,
    category: "Avanzado",
  },
];

const categories = Array.from(new Set(snippets.map((s) => s.category)));

export default function CodeSnippets({
  onSnippetSelect,
  onCollapse,
  showCollapseButton = false,
}: CodeSnippetsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Básico");

  const filteredSnippets = snippets.filter(
    (snippet) => snippet.category === selectedCategory,
  );

  return (
    <div className="bg-white border border-slate-200 rounded-lg h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 hidden md:flex items-center justify-between">
        <h3 className="text-slate-900 font-semibold text-sm">Ejemplos</h3>
        {showCollapseButton && onCollapse && (
          <button
            onClick={onCollapse}
            className="hidden lg:flex items-center justify-center w-6 h-6 hover:bg-slate-200 rounded transition-colors"
            title="Ocultar panel"
          >
            <svg
              className="w-3.5 h-3.5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="px-4 py-3 border-b border-slate-200">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Snippets list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredSnippets.length === 0 ? (
          <div className="text-center text-slate-500 text-sm py-8">
            No se encontraron ejemplos
          </div>
        ) : (
          filteredSnippets.map((snippet) => {
            const Icon = snippet.icon;
            return (
              <button
                key={snippet.id}
                onClick={() => onSnippetSelect(snippet.code)}
                className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
              >
                <div className="flex items-start space-x-2.5">
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 text-sm group-hover:text-purple-600 transition-colors">
                      {snippet.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {snippet.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
