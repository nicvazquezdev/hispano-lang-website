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
 * Parse a template string and extract interpolations
 * Returns segments for the template parts and highlighted interpolation content
 */
function parseTemplateString(
  templateStr: string,
  theme: Theme
): HighlightedSegment[] {
  const segments: HighlightedSegment[] = [];

  // Remove the backticks
  const content = templateStr.slice(1, -1);

  // Match ${...} interpolations
  const interpolationRegex = /\$\{([^}]*)\}/g;
  let lastIndex = 0;
  let match;

  while ((match = interpolationRegex.exec(content)) !== null) {
    // Add the literal part before this interpolation
    if (match.index > lastIndex) {
      const literalPart = content.slice(lastIndex, match.index);
      if (literalPart) {
        // Add opening backtick for first segment
        if (lastIndex === 0) {
          segments.push({
            text: '`' + literalPart,
            type: 'template-string',
            className: getTokenClass('template-string', theme),
          });
        } else {
          segments.push({
            text: literalPart,
            type: 'template-string',
            className: getTokenClass('template-string', theme),
          });
        }
      }
    } else if (lastIndex === 0) {
      // Opening backtick when interpolation is at the start
      segments.push({
        text: '`',
        type: 'template-string',
        className: getTokenClass('template-string', theme),
      });
    }

    // Add ${ as punctuation
    segments.push({
      text: '${',
      type: 'template-punctuation',
      className: getTokenClass('template-punctuation', theme),
    });

    // Tokenize and highlight the interpolation content
    const interpolationContent = match[1];
    if (interpolationContent) {
      const innerTokens = tokenize(interpolationContent);
      const innerSegments = tokensToSegmentsSimple(innerTokens, theme);
      segments.push(...innerSegments);
    }

    // Add } as punctuation
    segments.push({
      text: '}',
      type: 'template-punctuation',
      className: getTokenClass('template-punctuation', theme),
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining literal content and closing backtick
  if (lastIndex < content.length) {
    segments.push({
      text: content.slice(lastIndex) + '`',
      type: 'template-string',
      className: getTokenClass('template-string', theme),
    });
  } else {
    segments.push({
      text: '`',
      type: 'template-string',
      className: getTokenClass('template-string', theme),
    });
  }

  // Handle case where there are no interpolations
  if (segments.length === 0) {
    segments.push({
      text: templateStr,
      type: 'template-string',
      className: getTokenClass('template-string', theme),
    });
  }

  return segments;
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
 * Simple conversion without template string processing (to avoid recursion)
 */
function tokensToSegmentsSimple(
  tokens: Token[],
  theme: Theme
): HighlightedSegment[] {
  return tokens.map((token) => ({
    text: token.value,
    type: token.type,
    className: getTokenClass(token.type, theme),
  }));
}

/**
 * Convert tokens to highlighted segments with CSS classes
 * Handles template strings specially to highlight interpolations
 */
export function tokensToSegments(
  tokens: Token[],
  theme: Theme = defaultTheme
): HighlightedSegment[] {
  const segments: HighlightedSegment[] = [];

  for (const token of tokens) {
    if (token.type === 'template-string' && token.value.includes('${')) {
      // Parse template string to highlight interpolations
      segments.push(...parseTemplateString(token.value, theme));
    } else {
      segments.push({
        text: token.value,
        type: token.type,
        className: getTokenClass(token.type, theme),
      });
    }
  }

  return segments;
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
