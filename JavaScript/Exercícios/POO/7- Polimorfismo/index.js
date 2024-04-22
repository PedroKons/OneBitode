class Vehicle{
    move() {
        console.log('O veivulo está se movendo.')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle{
    move() {
        console.log('O navio está navegando.')
    }
}

class Bike extends Vehicle{
    move() {
        console.log('A Bike está pedalando')
    }
}

const celta = new Car();
const perola = new Ship();
const caloi = new Bike();

celta.move();
perola.move();
caloi.move();