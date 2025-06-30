let qtdNumeros = parseInt(prompt("Digite a quantidade de números que deseja inserir na lista: "));

let arrayNumeros = []

for (let i = 1; i <= qtdNumeros; i++) {
    let n = parseInt(prompt("Insira o " + i + " número da lista:"));
    arrayNumeros.push(n);
}
console.log("A lista de números é: " + arrayNumeros);