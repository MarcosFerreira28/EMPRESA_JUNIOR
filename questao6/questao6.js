function Fibonacci(n){

    if (n === 1) {
        return 0;
    }
    else if (n === 2) {
        return 1;
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

let n = parseInt(prompt("Digite um número inteiro positivo: "));

let numeros = [];

for (let i = 1; i <= n; i++) {
    numeros.push(Fibonacci(i));
}

if(n < 0){
    alert("ERRO! O número inserido deve ser positivo.");
}else{
    console.log(`Os ${n} primeiros números da sequência de fibonacci são: ` + numeros);
}