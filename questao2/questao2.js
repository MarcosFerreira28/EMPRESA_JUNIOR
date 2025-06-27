let desicao = "s";
while (desicao.toLowerCase() === "s") {
    let n = parseInt(prompt("Digite um número inteiro positivo: "));
    while (n <= 0) {
        alert("Número inválido! Não é um inteiro positivo, tente novamente.");
        n = parseInt(prompt("Digite um número inteiro positivo: "));
    }
    let fatorial = 1;
    for (let i = 1; i <=n; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${n} é: ${fatorial}`);
    desicao = prompt("Deseja calcular o fatorial de outro número? (s/n)");
}