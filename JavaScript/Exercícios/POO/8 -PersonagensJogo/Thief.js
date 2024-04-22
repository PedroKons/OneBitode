const Character = require("./Character");

class Thief extends Character {
    attack(targetCharacter) {
        targetCharacter.lifepts -= (this.attackpts - targetCharacter.defensepts) * 2;
    }
}

module.exports = Thief;