export const getAriaInvalid = (
  errorMessage?: string | boolean,
  required?: boolean
): boolean | undefined => {
  if (errorMessage) return true;
  if (required) return false;
  return undefined;
};
