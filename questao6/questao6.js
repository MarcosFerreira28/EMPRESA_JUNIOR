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
console.log(Fibonacci(n))