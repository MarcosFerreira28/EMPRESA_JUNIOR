let a = parseInt(prompt("Digite o valor do coeficiente a: "));
let b = parseInt(prompt("Digite o valor do coeficiente b: "));
let c = parseInt(prompt("Digite o valor do coeficiente c: "));

let delta = (b * b) - (4 * a * c);

if(a == 0) {
    console.log("O coeficiente 'a' não pode ser zero pois a equação se torna de primeiro grau.");
    x = - (c / b);
    console.log("Nesse caso equação seria de primeiro grau e possuiria uma raiz real: " + x);
}else if(delta < 0) {
    console.log("A equação não possui raízes reais.");
}else if(delta == 0) {
    let raiz = -b / (2 * a);
    console.log("A equação possui uma raiz real: " + raiz);
}else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(Math.sqrt(delta));
    console.log("A equação possui duas raízes reais: " + raiz1 + " e " + raiz2);
}