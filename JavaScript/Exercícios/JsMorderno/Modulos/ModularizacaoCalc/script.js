import calculete from "./calculate.js";
import copy from "./copy.js";
import { handleButtonPress, handleClearButton, handleTyping } from "./key.js";
import theme from "./theme.js";

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress)  
})

document.getElementById('clear').addEventListener('click', handleClearButton)

document.getElementById('equal').addEventListener('click', calculete)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('copyToClipboard').addEventListener('click', copy);

document.getElementById('themeSwitcher').addEventListener('click', theme);