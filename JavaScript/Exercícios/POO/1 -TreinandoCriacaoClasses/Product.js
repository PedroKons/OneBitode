class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }
    
    addToStock(quant) {
        this.inStock += quant;
        return this.inStock;
    }

    calculateDiscout(porcentDiscout) {
        this.price = this.price - (this.price * (porcentDiscout / 100));
        return this.price;
    }
}


const productC = new Product('Macarrao', 'Instantaneo', 50);
console.log(productC);
console.log(productC.addToStock(2));
console.log(productC.calculateDiscout(10));