// Atribuição direta a uma variável.
const p1 = {
    name: "Noteboook",
    price: 5499.90,
    quantity: 2
}

console.log(p1)

// FUNÇÃO CONSTRUTORA
const Product = function(name, price, quantity){
    this.name = name,
    this.price = price,
    this.quantity = quantity
}

Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
    this.quantity += amount;
}

Product.prototype.remove = function(amount){
    if(this.quantity >= amount){
        this.quantity -= amount;
    }
}

Product.prototype.label = function(){
   return "Dados: " + this.name + ", " + this.price;
}
const p2 = new Product("Mouse", 49.90, 10);
console.log(p2)

console.log(p2.total())

console.log(p2.label())

p2.add(2)

console.log(p2)

// OU COMO CLASSE
// os atributos da classe são definidos na função construtora e os métodos, em seu prototype.
class ProductB {
    constructor(name, price, quantity) {
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }

    total(){
        return this.price * this.quantity;
    }

    add(amount){
        this.quantity += amount;
    }
    
    remove(amount){
        if(this.quantity >= amount){
            this.quantity -= amount;
        }
    }
    
    label(){
       return "Dados: " + this.name + ", " + this.price;
    }
}

const p3 = new ProductB("Óculos", 299.90, 2);

console.log(p3)

p3.add(10)

console.log(p3.total().toFixed(2))
