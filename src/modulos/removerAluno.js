export function removerAluno(event, corpoTabela) {
    const botaoClicado = event.target;
    const linha = botaoClicado.closest('tr');
    linha.remove();

    mensagemTabelaVazia(corpoTabela);
};

export function mensagemTabelaVazia(corpoTabela) {
    if (corpoTabela.rows.length === 0) {
        const linhaVazia = document.createElement('tr');
        linhaVazia.id = 'mensagem-vazia';
        linhaVazia.innerHTML = `<td colspan="5">Não há alunos cadastrados.</td>`;
        corpoTabela.appendChild(linhaVazia);
    };
};

export function aoClicarRemover(corpoTabela) {
    corpoTabela.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-remover')) {
            removerAluno(event, corpoTabela);
        }
    });
};