async function execute(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {    
        return Promise.reject('argumentos precisam ser do tipo numeros');
    } 
    let result = (weight / (height * height)).toFixed(2);
    return result;
          
}

async function print(weight,height) {
    try {

        console.log('calculando...');
        const result = await execute(weight, height)

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
    }catch (error) {
        console.log(error);
    }   
}

print(85,1.80);