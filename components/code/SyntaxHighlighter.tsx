/**
 * SyntaxHighlighter Component
 *
 * Base component for rendering syntax-highlighted HispanoLang code.
 * Used by CodeBlock and CodeEditor components.
 */

import { memo, useMemo } from 'react';
import { highlightLine, HighlightedSegment } from '@/lib/syntax';

interface SyntaxHighlighterProps {
  code: string;
  className?: string;
}

/**
 * Renders a single highlighted segment
 */
function HighlightedText({ segment }: { segment: HighlightedSegment }) {
  return <span className={segment.className}>{segment.text}</span>;
}

/**
 * Renders a single line of highlighted code
 */
const HighlightedLineComponent = memo(function HighlightedLineComponent({
  line,
}: {
  line: string;
}) {
  const segments = useMemo(() => highlightLine(line), [line]);

  return (
    <>
      {segments.map((segment, index) => (
        <HighlightedText key={index} segment={segment} />
      ))}
    </>
  );
});

/**
 * Main SyntaxHighlighter component
 *
 * Renders code with syntax highlighting, preserving whitespace and line breaks.
 */
export const SyntaxHighlighter = memo(function SyntaxHighlighter({
  code,
  className = '',
}: SyntaxHighlighterProps) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <code
      className={`font-mono ${className}`}
      style={{ fontVariantLigatures: 'none' }}
    >
      {lines.map((line, index) => (
        <span key={index} className="block">
          <HighlightedLineComponent line={line} />
          {index < lines.length - 1 && '\n'}
        </span>
      ))}
    </code>
  );
});

/**
 * Inline syntax highlighter for single-line code snippets
 */
export const InlineSyntaxHighlighter = memo(function InlineSyntaxHighlighter({
  code,
  className = '',
}: SyntaxHighlighterProps) {
  const segments = useMemo(() => highlightLine(code), [code]);

  return (
    <code
      className={`font-mono ${className}`}
      style={{ fontVariantLigatures: 'none' }}
    >
      {segments.map((segment, index) => (
        <HighlightedText key={index} segment={segment} />
      ))}
    </code>
  );
});

export default SyntaxHighlighter;
