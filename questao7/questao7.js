let frase = prompt("Digite uma frase: ");

frase = frase.toLowerCase();
frase = frase.split(" ");

console.log(frase);
console.log(frase[frase.length - 1]);

let fraseInvertida = "";
for (let i = frase.length - 1; i >= 0; i--) {
    for (let j = frase[i].length - 1; j >= 0; j--){
        fraseInvertida += frase[i][j];
        console.log(fraseInvertida);
    }
}