let opcao = 4;
clientes = [];

while (opcao != 3) {

    opcao = parseInt(prompt("Pessoas em espera: " + clientes.join(", ") + "  Digite a opção desejada:\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair"));

    switch (opcao){
        case 1:

            let nome = prompt("insira o nome do cliente da ser atendido: ");
            clientes.push(nome);
            break;
        
        case 2:

            if (clientes.lenght !== 0){
                console.log(clientes.lenght);
                console.log("Cliente que está sendo atendido: " + clientes[0]);
                clientes.shift();
            }
            else {
                console.log("Não há clientes na fila.");
            }
            
            break;
        
        case 3:
            console.log("Encerrando o programa.");
            break;

        default:
            console.log("Opção inválida! Insira um número de 1 a 3.");
            break;

    }

}
