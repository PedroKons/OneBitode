const dayjs = require('dayjs');

function date(birth) {
    const now = dayjs(); //data atual
    const age = now.diff(birth, 'years'); // atribuido a idade
    const nextBirthday = dayjs(birth).add(age + 1, 'year'); // atribuindo a data de proximo anieversario
    const diffDaysBithday = nextBirthday.diff(now, 'day');
    console.log(
        'Idade: ' + age +
        '\n' + nextBirthday.format('DD/MM/YYYY') +
        '\n' + 'Quantos dias faltam para o proximo aniversário: ' + diffDaysBithday
    );
    
}


date('2002/08/14');
