

export function nomeCompletoValido(nome) {
  const partes = nome.trim().split(/\s+/);
  const soLetras = /^[A-Za-zÀ-ÿ\s]+$/;

  return partes.length >= 2 && soLetras.test(nome);
}

