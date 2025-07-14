import { calcularMedia } from "./modulos/calcularMedia";
import { situacaoAluno } from "./modulos/situacaoAluno";
import { adicionarAluno } from "./modulos/adicionarAluno";
import { criarBotaoRemover } from "./modulos/adicionarAluno";
import { limparMensagemTabelaVazia } from "./modulos/adicionarAluno";

const nome = document.getElementById('nome_completo');
const frequencia = document.getElementById('frequencia');
const nota1 = Number(document.getElementById('nota1'));
const nota2 = Number(document.getElementById('nota2'));
const nota3 = Number(document.getElementById('nota3'));
const nota4 = Number(document.getElementById('nota4'));
const corpoTabela = document.getElementById('corpo-tabela');

const media = calcularMedia(nota1, nota2, nota3, nota4);
const situacao = situacaoAluno(frequencia, media);

document.getElementById('btn-adicionar').addEventListener('click', adicionarAluno(corpoTabela, nome, frequencia, media, situacao));