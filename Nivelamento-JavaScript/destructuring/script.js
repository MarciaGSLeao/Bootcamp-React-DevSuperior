// Object destructuring is a JavaScript feature to extract properties from objects and bind them to variables.

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
            price: 79.99,
            quantity: 2
        }
    ]    
};

// Look the structure of syntax
const {id, client} = ordemDeCompra;
console.log(id)
console.log(client)
console.log(client.name)
console.log(client.email)

function subTotal(item){
    return item.price * item.quantity;
}
console.log("Subtotal: R$ " + subTotal(ordemDeCompra.items[1]).toFixed(2))

// or
function subTotal({price, quantity}){
    return price * quantity;
}
console.log("Subtotal: R$ " + subTotal(ordemDeCompra.items[1]).toFixed(2))

function totalValue({ items }) {
    let sum = 0;
    for (let i = 0; i<items.length; i++) {
        sum = sum + subTotal(items[i])
    }
    return sum;
}

console.log("R$", totalValue(ordemDeCompra))

const [item1, item2] = ordemDeCompra.items
console.log(item1)
console.log(item2)
