let reiPosicao;
let reiEmCheck = false;
let movimentosProtegemRei = [];
let divPromocao;

function isCheck(corDoRei) {

  let possiveisMovimentos = [];

  reiPosicao = procurarRei(corDoRei);

  const casas = document.querySelectorAll(".tabuleiro > .linha > div");

  for (const casa of casas) {

    const peca = casa.querySelector("img");

    if (peca && !peca.alt.includes(corDoRei)) {

      numeroFuncao = verificaPeca(peca);

      possiveisMovimentos = calculoPosicoes[numeroFuncao](casa);

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
 console.log("erro");
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

    if (pecaDestino) {
      casaDestino.removeChild(pecaDestino);
    }

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


function verificarPromocaoPeao(casa, pecaSelecionada) {

  if (pecaSelecionada && pecaSelecionada.alt.includes("peão") 
  
  ) {

    const linhaCasa = parseInt(casa.id[1]);
    if (( linhaCasa === 8) || (linhaCasa === 1)) {
      exibirDivDePromocao(casa);
    }
  }
}

function exibirDivDePromocao(casa) {

  const nomeClasse = `promover-${jogador[turno]}`;
   divPromocao =  document.getElementsByClassName(nomeClasse)[0];

  divPromocao.style.display = "flex";
 
  const torrePromo = document.querySelector(`.casasPromover img[alt*='torre ${jogador[turno]}']`);
  const cavaloPromo = document.querySelector(`.casasPromover img[alt*='cavalo ${jogador[turno]}']`);
  const bispoPromo = document.querySelector(`.casasPromover img[alt*='bispo ${jogador[turno]}']`);
  const rainhaPromo = document.querySelector(`.casasPromover img[alt*='rainha ${jogador[turno]}']`);

  torrePromo.addEventListener("click", function () {
    promoverPeao(torrePromo, casa);
  
    
  });

  cavaloPromo.addEventListener("click", function () {
    promoverPeao(cavaloPromo, casa);
 

  });

  bispoPromo.addEventListener("click", function () {
    promoverPeao(bispoPromo, casa);
   
 
  });

  rainhaPromo.addEventListener("click", function () {
    promoverPeao(rainhaPromo, casa);
    
  });
}

function promoverPeao(pecaEscolhida, casa){

  
  casa.removeChild(casa.querySelector("img"));
  casa.appendChild(pecaEscolhida.cloneNode(true));
 
  divPromocao.style.display = "none";
  
  
  verificaEstadoJogo();
  

}


