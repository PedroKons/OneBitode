const buttonEvent = document.getElementById('buttonEvent');
const ul = document.getElementById('listDev');
const pRegister = document.getElementById('pRegister');
const nomedev = document.getElementById('nameDeve');
let array = [];

buttonEvent.addEventListener('click', function (ev) {
    ev.preventDefault();
    
    const tecLi = document.createElement('li');
    tecLi.innerText = "Quais tecnologias tem dominio? \n";
    const tecInput = document.createElement('input');
    tecInput.type = 'text';
    tecInput.name = 'tec';

    tecLi.appendChild(tecInput);
    ul.appendChild(tecLi);
    ul.appendChild(document.createElement('br'));

    const timeWorkLi = document.createElement('li');
    timeWorkLi.innerText = "Tempo de experiencia: \n";

    const radioGroupName = 'tempExperience_' + ul.childElementCount;

    const optionOne = document.createElement('input');
    optionOne.type = 'radio';
    optionOne.name = radioGroupName;
    optionOne.value = '0-2anos';

    const labelOptionOne = document.createElement('label');
    labelOptionOne.innerText = '\n 0-2 anos';
    labelOptionOne.appendChild(optionOne);

    const optionTwo = document.createElement('input');
    optionTwo.type = 'radio';
    optionTwo.name = radioGroupName;
    optionTwo.value = '3-4anos';

    const labelOptionTwo = document.createElement('label');
    labelOptionTwo.innerText = '|0-3 anos';
    labelOptionTwo.appendChild(optionTwo);

    const optionThree = document.createElement('input');
    optionThree.type = 'radio';
    optionThree.name = radioGroupName;
    optionThree.value = '5+anos';

    const labelOptionThree = document.createElement('label');
    labelOptionThree.innerText = '|5+ anos';
    labelOptionThree.appendChild(optionThree);

    ul.appendChild(timeWorkLi);
    ul.appendChild(labelOptionOne);
    ul.appendChild(labelOptionTwo);
    ul.appendChild(labelOptionThree);

    const buttonRemoveLi = document.createElement('li');
    const buttonRemove = document.createElement('button');
    buttonRemove.type = 'button';
    buttonRemove.id = 'buttonRemove';
    buttonRemove.innerText = 'Remover';

    buttonRemove.addEventListener('click', function (evt) {
        evt.preventDefault();
        ul.removeChild(tecLi);
        ul.removeChild(timeWorkLi);
        ul.removeChild(buttonRemoveLi);
        ul.removeChild(labelOptionOne);
        ul.removeChild(labelOptionTwo);
        ul.removeChild(labelOptionThree);
    })

    buttonRemoveLi.appendChild(buttonRemove);
    ul.appendChild(buttonRemoveLi);

})

const buttonRegisterp = document.createElement('p');
const buttonRegister = document.createElement('button');
buttonRegister.innerText = 'Registrar';

buttonRegister.addEventListener('click', function(evto) {
    evto.preventDefault();
    
    const developerData = {
        nome: nomedev.value,
        tec: [],
        temp: []
    };

    const tecInputs = ul.querySelectorAll('input[name=tec]');
    
    tecInputs.forEach(function (input) {
        developerData.tec.push(input.value);
    });

    const tempExperience = ul.querySelectorAll('input[name^="tempExperience"]:checked');
    const tempValues = [];

    tempExperience.forEach(function (tempExperience) {
        tempValues.push(tempExperience.value);
    });

    developerData.temp = tempValues;

    array.push(developerData);
    nomedev.value = '';
    ul.innerHTML = '';
    console.log(array);
    
})

buttonRegisterp.appendChild(buttonRegister);
pRegister.appendChild(buttonRegisterp);


