/* ## Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade(apenas baseada no ano de nascimento)
*/

const nome = prompt('Digite seu primeiro nome: ');
const sobreNome = prompt('Digite seu sobre nome: ');
const campoEstudo = prompt('DIgite seu Campo de Estudo: ');
const anoNascimento = prompt('Digite seu Ano de Nascimento: ');

let idade = 2023 - anoNascimento;

alert(
    'Usuario Cadastrado com sucesso! \n'+
    '\n Nome: ' + nome +
    '\n Sobrenome: ' + sobreNome +
    '\n Campo de estudo: ' + campoEstudo +
    '\n Idade: ' + idade 
)
