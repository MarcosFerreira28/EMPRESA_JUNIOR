let anosDeNascimento = [2004,2012,2007,1993,1960,2010,2018,2012,2003,2014,29000];
let maiorOuMenor = [];
let ano = 2025;

for (let i =0; i < anosDeNascimento.length; i++){

    let idade = ano - anosDeNascimento[i];

    if (idade >= 18) {
        maiorOuMenor.push("maior");
    }else if (idade < 18 && anosDeNascimento[i] <= ano) {
        maiorOuMenor.push("menor");
    }else {
        maiorOuMenor.push("ERRO");
    }
}

for (let i = 0; i < anosDeNascimento.length; i++) {
    if (maiorOuMenor[i] == "maior") {
        console.log(`Pessoa ${i}: Maior de idade`)
    }else if (maiorOuMenor[i] == "menor") {
        console.log(`Pessoa ${i}: Menor de idade`)
    }else {
        console.log("Esse ano é impossível ser o ano de nascimento de alguém");
    }
}