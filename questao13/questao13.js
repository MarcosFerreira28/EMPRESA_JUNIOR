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

let time = [];
AdicionaJogador("KAIO JORGE", 23, "atacante", 19); // colocar pro usuário inserir
console.log(time);
