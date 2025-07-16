

export function validar_entrada (nome, frequencia, nota1, nota2, nota3, nota4) {

    if (nome === '' || 
        frequencia === '' || 
        nota1 === '' || 
        nota2 === '' || 
        nota3 === '' || 
        nota4 === '') {
        alert("Preencha todos os campos para continuar!");
        return false;
    };

    return true;

    
}

export function nomeCompletoValido (nome) {

  const partes = nome.trim().split(/\s+/);
  return partes.length >= 2;
}


export function adicionarEventoBotao(idBotao, funcao) {
  const botao = document.getElementById(idBotao);
  if (botao) {
    botao.addEventListener('click', funcao);
  }
}



