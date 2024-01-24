const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowdKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

//O input seria a caixa que aparece os numeros!
// ev.key é a tecla que estamos clicando

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value;
        input.value += value 

  })  
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = '';
    input.focus()
})

document.getElementById('equal').addEventListener('click', function () {
    calculete();
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault();
    if (allowdKeys.includes(ev.key)) { // Se a tecla que for clicada é inclusa no array 
        input.value += ev.key; // Acrescenta ela no valor do input
        return;
    }
    if (ev.key === 'Backspace') { 
        input.value = input.value.slice(0, -1); // Apaga numero por numero 
    }
    if (ev.key === 'Enter') {
        calculete()
    }
    
})

function calculete() {
    resultInput.value = 'ERROR';
    resultInput.classList.add("error");
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error");
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
        button.innerText = 'Copied!';
        button.classList.add('success');
        navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
})