"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { FiTrash2 } from "react-icons/fi";
import { highlightLine } from "@/lib/syntax";

interface EnhancedCodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  isRunning: boolean;
}

interface LineHeight {
  lineNumber: number;
  height: number;
}

/**
 * Renders a single line with syntax highlighting
 */
function HighlightedLine({ line }: { line: string }) {
  const segments = useMemo(() => highlightLine(line), [line]);

  return (
    <>
      {segments.map((segment, index) => (
        <span key={index} className={segment.className}>
          {segment.text}
        </span>
      ))}
    </>
  );
}

export default function EnhancedCodeEditor({
  code,
  onChange,
  onRun,
  isRunning,
}: EnhancedCodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [lineHeights, setLineHeights] = useState<LineHeight[]>([{ lineNumber: 1, height: 24 }]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const lines = useMemo(() => code.split("\n"), [code]);

  const measureLineHeights = useCallback(() => {
    if (!measureRef.current || !textareaRef.current) return;

    const measureDiv = measureRef.current;
    const textarea = textareaRef.current;

    const textareaWidth = textarea.clientWidth - 24;
    measureDiv.style.width = `${textareaWidth}px`;

    const newLineHeights: LineHeight[] = [];

    lines.forEach((line, index) => {
      measureDiv.textContent = line || '\u00A0';
      const height = Math.max(Math.ceil(measureDiv.offsetHeight / 24) * 24, 24);
      newLineHeights.push({
        lineNumber: index + 1,
        height,
      });
    });

    setLineHeights(newLineHeights);
  }, [lines]);

  useEffect(() => {
    measureLineHeights();

    const handleResize = () => measureLineHeights();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [measureLineHeights]);

  const handleScroll = () => {
    if (textareaRef.current) {
      const scrollTopValue = textareaRef.current.scrollTop;
      const scrollLeftValue = textareaRef.current.scrollLeft;

      if (lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = scrollTopValue;
      }
      if (highlightRef.current) {
        highlightRef.current.scrollTop = scrollTopValue;
        highlightRef.current.scrollLeft = scrollLeftValue;
      }
      setScrollTop(scrollTopValue);
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
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      onRun();
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "    " + code.substring(end);
      onChange(newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <>
      {/* Hidden div for measuring line heights */}
      <div
        ref={measureRef}
        className="absolute invisible overflow-hidden font-mono text-sm leading-6 whitespace-pre-wrap break-words"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          padding: 0,
        }}
        aria-hidden="true"
      />

      <div className="bg-[#0b111f] border border-slate-700 rounded-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="bg-[#0b111f] px-4 py-2.5 flex items-center justify-between border-b border-[#3e3e42] flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-slate-100 font-semibold text-sm">Editor</span>
            <span className="text-xs text-slate-400">
              {lines.length} líneas
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
            className="bg-[#0b111f] py-3 text-right text-[#858585] font-mono text-xs select-none border-r border-[#3e3e42] overflow-y-hidden flex-shrink-0 min-w-[2rem] flex flex-col items-center"
          >
            {lineHeights.map(({ lineNumber, height }) => (
              <div
                key={lineNumber}
                className={`flex items-start justify-center w-full px-1 ${
                  isFocused && lineNumber === currentLine
                    ? "text-[#c586c0] font-semibold"
                    : "text-[#858585]"
                }`}
                style={{ height: `${height}px`, lineHeight: '24px' }}
              >
                {lineNumber}
              </div>
            ))}
          </div>

          {/* Code area */}
          <div className="flex-1 overflow-hidden relative">
            {/* Current line highlight */}
            {isFocused && currentLine > 0 && (
              <div
                className="absolute left-0 right-0 bg-[#2a2d3a] pointer-events-none z-0"
                style={{
                  top: `${lineHeights.slice(0, currentLine - 1).reduce((sum, l) => sum + l.height, 0) + 12}px`,
                  height: `${lineHeights[currentLine - 1]?.height || 24}px`,
                  transform: `translateY(-${scrollTop}px)`,
                }}
              />
            )}

            {/* Syntax highlighted code (background layer) */}
            <div
              ref={highlightRef}
              className="absolute inset-0 p-3 font-mono text-sm leading-6 overflow-hidden whitespace-pre-wrap break-words pointer-events-none z-[1]"
              style={{ fontVariantLigatures: 'none' }}
              aria-hidden="true"
            >
              {lines.map((line, index) => (
                <div key={index} style={{ minHeight: '24px' }}>
                  <HighlightedLine line={line} />
                </div>
              ))}
            </div>

            {/* Textarea (input layer - transparent text) */}
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
              className="absolute inset-0 w-full h-full p-3 bg-transparent font-mono text-sm resize-none outline-none placeholder-[#6a6a6a] leading-6 overflow-auto whitespace-pre-wrap break-words relative z-10 caret-white"
              style={{
                fontVariantLigatures: 'none',
                color: 'transparent',
                caretColor: 'white',
              }}
              placeholder="Escribe tu código aquí..."
              spellCheck={false}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0b111f] px-4 py-2 border-t border-[#3e3e42] text-xs text-[#858585] flex items-center justify-between flex-shrink-0">
          <span className="hidden md:block">Cmd/Ctrl + Enter para ejecutar</span>
          <span className="text-slate-500">{code.length} caracteres</span>
        </div>
      </div>
    </>
  );
}
