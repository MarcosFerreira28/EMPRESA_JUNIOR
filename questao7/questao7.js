let frase = prompt("Digite uma frase: ");

frase = frase.toLowerCase();
frase = frase.split(" ");

fraseOriginal = "";
for (let i = 0; i <= frase.length - 1; i++){
    fraseOriginal += frase[i];
}

let fraseInvertida = "";
for (let i = frase.length - 1; i >= 0; i--) {
    for (let j = frase[i].length - 1; j >= 0; j--){
        fraseInvertida += frase[i][j];
    }
}

if (fraseInvertida == fraseOriginal) {
    console.log("A frase é um palíndromo.");
}else {
    console.log("A frase não é um palíndromo.");
}