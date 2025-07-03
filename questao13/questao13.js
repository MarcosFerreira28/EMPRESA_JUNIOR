function AdicionaJogador(nome, idade, posicao, pontuacao){
    let jogador = {
        nome : nome,
        idade : idade,
        posicao : posicao,
        pontuacao : pontuacao
    }
    time.push(jogador);
}


let time = [];
AdicionaJogador("KAIO JORGE", 23, "atacante", 19);
console.log(time);
