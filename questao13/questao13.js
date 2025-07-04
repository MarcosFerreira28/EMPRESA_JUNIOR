function AdicionaJogador(nome, idade, posicao, pontuacao){
    let jogador = {
        nome : nome,
        idade : idade,
        posicao : posicao,
        pontuacao : pontuacao
    }
    time.push(jogador);
}

function BuscaPorPosicao(posicao){
    let jogadoresPorPosicao = [];

    for (let i = 0; i < time.length; i++){
        if(time[i].posicao.toLowerCase() === posicao.toLowerCase()){
            jogadoresPorPosicao.push(time[i]);
        }
    }
    if (jogadoresPorPosicao.length === 0) {
        console.log("Não existem jogadores no time para essa posição.");
    }
    return jogadoresPorPosicao;
}

function ListarTime(time, jogadoresPorPosicao = false){
    if (time.length !== 0) {
        if (!jogadoresPorPosicao)
            console.log("Jogadores do time:");
        else
            console.log("Jogadores da posição solicitada:");
        for (let i = 0; i < time.length; i++){
            console.log(`Nome: ${time[i].nome}, Posição: ${time[i].posicao}, Idade: ${time[i].idade}, Pontuação: ${time[i].pontuacao}`); 
        }
    }
    else {
        if (!jogadoresPorPosicao){
            console.log("O time não tem jogadores.");
        }
    }
}

function CalcularPontuacaoMedia(time){
    let soma = 0;
    
    for (let i = 0; i < time.length; i++){
        soma += time[i].pontuacao;
    }

    return soma / time.length;
}


let time = [];
let opcao = 0

while (opcao !== 5){
    
    opcao = parseInt(prompt("Digite a opção desejada:\n1 - Adicionar Jogador\n2 - Busca por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair"));

    switch (opcao) {
        case 1:
            let nome = prompt("Digite o nome do jogador:");
            let idade = parseInt(prompt("Digite a idade do jogador:"));
            if (isNaN(idade) || idade <= 0) {
                console.log("Idade inválida! Por favor, insira um número positivo.");
                break;
            }

            let posicao = prompt("Digite a posição do jogador:");
            let pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));
            if (isNaN(pontuacao) || pontuacao < 0) {
                console.log("Pontuação inválida! Por favor, insira um número maior ou igual a 0.");
                break;
            }
        
            AdicionaJogador(nome, idade, posicao, pontuacao);
            console.log("Jogador adicionado!");
            break;
        case 2:
            let pos = prompt("Digite a posição que deseja buscar:");
            let jogadores = BuscaPorPosicao(pos);
            ListarTime(jogadores, true); // usado a função de listar o time para listar os jogadores com a posição desejada
            break;
        case 3:
            ListarTime(time);
            break;
        case 4:
            media = CalcularPontuacaoMedia(time);
            console.log("A pontuação média do time é: " + media.toFixed(2));
            break;
        case 5:
            console.log("Encerrando o programa.");
            break;
        default:
            console.log("Opção inválida! Por favor, insira um número de 1 a 5.");
            break;
    }
}