export const validation = (
    input: any
): ValidationOutput => {
  let errors: ValidationError[] = [];
  for (const key in input) {
    if (input[key] !== false && !input[key]) {
      errors.push({
        key,
        value: input[key],
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export interface ValidationOutput {
  isValid: boolean;
  errors: ValidationError[];
}

interface ValidationError {
  key: string;
  value: string;
}