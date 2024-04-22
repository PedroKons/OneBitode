const Author = require("./Author");

const john = new Author('Jonh Doe');

const post = john.writePost('Titulo do posto', 'lorem ipsin frer sju...');

post.addComment('pedro', 'muito bom');
post.addComment('lucas', 'legal');

console.log(john);
console.log(post);