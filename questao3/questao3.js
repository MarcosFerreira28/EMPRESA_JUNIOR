let anosDeNascimento = [2004,2002,2007,1993,1960,2010];
let maiorOuMenor = [];
let ano = 2025;

for (let i =0; i<anosDeNascimento.length; i++){

    let idade = ano - anosDeNascimento[i];

    if (idade >= 18){
        maiorOuMenor.push("maior");
    }else {
        maiorOuMenor.push("menor");
    }
}

for (let i = 0; i < anosDeNascimento.length; i++) {
    if (maiorOuMenor[i] === "maior") {
        console.log(`Pessoa ${i}: Maior de idade`)
    }else {
        console.log(`Pessoa ${i}: Menor de idade`)
    }
}