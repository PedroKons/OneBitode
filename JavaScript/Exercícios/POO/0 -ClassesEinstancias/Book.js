class Book {
    constructor(title) {
        this.title = title; // Atribuivel na instanciacao 
        this.published = false;   // predefinido
    }

    publish() { //metodo 
        this.published = true;
    }
}

const eragon = new Book('Eragon');
const eldest = new Book('Eldest');

eragon.publish()

console.log(eragon);
console.log(eldest);