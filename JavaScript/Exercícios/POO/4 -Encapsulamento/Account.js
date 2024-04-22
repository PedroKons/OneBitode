class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
    }
    getBalance(email, password) {
        if (this.email === email && this.#password === password) {
            return this.#balance;
        } else {
            return null;
        }
    }
}

const user = {
    email: "pedro@email.com",
    password: "1324"

};

const myAccount = new Account(user);

console.log(myAccount.getBalance("pedro@email.com", "1324"));