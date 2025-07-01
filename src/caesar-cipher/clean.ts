
const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getShiftedIndex(index: number, shift: number): number {
  return (index + shift) % ALPHABET_LOWERCASE.length;
}

function isLowercase(char: string): boolean {
  return ALPHABET_LOWERCASE.includes(char);
}

function isUppercase(char: string): boolean {
  return ALPHABET_UPPERCASE.includes(char);
}

function shiftCharacter(char: string, shift: number): string {
  if (isLowercase(char)) {
    const index = ALPHABET_LOWERCASE.indexOf(char);
    const shiftedIndex = getShiftedIndex(index, shift);
    return ALPHABET_LOWERCASE[shiftedIndex];
  }

  if (isUppercase(char)) {
    const index = ALPHABET_UPPERCASE.indexOf(char);
    const shiftedIndex = getShiftedIndex(index, shift);
    return ALPHABET_UPPERCASE[shiftedIndex];
  }

  return char;
}

export function encode(text: string, shift: number): string {
  let result = '';
  for (const char of text) {
    result += shiftCharacter(char, shift);
  }
  return result;
}
