'use client';

import { useMemo } from 'react';
import { highlightLine } from '@/lib/syntax';
import CopyButton from '@/components/ui/CopyButton';

interface CodeBlockProps {
  code: string;
  title?: string;
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

export default function CodeBlock({ code, title }: CodeBlockProps) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <div className="rounded-lg border border-slate-700 overflow-hidden bg-slate-900 relative">
      <CopyButton text={code} className="absolute top-2 right-2 z-10" />
      {title && (
        <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
          <span className="text-sm text-slate-400">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <div className="flex min-w-full">
          {/* Line numbers */}
          <div className="flex-shrink-0 bg-slate-800/30 border-r border-slate-700 select-none py-3">
            {lines.map((_, index) => (
              <div
                key={index}
                className="px-3 text-right text-sm text-slate-500 font-mono h-6 leading-6"
              >
                {index + 1}
              </div>
            ))}
          </div>
          {/* Code content */}
          <div className="flex-1 py-3 px-4 overflow-x-auto">
            <code className="text-sm font-mono" style={{ fontVariantLigatures: 'none' }}>
              {lines.map((line, index) => (
                <div key={index} className="whitespace-pre h-6 leading-6">
                  <HighlightedLine line={line} />
                </div>
              ))}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
