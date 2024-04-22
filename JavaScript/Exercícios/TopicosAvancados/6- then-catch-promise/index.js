function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.');
        setTimeout(() => {
            if (true) {
                reject('a promise foi rejeitada');
            } else {
                console.log('Resolvendo a promise...');
                resolve(42)
            }
        }, 2 * 1000)
    })
}

execute().then((result) => { // lidar com promise quando for resolvida
    console.log(`A promise foi resolvida. O resultado foi: ${result}`);
}).catch((err) => {
    console.log(`A promise foi rejeitada. O resultado foi: ${err}`);
}).finally(() => {
    console.log('A promise foi finalizada!')
})