export function encriptador(texto) {
  let encriptado = "";
  for (let index = 0; index < texto.length; index++) {
    const element = texto[index];
    switch (element) {
      case "e":
        encriptado = encriptado + "enter";
        break;
      case "i":
        encriptado = encriptado + "imes";
        break;
      case "a":
        encriptado = encriptado + "ai";
        break;
      case "o":
        encriptado = encriptado + "ober";
        break;
      case "u":
        encriptado = encriptado + "ufat";
        break;
      default:
        encriptado = encriptado + element;
        break;
    }
  }
  return encriptado;
}

export function desencriptador(textoEncriptado) {
  let desencriptado = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    let currentChar = textoEncriptado[i];
    switch (currentChar) {
      case "e":
        if (textoEncriptado.substring(i, i + 5) === "enter") {
          desencriptado += "e";
          i += 4; // Saltar al siguiente caracter después de "enter"
        } else {
          desencriptado += "e";
        }
        break;
      case "i":
        if (textoEncriptado.substring(i, i + 4) === "imes") {
          desencriptado += "i";
          i += 3; // Saltar al siguiente caracter después de "imes"
        } else {
          desencriptado += "i";
        }
        break;
      case "a":
        if (textoEncriptado.substring(i, i + 2) === "ai") {
          desencriptado += "a";
          i++; // Saltar al siguiente caracter después de "ai"
        } else {
          desencriptado += "a";
        }
        break;
      case "o":
        if (textoEncriptado.substring(i, i + 4) === "ober") {
          desencriptado += "o";
          i += 3; // Saltar al siguiente caracter después de "ober"
        } else {
          desencriptado += "o";
        }
        break;
      case "u":
        if (textoEncriptado.substring(i, i + 4) === "ufat") {
          desencriptado += "u";
          i += 3; // Saltar al siguiente caracter después de "ufat"
        } else {
          desencriptado += "u";
        }
        break;
      default:
        desencriptado += currentChar;
    }
  }
  return desencriptado;
}
