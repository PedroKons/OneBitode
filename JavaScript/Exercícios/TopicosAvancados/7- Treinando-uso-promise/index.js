function execute(weight, height) {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('Valores recebidos não são numeros.')
        } else {
            resolve((weight / (height * height)).toFixed(2));
        }
    })
}

function print(weight,height) {
    execute(weight, height).then((result) => {
        if (result < 18.5) {
            console.log(`O IMC ficou em ${result} está com magreza`);
        }
        if (result >= 18.5 && result <= 24.9) {
            console.log(`O IMC ficou em ${result} está normal`);
        }
        if (result >= 25 && result <= 29.9) {
            console.log(`O IMC ficou em ${result} está com sobrepeso`);
        }
        if (result >= 30 && result <= 39.9) {
            console.log(`O IMC ficou em ${result} está com obesidade`);
        }
        if (result > 40) {
            console.log(`O IMC ficou em ${result} está com obesidade grave`);
        }
        
    }).catch((err) => {
        console.log(`A promise foi rejeitada. O resultado foi: ${err}`);
    }).finally(() => {
        console.log('A promise foi finalizada');
    })
    console.log('calculando...');
}

print(40,1.80);