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
        console.log("Não existem jogadores para essa posição.");
        return;
    }
    return jogadoresPorPosicao;
}

function ListarTime(time){
    if (time.length !== 0) {
        console.log("Jogadores do time:");
        for (let i = 0; i < time.length; i++){
            console.log(`Nome: ${time[i].nome}, Posição: ${time[i].posicao}, Idade: ${time[i].idade}, Pontuação: ${time[i].pontuacao}`); 
        }
    }
    else {
        console.log("O time não tem jogadores.");
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
AdicionaJogador("KAIO JORGE", 23, "atacante", 19); // colocar pro usuário inserir
AdicionaJogador("GABRIEL MENINO", 22, "meio-campo", 15);
AdicionaJogador("GABRIEL BARBOSA", 27, "atacante", 20);
AdicionaJogador("GABRIEL JESUS", 26, "atacante", 22);
AdicionaJogador("GABRIEL MAGALHÃES", 25, "zagueiro", 18);
AdicionaJogador("GABRIEL MARTINELLI", 21, "atacante", 21);
console.log(time);

let jogadores = BuscaPorPosicao("atacante");
console.log(jogadores);

ListarTime(time);

let media = CalcularPontuacaoMedia(time);
console.log("media: " + media.toFixed(2));