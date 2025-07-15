import { adicionarEventoBotao } from "./utils/validacao.js";
import { validar_entrada } from "./utils/validacao.js"

function aoClicarAdicionar() {
  const nome = document.getElementById('nome_completo').value.trim();
  const frequencia = document.getElementById('frequencia').value.trim();
  const nota1 = document.getElementById('nota1').value.trim();
  const nota2 = document.getElementById('nota2').value.trim();
  const nota3 = document.getElementById('nota3').value.trim();
  const nota4 = document.getElementById('nota4').value.trim();

validar_entrada(nome, frequencia, nota1, nota2, nota3, nota4);
}

adicionarEventoBotao('btn-adicionar', aoClicarAdicionar);