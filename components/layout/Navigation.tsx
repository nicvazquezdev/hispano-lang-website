"use client";

import Button from "@/components/ui/Button";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              Hispano <span className="text-blue-600">Lang</span>
            </span>
          </div>

          <Button
            onClick={() =>
              document
                .getElementById("descargar")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full text-lg"
          >
            Empezar
          </Button>
        </div>
      </div>
    </nav>
  );
}
