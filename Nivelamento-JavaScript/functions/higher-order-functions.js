const listNumbers = [1, 2, 3, 4]
const listEmpty = []

// MAP: o map aplica uma função a cada elemento da coleção, retornando uma nova coleção com valores alterados.

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

const mapHalf = listNumbers.map(x => x/2)
const mapDouble = listNumbers.map(double)
const mapTriple = listNumbers.map(triple)

console.log("--------- MAP ----------")
console.log(`Números = [${listNumbers}]`)
console.log(`Metade = [${mapHalf}]`)
console.log(`Dobro = [${mapDouble}]`)
console.log(`Triplo = [${mapTriple}]`)

// FILTER: retorna uma nova coleção contendo apenas elementos da coleção
//         original que satisfazem a um predicado (característica).

function pair(x){
    return x % 2 == 0;
}

console.log("\n--------- FILTER ----------")
const pairs = listNumbers.filter(pair)
const pairs2 = listNumbers.filter(x => x % 2 == 0)
const lessThan4 = listNumbers.filter(x => x < 4)

console.log(`Pares = [${pairs}]`)
console.log(`Pares = [${pairs2}]`)
console.log(`Menores que 4 = [${lessThan4}]`)

// REDUCE: aplica cumulativamente uma função aos elementos de uma coleção
//         retornando o resultado final cumulativo.
//         Pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function sum(x, y){
    return x + y;
}

const sumA = listNumbers.reduce(sum, 0)

console.log("\n--------- REDUCE ----------")
console.log(`Soma = [${sumA}]`)
console.log(`Soma = [${listEmpty.reduce(sum, 0)}]`) // também posso informar diretamente sem necessidade de atribuir o valor a uma variável.

// SORT: ordena a coleção conforme a função de comparação informada como parâmetro

const listNames = ["Mag", "Felipe", "Lelê", "Other pet"]
console.log(listNames.length)

function sortByLenght(nameA, nameB){
        return nameA.length - nameB.length;
}

console.log(listNames.sort())
console.log(listNames.sort(sortByLenght))
