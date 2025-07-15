import { adicionarEventoBotao, aoClicarAdicionar, aoClicarRemover } from './utils/utils.js';


adicionarEventoBotao('btn-adicionar', aoClicarAdicionar);

document.getElementById('corpo-tabela').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('btn-remover')) {
        aoClicarRemover(event);
    }
});
