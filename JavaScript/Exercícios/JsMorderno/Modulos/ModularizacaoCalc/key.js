import calculete from "./calculate.js";

const input = document.querySelector('#input');
const allowdKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

export function handleButtonPress(ev) {
        const value = ev.currentTarget.charKeyBtn.dataset.value;
        input.value += value 

}

export function handleClearButton() {
    input.value = '';
    input.focus()
}

export function handleTyping(ev) {
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
    
}