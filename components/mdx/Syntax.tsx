"use client";

import { ReactNode } from "react";
import { InlineSyntaxHighlighter } from "@/components/code";

interface SyntaxProps {
  children: ReactNode;
}

export default function Syntax({ children }: SyntaxProps) {
  // Convert ReactNode to string and trim whitespace
  const code = (typeof children === "string" ? children : String(children)).trim();

  return (
    <div className="syntax-block bg-slate-900 rounded-lg px-4 py-3 mb-4 overflow-x-auto">
      <InlineSyntaxHighlighter code={code} className="text-sm" />
    </div>
  );
}
