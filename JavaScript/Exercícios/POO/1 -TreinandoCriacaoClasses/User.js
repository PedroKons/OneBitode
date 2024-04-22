class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(emailverif, passwordverif) {
        if (emailverif === this.email && passwordverif === this.password) {
            return true;
        }
        return false;
    }
}

const userOne = new User('Pedro Henrique Kons', 'pedrokons@hotmail.com', 'Simone5860');

console.log(userOne.login('pedrokons@hotmail.com', 'Simone586'))

console.log(userOne);