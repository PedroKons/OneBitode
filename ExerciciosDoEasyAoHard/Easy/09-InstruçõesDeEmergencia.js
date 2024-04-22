// Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que compõe e retorna true caso possua e false caso não possua

function mesmaQuantidadeDeCadaLetra(string) {
    // Removendo todos os espaços da string e convertendo todas as letras para minúsculas
    string = string.replace(/\s/g, '').toLowerCase();
    
    // Criando um objeto para contar a quantidade de cada letra na string
    let contadorLetras = {};
    
    // Contando a quantidade de cada letra na string
    for (let letra of string) {
        // Verificando se a letra já foi contada antes
        if (contadorLetras[letra]) {
            // Se sim, incrementa o contador correspondente
            contadorLetras[letra]++;
        } else {
            // Se não, inicializa o contador para essa letra como 1
            contadorLetras[letra] = 1;
        }
    }
    
    // Obtendo um array com todas as contagens de letras
    const quantidades = Object.values(contadorLetras);
    
    // Armazenando a contagem da primeira letra em uma variável
    const primeiraQuantidade = quantidades[0];
    
    // Verificando se todas as contagens são iguais à contagem da primeira letra
    for (let i = 1; i < quantidades.length; i++) {
        // Se encontrar uma contagem diferente, retorna false
        if (quantidades[i] !== primeiraQuantidade) {
            return false;
        }
    }
    
    // Se todas as contagens forem iguais, retorna true
    return true;
}


// Exemplo de uso
console.log(mesmaQuantidadeDeCadaLetra("aabbc")); // Retorna true
console.log(mesmaQuantidadeDeCadaLetra("This is Thee")); // Retorna false