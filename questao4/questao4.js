let reais = parseFloat(prompt("Insira o valor em reais para ser convertido: "));

console.log(`Valor em reais: R$ ${reais.toFixed(2)}`);

let euro = reais / 6.10;

console.log(`Valor em euros: € ${euro.toFixed(2)}`);
