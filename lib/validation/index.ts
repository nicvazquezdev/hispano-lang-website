/**
 * Sistema de Validación Simplificado
 * Solo verifica: errores de ejecución y outputs esperados
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
      if (outputText.includes(expected)) {
        passed.push(`Output contiene "${expected}"`);
      } else {
        failed.push(`Falta en output: "${expected}"`);
      }
    }
  }

  // Verificar código requerido (opcional)
  if (validation.requiredCode && validation.requiredCode.length > 0) {
    for (const required of validation.requiredCode) {
      if (execution.code.includes(required)) {
        passed.push(`Código contiene "${required}"`);
      } else {
        failed.push(`Falta en código: "${required}"`);
      }
    }
  }

  return {
    isValid: failed.length === 0,
    passed,
    failed,
  };
}
