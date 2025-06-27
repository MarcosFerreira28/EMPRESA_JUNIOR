let a = parseInt(prompt("Digite o valor do coeficiente a: "));
let b = parseInt(prompt("Digite o valor do coeficiente a: "));
let c = parseInt(prompt("Digite o valor do coeficiente a: "));

let delta = (b * b) - (4 * a * c);

if(delta < 0) {
    console.log("A equação não possui raízes reais.");
}else if(delta == 0) {
    if(a == 0 && b == 0)
        console.log("Erro: A e B não podem ser ambos zero.");
    let raiz = -b / (2 * a);
    console.log("A equação possui uma raiz real: " + raiz);
}else {
    if(a == 0)
        console.log("Erro: A não pode ser zero, pois leva as raízes a infinito.");
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(Math.sqrt(delta));
    console.log("A equação possui duas raízes reais: " + raiz1 + " e " + raiz2);
}

