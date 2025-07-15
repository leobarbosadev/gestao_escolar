export function situacaoAluno(frequencia, media){
    if (frequencia >= 75 && media >= 15) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    };
};