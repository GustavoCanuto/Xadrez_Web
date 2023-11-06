
function isCorOposta(pecaClicada, pecaSelecionada) {

  const corPecaClicada = pecaClicada.alt.includes("brancas")
    ? "brancas"
    : "pretas";


  const corPecaSelecionada = pecaSelecionada.alt.includes("brancas") ? "brancas" : "pretas";

  return corPecaClicada !== corPecaSelecionada;
}

function removeTodasMarcacoes(casas) {

  casas.forEach(function (casa) {

    casa.classList.remove("movimento-possivel");


    if (pecaSelecionada) {
      pecaSelecionada.classList.remove("selecionada");
    }

    if (pecaQueCaptura) {
      pecaQueCaptura.classList.remove("selecionada");
    }



  }

  );

}



function verificaPeca(pecaSelecionada) {

  let peca = pecaSelecionada.alt;

  if (peca.includes("cavalo")) {
    pontuacao = 3;
    return 0;

  } else if (peca.includes("bispo")) {
    pontuacao = 3;
    return 1;
  }
  else if (peca.includes("torre")) {
    pontuacao = 5;
    return 2;
  }
  else if (peca.includes("rainha")) {
    pontuacao = 9;
    return 3;
  }
  else if (peca.includes("rei")) {

    return 4;
  }
  else if (peca.includes("peão")) {
    pontuacao = 1;



    return 5;
  }



}

function atribuiPontuacao(pecaSelecionadaAtual) {


  verificaPeca(pecaSelecionadaAtual);

  if (pecaSelecionadaAtual.alt.includes("brancas")) {
    pontuacaoBrancas += pontuacao;
  } else {

    pontuacaoPretas += pontuacao;
  }



}

function trocaTurno() {

  if (jogador[turno] == "brancas") {
    turno = 1;
  }
  else {
    turno = 0;
  }

}

function verificaEstadoJogo() {

  if (isCheck(jogador[turno]) && verificaSeExisteMovimentoValido(jogador[turno])) {

    alert("check");

  }
  else if (isCheck(jogador[turno])) {

    alert("Checkmate! O jogo terminou.");

  } else if (!verificaSeExisteMovimentoValido(jogador[turno])) {

    alert("Empate por afogamento!");
  }




}

function verificarEnPassant(casa) {
  const linhaCasaOrigem = parseInt(casaSelecionada.id[1]);
  const linhaCasaDestino = parseInt(casa.id[1]);
  let pecaEsquerda = null;
  let pecaDireita = null;
  let casaDireitaId ;
  let casaEsquerdaId;

  if (pecaSelecionada.alt.includes("peão") && ((linhaCasaOrigem === 7) || (linhaCasaOrigem === 2)) && ((linhaCasaDestino === 4) || (linhaCasaDestino === 5))) {
    const colunaCasaDestino = casa.id[0];
    const colunaEsquerda = letras[letras.indexOf(colunaCasaDestino) - 1];
    const colunaDireita = letras[letras.indexOf(colunaCasaDestino) + 1];

   
    if (colunaEsquerda && colunaEsquerda >= 'a') {
       casaEsquerdaId = colunaEsquerda + linhaCasaDestino;
      const casaEsquerda = document.getElementById(casaEsquerdaId);
      pecaEsquerda = casaEsquerda.querySelector("img");
    }

  
    if (colunaDireita && colunaDireita <= 'h') {
       casaDireitaId = colunaDireita + linhaCasaDestino;
      const casaDireita = document.getElementById(casaDireitaId);
      pecaDireita = casaDireita.querySelector("img");
    }
  }

  if (pecaEsquerda ) {

    let corOposta = casaSelecionada.querySelector("img").alt.includes("brancas") ? "pretas" : "brancas";

    if (pecaEsquerda.alt.includes(`peão ${corOposta}`)) {
      casasQuePodeFazerEnPassant.push(casaEsquerdaId);
      casaQuePodeLevarEnPassant = casa.id;

     EnPassantAtivo = true;
      
    }

  } else if (pecaDireita ) {
    let corOposta = casaSelecionada.querySelector("img").alt.includes("brancas") ?  "pretas" : "brancas";
    if (pecaDireita.alt.includes(`peão ${corOposta}`)) {
      casasQuePodeFazerEnPassant.push(casaDireitaId);
      casaQuePodeLevarEnPassant = casa.id;
 
     EnPassantAtivo = true;
     
    }
  }
}

  function atualizarInformacoesJogo() {

    const spanVezJogador = document.getElementById("valorVezJogador");
    const spanPontuacaoPretas = document.getElementById("valorPontuacaoPretas");
    const spanPontuacaoBrancas = document.getElementById("valorPontuacaoBrancas");

    spanVezJogador.textContent = jogador[turno];
    spanPontuacaoPretas.textContent = pontuacaoPretas;
    spanPontuacaoBrancas.textContent = pontuacaoBrancas;
  }