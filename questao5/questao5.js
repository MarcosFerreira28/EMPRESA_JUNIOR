let valor = parseInt(prompt("Digite um valor inteiro: "));

if (valor%3 === 0 && valor%5 === 0 && valor !== 0) {
    console.log("fizzbuzz");
}else if (valor%3 === 0 && valor !== 0) {
    console.log("fizz");
}else if (valor%5 === 0 && valor !== 0) {
    console.log("buzz");
}