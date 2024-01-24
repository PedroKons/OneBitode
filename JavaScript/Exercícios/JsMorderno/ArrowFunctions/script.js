
const simpleArithmeticMean = (...values) => {
    if (values.length === 0) {
        return 0;
    }
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    const mean = sum / values.length;

    return mean;
};

const teste = simpleArithmeticMean(2, 4, 6, 8, 10);
//console.log(`A média é: ${teste}`);

const weightedArithmeticMean = (...values) => {
    if (values.length === 0) {
        return 0
    }

    let sumValuesTimesWeights = 0;
    let sumWeights = 0

    for (let i = 0; i < values.length; i++){

        sumValuesTimesWeights += values[i].n * values[i].p;
        sumWeights += values[i].p;
        
    }

    const result = sumValuesTimesWeights / sumWeights;
    return result;

};

const teste2 = weightedArithmeticMean({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 });

//console.log(`A média pondeirada é: ${teste2}`);

const median = (...values) => {
    if (values.length === 0) {
        return 0;
    }

    values.sort((a, b) => a - b);
        
    if (values.length % 2 !== 0) {
        
        const result = values[Math.floor(values.length / 2)];
        return result;
    }
        
    if (values.length % 2 === 0) {
        const meio1 = values[values.length / 2 - 1];
        const meio2 = values[values.length / 2];
        const numberCenter = (meio1 + meio2) / 2;
        return numberCenter;
    }

};

const teste3_1 = median(2, 4, 5, 7, 42, 99);
const teste3_2 = median(10, 11, 3, 2, 4);

//console.log(`A mediana é: ${teste3_2}`);
//console.log(`A mediana par é: ${teste3_1}`);

const mode = (...values) => {
    if (values.length === 0) {
        return 0;
    }

    const score = {}
    let mode = [];
    let maxFrequency = 0;

    //Conta a frequêmcia de cada elemento no vetor
    for (let i = 0; i < values.length; i++) {
        const currentElement = values[i];

        if (score[currentElement] === undefined) {
            score[currentElement] = 1;
        } else {
            score[currentElement]++;
        }
    

        //Atualiza a moda e a frequência máxima conforme necessário 
        if (score[currentElement] > maxFrequency) {
            mode = [currentElement];
            maxFrequency = score[currentElement];
        } else if (score[currentElement] === maxFrequency) {
            mode.push(currentElement);
        }
    }
    return mode;
};

const teste4 = median(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
console.log(`A moda é: ${teste4}`);
