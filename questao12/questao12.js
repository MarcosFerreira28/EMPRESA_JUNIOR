function EncontrarElementoUnico(array){
    let unicos = [];
    let igual = false; // Variável para ver se o elemento é unico ou duplicado

    for (let i = 0; i< array.length; i++){
        for (let j = 0; j < unicos.length; j++){
            if(array[i] === unicos[j]){
                unicos.splice(j, 1);
                igual = true; // adicionado aqui para indicar que o elemento já está na lista de unicos e assim não vai inseri-lo novamente após esse for
                break;
            }
        }

        if (igual === false){
            unicos.push(array[i]);
        }
        else {
            igual = false; // reiniciado a variável para o número seguinte
        }
    }
    return unicos[0];
}

array = [1,2,3,3,5,10,6,2,1,6,5];
let unico = EncontrarElementoUnico(array);
console.log("O elemento não duplicado é: " + unico);