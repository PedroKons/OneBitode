const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('Galdino de Borba', 99, 'Cordeiros', 'Itajaí', 'SC');
const pedro = new Person('Pedro', addr);

console.log(pedro);
console.log(pedro.address.fullAddress());
