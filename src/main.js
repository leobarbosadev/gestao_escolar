import { adicionarEventoBotao } from './utils/utils.js';
import { aoClicarAdicionar } from './utils/utils.js';
import { aoClicarRemover } from './utils/utils.js';

adicionarEventoBotao('btn-adicionar', aoClicarAdicionar);
adicionarEventoBotao('botaoRemover', aoClicarRemover);