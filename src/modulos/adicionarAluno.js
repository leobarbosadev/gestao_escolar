export function adicionarAluno(corpoTabela, nome, frequencia, media, situacao) {
    const novoAluno = document.createElement('tr');
    corpoTabela.appendChild(novoAluno);

    const nomeNovoAluno = document.createElement('td');
    nomeNovoAluno.textContent = nome.value;
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

export function criarBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    return botaoRemover;
};

export function limparMensagemTabelaVazia(mensagem) {
    if (mensagem) {
        mensagem.remove()
    };
};

