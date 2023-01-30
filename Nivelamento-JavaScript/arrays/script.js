const nomes = ["João", "Márcia", "Felipe", "Helena"];
console.log(nomes);

const alturas = [1.82, 1.58, 1.25, 0.25];
console.log(alturas);

// REMOVER ELEMENTOS
console.log("\nTeste 'pop' - remção do último elemento: ")
console.log(nomes.pop());
console.log(nomes);
console.log("\nTeste 'shift' - remoção do primeiro elemento: ")
console.log(nomes.shift());
console.log(nomes);

// INSERINDO ELEMENTOS
console.log("\nTeste 'push' - inserção de um novo elemento após a última posição: ");
nomes.push("Lelê");
console.log(nomes);

console.log("\nTeste 'unshift' - inserção de um novo elemento na primeira posição: ")
nomes.unshift("Fernando");
console.log(nomes);

// INSERIR E REMOVER EM QUALQUER POSIÇÃO
const letras = ["A", "B", "D", "E", "F", "G", "H", "I", "J"]
console.log("\nTeste 'splice'")
letras.splice(2, 2) // significa que a partir da posição 2, eu removi 2 elementos.
console.log(letras)

// CONCATENANDO ARRAYS
const meninas = ["Márcia", "Laura"]
const meninos = ["Felipe", "Lorenzo"]
const todos = meninas.concat(meninos)
console.log(todos)

// ACESSO E ATRIBUIÇÃO
console.log(alturas)
alturas[2] = 1.30
alturas[3] = 0.30
console.log(alturas)

// PERCORRER UM ARRAY
for (let i = 0; i < alturas.length; i++) {
    console.log(alturas[i])
 }
// ou com o forEach (uma função de alta ordem, ou seja, uma funcção que recebe outra função com oargumento)
alturas.forEach(
// elemento => {execute o bloco de código que se encontra entre essas chaves}. Também conhecido como arrow functions.
    altura => {console.log(altura)}
);
