function sum(number1, number2){
    return number1 + number2;
}

function exp(base, exponent){
    return base ** exponent;
}

/* A palavra reservada export torna visível as funções do módulo atual para outros módulos.
   Pode ser declarada ao final do módulo, especificando entre chaves quais funções
   entram no conjunto, ou antes de cada função.
*/
export{sum, exp};
