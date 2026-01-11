/**
 * Syntax highlighter for HispanoLang
 *
 * Tokenizes code and applies syntax highlighting.
 * Uses a simple regex-based tokenizer optimized for the HispanoLang grammar.
 */

import { Token, TokenType, TOKEN_PATTERNS } from './tokens';
import { Theme, defaultTheme, getTokenClass } from './theme';

export interface HighlightedSegment {
  text: string;
  type: TokenType;
  className: string;
}

export interface HighlightedLine {
  segments: HighlightedSegment[];
  lineNumber: number;
}

/**
 * Tokenize a string of code into tokens
 */
export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const matches: Array<{ token: Token; priority: number }> = [];

  // Find all matches for all patterns
  TOKEN_PATTERNS.forEach((pattern, priority) => {
    const regex = new RegExp(pattern.pattern.source, pattern.pattern.flags);
    let match;

    while ((match = regex.exec(code)) !== null) {
      matches.push({
        token: {
          type: pattern.type,
          value: match[0],
          start: match.index,
          end: match.index + match[0].length,
        },
        priority,
      });
    }
  });

  // Sort by start position, then by priority (lower = higher priority)
  matches.sort((a, b) => {
    if (a.token.start !== b.token.start) {
      return a.token.start - b.token.start;
    }
    return a.priority - b.priority;
  });

  // Filter overlapping matches (keep first/highest priority)
  let lastEnd = 0;
  for (const { token } of matches) {
    if (token.start >= lastEnd) {
      // Add any text between tokens
      if (token.start > lastEnd) {
        tokens.push({
          type: 'text',
          value: code.slice(lastEnd, token.start),
          start: lastEnd,
          end: token.start,
        });
      }
      tokens.push(token);
      lastEnd = token.end;
    }
  }

  // Add remaining text
  if (lastEnd < code.length) {
    tokens.push({
      type: 'text',
      value: code.slice(lastEnd),
      start: lastEnd,
      end: code.length,
    });
  }

  return tokens;
}

/**
 * Convert tokens to highlighted segments with CSS classes
 */
export function tokensToSegments(
  tokens: Token[],
  theme: Theme = defaultTheme
): HighlightedSegment[] {
  return tokens.map((token) => ({
    text: token.value,
    type: token.type,
    className: getTokenClass(token.type, theme),
  }));
}

/**
 * Highlight a single line of code
 */
export function highlightLine(
  line: string,
  theme: Theme = defaultTheme
): HighlightedSegment[] {
  const tokens = tokenize(line);
  return tokensToSegments(tokens, theme);
}

/**
 * Highlight multiple lines of code
 */
export function highlightCode(
  code: string,
  theme: Theme = defaultTheme
): HighlightedLine[] {
  const lines = code.split('\n');

  return lines.map((line, index) => ({
    segments: highlightLine(line, theme),
    lineNumber: index + 1,
  }));
}

/**
 * Simple highlight function that returns segments for a code string
 * (without splitting into lines)
 */
export function highlight(
  code: string,
  theme: Theme = defaultTheme
): HighlightedSegment[] {
  const tokens = tokenize(code);
  return tokensToSegments(tokens, theme);
}

// Re-export types and utilities
export type { TokenType, Token } from './tokens';
export type { Theme } from './theme';
export { defaultTheme, getTokenClass } from './theme';
export { KEYWORDS } from './tokens';
