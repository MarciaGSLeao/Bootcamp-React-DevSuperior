/* 
    SUPONDE QUE HOUVESSE OUTRAS FUNÇÕES NO MÓDULO,
    PODE-SE INSERIR O COMANDO 'expert default' EM UMA PARTE ESPECÍFICA DO CÓDIGO
    PARA QUE O MÓDULO EXPORTE APENAS ELA.
*/
export default class Product {
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
