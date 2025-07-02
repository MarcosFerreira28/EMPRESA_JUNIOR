let opcao = 4;
clientes = [];

while (opcao != 3) {
    opcao = parseInt(prompt("Pessoas em espera:   Digite a opção desejada:\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair"));

    switch (opcao){
        case 1:
            let nome = prompt("insira o nome do cliente da ser atendido: ");
            clientes.push(nome);
        
        case 2:
            console.log("Cliente que está sendo atendido: " + clientes[0]);
            clientes.shift();

        default:
            console.log("Opção inválida! Insira um número de 1 a 3.");

    }

}
