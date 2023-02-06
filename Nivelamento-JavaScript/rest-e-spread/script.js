// REST: valores passados com vírgula, se transformam em arrays, com a sintaxe dos ... 3 pontinhos

function sum(...numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const result1 = sum(1, 2, 3, 4)
console.log(result1)

// SPREAD: transforma um array [] em valores seprados por vírgula
const othersNumbers = [10, 20, 30, 40]

const result2 = Math.max(...othersNumbers)
console.log(result2)

const item = {
    descripition: "Notebook",
    price: 5999.90,
    qtd: 1
}

const cloneItem = {...item}
const cloneItemPlus = {
    ...item,
    weight: 5
}

console.log(item)
console.log(cloneItem)
console.log(cloneItemPlus)
