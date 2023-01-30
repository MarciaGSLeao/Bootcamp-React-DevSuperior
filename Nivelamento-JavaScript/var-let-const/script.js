// var => não recomendado o uso, pois "vaza escopo" em estrutura de controle.

const x = 5;

if (x > 0) {
    console.log("Número Positivo.")
} else {
    console.log("Número Negativo.")
}

if (x > 0) {
    var a = 100
    let b = 200
    const c = 300
    console.log("Imprimindo DENTRO do if:")
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log("Imprimindo FORA do if:")
console.log(a)
// console.log(b) // A partir daqui, surgirá erro no código.
// console.log(c)
