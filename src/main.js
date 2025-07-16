import { calcularMedia } from "./modulos/calcularMedia.js";
import { situacaoAluno } from "./modulos/situacaoAluno.js";
import { adicionarAluno } from "./modulos/adicionarAluno.js";
import { criarBotaoRemover } from "./modulos/adicionarAluno.js";
import { limparMensagemTabelaVazia } from "./modulos/adicionarAluno.js";
import { adicionarEventoBotao } from "./utils/validacao.js";
import { aoClicarRemover } from "./modulos/removerAluno.js";
import { validar_entrada } from "./utils/validacao.js"



function aoClicarAdicionar() {
  const nome = document.getElementById('nome_completo').value.trim();
  const frequencia = document.getElementById('frequencia').value.trim();
  const nota1 = Number(document.getElementById('nota1').value.trim());
  const nota2 = Number(document.getElementById('nota2').value.trim());
  const nota3 = Number(document.getElementById('nota3').value.trim());
  const nota4 = Number(document.getElementById('nota4').value.trim());
  const corpoTabela = document.getElementById('corpo-tabela');

  const media = calcularMedia(nota1, nota2, nota3, nota4);
  const situacao = situacaoAluno(frequencia, media);


  
 if (!validar_entrada(corpoTabela, nome, frequencia, media, situacao)) {
        return
    };


    
  adicionarAluno(corpoTabela, nome, frequencia, media, situacao);
};

adicionarEventoBotao('btn-adicionar', aoClicarAdicionar);

const corpoTabela = document.getElementById('corpo-tabela');
aoClicarRemover(corpoTabela);
