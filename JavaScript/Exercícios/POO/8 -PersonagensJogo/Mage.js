const Character = require("./Character");

class Mage extends Character{
    constructor(name, lifepts, attackpts, defensepts, magic) {
        super(name, lifepts, attackpts, defensepts);
        this.magic = magic;
    }

    attack(targetCharacter) {
        targetCharacter.lifepts -= (this.attackpts + this.magic) - targetCharacter.defensepts;
    }

    heal(targetCharacter){
        targetCharacter.lifepts += this.magic * 2;
    }
}

module.exports = Mage;