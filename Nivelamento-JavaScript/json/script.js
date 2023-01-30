// Em objetos json dentro do javascript, os atributos podem ser escritos tanto entre aspas com onão.
const produto1 = {
    "nome": "Notebook",
    "preco": 4500.00,
    "fabricante": "Lenovo",
    "cor": "cinza"
}

const produto2 = {
    nome: "Notebook",
    preco: 6800.00,
    fabricante: "DELL",
    cor: "cinza claro"
}

console.log(produto1)
console.log(produto2)

const ordemDeCompra = {
    id: 53,
    date: "2021-10-20",
    client: {
        name: "Maria Sulamita",
        email: "sula@gmail.com",
        active: true
    },
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ]    
};

console.log(typeof ordemDeCompra)
console.log(ordemDeCompra)
console.log(ordemDeCompra.items[1].description)
console.log(ordemDeCompra.items[1].price)

// CONVERTENDO UMA STRING PARA O FORMATO JSON E VICE-VERSA
const txt = `{"name": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;
console.log(txt);
console.log(typeof txt);
console.log("NAME: ", txt.name);

const obj = JSON.parse(txt);
console.log(obj);
console.log("NAME: ", obj.name);

const text = JSON.stringify(obj);
console.log(text);
