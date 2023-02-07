// Importando um módulo
// IMPORTANTE: 
//      SALVAR O ARQUIVO COM EXTENSÃO .mjs OU NO HTML QUE FOR CHAMAR O ARQUIVO .js, INSERIR O VALOR 'module' NO ATRIBUTO 'type'.

import * as nb from './numbers.mjs';
import Product from './product.mjs';
// OUTRA MANEIRA ABAIXO DE IMPORTAR FUNÇÕES DE UM MÓDULO:
// import {<functionA>, <funtionB>} from './<fileName.js>';

console.log(nb.sum(5, 10));
console.log(nb.exp(2, 10));

const product = new Product("Secador de Cabelo Phillips 2000W", 189.90, 2);
console.log(product);
