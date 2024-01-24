/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, 
a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então 
calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e
exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

let nameCharacterAttack = prompt("Digite o nome do personagem de ataque!");
let attackPower = parseFloat(prompt("Digite o valor de ataque 0 a 100!"));

let nameCharacterDefense = prompt("Digite o nome do personagem de defesa!");
let healthPoints = parseFloat(prompt("Digite a quatidade de vida 0 a 100!"));
let shield = parseFloat(prompt("Possui escudo? '0'-não '1'-sim "));

let damage = 0;

if ((attackPower>healthPoints) && (shield===0)) {
    damage = attackPower - healthPoints;
    alert(
        "Nome do personagem de ataque: " + nameCharacterAttack +
        "\n Força do ataque: " + attackPower +
        "\n Nome do personagem de defesa: " + nameCharacterDefense +
        "\n Quantidade de vida: " + healthPoints +
        "\n Não possui escudo!" +
        "\n Quantidade de vida depois da batalha: " + (healthPoints-damage)
    )
}

else if ((attackPower>healthPoints) && (shield===1)) {
    damage = (attackPower - healthPoints) / 2;
    alert(
        "Nome do personagem de ataque: " + nameCharacterAttack +
        "\n Força do ataque: " + attackPower +
        "\n Nome do personagem de defesa: " + nameCharacterDefense +
        "\n Quantidade de vida: " + healthPoints +
        "\n Possui escudo!" +
        "\n Quantidade de vida depois da batalha: " + (healthPoints-damage)
    )
}
    
else if (attackPower<=healthPoints) {
    damage = 0;
    alert(
        "Nome do personagem de ataque: " + nameCharacterAttack +
        "\n Força do ataque: " + attackPower +
        "\n Nome do personagem de defesa: " + nameCharacterDefense +
        "\n Quantidade de vida: " + healthPoints +
        "\n Ataque nulo!" +
        "\n Quantidade de vida depois da batalha: " + (healthPoints-damage)
    )
}



