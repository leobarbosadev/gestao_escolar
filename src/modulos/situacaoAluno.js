export function situacaoAluno(frequencia, soma) {
    if (frequencia >= 75 && soma >= 60) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    };
};