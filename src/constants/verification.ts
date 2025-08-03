export const VERIFICATION_CODES = [
  "klYZi2fv--WqS45ghm2RIfoGCV41LxvwkDnkpuno8LE",
  // Add more verification codes here if needed
];

export const isValidVerificationCode = (code: string): boolean => {
  return VERIFICATION_CODES.includes(code);
}; 