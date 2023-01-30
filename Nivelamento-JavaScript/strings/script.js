let idade = 32;

console.log("Essa é uma string literal") // aspas duplas
console.log('Essa é uma string literal') // aspas simples
console.log(`Essa é uma string literal`) // template string

console.log(`Minha idade = ${idade}.`)

// Convertendo um tipo numérico para uma string
let numToString = idade.toString();
console.log(`${numToString} foi convertido para um tipo ${typeof numToString}`);

// Convertendo uma string para um tipo numérico
let stringToNumber = parseFloat("75.8");
console.log(`${stringToNumber} foi convertido para um tipo ${typeof stringToNumber}`);

// Alguns métodos para Strings
const nome = "Márcia Gameleira  ";
console.log(`toLowerCase: ${nome.toLowerCase()}`);
console.log(`toUpperCase: ${nome.toUpperCase()}`);
console.log(`replace: ${nome.replace("a", "$")}`);
console.log(`replace: ${nome.replace(/a/g, "$")}`); // Expressão Regular
console.log(`length: ${nome.length}`);
console.log(`substring: ${nome.substring(0, 6)}`)
console.log(`trim: ${nome.trim()}`)
