document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.toString();
    const email = document.getElementById('email').value.toString();
    const password = document.getElementById('password').value.toString();
    
    try {
        if (CheckEmail(email) && CheckPassword(password)) {
            alert(name + ' o email e senha verificados corretamente!');
        } else {
            alert(name + ' o email ou senha estão inválidos');
        }
    } catch (error) {
        alert('Ocorreu um erro: ' + error.message);
    }
    
})

function CheckEmail(email) {
    const regex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9_]{2,}\.[a-zA-Z]{2,}/;
    return regex.test(email);
}

function CheckPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/
    return regex.test(password);
}






