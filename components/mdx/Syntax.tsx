import { ReactNode } from "react";

interface SyntaxProps {
  children: ReactNode;
}

export default function Syntax({ children }: SyntaxProps) {
  return (
    <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 mb-4">
      <code
        className="text-purple-300 font-mono"
        style={{ fontVariantLigatures: "none" }}
      >
        {children}
      </code>
    </div>
  );
}
