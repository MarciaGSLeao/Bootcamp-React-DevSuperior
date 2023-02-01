// ESTRUTURA BÁSICA DE UMA FUNÇÃO

function somaA(num1, num2){
    return num1 + num2;
}
console.log(somaA(2, 5))

const somaB = function (num1, num2) {
    return num1 + num2;
}
console.log(somaB(12, 15))

// ARROW FUNCTION
const somaC = (num1, num2) => {return num1 + num2}
console.log(somaB(22, 25))

const somaD = (num1, num2) => num1 + num2
console.log(somaB(32, 35))

const dobroA = num1 => num1 * 2;
console.log(dobroA(2))

// FUNÇÃO RECEBENDO FUNÇÃO COMO ARGUMENTO
function triplo(num){
    return num * 3;
}

function calc(fun, num){
    return fun(num)
}
console.log(calc(triplo, 1000))
