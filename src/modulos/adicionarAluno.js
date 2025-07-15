export function adicionarAluno(corpoTabela, nome, frequencia, media, situacao) {
    limparMensagemTabelaVazia();
    
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

    const celulaRemoverAluno = document.createElement('td');
    const botaoRemoverAluno = criarBotaoRemover();
    celulaRemoverAluno.appendChild(botaoRemoverAluno);
    novoAluno.appendChild(celulaRemoverAluno);
};

export function criarBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('btn-remover')
    return botaoRemover;
};

export function limparMensagemTabelaVazia() {
    const mensagem = document.getElementById('mensagem-vazia');

    if (mensagem) {
        mensagem.remove()
    };
};

