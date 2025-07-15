import { calcularMedia } from "./modulos/calcularMedia.js";
import { situacaoAluno } from "./modulos/situacaoAluno.js";
import { adicionarAluno } from "./modulos/adicionarAluno.js";
import { removerAluno } from "./modulos/removerAluno.js";


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


export function adicionarEventoBotao(idBotao, funcao) {
  const botao = document.getElementById(idBotao);
  if (botao) {
    botao.addEventListener('click', funcao);
  }
}

export function aoClicarAdicionar() {
  const nome = document.getElementById('nome_completo').value.trim();
  const frequencia = document.getElementById('frequencia').value.trim();
  const nota1 = document.getElementById('nota1').value.trim();
  const nota2 = document.getElementById('nota2').value.trim();
  const nota3 = document.getElementById('nota3').value.trim();
  const nota4 = document.getElementById('nota4').value.trim();
  const corpoTabela = document.getElementById('corpo-tabela');

  const media = calcularMedia(nota1, nota2, nota3, nota4);
  const situacao = situacaoAluno(frequencia, media);

  validar_entrada(nome, frequencia, nota1, nota2, nota3, nota4);
  adicionarAluno(corpoTabela, nome, frequencia, media, situacao);
};


export function limparMensagemTabelaVazia() {
    const mensagem = document.getElementById('mensagem-vazia');

    if (mensagem) {
        mensagem.remove()
    };
};

export function aoClicarRemover(event) {
    const corpoTabela = document.getElementById('corpo-tabela');
    
    removerAluno(event, corpoTabela);
};

export function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
};