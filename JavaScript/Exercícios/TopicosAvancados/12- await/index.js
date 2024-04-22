async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('aegumentos precisam ser do tipo numero');
    }
    return a + b;
}

// async function execute() {
//     asyncSum(50, 33).then(result => {
//         console.log(result);
//     })
// }

async function execute() {
    const result = await asyncSum(50, 33);
    console.log(result);
}

execute();
