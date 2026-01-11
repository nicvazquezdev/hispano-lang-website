/**
 * Token definitions for HispanoLang syntax highlighting
 *
 * Each token type has a pattern (regex) and a name used for styling.
 * Order matters: tokens are matched in order, first match wins.
 */

export type TokenType =
  | 'comment'
  | 'string'
  | 'template-string'
  | 'template-punctuation'
  | 'keyword'
  | 'control-flow'
  | 'builtin-command'
  | 'builtin-function'
  | 'builtin-method'
  | 'number'
  | 'boolean'
  | 'operator'
  | 'punctuation'
  | 'class-name'
  | 'function-name'
  | 'identifier'
  | 'text';

export interface Token {
  type: TokenType;
  value: string;
  start: number;
  end: number;
}

export interface TokenPattern {
  type: TokenType;
  pattern: RegExp;
}

/**
 * Keywords for variable/constant declaration
 */
const DECLARATION_KEYWORDS = [
  'variable',
  'constante',
  'var',
];

/**
 * Control flow keywords
 */
const CONTROL_FLOW_KEYWORDS = [
  'si',
  'sino',
  'mientras',
  'para',
  'hacer',
  'romper',
  'continuar',
  'retornar',
  'elegir',
  'caso',
  'pordefecto',
  'cada',
  'en',
  'intentar',
  'capturar',
];

/**
 * OOP and function keywords
 */
const OOP_KEYWORDS = [
  'funcion',
  'clase',
  'constructor',
  'este',
  'nuevo',
  'extiende',
  'super',
];

/**
 * Built-in commands (no parentheses)
 */
const BUILTIN_COMMANDS = [
  'mostrar',
  'leer',
];

/**
 * Built-in functions (with parentheses)
 */
const BUILTIN_FUNCTIONS = [
  'tipo',
  'entero',
  'decimal',
  'texto',
  'booleano',
  'raiz',
  'potencia',
  'valorAbsoluto',
  'logaritmo',
  'seno',
  'coseno',
  'tangente',
  'redondear',
  'techo',
  'piso',
  'aleatorio',
  'maximo',
  'minimo',
  'suma',
  'promedio',
];

/**
 * Built-in methods (called on values)
 */
const BUILTIN_METHODS = [
  'longitud',
  'mayusculas',
  'minusculas',
  'incluye',
  'contiene',
  'empiezaCon',
  'terminaCon',
  'dividir',
  'subcadena',
  'reemplazar',
  'recortar',
  'caracter',
  'invertir',
  'agregar',
  'remover',
  'primero',
  'ultimo',
  'recorrer',
  'mapear',
  'filtrar',
  'reducir',
  'algunos',
  'todos',
  'buscar',
  'esPar',
  'esImpar',
  'esPositivo',
  'esNegativo',
  'aTexto',
];

// Combine all keywords
const ALL_KEYWORDS = [...DECLARATION_KEYWORDS, ...OOP_KEYWORDS];
const ALL_CONTROL_FLOW = CONTROL_FLOW_KEYWORDS;

/**
 * Token patterns in order of precedence.
 * Earlier patterns take priority over later ones.
 */
export const TOKEN_PATTERNS: TokenPattern[] = [
  // Comments (highest priority - nothing should match inside comments)
  {
    type: 'comment',
    pattern: /\/\/.*/g,
  },

  // Template strings with interpolation
  {
    type: 'template-string',
    pattern: /`(?:[^`\\]|\\.)*`/g,
  },

  // Regular strings (double and single quotes)
  {
    type: 'string',
    pattern: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g,
  },

  // Boolean literals
  {
    type: 'boolean',
    pattern: /\b(verdadero|falso|nulo|indefinido)\b/g,
  },

  // Control flow keywords
  {
    type: 'control-flow',
    pattern: new RegExp(`\\b(${ALL_CONTROL_FLOW.join('|')})\\b`, 'g'),
  },

  // Declaration and OOP keywords
  {
    type: 'keyword',
    pattern: new RegExp(`\\b(${ALL_KEYWORDS.join('|')})\\b`, 'g'),
  },

  // Built-in commands (no parentheses needed)
  {
    type: 'builtin-command',
    pattern: new RegExp(`\\b(${BUILTIN_COMMANDS.join('|')})\\b`, 'g'),
  },

  // Built-in functions (with parentheses)
  {
    type: 'builtin-function',
    pattern: new RegExp(`\\b(${BUILTIN_FUNCTIONS.join('|')})(?=\\s*\\()`, 'g'),
  },

  // Built-in methods (after dot)
  {
    type: 'builtin-method',
    pattern: new RegExp(`\\.(${BUILTIN_METHODS.join('|')})(?=\\s*\\()`, 'g'),
  },

  // Class names (PascalCase after 'clase' or 'nuevo' or 'extiende')
  {
    type: 'class-name',
    pattern: /(?<=\b(?:clase|nuevo|extiende)\s+)[A-Z][a-zA-Z0-9_]*/g,
  },

  // Function names (after 'funcion' keyword)
  {
    type: 'function-name',
    pattern: /(?<=\bfuncion\s+)[a-zA-Z_][a-zA-Z0-9_]*/g,
  },

  // Numbers (integers and decimals)
  {
    type: 'number',
    pattern: /\b\d+\.?\d*\b/g,
  },

  // Operators
  {
    type: 'operator',
    pattern: /=>|[+\-*/%]=?|[<>!=]=?|&&|\|\||[&|^~]|<<|>>/g,
  },

  // Punctuation
  {
    type: 'punctuation',
    pattern: /[{}[\](),.;:]/g,
  },
];

/**
 * Export keyword lists for external use
 */
export const KEYWORDS = {
  declaration: DECLARATION_KEYWORDS,
  controlFlow: CONTROL_FLOW_KEYWORDS,
  oop: OOP_KEYWORDS,
  builtinCommands: BUILTIN_COMMANDS,
  builtinFunctions: BUILTIN_FUNCTIONS,
  builtinMethods: BUILTIN_METHODS,
};
