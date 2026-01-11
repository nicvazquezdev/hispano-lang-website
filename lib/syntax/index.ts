/**
 * HispanoLang Syntax Highlighting Module
 *
 * Provides tokenization and syntax highlighting for HispanoLang code.
 *
 * @example
 * ```tsx
 * import { highlightCode, highlightLine } from '@/lib/syntax';
 *
 * // Highlight multiple lines
 * const lines = highlightCode(code);
 *
 * // Highlight a single line
 * const segments = highlightLine('variable x = 10');
 * ```
 */

export {
  tokenize,
  tokensToSegments,
  highlightLine,
  highlightCode,
  highlight,
  defaultTheme,
  getTokenClass,
  KEYWORDS,
} from './highlighter';

export type {
  Token,
  TokenType,
  Theme,
  HighlightedSegment,
  HighlightedLine,
} from './highlighter';

export { TOKEN_PATTERNS } from './tokens';
export { darkTheme } from './theme';
