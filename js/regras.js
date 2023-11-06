let reiPosicao;
let reiEmCheck = false;
let movimentosProtegemRei = [];

function isCheck(corDoRei) {

  let possiveisMovimentos = [];

  reiPosicao = procurarRei(corDoRei);

  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  for (const casa of casas) {

    const peca = casa.querySelector("img");

    if (peca && !peca.alt.includes(corDoRei)) {

      numeroFuncao = verificaPeca(peca);

      possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);

      console.log(casa);
      console.log(possiveisMovimentos);


      if (possiveisMovimentos.includes(reiPosicao)) {

        return true;

      }
    }
  }


  return false;
}


function procurarRei(cor) {
  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  for (const casa of casas) {
    const img = casa.querySelector("img");
    if (img && img.alt.includes(`rei ${cor}`)) {
      return casa.id;
    }
  }

  return null;
}




function movimentosValidosEmCheck(possiveisMovimentos, casa) {
  const movimentosProtegemRei = [];


  for (const id of possiveisMovimentos) {

    const casaDestino = document.getElementById(id);


    const pecaDestino = casaDestino.querySelector("img");

    const casaOrigem = casa;
    const pecaOrigem = casa.querySelector("img");
    casaOrigem.removeChild(pecaOrigem);
    casaDestino.appendChild(pecaOrigem);


    if (!isCheck(jogador[turno])) {
      movimentosProtegemRei.push(id);
    }


    casaDestino.removeChild(pecaOrigem);
    casaOrigem.appendChild(pecaOrigem);

    if (pecaDestino) {
      casaDestino.appendChild(pecaDestino);
    }

  }

  return movimentosProtegemRei;
}


function verificaSeExisteMovimentoValido(corDoRei) {
  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  for (const casa of casas) {

    const peca = casa.querySelector("img");

    if (peca && peca.alt.includes(corDoRei)) {

      const numeroFuncao = verificaPeca(peca);

      const possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);


      const movimentosProtegemRei = movimentosValidosEmCheck(possiveisMovimentos, casa);

      if (movimentosProtegemRei.length > 0) {

        return true;
      }
    }

  }

  return false;
}


