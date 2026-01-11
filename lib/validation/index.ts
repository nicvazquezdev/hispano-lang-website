/**
 * Sistema de Validación Simplificado
 * Verifica: errores de ejecución, outputs esperados y patrones de código
 *
 * Los patrones pueden ser:
 * - Strings simples: se busca si el texto contiene el string
 * - Patrones regex: strings que empiezan con "/" se convierten a RegExp
 *   Ejemplo: "/mi_edad\\s*=/" se convierte a /mi_edad\s*=/
 */

export interface SimpleValidation {
  expectedOutputs?: string[];
  requiredCode?: string[];
}

export interface ValidationResult {
  isValid: boolean;
  passed: string[];
  failed: string[];
}

function parsePattern(pattern: string): RegExp | string {
  // Si empieza con "/" es un regex
  if (pattern.startsWith("/")) {
    // Extraer el patrón y las flags
    const lastSlash = pattern.lastIndexOf("/");
    if (lastSlash > 0) {
      const regexBody = pattern.slice(1, lastSlash);
      const flags = pattern.slice(lastSlash + 1);
      return new RegExp(regexBody, flags);
    }
  }
  return pattern;
}

function matchesPattern(text: string, pattern: string): boolean {
  const parsed = parsePattern(pattern);
  if (parsed instanceof RegExp) {
    return parsed.test(text);
  }
  return text.includes(parsed);
}

function patternToString(pattern: string): string {
  if (pattern.startsWith("/")) {
    // Mostrar una versión más legible del regex
    const lastSlash = pattern.lastIndexOf("/");
    return pattern.slice(1, lastSlash > 0 ? lastSlash : undefined);
  }
  return pattern;
}

export function validateExercise(
  validation: SimpleValidation | undefined,
  execution: { code: string; output: string[]; success: boolean }
): ValidationResult {
  const passed: string[] = [];
  const failed: string[] = [];

  // Si no hay validación, es válido si se ejecutó sin errores
  if (!validation) {
    return {
      isValid: execution.success,
      passed: execution.success ? ["Código ejecutado correctamente"] : [],
      failed: execution.success ? [] : ["Error de ejecución"],
    };
  }

  // Verificar que no haya errores de ejecución
  if (!execution.success) {
    failed.push("El código debe ejecutarse sin errores");
    return { isValid: false, passed, failed };
  }
  passed.push("Sin errores de ejecución");

  const outputText = execution.output.join("\n");

  // Verificar outputs esperados
  if (validation.expectedOutputs && validation.expectedOutputs.length > 0) {
    for (const expected of validation.expectedOutputs) {
      if (matchesPattern(outputText, expected)) {
        passed.push(`Output correcto`);
      } else {
        failed.push(`Falta en output: "${patternToString(expected)}"`);
      }
    }
  }

  // Verificar código requerido
  if (validation.requiredCode && validation.requiredCode.length > 0) {
    for (const required of validation.requiredCode) {
      if (matchesPattern(execution.code, required)) {
        passed.push(`Código correcto`);
      } else {
        failed.push(`Falta en código: "${patternToString(required)}"`);
      }
    }
  }

  return {
    isValid: failed.length === 0,
    passed,
    failed,
  };
}
