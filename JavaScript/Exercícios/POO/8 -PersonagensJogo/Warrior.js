const Character = require("./Character");

class Warrior extends Character{
    constructor(name, lifepts, attackpts, defensepts, shield) {
        super(name, lifepts, attackpts, defensepts);
        this.shield = shield;
        this.stance = "attacking";
    }

    attack(targetCharacter) {
        if (this.stance === "attacking") {
            super.attack(targetCharacter);
        }
    }

    switchStance() {
        if (this.stance === "attacking") {
            this.stance = "defending";
            this.defensepts += this.shield;
        } else {
            this.stance = "attacking";
            this.defensepts -= this.shield;
        }
    } 
      
}

module.exports = Warrior;