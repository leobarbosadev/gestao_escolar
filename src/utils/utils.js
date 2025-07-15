import { calcularMedia } from "./modulos/calcularMedia.js";
import { situacaoAluno } from "./modulos/situacaoAluno.js";
import { adicionarAluno } from "./modulos/adicionarAluno.js";
import { removerAluno } from "./modulos/removerAluno.js";

export function validar_entrada(nome, frequencia, nota1, nota2, nota3, nota4) {
  if (
    nome === '' ||
    frequencia === '' ||
    nota1 === '' ||
    nota2 === '' ||
    nota3 === '' ||
    nota4 === ''
  ) {
    alert("Preencha todos os campos para continuar!");
    return false;
  }

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
  const frequencia = Number(document.getElementById('frequencia').value.trim());
  const nota1 = Number(document.getElementById('nota1').value.trim());
  const nota2 = Number(document.getElementById('nota2').value.trim());
  const nota3 = Number(document.getElementById('nota3').value.trim());
  const nota4 = Number(document.getElementById('nota4').value.trim());
  const corpoTabela = document.getElementById('corpo-tabela');

  if (validar_entrada(nome, frequencia, nota1, nota2, nota3, nota4)) {
    const media = calcularMedia(nota1, nota2, nota3, nota4);
    const situacao = situacaoAluno(frequencia, media);

    // Remove a mensagem "Não há alunos" se for a primeira linha
    const mensagem = document.getElementById('mensagem-vazia');
    if (mensagem) {
      mensagem.remove();
    }

    adicionarAluno(corpoTabela, nome, frequencia, media, situacao);
  }
}

export function aoClicarRemover(event) {
  const corpoTabela = document.getElementById('corpo-tabela');
  removerAluno(event, corpoTabela);
}
