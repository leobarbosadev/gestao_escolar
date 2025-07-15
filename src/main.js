import { calcularMedia } from "./modulos/calcularMedia";
import { situacaoAluno } from "./modulos/situacaoAluno";
import { adicionarAluno } from "./modulos/adicionarAluno";
import { criarBotaoRemover } from "./modulos/adicionarAluno";
import { limparMensagemTabelaVazia } from "./modulos/adicionarAluno";
import { adicionarEventoBotao } from "./utils/validacao.js";
import { removerAluno } from "./modulos/removerAluno.js";
import { validar_entrada } from "./utils/validacao.js"

function aoClicarAdicionar() {
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

adicionarEventoBotao('btn-adicionar', aoClicarAdicionar);

function aoClicarRemover(event) {
    const corpoTabela = document.getElementById('corpo-tabela');
    
    removerAluno(event, corpoTabela);
};

adicionarEventoBotao('botaoRemover', aoClicarRemover);
