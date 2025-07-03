function EncontrarElementoUnico(array){
    let unicos = [];
    let igual = false; // Variável para ver se o elemento é unico ou duplicado

    for (let i = 0; i< array.length; i++){

        for (let j = 0; j < unicos.length; j++){
            if(array[i] === unicos[j]){
                unicos.splice(j, 1);
                console.log("O array é: " + unicos);

                igual = true;
                break;
            }
        }
        if (igual === false){
            unicos.push(array[i]);
            console.log("O array é: " + unicos);
        }
        else {
            igual = false;
        }
    }
    return unicos[0];
}


array = [1,2,3,3,5,2,1,6,5];
let unico = EncontrarElementoUnico(array);
console.log("O elemento não duplicado é: " + unico);