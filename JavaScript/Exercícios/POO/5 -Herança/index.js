class Property {
    constructor(area, price) {
        this.area = area;
        this.price = price;
    }

    getPricePerSquareMeter() {
        return this.price / this.area;
    }
}

class Hause extends Property { };

const land = new Property(200, 50000);
const someHause = new Hause(120, 200000);

