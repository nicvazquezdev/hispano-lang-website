"use client";

import { useState, useRef, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

interface EnhancedCodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  isRunning: boolean;
}

export default function EnhancedCodeEditor({
  code,
  onChange,
  onRun,
  isRunning,
}: EnhancedCodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const lines = code.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [code]);

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
      setScrollTop(textareaRef.current.scrollTop);
    }
  };

  const updateCurrentLine = () => {
    if (textareaRef.current) {
      const cursorPosition = textareaRef.current.selectionStart;
      const textBeforeCursor = code.substring(0, cursorPosition);
      const lineNumber = textBeforeCursor.split("\n").length;
      setCurrentLine(lineNumber);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl/Cmd + Enter to run
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      onRun();
    }

    // Tab key
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "    " + code.substring(end);
      onChange(newCode);

      // Move cursor
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="bg-[#141622] border border-slate-700 rounded-lg overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#141622] px-4 py-2.5 flex items-center justify-between border-b border-[#3e3e42] flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-slate-100 font-semibold text-sm">Editor</span>
          <span className="text-xs text-slate-400">
            {code.split("\n").length} líneas
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleClear}
            className="flex items-center space-x-1 px-2 py-1 text-xs text-slate-300 hover:text-slate-100 hover:bg-slate-700 rounded transition-colors"
            title="Limpiar editor"
          >
            <FiTrash2 className="w-3 h-3" />
            <span>Limpiar</span>
          </button>
          <button
            onClick={onRun}
            disabled={isRunning}
            className="px-3 py-1 text-xs font-medium bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white rounded transition-colors"
          >
            {isRunning ? "Ejecutando..." : "▶ Ejecutar"}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Line numbers */}
        <div
          ref={lineNumbersRef}
          className="bg-[#141622] py-3 text-right text-[#858585] font-mono text-xs select-none border-r border-[#3e3e42] overflow-y-hidden flex-shrink-0 min-w-[2rem] flex flex-col items-center"
        >
          {lineNumbers.map((num) => (
            <span
              key={num}
              className={`leading-6 ${
                isFocused && num === currentLine
                  ? "text-[#c586c0] font-semibold"
                  : "text-[#858585]"
              }`}
            >
              {num}
            </span>
          ))}
        </div>

        {/* Code area */}
        <div className="flex-1 overflow-hidden relative">
          {/* Current line highlight */}
          {isFocused && currentLine > 0 && (
            <div
              className="absolute left-0 right-0 bg-[#2a2d3a] pointer-events-none z-0"
              style={{
                top: `${(currentLine - 1) * 24 + 12}px`,
                height: "24px",
                transform: `translateY(-${scrollTop}px)`,
              }}
            />
          )}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => {
              onChange(e.target.value);
              updateCurrentLine();
            }}
            onKeyDown={handleKeyDown}
            onKeyUp={updateCurrentLine}
            onClick={updateCurrentLine}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onScroll={handleScroll}
            className="absolute inset-0 w-full h-full p-3 bg-transparent text-[#d4d4d4] font-mono text-sm resize-none outline-none placeholder-[#6a6a6a] leading-6 overflow-auto whitespace-pre relative z-10"
            placeholder="Escribe tu código aquí..."
            spellCheck={false}
            wrap="off"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#141622] px-4 py-2 border-t border-[#3e3e42] text-xs text-[#858585] flex items-center justify-between flex-shrink-0">
        <span className="hidden md:block">Cmd/Ctrl + Enter para ejecutar</span>
        <span className="text-slate-500">{code.length} caracteres</span>
      </div>
    </div>
  );
}
