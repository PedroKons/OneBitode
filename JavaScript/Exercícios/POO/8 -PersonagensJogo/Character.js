class Character{
    constructor(name, lifepts, attackpts, defensepts) {
        this.name = name;
        this.lifepts= lifepts;
        this.attackpts = attackpts;
        this.defensepts = defensepts;

    }

    attack(targetCharacter) {
        targetCharacter.lifepts -= this.attackpts - targetCharacter.defensepts;
    }
}

module.exports = Character;