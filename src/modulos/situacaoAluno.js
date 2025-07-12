export function situacaoAluno(frequencia, media){
    if (frequencia >= 75 && media >= 60) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    };
};