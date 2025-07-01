
// Esta función procesa el texto para cifrarlo
function processText(data: string, shift: number): string {
  let result = '';

  // Recorremos cada letra del texto
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i);

    // Comprobamos si es una letra mayúscula (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      const shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
      result += String.fromCharCode(shiftedCharCode);
    } 
    // Comprobamos si es una letra minúscula (a-z)
    else if (charCode >= 97 && charCode <= 122) {
      const shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
      result += String.fromCharCode(shiftedCharCode);
    } 
    // Si no es una letra, la dejamos como está
    else {
      result += data.charAt(i);
    }
  }

  return result;
}

export { processText };
