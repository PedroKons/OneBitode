console.log('Programa inicado!');

// const timeoutId = setTimeout(() => {
//     console.log('3 segundos se passaram desde que o programa foi inciado.')
// }, 1000 * 3) // tempo em milesegundos

// clearTimeout(timeoutId); // para o timeout

let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`se passaram ${seconds} segundos.`);
    if (seconds > 10) {
        clearInterval(intervalId);
        console.log('Tempo esgostou!');
    }
}, 1000 * 3)

