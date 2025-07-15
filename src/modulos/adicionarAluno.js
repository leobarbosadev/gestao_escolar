import { criarBotaoRemover } from "./removerAluno.js";

export function adicionarAluno(corpoTabela, nome, frequencia, media, situacao) {

    const novoAluno = document.createElement('tr');
    corpoTabela.appendChild(novoAluno);

    const nomeNovoAluno = document.createElement('td');
    nomeNovoAluno.textContent = nome;
    novoAluno.appendChild(nomeNovoAluno);

    const frequenciaNovoAluno = document.createElement('td');
    frequenciaNovoAluno.textContent = frequencia;
    novoAluno.appendChild(frequenciaNovoAluno);

    const mediaNovoAluno = document.createElement('td');
    mediaNovoAluno.textContent = media;
    novoAluno.appendChild(mediaNovoAluno);

    const situacaoNovoAluno = document.createElement('td');
    situacaoNovoAluno.textContent = situacao;
    novoAluno.appendChild(situacaoNovoAluno);

    const botaoRemoverAluno = document.createElement('td');
    botaoRemoverAluno.innerHTML = criarBotaoRemover();
    novoAluno.appendChild(botaoRemoverAluno);
};