let qtdNumeros = parseInt(prompt("Digite a quantidade de números que deseja inserir na lista: "));

let arrayNumeros = []

for (let i = 1; i <= qtdNumeros; i++) {
    let n = parseInt(prompt("Insira o " + i + " número da lista:"));
    if (!isNaN(n))
        arrayNumeros.push(n);
}

let qtd = 0;
for (let i = 1; i < arrayNumeros.length; i++){
    if (arrayNumeros[i] > arrayNumeros[i - 1])
        qtd++;
}

console.log(qtd);