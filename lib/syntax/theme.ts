/**
 * Color theme for HispanoLang syntax highlighting
 *
 * Uses Tailwind CSS classes for consistency with the rest of the app.
 * Inspired by VS Code's dark theme with a purple accent.
 */

import { TokenType } from './tokens';

export interface Theme {
  name: string;
  colors: Record<TokenType, string>;
  background?: string;
  lineNumbers?: string;
  currentLine?: string;
}

/**
 * Default dark theme for HispanoLang
 * Matches the existing VS Code-like dark theme of the app
 */
export const darkTheme: Theme = {
  name: 'hispano-dark',
  colors: {
    'comment': 'text-slate-500',
    'string': 'text-green-400',
    'template-string': 'text-green-400',
    'template-punctuation': 'text-cyan-400',
    'keyword': 'text-purple-400',
    'control-flow': 'text-pink-400',
    'builtin-command': 'text-blue-400',
    'builtin-function': 'text-blue-400',
    'builtin-method': 'text-cyan-400',
    'number': 'text-amber-400',
    'boolean': 'text-orange-400',
    'operator': 'text-slate-300',
    'punctuation': 'text-slate-400',
    'class-name': 'text-yellow-300',
    'function-name': 'text-blue-300',
    'identifier': 'text-slate-100',
    'text': 'text-slate-100',
  },
  background: 'bg-slate-900',
  lineNumbers: 'text-slate-600',
  currentLine: 'bg-slate-800/50',
};

/**
 * Get CSS class for a token type
 */
export function getTokenClass(type: TokenType, theme: Theme = darkTheme): string {
  return theme.colors[type] || theme.colors.text;
}

/**
 * Export the default theme
 */
export const defaultTheme = darkTheme;
